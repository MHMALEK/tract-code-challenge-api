from typing import Annotated, Any

from fastapi import APIRouter, HTTPException, Depends, Query
from sqlmodel import func, select
from typing import Optional
from pydantic import BaseModel, Field, constr


from app.api.deps import SessionDep
from app.models import Farm, FarmView, FarmsView


router = APIRouter()


@router.get("/", response_model=FarmsView)
def read_farms(
    session: SessionDep,
    skip: int = 0,
    limit: int = 100,
    sort_by: Optional[str] = Query(None),
    sort_order: Optional[str] = Query(None, regex="^(asc|desc)$"),
) -> Any:

    base_query = select(Farm)
    base_query = base_query.offset(skip).limit(limit)

    if sort_order and not sort_by:
        raise HTTPException(
            status_code=400, detail="sort_by field must be provided if sort_order is"
        )
    if sort_by and not sort_order:
        raise HTTPException(
            status_code=400, detail="sort_order field must be provided if sort_by is"
        )

    if sort_order:
        if sort_order == "asc":
            base_query = base_query.order_by(getattr(Farm, sort_by).asc())
        else:
            base_query = base_query.order_by(getattr(Farm, sort_by).desc())

    count_statement = select(func.count()).select_from(base_query.subquery())
    count = session.exec(count_statement).one()

    farms = session.exec(base_query).all()

    return FarmsView(data=farms, count=count)


def check_filters(
    name: Optional[str] = Query(None), city: Optional[str] = Query(None)
) -> dict:
    if name is None and city is None:
        raise HTTPException(
            status_code=400, detail="At least one filter must be provided"
        )
    return dict(name=name, city=city)


@router.get("/filter", response_model=FarmsView)
def filter_farm(
    session: SessionDep,
    skip: int = 0,
    limit: int = 100,
    sort_by: Optional[str] = Query(None, description="sort by field"),
    sort_order: Optional[str] = Query(
        "asc", description="sort order", regex="^(asc|desc)$"
    ),
    filters: dict = Depends(check_filters),
) -> FarmsView:
    # create a base query
    name = filters.get("name")
    city = filters.get("city")

    base_query = select(Farm).offset(skip).limit(limit)
    if name:
        base_query = base_query.where(Farm.name.ilike(f"%{name}%"))
    if city:
        base_query = base_query.where(Farm.city.ilike(f"%{city}%"))

    if sort_order and not sort_by:
        raise HTTPException(
            status_code=400, detail="sort_by field must be provided if sort_order is"
        )
    if sort_by and not sort_order:
        raise HTTPException(
            status_code=400, detail="sort_order field must be provided if sort_by is"
        )

    if sort_order:
        if sort_order == "asc":
            base_query = base_query.order_by(getattr(Farm, sort_by).asc())
        else:
            base_query = base_query.order_by(getattr(Farm, sort_by).desc())

    # count of all data
    statement_count = select(func.count()).select_from(base_query.subquery())
    count = session.exec(statement_count).one()

    # get the main filtered data
    statement = base_query.offset(skip).limit(limit)
    farms = session.exec(statement).all()

    return FarmsView(data=farms, count=count)


@router.get("/{id}", response_model=FarmView)
def read_farm(session: SessionDep, id: int) -> Any:
    farm = session.get(Farm, id)
    if not farm:
        raise HTTPException(status_code=404, detail="Farm not found")
    return farm

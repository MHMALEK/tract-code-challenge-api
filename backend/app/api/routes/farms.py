from typing import Any

from fastapi import APIRouter, HTTPException
from sqlmodel import func, select

from app.api.deps import SessionDep
from app.models import Farm, FarmView, FarmsView

router = APIRouter()

@router.get("/", response_model=FarmsView)
def read_farms(
    session: SessionDep, skip: int = 0, limit: int = 100
) -> Any:
    count_statement = select(func.count()).select_from(Farm)
    count = session.exec(count_statement).one()

    if not limit:
        statement = select(Farm).offset(skip).limit(limit)
        farms = session.exec(statement).all()
    else:
        statement = (
            select(Farm)
            .offset(skip)
            .limit(limit)
        )
        farms = session.exec(statement).all()

    return FarmsView(data=farms, count=count)


@router.get("/{id}", response_model=FarmView)
def read_farm(session: SessionDep, id: int) -> Any:
    farm = session.get(Farm, id)
    if not farm:
        raise HTTPException(status_code=404, detail="Farm not found")
    return farm

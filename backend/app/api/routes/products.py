from typing import Any

from fastapi import APIRouter, HTTPException
from sqlmodel import func, select

from app.api.deps import SessionDep
from app.models import Product, ProductView, ProductsView

router = APIRouter()

@router.get("/", response_model=ProductsView)
def read_products(
    session: SessionDep, skip: int = 0, limit: int = 100
) -> Any:
    count_statement = select(func.count()).select_from(Product)
    count = session.exec(count_statement).one()

    if not limit:
        statement = select(Product).offset(skip).limit(limit)
        products = session.exec(statement).all()
    else:
        statement = (
            select(Product)
            .offset(skip)
            .limit(limit)
        )
        products = session.exec(statement).all()

    return ProductsView(data=products, count=count)


@router.get("/{id}", response_model=ProductView)
def read_product(session: SessionDep, id: int) -> Any:
    product = session.get(Product, id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

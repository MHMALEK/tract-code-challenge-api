from typing import Any

from fastapi import APIRouter, HTTPException
from sqlmodel import func, select

from app.api.deps import SessionDep
from app.models import Order, OrderCreate, OrderView, OrdersView

router = APIRouter()

@router.get("/", response_model=OrdersView)
def read_orders(
    session: SessionDep, skip: int = 0, limit: int = 100, farm_id = None, product_id = None 
) -> Any:
    count_statement = select(func.count()).select_from(Order)
    count = session.exec(count_statement).one()

    if not limit:
        statement = select(Order).offset(skip).limit(limit)
        orders = session.exec(statement).all()
    else:
        statement = (
            select(Order)
            .offset(skip)
            .limit(limit)
            # .where(Order.farm_id == farm_id)
            # .where(Order.product_id == product_id)
        )
        orders = session.exec(statement).all()

    return OrdersView(data=orders, count=count)

@router.get("/{id}", response_model=OrderView)
def read_order(session: SessionDep, id: int) -> Any:
    order = session.get(Order, id)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@router.post("/", response_model=OrderView)
def create_order(
    *, session: SessionDep, order: OrderCreate
) -> Any:
    session.add(order)
    session.commit()
    session.refresh(order)
    return order

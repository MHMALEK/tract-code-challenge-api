from typing import Any

from sqlmodel import Session

from app.models import Order, OrderCreate, Farm


# def create_user(*, session: Session, user_create: UserCreate) -> User:
#     db_obj = User.model_validate(
#         user_create, update={"hashed_password": get_password_hash(user_create.password)}
#     )
#     session.add(db_obj)
#     session.commit()
#     session.refresh(db_obj)
#     return db_obj

def create_order(*, session: Session, order_in: OrderCreate, owner_id: int) -> Order:
    db_order = Order.model_validate(order_in, update={"owner_id": owner_id})
    session.add(db_order)
    session.commit()
    session.refresh(db_order)
    return db_order

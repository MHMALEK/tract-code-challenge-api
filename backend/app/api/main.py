from fastapi import APIRouter
from app.api.routes import farms, products, orders

api_router = APIRouter()
api_router.include_router(farms.router, prefix="/farms", tags=["farms"])
api_router.include_router(orders.router, prefix="/orders", tags=["orders"])
api_router.include_router(products.router, prefix="/products", tags=["products"])

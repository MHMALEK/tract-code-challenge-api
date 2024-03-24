from sqlmodel import Field, Relationship, SQLModel
from datetime import datetime

# Shared properties
class FarmBase(SQLModel):
    city: str
    country: str
    name: str

# Database model, database table inferred from class name
class Farm(FarmBase, table=True):
    country: str
    id: int | None = Field(default=None, primary_key=True)

class FarmView(FarmBase):
    id: int

class FarmsView(SQLModel):
    data: list[FarmView]
    count: int

class OrderBase(SQLModel):
    quantity: int
    status: str | None = None
    farm_id: int = Field(default=None, foreign_key="farm.id", nullable=False)
    product_id: int = Field(default=None, foreign_key="product.id", nullable=False)
    date: datetime

class Order(OrderBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class OrderView(OrderBase):
    id: int

class OrdersView(SQLModel):
    data: list[OrderView]
    count: int

# Properties to receive via API on creation
class OrderCreate(OrderBase):
    quantity: int = 1
    date: datetime

class ProductBase(SQLModel):
    name: str
    unit_cost: int
    unit_revenue: int

class Product(ProductBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class ProductView(ProductBase):
    id: int

class ProductsView(SQLModel):
    data: list[ProductView]
    count: int

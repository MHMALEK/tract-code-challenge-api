from sqlmodel import Session, create_engine
from app.models import FarmBase, Farm, Order, Product

from app.core.config import settings
from app import crud

engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))

# make sure all SQLModel models are imported (app.models) before initializing DB
# otherwise, SQLModel might fail to initialize relationships properly
# for more details: https://github.com/tiangolo/full-stack-fastapi-template/issues/28


def init_db(session: Session) -> None:
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next lines
    # from sqlmodel import SQLModel

    # from app.core.engine import engine
    # This works because the models are already imported and registered from app.models
    # SQLModel.metadata.create_all(engine)
    
    farm_1 = Farm(city="Amsterdam", country="Netherlands", name="Mooie Boerderij")
    farm_2 = Farm(city = "Paris", country = "France", name = "Belle Ferme")
    farm_3 = Farm(city = "Berlin", country = "Germany", name = "Schöner Bauernhof")
    farm_4 = Farm(city = "Rome", country = "Italy", name = "Bella Fattoria")
    farm_5 = Farm(city = "Barcelona", country = "Spain", name = "Granja Hermosa")
    farm_6 = Farm(city = "London", country = "United Kingdom", name = "Beautiful Farm")
    farm_7 = Farm(city = "Lisbon", country = "Portugal", name = "Fazenda Bonita")
    farm_8 = Farm(city = "Lviv", country = "Ukraine", name = "Гарна ферма")
    farm_9 = Farm(city = "Prague", country = "Czech Republic", name = "Krásná farma")
    farm_10 = Farm(city = "Athens", country = "Greece", name = "Όμορφη φάρμα")


    session.add(farm_1)
    session.add(farm_2) 
    session.add(farm_3)
    session.add(farm_4)
    session.add(farm_5)
    session.add(farm_6)
    session.add(farm_7)
    session.add(farm_8)
    session.add(farm_9)
    session.add(farm_10)

    product1 = Product(name = "Cherry", unit_cost = 350)
    product2 = Product(name = "Heirloom", unit_cost = 750)

    session.add(product1)
    session.add(product2)

    session.commit()
    print(product1)

    order_1 = Order(farm_id = farm_1.id, date = "2021-03-15", quantity = 1020, product_id = product1.id)
    order_2 = Order(farm_id = farm_3.id, date = "2021-01-02", quantity = 2200, product_id = product1.id)
    order_3 = Order(farm_id = farm_2.id, date = "2021-02-25", quantity = 800, product_id = product1.id)
    order_4 = Order(farm_id = farm_4.id, date = "2023-03-15", quantity = 1200, product_id = product1.id)
    order_5 = Order(farm_id = farm_5.id, date = "2020-07-11", quantity = 1500, product_id = product1.id)
    order_6 = Order(farm_id = farm_5.id, date = "2021-06-13", quantity = 2000, product_id = product1.id)
    order_7 = Order(farm_id = farm_7.id, date = "2022-08-22", quantity = 1000, product_id = product1.id)
    order_8 = Order(farm_id = farm_7.id, date = "2023-10-25", quantity = 1500, product_id = product1.id)
    order_9 = Order(farm_id = farm_9.id, date = "2021-11-05", quantity = 1800, product_id = product1.id)
    order_10 = Order(farm_id = farm_10.id, date = "2020-12-09", quantity = 2200, status = 'received', product_id = product2.id)
    order_11 = Order(farm_id = farm_6.id, date = "2022-01-02", quantity = 1400, product_id = product2.id)
    order_12 = Order(farm_id = farm_8.id, date = "2023-03-15", quantity = 1200, product_id = product2.id)
    order_13 = Order(farm_id = farm_8.id, date = "2021-06-13", quantity = 2000, product_id = product2.id)
    order_14 = Order(farm_id = farm_6.id, date = "2022-08-22", quantity = 1000, product_id = product2.id)
    order_15 = Order(farm_id = farm_10.id, date = "2023-10-25", quantity = 1500, product_id = product2.id)
    order_16 = Order(farm_id = farm_9.id, date = "2021-11-05", quantity = 1800, product_id = product2.id)
    order_17 = Order(farm_id = farm_4.id, date = "2020-12-09", quantity = 2200, product_id = product2.id)
    order_18 = Order(farm_id = farm_3.id, date = "2022-01-02", quantity = 1400, product_id = product2.id)

    session.add(order_1)
    session.add(order_2)
    session.add(order_3)
    session.add(order_4)
    session.add(order_5)
    session.add(order_6)
    session.add(order_7)
    session.add(order_8)
    session.add(order_9)
    session.add(order_10)
    session.add(order_11)
    session.add(order_12)
    session.add(order_13)
    session.add(order_14)
    session.add(order_15)
    session.add(order_16)
    session.add(order_17)
    session.add(order_18)

    session.commit()


    # user = session.exec(
    #     select(User).where(User.email == settings.FIRST_SUPERUSER)
    # ).first()
    # if not user:
    #     user_in = UserCreate(
    #         email=settings.FIRST_SUPERUSER,
    #         password=settings.FIRST_SUPERUSER_PASSWORD,
    #         is_superuser=True,
    #     )
    #     user = crud.create_user(session=session, user_create=user_in)

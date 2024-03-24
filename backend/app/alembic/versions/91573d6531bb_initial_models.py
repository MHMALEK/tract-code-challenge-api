"""initial models

Revision ID: 91573d6531bb
Create Date: 2024-03-24 01:27:59.240445

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = '91573d6531bb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'farm',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('city', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('country', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('name', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        'product',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('name', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('unit_cost', sa.Integer(), nullable=True),
    )

    op.create_table(
        'order',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('farm_id', sa.Integer),
        sa.Column('product_id', sa.Integer),
        sa.Column('quantity', sa.Integer),
        sa.Column('total_cost', sa.Integer),
        sa.Column('status', sqlmodel.sql.sqltypes.AutoString()),
        sa.Column('date', sa.DateTime()),
    )

def downgrade():
    op.drop_table('farm')
    op.drop_table('product')
    op.drop_table('order')

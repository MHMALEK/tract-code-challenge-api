import { FarmView, ProductView, OrderView } from '../../client/index.ts';

interface OrderTableProps {
  farms: FarmView[];
  orders: OrderView[];
  products: ProductView[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, farms, products }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Supplier
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Invoice Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Product
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantity
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Invoice Total
            </h5>
          </div>
        </div>

        {orders.map((order: OrderView, key: number) => {
          const farmName = farms.find((farm) => farm.id === order.farm_id)?.name;
          const product = products.find((product) => product.id === order.product_id);

          const total = order.quantity * (product?.unit_revenue || 0)
          const productName = product?.name || '';

          return (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === orders.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="text-black dark:text-white sm:block font-medium">
                  {farmName}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{order.date}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{productName}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p
                  className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                    order.status === 'received'
                      ? 'bg-success text-success'
                      : order.status === 'overdue'
                      ? 'bg-danger text-danger'
                      : 'bg-warning text-warning'
                  }`}
                >
                  {order.status}
                </p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{order.quantity}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">€{total}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default OrderTable;

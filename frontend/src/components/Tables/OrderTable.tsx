import { farmData } from '../../data';
import { iFarm } from '../../types/iFarm';
import { iOrder } from '../../types/iOrder';

const FarmTable = ({ data }) => {
  const orderData = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
              Status
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantity
            </h5>
          </div>
        </div>

        {orderData.map((order: iOrder, key: number) => {
          const farmName = farmData.find((farm: iFarm) => farm.id === order.farmId)?.name;
          return (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === data.length - 1
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
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default FarmTable;

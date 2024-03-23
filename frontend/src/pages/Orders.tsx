import OrdersTable from '../components/Tables/OrderTable';
import DefaultLayout from '../layout/DefaultLayout';
import { orderData } from '../data';

const Orders = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <OrdersTable data={orderData} />
      </div>
    </DefaultLayout>
  );
};

export default Orders;

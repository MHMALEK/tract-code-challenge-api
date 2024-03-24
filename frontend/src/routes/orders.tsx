import { useQuery } from 'react-query';
import OrdersTable from '../components/Tables/OrderTable';
import DefaultLayout from '../layout/DefaultLayout';
import { createFileRoute } from '@tanstack/react-router';
import { FarmsService, OrdersService, ProductsService } from '../client';

const OrdersPage = () => {
  const {
    data: farmsData,
    isLoading: loadingFarms,
    isLoadingError: errorLoadingFarms,
    isError: errorFarms,
  } = useQuery("farms", () => FarmsService.readFarms({}))

  const {
    data: ordersData,
    isLoading: loadingOrders,
  } = useQuery("orders", () => OrdersService.readOrders({}))

  const {
    data: productsData,
    isLoading: loadingProducts,
  } = useQuery("products", () => ProductsService.readProducts({}))

  if (loadingOrders || loadingFarms || loadingProducts || errorLoadingFarms || errorFarms) { return <></>}
  const orders = ordersData?.data || []
  const farms = farmsData?.data || []
  const products = productsData?.data || []

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <OrdersTable orders={orders} farms={farms} products={products} />
      </div>
    </DefaultLayout>
  );
};

export const Route = createFileRoute('/orders')({
  component: OrdersPage,
})

export default OrdersPage;

import React from 'react';
import RevenueCostAreaChart from '../components/Charts/RevenueCostAreaChart';
import SupplierDonutChart from '../components/Charts/SupplierDonutChart';
import ProfitBarChart from '../components/Charts/ProfitBarChart';
import WorldMap from '../components/Maps/WorldMap';
import DefaultLayout from '../layout/DefaultLayout';
import { useQuery } from 'react-query';
import { FarmsService, OrdersService, ProductsService } from '../client';
import { createFileRoute } from '@tanstack/react-router';

const DashboardPage: React.FC = () => {
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
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <RevenueCostAreaChart orders={orders} products={products} />
        <ProfitBarChart orders={orders} products={products} />
        <SupplierDonutChart orders={orders} farms={farms}/>
        <WorldMap />
      </div>
    </DefaultLayout>
  );
};

export const Route = createFileRoute('/')({
  component: DashboardPage,
})

export default DashboardPage;

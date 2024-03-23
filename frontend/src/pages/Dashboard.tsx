import React from 'react';
import RevenueCostAreaChart from '../components/Charts/RevenueCostAreaChart';
import SupplierDonutChart from '../components/Charts/SupplierDonutChart';
import ProfitBarChart from '../components/Charts/ProfitBarChart';
import WorldMap from '../components/Maps/WorldMap';
import DefaultLayout from '../layout/DefaultLayout';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <RevenueCostAreaChart />
        <ProfitBarChart />
        <SupplierDonutChart />
        <WorldMap />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;

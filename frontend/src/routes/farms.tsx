import { createFileRoute } from '@tanstack/react-router';
import FarmTable from '../components/Tables/FarmTable';
import DefaultLayout from '../layout/DefaultLayout';

import { FarmsService } from '../client';
import { useQuery } from 'react-query';

const Farms = () => {
  const {
    data: farmsData,
    isLoading: loadingFarms,
  } = useQuery("farms", () => FarmsService.readFarms({}))

  if (loadingFarms || !farmsData ) { return <></>}

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <FarmTable farms={farmsData.data} />
      </div>
    </DefaultLayout>
  )
};

export const Route = createFileRoute('/farms')({
  component: Farms,
})

export default Farms;

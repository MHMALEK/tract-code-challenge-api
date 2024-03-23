import FarmTable from '../components/Tables/FarmTable';
import DefaultLayout from '../layout/DefaultLayout';

import { farmData } from '../data';

const Farms = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <FarmTable data={farmData} />
      </div>
    </DefaultLayout>
  );
};

export default Farms;

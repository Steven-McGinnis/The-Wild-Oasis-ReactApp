import { useCabins } from './useCabins';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

const CabinTable = () => {
  const { isPending, cabins } = useCabins();
  if (isPending) return <Spinner />;

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div className=''></div>
          <div className=''>Cabin</div>
          <div className=''>Capacity</div>
          <div className=''>Price</div>
          <div className=''>Discount</div>
          <div className=''></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => (
            <CabinRow
              cabin={cabin}
              key={cabin.id}
            />
          )}
        />
      </Table>
    </Menus>
  );
};
export default CabinTable;

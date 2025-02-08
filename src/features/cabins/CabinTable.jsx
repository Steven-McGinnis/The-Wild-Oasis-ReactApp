import { useCabins } from './useCabins';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

const CabinTable = () => {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isPending) return <Spinner />;

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all';
  console.log(filterValue);

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount') filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if (filterValue === 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier );
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
          data={sortedCabins}
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

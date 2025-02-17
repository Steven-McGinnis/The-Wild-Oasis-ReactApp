import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isPending: isPendingBookings } = useRecentBookings();
  const { stays, isPending: isPendingStays, confirmedStays } = useRecentStays();

  if (isPendingBookings || isPendingStays) return <Spinner />;

  console.log(bookings);
  console.log(stays);
  console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <div className=''>Statistics</div>
      <div className=''>Todays Activity</div>
      <div className=''>Chart Stay Duration</div>
      <div className=''>Chart Sales</div>
    </StyledDashboardLayout>
  );
};
export default DashboardLayout;

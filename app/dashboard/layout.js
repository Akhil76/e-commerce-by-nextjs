import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';


export default function DashboardLayout({ children }) {
  return (
    <div className='h-screen flex '>
      <Sidebar />
      <div className='w-[86%]  md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] '>
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
}
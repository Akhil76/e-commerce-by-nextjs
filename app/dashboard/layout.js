import DashboardMenu from '../components/DashboardMenu';
import DashboardNavbar from '../components/DashboardNavbar';






export default function DashboardLayout({ children }) {
    return (
      <div className='h-screen flex '>
        <div className='w-[14%] bg-[#263544]'>
            <DashboardMenu/>
        </div>
        <div className='w-[86%] bg-[#F7F8FA] overflow-scroll'>
          <DashboardNavbar/>
          {children}
        </div>
      </div>
    );
  }
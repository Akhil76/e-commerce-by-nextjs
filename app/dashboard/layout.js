import DashboardNav from '../components/DashboardNav';
import DashboardSidebar from '../components/DashboardSidebar';





export default function DashboardLayout({ children }) {
    return (
      <div>
        <DashboardSidebar/>
        <DashboardNav/>
        <div>
        {children}
        </div>
      </div>
    );
  }
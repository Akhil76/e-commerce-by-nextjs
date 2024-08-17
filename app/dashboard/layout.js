import DashboardNav from '../components/dashboardNav';





export default function DashboardLayout({ children }) {
    return (
      <div>
        <DashboardNav/>
        {children}
      </div>
    );
  }
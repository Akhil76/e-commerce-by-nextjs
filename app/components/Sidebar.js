import DashboardMenu from '../components/DashboardMenu';
import Link from 'next/link';
import { MdDashboard } from "react-icons/md";


export default function Sidebar() {
    return (
        <div className=' h-screen flex-col overflow-y-hidden bg-gray-400'>
            <div className='p-2 m-2'>
                <img class="mx-auto object-cover w-16 h-16 rounded-full" src="/samsung.jpg" alt="Product" />
            </div>
            <Link href="/dashboard" className="flex item-center justfy-start gap-4 text-grey-400 py-2 pl-2 mt-4 bg-emerald-900 rounded text-green-400 mx-2">
                <MdDashboard size="20"/>
                <span>Dashboard</span>
            </Link>
            <DashboardMenu />
        </div>

    );
}
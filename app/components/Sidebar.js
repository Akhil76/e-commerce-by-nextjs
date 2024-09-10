import DashboardMenu from '../components/DashboardMenu';
import Link from 'next/link';
import { MdDashboard } from "react-icons/md";


export default function Sidebar() {
    return (
        <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] sm:block bg-[#263544] '>
            <div className='pt-16 ml-10'>
                <img class="object-cover w-16 h-16 rounded-full" src="/samsung.jpg" alt="Product" />
            </div>
            <Link href="/dashboard" className="flex item-center lg:justfy-start gap-4 text-grey-400 py-2 mt-4 bg-slate-500 rounded text-green-400 mx-2">
                <MdDashboard size="20"/>
                <span className="hidden lg:block">Dashboard</span>
            </Link>
            <DashboardMenu />
        </div>

    );
}
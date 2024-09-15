import Link from "next/link";
import { IoHome } from "react-icons/io5";



export default function DashboardHeader() {
    return (
      <div className="flex justify-between  bg-[#525f6d] py-2">
        <div>
          <Link href="/dashboard" className="flex gap-2 px-2 hover:text-green-400">
            <IoHome size="20" />
            Home
          </Link>
        </div>
        <div>
          <button className="bg-[#F3A847] mr-2 py-1 px-2 rounded-md hover:bg-[#e8a753]">Logout</button>
        </div>
      </div>
    );
  }
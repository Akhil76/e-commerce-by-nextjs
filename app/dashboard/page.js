import DashboardCard from "../components/DashboardCard";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mx-2">
        <div className="bg-lime-800 rounded-md w-full h-96 m-r-3 my-3 shadow-md">
            <Link href="">
              <div className="p-10">
                <h1 className="text-black text-4xl">Chart</h1>
                <h1>text</h1>
              </div>
            </Link>
        </div>
        <div className="bg-slate-500 rounded-md w-full h-96 m-r-3 my-3 shadow-md">
            <Link href="">
              <div className="p-10">
                <h1 className="text-green-400 text-4xl">Chart</h1>
                <h1>text</h1>
              </div>
            </Link>
        </div>
      </div>
    </main>
  );
}

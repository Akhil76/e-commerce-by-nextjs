import Link from "next/link";

export default function DashboardCard() {
    return (
        <div className="bg-slate-500 rounded-md w-full h-56 m-r-3 my-3 shadow-md">
            <Link href="">
                <div className="p-10">
                    <h1 className="text-green-400 text-4xl">Card1</h1>
                    <h1>text</h1>
                </div>
            </Link>
        </div>
    );
}

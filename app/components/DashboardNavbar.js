import Link from "next/link";

export default function DashboardNavbar() {
    return (
      <div className="bg-blue-400">
        <Link href="/dashboard">Home</Link>
      </div>
    );
  }
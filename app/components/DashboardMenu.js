import Link from "next/link";

export default function DashboardMenu() {
    return (
      <div className="">
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/order">Order</Link>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard">Home</Link>
      </div>
    );
  }
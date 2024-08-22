import Link from "next/link";


export default function Navigation() {
    return (
      <div className="flex gap-4 bg-blue-400">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/category">Category</Link>
      </div>
    );
  }
  
import Link from "next/link";


export default function Navigation() {
    return (
      <nav className="bg-indigo-700 shadow-lg">
        <div className="container mx-auto">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/category">Category</Link>
      </div>
      </nav>
    );
  }
  
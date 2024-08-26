import Link from "next/link";


export default function Navigation() {
    return (
      <nav className="bg-indigo-700 shadow-lg">
        <ul className="flex">
          <li className="m-2 hover:text-blue-200"><Link href="/">Home</Link></li>
          <li className="m-2"><Link href="/product">Product</Link></li>
          <li className="m-2"><Link href="/category">Category</Link></li>
       </ul>
      </nav>
    );
  }
  
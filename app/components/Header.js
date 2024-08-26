import Link from "next/link";


export default function Header() {
    return (
      <div className="contrainer mx-auto h-32">
        <h1 className="text-grey-400 text-[40px] p-6"><Link href="/">E-commerce</Link></h1>
      </div>
    );
  }  
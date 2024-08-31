import Link from "next/link";

const itemList =[
  "Home",
  "Product",
  "About",
  "Contact"
  
]


export default function Navigation() {
    return (
      <nav className="bg-[#232F3E] shadow-lg">
        {
          itemList.map((link,idx)=>{
            return(
              <Link href={`/${link}`} className="">{link}</Link>
            )
          })
        }
      </nav>
    );
  }
 
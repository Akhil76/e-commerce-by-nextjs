import Link from "next/link";

const itemList =[
  "Home",
  "Product",
  "About",
  "Contact"
  
]


export default function Navigation() {
    return (
      <nav className="w-full bg-[#232F3E] text-white py-2">
        {
          itemList.map((link,idx)=>{
            return(
              <Link 
              href={`/${link}`}
              className="mx-2 hover:border border border-transparent hover:border-white p-2"
              >{link}</Link>
            )
          })
        }
      </nav>
    );
  }
 
import Link from "next/link";

const itemList =[
  "Home",
  "Product",
  "About",
  "Contact"
  
]
const menuItems =[
      {
        Id:"1",
        label:"Home",
        href:"/"
      },
      {
        Id:"21",
        label:"Electronics",
        href:"/electronics"
      },
      {
        Id:"21",
        label:"Furnitures",
        href:"/furnitures"
      },
      {
        Id:"3",
        label:"About",
        href:"/about"
      },
    ]
 
export default function Navigation() {
    return (
      <nav className="w-full bg-[#232F3E] text-white py-2">
        {
          menuItems.map((item)=>{
            return(
              <Link 
              href={item.href}
              className="mx-2 hover:border border border-transparent hover:border-white p-2"
              >{item.label}</Link>
            )
          })
        }
      </nav>
    );
  }
 
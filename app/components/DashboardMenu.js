import Link from "next/link";


const menuItems = [
  {
    title:"Menu",
    items:[
      {
        icon:"",
        label:"Home",
        href:"/dashboard"
      },
      {
        icon:"",
        label:"Order",
        href:"/dashboard/order"
      },
      {
        icon:"",
        label:"Product",
        href:"/dashboard/product"
      },
    ]
  },
  {
    title:"Others",
    items:[
      {
        icon:"",
        label:"Settings",
        href:"/dashboard/setting"
      },
      {
        icon:"",
        label:"Order",
        href:"/dashboard/order"
      },
    ] 
  }
]


export default function DashboardMenu() {
    return (
      <div className="mt-4 text-sm">
       {
        menuItems.map((i)=>(
          <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-grey-400 font-light my-4">{i.title}</span>
          {
            i.items.map((item)=>(
              <Link 
              href={item.href}
              key={item.label}
              className="flex item-center justify-center lg:justfy-start gap-4 text-grey-400 py-2">
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))
          }
        </div>
        ))
       }
      </div>
    );
  }
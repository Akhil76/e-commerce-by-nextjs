import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";



const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: <IoHome size="20"/>,
        label: "Home",
        href: "/dashboard"
      },
      {
        icon: <FaBorderAll size="20"/>,
        label: "Orders",
        href: "/dashboard/order"
      },
      {
        icon: <AiFillProduct size="20"/>,
        label: "Products",
        href: "/dashboard/product"
      },
      {
        icon: <BsPeopleFill size="20"/>,
        label: "Customers",
        href: "/dashboard/customer"
      },
      {
        icon: <FaChartArea size="20"/>,
        label: "Chart",
        href: "/dashboard/chart"
      },
    ]
  },
  {
    title: "Others",
    items: [
      {
        icon: <IoSettingsSharp size="20"/>,
        label: "Settings",
        href: "/dashboard/setting"
      },
     
    ]
  }
]


export default function DashboardMenu() {
  return (
    <div className="mt-4 text-sm">
      
      {
        menuItems.map((i) => (
          <div className="flex flex-col gap-2 mx-2" key={i.title}>
            <span className="hidden lg:block text-grey-400 font-light my-4">
              {i.title}
            </span>
            {
              i.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex item-center lg:justfy-start gap-4 text-grey-400 py-2 pl-2 hover:bg-slate-500 rounded hover:text-green-400"
                >
                  <div>{item.icon}</div>
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
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";


const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: <IoHome size="20" />,
        label: "Home",
        href: "/dashboard"
      },
      {
        icon: <FaBorderAll size="20" />,
        label: "Orders",
        href: "/dashboard/order"
      },
      {
        icon: <AiFillProduct size="20" />,
        label: "Products",
        href: "/dashboard/product",
        subitems: [
          {
            icon: <IoHome size="20" />,
            label: "Add Prouduct",
            href: "/dashboard/addproduct"
          },
          {
            icon: <IoHome size="20" />,
            label: "Edit Prouduct",
            href: "/dashboard/editproduct"
          },
        ]
      },
      {
        icon: <BsPeopleFill size="20" />,
        label: "Customers",
        href: "/dashboard/customer"
      },
      {
        icon: <FaChartArea size="20" />,
        label: "Chart",
        href: "/dashboard/chart"
      },
    ]
  },
  {
    title: "Others",
    items: [
      {
        icon: <IoSettingsSharp size="20" />,
        label: "Settings",
        href: "/dashboard/setting"
      },
      {
        icon: <IoSettingsSharp size="20" />,
        label: "Messages",
        href: "/dashoard/message"
      },

    ]
  }
]


export default function DashboardMenu() {
  return (
    <div className="mt-4 text-sm">

      {
        menuItems.map((i) => (
          <div className="flex flex-col gap-2 ml-2 mx-5" key={i.title}>
            <span className="ml-2 text-grey-400 font-light my-4">
              {i.title}
            </span>
            {
              i.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex justify-between text-grey-400 py-2 pl-2  hover:bg-slate-500 rounded hover:text-green-400"
                >
                 <div className="flex item-center justfy-start gap-4 pr-16">
                  <div>{item.icon}</div>
                  <span className="">{item.label}</span>
                 </div>
                 {item.subitems && (
                 <button className=""><IoIosArrowForward/></button>)}
                  {/* <div className="">
                    {item.subitems && (
                      <div className="ml-4 flex-col">
                        {item.subitems.map((sub) => (
                          <Link href={sub.href} key={sub.label} className="flex item-center justify-start gap-2 text-grey-300 py-1 hover:text-blue-400">
                            {sub.icon}
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div> */}
                </Link>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}
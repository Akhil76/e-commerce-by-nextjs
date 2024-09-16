"use client"; // for usestate
import { useState } from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"; // Add IoIosArrowDown for collapse
import { BiSolidMessageDetail } from "react-icons/bi";


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
            label: "Add Product",
            href: "/dashboard/product/addproduct"
          },
          {
            icon: <IoHome size="20" />,
            label: "Edit Product",
            href: "/dashboard/product/editproduct"
          }
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
      }
    ]
  },
  {
    title: "Others",
    items: [
      {
        icon: <IoSettingsSharp size="20" />,
        label: "Settings",
        href: "/dashboard/setting",
        subitems: [
          {
            icon: <IoHome size="20" />,
            label: "Slider",
            href: "/dashboard/setting/slider"
          },
          {
            icon: <IoHome size="20" />,
            label: "Categories",
            href: "/dashboard/setting/category"
          }
        ]
      },
      {
        icon: <BiSolidMessageDetail size="20" />,
        label: "Messages",
        href: "/dashboard/message"
      }
    ]
  }
];

export default function DashboardMenu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section, sectionIndex) => (
        <div className="flex flex-col gap-2 ml-2 mx-5" key={section.title}>
          <span className="ml-2 text-grey-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item, index) => (
            <div key={item.label} className="mb-2">
              <div
                
                className="flex justify-between text-grey-400 py-2 pl-2 hover:bg-slate-500 rounded hover:text-green-400"
              >
                <Link href={item.href} className="flex items-center justify-start gap-4 pr-16">
                  <div>{item.icon}</div>
                  <span>{item.label}</span>
                </Link>
                {item.subitems && (
                  <button
                    className="focus:outline-none mr-1"
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    {activeIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </button>
                )}
              </div>

              {/* Submenu (Accordion) */}
              {item.subitems && activeIndex === index && (
                <div className="ml-8 mt-1 flex-col">
                  {item.subitems.map((sub) => (
                    <Link
                      href={sub.href}
                      key={sub.label}
                      className="flex items-center justify-start gap-2 text-grey-300 py-2 hover:text-green-400"
                    >
                      {sub.icon}
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

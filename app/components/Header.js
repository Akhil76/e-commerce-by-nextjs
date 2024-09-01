import Link from "next/link";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";



export default function Header() {
  return (
    <div className="bg-[#131921] text-white py-1">
      <div className="flex items-center justify-between w-[95%] mx-auto">
        <div className="w-[20%]">
          <h1 className="text-grey-400 text-[30px] p-6"><Link href="/">E-com</Link></h1>
        </div>
        <div className=" w-[50%] flex items-center">
          <input
            className=" w-full px-2 py-2 rounded-l-md text-black outline-none"
            type="text"
            placeholder="Search product"
          />
          <div className="bg-[#F3A847] p-2 rounded-r-md">
            <IoSearchSharp size={"24px"} className="text-black"/>
          </div>
        </div>
        <div className="flex items-center justify-around w-[20%]">
          <div>
            <h1>Account</h1>
          </div>
          <div>
            <p>0</p>
            <div className="flex">
              <div>
                <PiShoppingCartSimpleLight size={"40px"} />
              </div>
              <h1 className="mt-4">cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  
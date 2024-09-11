import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";



export default function Customer() {
  return (
    <main>
      <div className="m-2">
        <div className="bg-slate-400 py-2 flex justify-between ">
          <div>
            <h1 className="mx-2">Customer List</h1>
          </div>
          <div>
            <button
              className="bg-[#4521e6] mr-2 py-1 px-2 rounded-md hover:bg-[#070ae9]"
            >
              Search
            </button>
          </div>
        </div>
        <table class="border-collapse border border-slate-500 w-full">
          <thead>
            <tr className="text-left bg-transparent">
              <th class="border border-slate-600 p-2 w-14">Customer</th>
              <th class="border border-slate-600 p-2">Name</th>
              <th class="border border-slate-600 p-2">Id</th>
              <th class="border border-slate-600 p-2">Address</th>
              <th class="border border-slate-600 p-2 w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700">
                <img className="w-16 h-16 m-1" src="/samsung.jpg" />
              </td>
              <td class="border border-slate-700">Indianapolis</td>
              <td class="border border-slate-700">898234989328</td>
              <td class="border border-slate-700">Dhaka</td>
              <td class="border border-slate-700">
                <button
                  className="bg-red-700 mr-2 py-2 px-2 rounded-md hover:bg-red-600"
                >
                  <RiDeleteBin5Line size="25"/>
                </button>
                <button
                  className="bg-green-700 mr-2 py-2 px-2 rounded-md hover:bg-green-400"
                >
                  <FiEdit size="25"/>
                </button>
              </td>
            </tr>
           
            

          </tbody>
        </table>
      </div>
    </main>
  );
}

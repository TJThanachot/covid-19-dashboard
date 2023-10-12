import React, { useState } from "react";
import { useMain } from "../contexts/mainContext";
import {
  AiOutlineClose,
  AiOutlineBarChart,
  AiOutlineTable,
  AiFillAppstore,
} from "react-icons/ai";
function SideBar() {
  const [bg, setBg] = useState(0);
  const { open, setOpen } = useMain();

  return (
    <>
      <aside
        className={`card w-[25%] min-w-[15rem] h-[100vh] bg-[#263043] flex flex-col items-center  pt-10
        transition-all duration-500  ${
          !open ? "left-0" : "absolute left-[-200%]"
        }`}
      >
        <div
          className={`w-full h-20 flex gap-[10%] items-center justify-center duration-1000  `}
        >
          <div className="text-4xl font-extrabold flex items-center gap-[5%] ">
            Covid-19
          </div>
          <button
            className="text-3xl font-bold"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <button
          onClick={() => {
            setBg(1);
          }}
          className={`transition-all font-semibold h-[4rem] duration-300  hover:translate-x-7 menu 
        w-full pl-[20%] text-2xl flex flex-row items-center gap-3 hover:bg-gray-300 rounded-md  ${
          bg === 1 ? "bg-gray-500 hover:bg-gray-500" : ""
        }`}
        >
          <AiOutlineBarChart />
          Chart
        </button>
        <button
          onClick={() => {
            setBg(2);
          }}
          className={`transition-all font-semibold h-[4rem] duration-300  hover:translate-x-7 menu 
        w-full pl-[20%] text-2xl flex flex-row items-center gap-3 hover:bg-gray-300 rounded-md  ${
          bg === 2 ? "bg-gray-500 hover:bg-gray-500" : ""
        }`}
        >
          <AiOutlineTable />
          Table
        </button>
      </aside>

      <button
        className={`absolute top-[7%] left-[5%] text-5xl  ${
          open ? "" : "hidden"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AiFillAppstore />
      </button>
    </>
  );
}

export default SideBar;

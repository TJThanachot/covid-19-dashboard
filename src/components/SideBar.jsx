import React, { useState } from "react";
import { useMain } from "../contexts/mainContext";
import {
  AiOutlineClose,
  AiOutlineBarChart,
  AiOutlineTable,
  AiFillAppstore,
} from "react-icons/ai";
import { FaDisease } from "react-icons/fa";
function SideBar() {
  const [bg, setBg] = useState(1);
  const { open, setOpen, page, setPage } = useMain();

  return (
    <>
      <aside
        className={`w-[25%] min-w-[15rem] h-[100vh] bg-[#C8BCAC] flex flex-col items-center  pt-10
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
            setPage("Global Situation");
          }}
          className={`transition-all font-semibold h-[4rem] duration-300  hover:translate-x-7 menu 
        w-full pl-[20%] text-2xl flex flex-row items-center gap-3 hover:bg-[#FAEBD7]   ${
          bg === 1 ? "bg-[#FAEBD7] hover:bg-[#FAEBD7]" : ""
        }`}
        >
          <FaDisease />
          Global
        </button>
        <button
          onClick={() => {
            setBg(2);
            setPage("Table");
          }}
          className={`transition-all font-semibold h-[4rem] duration-300  hover:translate-x-7 menu 
        w-full pl-[20%] text-2xl flex flex-row items-center gap-3 hover:bg-[#FAEBD7]   ${
          bg === 2 ? "bg-[#FAEBD7] hover:bg-[#FAEBD7]" : ""
        }`}
        >
          <AiOutlineTable />
          Table
        </button>
        <button
          onClick={() => {
            setBg(3);
            setPage("Chart");
          }}
          className={`transition-all font-semibold h-[4rem] duration-300  hover:translate-x-7 menu 
        w-full pl-[20%] text-2xl flex flex-row items-center gap-3 hover:bg-[#FAEBD7]   ${
          bg === 3 ? "bg-[#FAEBD7] hover:bg-[#FAEBD7]" : ""
        }`}
        >
          <AiOutlineBarChart />
          Chart
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

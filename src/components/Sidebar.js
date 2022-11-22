import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  console.log(window.location.pathname);
  return (
    <div className="w-auto h-full bg-slate-900 overflow-hidden sm:h-full sm:w-60 sm:bg-slate-900">
      <ul className="h-auto w-full">
        <li className="w-full h-12 flex flex-row sm:text-3xl text-center text-xs font-bold text-white  items-center font-sans hover:cursor-pointer justify-center mb-5">
          WEBSITE
        </li>
        {/* <li className="">
          <a
            className="w-full h-12 bg-black border-1 list-none m-0 flex flex-row text-white content-center items-center font-sans hover:cursor-pointer justify-start pl-5"
            onClick={() => {
              setActiveSidebar((prev) => !prev);
            }}
          >
            <FaHome className="m-2" />
            Dashboard
          </a>
          <ul className={activeSidebar ? "m-0 p-0" : "hidden m-0 p-0"}>
            <li>1</li>
          </ul>
        </li> */}
        {SidebarData.map((val, key) => {
          return (
            <li
              // key={key}
              // onClick={() => {
              //   window.location.pathname = val.link;
              // }}
              className="flex flex-col overflow-auto"
            >
              {/* <div className="flex-sidebar-icon grid place-items-center">
                {val.icon}
              </div>
              <div className="flex-sidebar-title">{val.title}</div> */}
              <a
                className="w-full h-12 bg-black border-1 list-none m-0 flex flex-row text-white content-center items-center font-sans hover:cursor-pointer justify-start pl-5"
                onClick={() => {
                  setActiveSidebar((prev) => !prev);
                }}
              >
                <FaHome className="m-2" />
                Dashboard
              </a>
              <ul className={activeSidebar ? "m-0 p-0" : "hidden m-0 p-0"}>
                <li>1</li>
              </ul>
              <ul className={activeSidebar ? "m-0 p-0" : "hidden m-0 p-0"}>
                <li>1</li>
              </ul>
              <ul className={activeSidebar ? "m-0 p-0" : "hidden m-0 p-0"}>
                <li>1</li>
              </ul>
              <ul className={activeSidebar ? "m-0 p-0" : "hidden m-0 p-0"}>
                <li>1</li>
              </ul>
              <ul className={activeSidebar ? "m-0 p-0" : "hidden m-0 p-0"}>
                <li>1</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

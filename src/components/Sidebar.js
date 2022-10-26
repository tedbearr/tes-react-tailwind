import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="w-auto overflow-auto sm:h-full sm:w-60 sm:bg-slate-900">
      <ul className="h-auto w-full">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
              className="w-full h-12 border-1 list-none m-0 flex flex-row text-white content-center items-center font-sans hover:cursor-pointer"
            >
              <div className="flex-sidebar-icon grid place-items-center">{val.icon}</div>
              <div className="flex-sidebar-title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

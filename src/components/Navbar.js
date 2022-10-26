import React from "react";

function Navbar() {
  return (
    <div>
      <div className="h-11 bg-white w-full">
        <ul className="flex flex-row">
            <li className="w-full text-left pl-3 h-10 pt-2">a</li>
            <li className="w-full text-right pr-3 h-10 pt-2"><small>Welcome to this web</small></li>
        </ul>
      </div>
      <div className="px-3 py-3"></div>
    </div>
  );
}

export default Navbar;

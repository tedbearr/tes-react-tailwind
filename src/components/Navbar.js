import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="h-11 bg-white w-full shadow-md">
        <ul className="flex flex-row">
          <li className="w-full text-right pr-3 h-10 pt-2">
            <small>Welcome to this web</small>
          </li>
        </ul>
      </div>
      <div className="px-3 py-3"></div>
    </div>
  );
}

export default Navbar;

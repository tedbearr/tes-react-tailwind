import React from "react";

function Footer() {
  return (
    <div className="bottom-0 mt-28 relative h-full w-full bg-white">
      <ul className="flex flex-row w-full h-full">
        <li className="w-full flex items-center justify-start pl-3">
          <small>
            <strong>Copyright</strong> PT. Mencari Cinta Sejati © 2022
          </small>
        </li>
        <li className="w-full flex items-center justify-end pr-3">
          <small>
            <strong>Version</strong> 1.0.0
          </small>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#474747] w-full h-6"></div>

      <nav className="flex bg-[#F9F9F7] justify-between items-center h-12 pl-4 pr-4 md:pl-20 md:pr-20 font-[Geist] text-[#2C2F24]">
        <ul>
          <Link
            to={"/"}
            className="text-xl md:text-2xl font-[PlayWrite] font-semibold"
          >
            Bistro Bliss
          </Link>
        </ul>

        <ul className="md:text-xl flex font-sans font-medium gap-3 md:gap-10 text-base">
          <li>Orders</li>
          <Link to={"/src/pages/LogInPage/LogInPage.js"}>Sign In</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white bg-[#00182e] flex justify-evenly pt-7 pb-7">
      <div className="flex justify-center gap-10 pl-17 ">
        <Link
          to="/Products"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Products
        </Link>
        <Link
          to="/Content"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Content
        </Link>
        <Link
          to="/Team"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Team
        </Link>
        <Link
          to="Purchase"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Purchase
        </Link>
      </div>
      <button className=" p-2  hover:border-[#626ee3] hover:border rounded-sm">
        Log In
      </button>
    </div>
  );
};

export default Header;

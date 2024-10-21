import React from "react";
import { CiClock2 } from "react-icons/ci";

function Header() {
  return (
    <div className="flex justify-between px-2 py-1 md:px-6  md:py-2 bg-yellow-600  ">
      <div className=" ">
        <a href="mailto:nirmaabro143@gmail.com" className="text-base  md:font-semibold  ">nirmaabro143@gmail.com</a>
      </div>
      <div className="">
        <p className=" flex  gap-3 font-semibold ">
          <CiClock2  className="mt-1"/> Mon - Fri
        </p>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Button from "../globalcomponents/Button";
import { TfiShoppingCartFull } from "react-icons/tfi";

function Navigation() {
  return (
    <>
      <nav className=" flex bg-black  gap-24 py-2 ">
        <div className="flex gap-2 pt-1 md:px-2  ">
          <img src={logo} alt="" className="w-12 h-12 rounded-full " />
          <h1 className="font-semibold text-xl md:text-2xl mt-1 text-white ">LuxeWear</h1>
        </div>

        <div className=" md:gap-11 hidden lg:flex ">
          {/* search bar  */}
          <div className="border-2 border-yellow-50 flex gap-1  rounded-lg m-auto  ">
            <input type="text" placeholder="Search" className=" p-2 " />
            <FaSearch className=" text-xl m-auto mx-2 text-white" />
          </div>
          {/* for links  */}

          <div className=" flex gap-3 m-auto " >
            <NavLink
              to="/"
              className="text-white "
            >
              Home
            </NavLink>
            {/* mens  */}
            <NavLink to="/mens" className="text-white ">
              Mens
            </NavLink>
            {/* kids  */}
            <NavLink to="/kids" className="text-white ">
              Kids
            </NavLink>
            {/* females  */}
            <NavLink to="/females" className="text-white ">
              Females
            </NavLink>
          </div>
        </div>

        {/* wishlist  and signup login */}
        <div className=" hidden lg:flex  gap-2  px-5 ">
          <div>
            <TfiShoppingCartFull className="text-3xl m-auto mt-3 text-white" />
          </div>

          {/* signup login  */}

          <Button data="SignUp" />
          <Button data="SignIn" />
        </div>
      </nav>
    </>
  );
}

export default Navigation;

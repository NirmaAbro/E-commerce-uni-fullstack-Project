// import React from "react";
// import logo from "../images/logo.jpg";
// // import { NavLink } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import Button from "../globalcomponents/Button";
// import { TfiShoppingCartFull } from "react-icons/tfi";
// import { FaGripLines } from "react-icons/fa";
// import { useState } from "react";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   const [isNavOpen, setisNavOpen] = useState(false);

//   const handleMenu = () => {
//     console.log("button clicked");
//     setisNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <nav className=" flex bg-black  gap-36 py-2 justify-between ">
//         <div
//           className={`md:gap-11  border-4  lg:flex border-white  ${
//             isNavOpen ? "hidden" : " "
//           } `}
//         >
//           <div className="flex gap-2 pt-1 md:px-2  ">
//             <img src={logo} alt="" className="w-12 h-12 rounded-full " />
//             <h1 className="font-semibold text-xl md:text-2xl mt-1 text-white ">
//               LuxeWear
//             </h1>

//             {/* search bar  */}
//             <div className="border-2 border-yellow-50  gap-1 hidden lg:flex  rounded-lg m-auto  ">
//               <input type="text" placeholder="Search" className=" p-2 " />
//               <FaSearch className=" text-xl m-auto mx-2 text-white cursor-pointer " />
//             </div>
//           </div>

//           {/* for links  */}

//           <div className=" gap-3 m-auto hidden lg:flex ">
//             <NavLink to="/" className="text-white ">
//               Home
//             </NavLink>
//             {/* mens  */}
//             <NavLink to="/mens" className="text-white ">
//               Mens
//             </NavLink>
//             {/* kids  */}
//             <NavLink to="/kids" className="text-white ">
//               Kids
//             </NavLink>
//             {/* females  */}
//             <NavLink to="/females" className="text-white ">
//               Females
//             </NavLink>
//           </div>
//         </div>

//         {/*  and signup login */}
//         {/* child two  */}
//         <div className=" border-4  border-white justify-end px-2 hidden lg:flex">
//           <div className=" hidden lg:flex    ">
//             <TfiShoppingCartFull className="text-3xl m-auto mt-3 mr-2  text-white" />
//             {/* buttons  */}
//             <Button data="SignUp" className="" />
//             <Button data="SignIn" />
//           </div>
//         </div>

//         {/* lineicon mobile button  */}
//         {/* <div className="lg:hidden  pr-2">
//           <button onClick={handleMenu}>
//             {isNavOpen ? (
//               <FaGripLines className="text-white text-3xl mt-2" />
//             ) : (
//               <IoCloseCircleOutline className="text-white text-3xl  mt-2" />
//             )}
//           </button>
//         </div> */}

//         <div className="lg:hidden pr-2">
//           <button
//             onClick={handleMenu}
//             className="relative flex justify-center items-center"
//           >
//             {isNavOpen ? (
//               <FaGripLines className="text-white text-3xl " />
//             ) : (
//               <IoCloseCircleOutline className="text-white text-3xl" />
//             )}
//           </button>
//         </div>

//       </nav>
//     </>
//   );
// }

// export default Navigation;

import React from "react";
import logo from "../images/logo.jpg";
import { FaSearch } from "react-icons/fa";
import Button from "../globalcomponents/Button";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleMenu = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="flex bg-black gap-36 py-2 justify-between">
        <div
          className={`md:gap-11 lg:flex border-white ${
            isNavOpen ? "hidden" : ""
          }`}
        >
          <div className="flex gap-8 pt-1 md:px-2">
            <img src={logo} alt="" className="w-12 h-12 rounded-full" />
            <h1 className="font-semibold text-xl md:text-2xl mt-1 text-white">
              LuxeWear
            </h1>

            {/* search bar */}
            <div className="border-2 border-yellow-50 gap-1 hidden lg:flex rounded-lg m-auto">
              <input type="text" placeholder="Search" className="p-2" />
              <FaSearch className="text-xl m-auto mx-2 text-white cursor-pointer" />
            </div>
          </div>

          {/* for links */}
          <div className="gap-3 m-auto hidden lg:flex">
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
            <NavLink to="/mens" className="text-white">
              Mens
            </NavLink>
            <NavLink to="/kids" className="text-white">
              Kids
            </NavLink>
            <NavLink to="/females" className="text-white">
              Females
            </NavLink>
          </div>
        </div>

        {/* and signup login */}
        <div className=" justify-end px-2 hidden lg:flex">
          <div className="hidden lg:flex">
            <TfiShoppingCartFull className="text-3xl m-auto mt-3 mr-2 text-white" />
            <Button data="SignUp" className="" />
            <Button data="SignIn" />
          </div>
        </div>

        {/* lineicon mobile button */}
        <div className="lg:hidden pr-2">
          <button
            onClick={handleMenu}
            className="relative flex justify-center items-center"
          >
            {isNavOpen ? (
              <IoCloseCircleOutline className="text-white text-3xl" />
            ) : (
              <FaGripLines className="text-white text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex justify-end">
          <div className="w-2/3 bg-black h-full overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <NavLink to="#" id="brand" className="flex items-center">
                  <img src={logo} alt="" className="w-12 h-12 rounded-full" />
                  <h1 className="font-semibold text-xl md:text-2xl mt-1 text-white">
                    LuxeWear
                  </h1>
                </NavLink>
                {/* <button onClick={handleMenu}>
                  <IoMdCloseCircle className="text-white text-3xl hover:border-b-2 hover:border-green-500" />
                </button> */}
              </div>
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutus"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                Mens
                </NavLink>
                <NavLink
                  to="/getstarted"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                Kids
                </NavLink>
                <NavLink
                  to="/feedback"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                 Females
                </NavLink>
                <NavLink
                  to="/signin"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;

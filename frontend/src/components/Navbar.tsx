import { useState } from "react";
import BurgerMenu from "../assets/svg/burgerMenu.svg";
import X from "../assets/svg/x.svg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
    console.log("you clicked it");
  }

  return (
    <>
      <nav className="bg-white text-black w-full h-16 font-medium text-1xl  sm:flex items-center">
        {openMenu ? (
          <img
            className="flex w-9 h-full justify-self-center pointer sm:hidden"
            src={BurgerMenu}
            alt="Burger Menu"
            onClick={handleOpenMenu}
          />
        ) : (
          <>
            <img
              className="h-full flex justify-self-center text-center pointer w-6 sm:hidden"
              src={X}
              alt="X"
              onClick={handleOpenMenu}
            />
            {!openMenu && (
              <ul className="text-white z-10 relative bg-black w-full flex flex-col items-center pointer sm:hidden">
                <li>
                  <a href="/start">Start</a>
                </li>
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            )}
          </>
        )}
        <ul className="hidden md:ml-24 md:mr-24 sm:w-full sm:flex">
          {/* Logo */}
          <li className=" w-full flex justify-start items-center font-bold">
            <a id="logo" href="/">
              Care Hands
            </a>
          </li>
          {/* Start and Careers */}
          <div className="w-full flex justify-center items-center ">
            <li className="p-2">
              <a href="/start">Start</a>
            </li>
            <li className="p-2">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="p-2">
              <a href="/careers">Careers</a>
            </li>
          </div>
          {/* Sign Up and Login */}
          <div className="w-full flex justify-end items-center">
            <li className="cursor-pointer  text-center sm:mr-2 lg:mr-6 sm:p-2 lg:p-4 bg-darkbrown rounded-lg">
              <a className="text-white sm:p-2 lg:p-4 " href="/signup">
                Sign Up
              </a>
            </li>
            <li className="">
              <a href="/login">Login</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

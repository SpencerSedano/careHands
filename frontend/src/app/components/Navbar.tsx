"use client";

import { useState } from "react";
import Image from "next/image";
import BurgerMenu from "../../../public/svg/burgerMenu.svg";
import X from "../../../public/svg/x.svg";

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
          <Image
            className="flex w-9 h-full justify-self-center pointer sm:hidden"
            src={BurgerMenu}
            alt="Burger Menu"
            priority
            onClick={handleOpenMenu}
          />
        ) : (
          <>
            <Image
              className="h-full flex justify-self-center text-center pointer w-6 sm:hidden"
              src={X}
              alt="X Menu"
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
                  <a href="/career">Careers</a>
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
              <a href="/career">Careers</a>
            </li>
          </div>
          {/* Sign Up and Login */}
          <div className="w-full flex justify-end items-center">
            <li className="text-center sm:mr-2 lg:mr-6 bg-emerald-700 sm:p-1 lg:p-4">
              <a className="text-white " href="/signup">
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

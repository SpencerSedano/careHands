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
      <nav className="text-1xl h-16 w-full items-center bg-white font-medium text-black sm:flex">
        {openMenu ? (
          <img
            className="pointer flex h-full w-9 justify-self-center sm:hidden"
            src={BurgerMenu}
            alt="Burger Menu"
            onClick={handleOpenMenu}
          />
        ) : (
          <>
            <img
              className="pointer flex h-full w-6 justify-self-center text-center sm:hidden"
              src={X}
              alt="X"
              onClick={handleOpenMenu}
            />
            {!openMenu && (
              <ul className="pointer relative z-10 flex w-full flex-col items-center bg-black text-white sm:hidden">
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
                  <a href="/signup">Register</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            )}
          </>
        )}
        <ul className="hidden sm:flex sm:w-full md:mr-24 md:ml-24">
          {/* Logo */}
          <li className="flex w-full items-center justify-start font-bold">
            <a id="logo" href="/">
              Care Hands
            </a>
          </li>
          {/* Start and Careers */}
          <div className="flex w-full items-center justify-center">
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
          <div className="flex w-full items-center justify-end">
            <li className="bg-darkbrown cursor-pointer rounded-lg text-center sm:mr-2 sm:p-2 lg:mr-6 lg:p-4">
              <a className="text-white sm:p-2 lg:p-4" href="/signup">
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

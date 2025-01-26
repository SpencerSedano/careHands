"use client";

// React
import { useRef } from "react";

// Components
import LoginWorker from "../components/LoginWorker";
import SideMenu from "../components/SideMenu";
import Tasks from "../components/Tasks";
import CompletedTasks from "../components/CompletedTasks";
import Calendar from "../components/Calendar";
import WorkersAvailable from "../components/WorkersAvailable";
import CircleImage from "../components/CircleImage";
import Elder from "../components/Elder";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

// Images
import SpencerImage from "../assets/img/spencerimg.jpeg";

// SVG
import HomeIcon from "../assets/svg/home.svg";
import ClientIcon from "../assets/svg/client.svg";
import WorkerIcon from "../assets/svg/worker.svg";
import TaskIcon from "../assets/svg/task.svg";
import CalendarIcon from "../assets/svg/calendar.svg";
import SearchIcon from "../assets/svg/search.svg";

export default function Dashboard() {
  const myRef = useRef<HTMLDivElement>(null);

  function handleFocus() {
    if (myRef.current) {
      myRef.current.style.border = "2px solid #047857";
    }
  }
  function handleBlur() {
    if (myRef.current) {
      myRef.current.style.border = "2px solid #D1D5DB";
    }
  }

  return (
    <>
      <Navbar />
      <div className="mt-2 flex h-dvh w-full justify-center justify-self-center rounded-3xl bg-gray-100 p-6 sm:w-11/12">
        <div className="grid w-full grid-cols-4 grid-rows-6 gap-1">
          <LoginWorker>
            <div className="row-span-1 row-start-1 flex h-32 w-full flex-col items-center justify-center self-end rounded-lg bg-white text-center sm:flex sm:flex-row">
              <CircleImage image={SpencerImage} />
              <p className="ml-2 w-1/2 text-sm font-bold">Spencer Sedano</p>
            </div>
          </LoginWorker>
          <SideMenu>
            <div className="row-span-6 row-start-2 flex h-full w-full items-center justify-center justify-self-center rounded-lg bg-white">
              <ul className="flex h-full w-full flex-col items-center justify-evenly">
                <li className="flex cursor-pointer">
                  <img src={HomeIcon} alt="Home Icon" />
                  <p className="ml-2 hidden sm:block">Home</p>
                </li>
                <li className="flex cursor-pointer">
                  <img src={ClientIcon} alt="Client Icon" />
                  <p className="ml-2 hidden sm:block">Client</p>
                </li>
                <li className="flex cursor-pointer">
                  <img src={WorkerIcon} alt="Worker Icon" />
                  <p className="ml-2 hidden sm:block">Workers</p>
                </li>
                <li className="flex cursor-pointer">
                  <img src={TaskIcon} alt="Task Icon" />
                  <p className="ml-2 hidden sm:block">Tasks</p>
                </li>
                <li className="flex cursor-pointer">
                  <img src={CalendarIcon} alt="Calendar Icon" />
                  <p className="ml-2 hidden sm:block">Calendar</p>
                </li>
              </ul>
            </div>
          </SideMenu>
          <SearchBar>
            <div className="col-span-3 col-start-2 flex h-32 w-full flex-col justify-center self-end rounded-lg bg-white">
              <div
                className="ml-6 flex w-1/2 rounded-full border-2 border-gray-200"
                ref={myRef}
              >
                <img className="ml-6 w-8" src={SearchIcon} alt="Search Icon" />
                <input
                  className="ml-2 w-full rounded-full p-4 outline-none"
                  type="search"
                  placeholder="Search"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </SearchBar>
          <Tasks>
            <div className="row-span-3 row-start-2 flex h-full w-full items-center justify-center justify-self-center rounded-lg bg-white">
              <h1>Tasks</h1>
            </div>
          </Tasks>
          <Elder>
            <div className="col-span-2 row-span-2 row-start-5 flex h-full w-full items-center justify-center justify-self-center rounded-lg bg-white">
              <h1>Elder</h1>
            </div>
          </Elder>
          <CompletedTasks>
            <div className="row-span-3 row-start-2 flex h-full w-full items-center justify-center justify-self-center rounded-lg bg-white">
              <h1>Completed Tasks</h1>
            </div>
          </CompletedTasks>
          <Calendar>
            <div className="row-span-3 row-start-2 flex h-full w-full items-center justify-center justify-self-center rounded-lg bg-white">
              <h1>Calendar</h1>
            </div>
          </Calendar>

          <WorkersAvailable>
            <div className="row-span-2 row-start-5 flex h-full w-full items-center justify-center justify-self-center rounded-lg bg-white">
              <h1>Workers Available</h1>
            </div>
          </WorkersAvailable>
        </div>
      </div>
    </>
  );
}

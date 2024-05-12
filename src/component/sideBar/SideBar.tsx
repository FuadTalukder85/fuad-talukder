import { ReactNode } from "react";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import { CiMenuFries } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import "./Sidebar.css";

type TChildren = {
  children: ReactNode;
};

const SideBar = ({ children }: TChildren) => {
  return (
    <div>
      <div className="drawer lg:drawer-open relative">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle hidden"
        />
        <div className="drawer-content flex flex-col bg-[#1C2023]">
          {children}
          <label
            htmlFor="my-drawer-2"
            className="text-white rounded-lg p-3 bg-red-500 text-2xl lg:hidden w-[50px] absolute top-5 right-8"
          >
            <CiMenuFries />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="sidebar menu p-4 w-80 min-h-full">
            <LeftSideBar></LeftSideBar>
            <div className="mt-10">
              <div className="flex gap-3 items-center">
                {" "}
                <button className="border border-red-500 p-1 rounded-full">
                  <IoCall />
                </button>
                <span>01756-867585</span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <button className="border border-red-500 p-1 rounded-full">
                  <FaEnvelope />
                </button>
                <span>webfuadtk@gmail.com</span>
              </div>

              <div className="flex gap-3 items-center mt-2">
                <button className="border border-red-500 p-1 rounded-full">
                  <FaLocationDot />
                </button>
                <span>Narayanganj, Bangladesh.</span>
              </div>
            </div>
            <div className="mt-10">
              <h1>Connect With Me</h1>
              <div className="mt-5">
                <button className="border border-red-500 p-1 rounded-full mr-3">
                  <FaGithubSquare />
                </button>
                <button className="border border-red-500 p-1 rounded-full mr-3">
                  <FaLinkedin />
                </button>
                <button className="border border-red-500 p-1 rounded-full mr-3">
                  <FaInstagramSquare />
                </button>
                <button className="border border-red-500 p-1 rounded-full mr-3">
                  <FaFacebook />
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

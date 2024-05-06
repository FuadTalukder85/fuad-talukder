"use client";
import { ReactNode } from "react";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import "./Sidebar.css";

type TChildren = {
  children: ReactNode;
};

const SideBar = ({ children }: TChildren) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-[#1C2023]">
          {/* <HomePage children={children}></HomePage> */}
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="sidebar menu p-4 w-80 min-h-full bg-red">
            <LeftSideBar></LeftSideBar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

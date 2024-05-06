import { ReactNode } from "react";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import { CiMenuFries } from "react-icons/ci";
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
          <ul className="sidebar menu p-4 w-80 min-h-full bg-red">
            <LeftSideBar></LeftSideBar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

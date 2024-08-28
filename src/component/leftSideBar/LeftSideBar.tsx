"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../../assets/logo/fuad.jpeg";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  return (
    <div className="top-sidebar">
      <div className="flex justify-center">
        <Image src={logo} alt="logo" width={150} className="rounded-2xl" />
      </div>
      <h1 className="mt-5 text-3xl flex justify-center">Fuad Talukder</h1>
      <p className="flex justify-center text-white">Jr. Frontend Developer</p>
      <div className="mt-10">
        <li>
          <Link
            to="home"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutMe"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="specialties"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            Specialties
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="blog"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={1000}
            className="focus:text-[#cacaca] focus:bg-[#1C2023]"
          >
            Contact
          </Link>
        </li>
      </div>

      {/* <div className="divider divider-error mt-10">~</div> */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <div className="bg-[#ee2fee] h-[1px] w-[47%]"></div>
        <div className="w-[4%]">~</div>
        <div className="bg-[#ee2fee] h-[1px] w-[47%]"></div>
      </div>
    </div>
  );
};

export default LeftSideBar;

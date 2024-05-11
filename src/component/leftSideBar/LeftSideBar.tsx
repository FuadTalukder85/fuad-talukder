import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo/fuad.jpeg";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  return (
    <div className="top-sidebar">
      <div className="flex justify-center">
        <Image src={logo} alt="logo" width={150} className="rounded-2xl" />
      </div>
      <h1 className="mt-5 text-3xl flex justify-center">Fuad Talukder</h1>
      <p className="flex justify-center text-[#cacaca]">
        Junior Frontend Developer
      </p>
      <li className="mt-10">
        <Link
          href="/about-me"
          className="focus:text-[#cacaca] focus:bg-[#1C2023]"
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className="focus:text-[#cacaca] focus:bg-[#1C2023]"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link href="/blog" className="focus:text-[#cacaca] focus:bg-[#1C2023]">
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="focus:text-[#cacaca] focus:bg-[#1C2023]"
        >
          Contact
        </Link>
      </li>
    </div>
  );
};

export default LeftSideBar;

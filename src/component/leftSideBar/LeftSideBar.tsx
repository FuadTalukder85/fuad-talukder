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
      <p className="flex justify-center ">Junior Frontend Developer</p>
      <li className="mt-10">
        <Link href="about-me">About me</Link>
      </li>
      <li>
        <Link href="portfolio">Portfolio</Link>
      </li>
    </div>
  );
};

export default LeftSideBar;

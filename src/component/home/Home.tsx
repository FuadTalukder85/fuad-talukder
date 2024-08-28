import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-img flex items-center h-screen text-[#f2ecff]">
        <div className="px-96">
          <h5 className="border border-[#ee2fee] w-44 py-2 px-4 text-center rounded-full mx-auto">
            <p className="flex items-center justify-center gap-3">
              <span className="bg-green-500 p-[5px] rounded-full"></span>I am
              available
            </p>
          </h5>
          <h3 className="text-8xl font-bold text-center mt-8 uppercase">
            Fuad Talukder
          </h3>
          <h3 className="text-3xl font-bold tracking-[4px] text-center mt-2 uppercase">
            Jr. Frontend Developer
          </h3>

          <TypeAnimation
            className="mt-8 w-[775px] px-[170px] text-[#ee2fee]"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Specialized in javascript, Typescript...",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Specialized in React js, Next js...",
              "Specialized in Node js, Mongodb...",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />
          <div className="flex gap-7 mt-10 justify-center">
            <Link href="projects">
              <button className="text-white flex items-center border-b border-[#ee2fee] hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                View Projects
              </button>
            </Link>
            <a
              href="/Fuad-Talukder-Front-end-developer.pdf"
              download="Fuad-Talukder-Front-end-developer.pdf"
            >
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                Resume <FaDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

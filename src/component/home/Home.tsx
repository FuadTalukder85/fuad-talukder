import { Link } from "react-scroll";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-img flex items-center md:h-screen pt-6 md:pt-0 text-[#f2ecff]">
        <div className="mx-auto">
          <h5 className="border border-[#ee2fee] w-44 py-2 px-4 text-center rounded-full mx-auto">
            <p className="flex items-center justify-center gap-3">
              <span className="bg-green-500 p-[5px] rounded-full"></span>I am
              available
            </p>
          </h5>
          <h3 className="text-3xl md:text-8xl font-bold text-center mt-8 uppercase">
            Fuad Talukder
          </h3>
          <h3 className="md:text-3xl font-bold md:tracking-[4px] text-center mt-2 uppercase">
            Jr. Frontend Developer
          </h3>

          <TypeAnimation
            className="mt-8 md:w-[775px] md:px-[170px] text-[#ee2fee] text-xl md:text-2xl"
            sequence={[
              "Specialized in javascript, Typescript...",
              1000,
              "Specialized in React js, Next js...",
              "Specialized in Node js, Mongodb...",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <div className="flex gap-7 mt-10 justify-center">
            <Link to="projects" smooth={true} offset={-80} duration={1000}>
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

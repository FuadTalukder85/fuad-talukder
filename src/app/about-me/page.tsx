"use client";
// import Service from "@/component/service/Service";
// import Skill from "@/component/skill/Skill";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "../about-me/aboutMe.css";
import { Inputs } from "../(dashboardLayout)/dashboard/addSkill/page";
const AboutMePage = ({ skills }: { skills: Inputs[] }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="side-in"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="side-out"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="px-96">
          {/* <p className="text-center">Hello I am,</p> */}
          <h3 className="text-5xl font-bold tracking-[5px] mt-5 text-center">
            Frontend Developer
          </h3>
          <p className="mt-4 text-[#EAE727] text-center text-2xl">
            Specialized in javascript, Typescript.
          </p>
          <p className="mt-4 text-[#EAE727] text-center text-2xl">
            Specialized in React js, TNext js.
          </p>
          <p className="mt-4 text-[#EAE727] text-center text-2xl">
            Specialized in Node js, Mongodb
          </p>
          <p className="mt-5 px-28 text-center">
            Passionate about creating visually appealing, user-friendly
            websites. Seeking opportunities to drive innovation, exceed client
            expectations, and advance my career in web development.
          </p>
          <div className="flex gap-7 mt-10 justify-center">
            <Link href="projects">
              <button className="text-white flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                View Projects
              </button>
            </Link>
            <a
              href="/Fuad-Talukder-Front-end-developer.pdf"
              download="Fuad-Talukder-Front-end-developer.pdf"
            >
              <button className="text-white flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                Resume <FaDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="md:flex gap-20 p-10">
        <div className="md:w-[50%]">
          <h1 className="text-white text-3xl border-b-4 border-red-500 md:w-[330px]">
            About Me
          </h1>
          <p className="mt-10 text-[#cacaca]">
            <span className="text-white">Hello, This is Fuad,</span> Complete
            Diploma in Computer. I am specialized in web design, Frontend
            technology and dynamic sector, It,s my passion. I am good at MERN
            Stack, Javascript, Typescript, Next js, Bootstrap, Tailwind css,
            Daisyui, Firebase, React Hook Form, Zod Validation, Framer Motion,
            React Components.
          </p>
          <p className="text-[#cacaca] mt-5">
            Design a website can be a delicate and complex process. I will
            ensure that the correct components are integrated, the website is
            aesthetically pleasing, and it has the proper elements to generate
            conversions. Design Modern, Eye-Catching Responsive website is my
            working Goal. My objective is to provide best quality full projects
            to my clients and establish a good relationship. I,m fully dedicated
            to my Profession and Reputetion. Hardworking and Honesty is my
            policy.
          </p>
          <div className="flex gap-2 md:gap-10 mt-16">
            <div className="bg-[#161212] ps-2 md:ps-10 py-7 rounded-md w-[300px] border border-[#161212] hover:border hover:border-red-500 transition-all">
              <h5 className="text-[#cacaca]">Email :</h5>
              <p className="text-white mt-3">webfuadtk@gmail.com</p>
            </div>
            <div className="bg-[#161212] ps-2 md:ps-10 py-7 rounded-md w-[300px] border border-[#161212] hover:border hover:border-red-500 transition-all">
              <h5 className="text-[#cacaca]">Phone :</h5>
              <p className="text-white mt-3">01756-867585</p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-3xl mt-16 border-b-4 border-red-500 w-[330px]">
              Education Qualification
            </h1>
          </div>
          <div className="flex gap-48 mt-10 text-[#cacaca]">
            <div>
              <p>2015</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                Secondary School Certificate (S.S.C.) : Science
              </p>
              <p>Mirer Kapashatiya High School, Faridpur</p>
            </div>
          </div>

          <div className="flex gap-48 mt-5 text-[#cacaca]">
            <div>
              <p>2019</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                Diploma in Engineering : Computer
              </p>
              <p>National Polytechnic Institute, Faridpur</p>
            </div>
          </div>
        </div>
      
        <div className="md:w-[50%] mt-10 md:mt-0">
          <Service></Service>
          <Skill skill={skills}></Skill>
          <div className="flex gap-10">
            <Link href="projects">
              <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                View Projects
              </button>
            </Link>
            <a
              href="/Fuad-Talukder-Front-end-developer.pdf"
              download="Fuad-Talukder-Front-end-developer.pdf"
            >
              <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                Resume <FaDownload />
              </button>
            </a>
          </div>
        </div>
      </div> */}
    </AnimatePresence>
  );
};

export default AboutMePage;

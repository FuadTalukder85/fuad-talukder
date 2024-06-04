"use client";
import { Inputs } from "@/app/(dashboardLayout)/dashboard/addProject/page";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsCard.css";
const ProjectsCard = ({ allProjects }: { allProjects: Inputs[] }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="project-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="project-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <div className="p-10">
        <div className="flex justify-between md:pe-28">
          <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 md:w-[330px]">
            Projects
          </h1>
          <a
            href="/Fuad-Talukder-Front-end-developer.pdf"
            download="Fuad-Talukder-Front-end-developer.pdf"
          >
            <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
              Resume <FaDownload />
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-28 mt-16">
          {allProjects.map((allProject, index) => (
            <div key={index} className="bg-[#161212]">
              <Image
                src={allProject?.img}
                alt="allProject"
                width={400}
                height={400}
              ></Image>
              <div className="text-[#cacaca] mt-8 px-4 pb-6">
                <div className="flex justify-between items-center">
                  <h5 className="text-xl text-white">
                    {allProject.projectName}
                  </h5>
                  <button className="text-white flex items-center gap-3 border border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                    {allProject.technology}
                  </button>
                </div>
                <h5 className="mt-3">Live url : </h5>
                <a href={allProject.liveUrl} className="text-red-500">
                  {allProject.liveUrl}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectsCard;

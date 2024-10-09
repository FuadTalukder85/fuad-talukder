import { Inputs } from "@/app/(dashboardLayout)/dashboard/addSkill/page";
import React from "react";

const Skill = ({ skill }: { skill: Inputs[] }) => {
  return (
    <div id="skills">
      <h5 className="text-4xl text-white px-5 md:px-0">My Skills</h5>
      <div className="px-5 md:px-0 grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 md:mt-16 text-white">
        {skill?.map((skill, index) => (
          <button
            key={index}
            className="border border-[#ee2fee] p-1 py-3 hover:bg-[#ee2fee] hover:scale-105 transition-all duration-500"
          >
            {skill.skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skill;

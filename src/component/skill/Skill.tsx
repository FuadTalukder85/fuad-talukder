import React from "react";

const Skill = ({ allSkills }) => {
  return (
    <div>
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        Skill
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 text-white">
        {allSkills?.map((allSkill) => (
          <button key={allSkill._id} className="bg-red-500 p-1 me-2">
            {allSkill.skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skill;

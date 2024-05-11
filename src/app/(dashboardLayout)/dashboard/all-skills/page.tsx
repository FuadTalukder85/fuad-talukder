import AllSkillTable from "@/component/allSkillTable/allSkillTable";
import React from "react";

const AllSkills = async () => {
  const res = await fetch(`http://localhost:5000/skills`, {
    method: "GET",
    next: {
      revalidate: 30,
    },
  });
  const allSkills = await res.json();
  console.log(allSkills);
  return (
    <div>
      <AllSkillTable allSkills={allSkills}></AllSkillTable>
    </div>
  );
};

export default AllSkills;

"use client";
import AllSkillTable from "@/component/allSkillTable/allSkillTable";
import { useEffect, useState } from "react";

const AllSkills = () => {
  const [allSkills, setallSkills] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:5000/skills`);
    const data = await res.json();
    setallSkills(data);
  };

  useEffect(() => {
    const fetchDataAndRepeat = async () => {
      await fetchData();
      setTimeout(fetchDataAndRepeat, 5000);
    };

    fetchDataAndRepeat();

    return () => clearTimeout("");
  }, []);

  console.log(allSkills);
  return (
    <div>
      {allSkills ? <AllSkillTable allSkills={allSkills} /> : <p>Loading...</p>}
    </div>
  );
};

export default AllSkills;

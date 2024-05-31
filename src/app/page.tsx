"use client";
import React, { useEffect, useState } from "react";
import AboutMePage from "./about-me/page";

const HomePage = () => {
  const [allSkill, setallSkill] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`https://fuad-talukder-backend.vercel.app/skills`);
    const data = await res.json();
    setallSkill(data);
  };

  useEffect(() => {
    const fetchDataAndRepeat = async () => {
      await fetchData();
      setTimeout(fetchDataAndRepeat, 5000);
    };

    fetchDataAndRepeat();

    return () => clearTimeout("");
  }, []);
  // console.log(allSkills);

  return (
    <div>
      {allSkill ? <AboutMePage skills={allSkill} /> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;

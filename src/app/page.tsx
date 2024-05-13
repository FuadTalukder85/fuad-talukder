"use client";
import React, { useEffect, useState } from "react";
import AboutMePage from "./about-me/page";

const HomePage = () => {
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
      {allSkills ? <AboutMePage allSkills={allSkills} /> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;

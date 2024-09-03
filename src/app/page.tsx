"use client";
import React, { useEffect, useState } from "react";
import Home from "@/component/home/Home";
import Service from "@/component/service/Service";
import Skill from "@/component/skill/Skill";
import { Inputs } from "./(dashboardLayout)/dashboard/addSkill/page";
import Projects from "@/component/projects/Projects";
import Contact from "@/component/contact/Contact";
import About from "@/component/about-me/About";

const HomePage = () => {
  const [allSkill, setallSkill] = useState<Inputs[]>([]);

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
      <Home></Home>
      <About></About>
      {/* what i do */}
      <div className="bg-color md:px-32 pt-28">
        <Service></Service>
      </div>
      {/* skills  */}
      <div className="bg-color md:px-32 pb-10 pt-28">
        <Skill skill={allSkill}></Skill>
      </div>
      {/* projects  */}
      <div className="bg-img md:px-32 md:pb-10 pt-28">
        <Projects></Projects>
      </div>
      {/* contact */}
      <div className="bg-img md:px-32 md:pb-28 pt-28">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomePage;

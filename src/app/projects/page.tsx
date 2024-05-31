import ProjectsCard from "@/component/projectsCard/ProjectsCard";
import React from "react";

const Projects = async () => {
  const res = await fetch(`https://fuad-talukder-backend.vercel.app/projects`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });
  const allProjects = await res.json();
  // console.log(allProjects);
  return (
    <div>
      <ProjectsCard allProjects={allProjects}></ProjectsCard>
    </div>
  );
};

export default Projects;

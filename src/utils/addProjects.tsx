"use server";

import { Inputs } from "@/app/(dashboardLayout)/dashboard/addProject/page";

export const addProjects = async (data: Inputs) => {
  const res = await fetch(`http://localhost:5000/create-projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projectInfo = await res.json();
  return projectInfo;
};

"use server";

import { Inputs } from "@/app/(dashboardLayout)/dashboard/addSkill/page";

export const addSkills = async (data: Inputs) => {
  const res = await fetch(`http://localhost:5000/create-skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const skillInfo = await res.json();
  return skillInfo;
};
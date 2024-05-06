import React from "react";

const Skill = () => {
  return (
    <div>
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        Skill
      </h1>
      <div className="grid grid-cols-4 gap-4 mt-5 text-white">
        <button className="bg-red-500 p-1 me-2">MERN Stack</button>
        <button className="bg-red-500 p-1 me-2">Javascript</button>
        <button className="bg-red-500 p-1 me-2">Typescript</button>
        <button className="bg-red-500 p-1 me-2">Next js</button>
        <button className="bg-red-500 p-1 me-2">Bootstrap</button>
        <button className="bg-red-500 p-1 me-2">Tailwind css</button>
        <button className="bg-red-500 p-1 me-2">Daisyui</button>
        <button className="bg-red-500 p-1 me-2">Firebase</button>
        <button className="bg-red-500 p-1 me-2">React Hook Form</button>
        <button className="bg-red-500 p-1 me-2">Zod Validation</button>
        <button className="bg-red-500 p-1 me-2">Framer Motion</button>
        <button className="bg-red-500 p-1 me-2">React Component</button>
      </div>
    </div>
  );
};

export default Skill;

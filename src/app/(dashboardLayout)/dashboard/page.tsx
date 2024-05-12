import Link from "next/link";
import React from "react";

const Dasgboard = () => {
  return (
    <div className="p-10">
      <Link href="/dashboard/addSkill">
        <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
          Add Skill
        </button>
      </Link>
      <Link href="/dashboard/addProject">
        <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
          Add Project
        </button>
      </Link>
    </div>
  );
};

export default Dasgboard;

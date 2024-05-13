"use client";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Inputs } from "@/app/(dashboardLayout)/dashboard/addSkill/page";
import Link from "next/link";

const AllSkillTable = ({ allSkills }: { allSkills: Inputs[] }) => {
  const handleDelete = (_id: string) => {
    Swal.fire({
      title: "Are you want to delete this skill?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`hhttps://fuad.onrender.com/skills/${_id}`, {
            method: "DELETE",
          });
          Swal.fire({
            title: "Deleted!",
            text: "Your skill has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting skill:", error);
        }
      }
    });
  };

  return (
    <div className="p-10 md:w-[80%] mx-auto">
      <div className="flex gap-28">
        <Link href="/dashboard">
          <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
            Return to Dashboard
          </button>
        </Link>
        <Link href="/dashboard/addSkill">
          <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
            Add Skill
          </button>
        </Link>
      </div>
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        All Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 text-white ">
        {allSkills.map((allSkill, index) => (
          <div key={index}>
            <div className="flex gap-5">
              <button className="bg-red-500 p-1 w-[200px]">
                {allSkill.skill}
              </button>
              <div className="flex gap-5 text-4xl">
                <button>
                  <MdEditSquare />
                </button>
                <button onClick={() => handleDelete(allSkill._id)}>
                  {/* <h1 className="text-white">{allSkill._id}</h1> */}
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkillTable;

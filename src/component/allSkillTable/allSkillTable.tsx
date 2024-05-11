import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const AllSkillTable = ({ allSkills }) => {
  return (
    <div className="p-10 md:w-[80%] mx-auto">
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        All Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 text-white ">
        {allSkills.map((allSkill) => (
          <div key={allSkill._id}>
            <div className="flex gap-5">
              <button className="bg-red-500 p-1 w-[200px]">
                {allSkill.skill}
              </button>
              <div className="flex gap-5 text-4xl">
                <MdEditSquare />
                <AiFillDelete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkillTable;

import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
const ProjectsCard = ({ allProjects }) => {
  return (
    <div className="p-10">
      <div className="flex justify-between md:pe-28">
        <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 md:w-[330px]">
          Projects
        </h1>
        <a href="/fuad.pdf" download="fuad.pdf">
          <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
            Resume <FaDownload />
          </button>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-28 mt-16">
        {allProjects.map((allProject) => (
          <div key={allProject._id} className="bg-[#161212]">
            <Image
              src={allProject?.img}
              alt="allProject"
              width={400}
              height={400}
            ></Image>
            <div className="text-[#cacaca] mt-8 px-4 pb-6">
              <div className="flex justify-between items-center">
                <h5 className="text-xl text-white">FoodShpere</h5>
                <button className="text-white flex items-center gap-3 border border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                  MERN Stack
                </button>
              </div>
              <h5 className="mt-3">
                Live url :{" "}
                <a
                  href="https://willowy-sunflower-a54a29.netlify.app"
                  className="text-red-500"
                >
                  willowy-sunflower-a54a29.netlify.app
                </a>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
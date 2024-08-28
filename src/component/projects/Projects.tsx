import Image from "next/image";
import vogal from "../../assets/project/vogal.png";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div id="projects" className="text-white">
      <div>
        <p>~ My Work</p>
        <h5 className="text-4xl">RECENT PROJECT</h5>
      </div>
      <div className="grid grid-cols-2 gap-16 mt-16">
        {/* project 01 */}
        <div className="flex items-center gap-7">
          <div className="shadow-black shadow-2xl">
            <Image src={vogal} alt="vogal" width={250} height={250}></Image>
          </div>
          <div>
            <p className="text-3xl">E-commerce</p>
            <p className="mt-2">Mern stack</p>
            <p className="mt-5">Source code : Github</p>
            <div className="flex gap-5">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
            </div>
            <div className="text-4xl mt-5 flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>

        {/* project 02 */}
        <div className="flex items-center gap-7">
          <div className="shadow-black shadow-2xl">
            <Image src={vogal} alt="vogal" width={250} height={250}></Image>
          </div>
          <div>
            <p className="text-3xl">E-commerce</p>
            <p className="mt-2">Mern stack</p>
            <p className="mt-5">Source code : Github</p>
            <div className="flex gap-5">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
            </div>
            <div className="text-4xl mt-5 flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>

        {/* project 03 */}
        <div className="flex items-center gap-7">
          <div className="shadow-black shadow-2xl">
            <Image src={vogal} alt="vogal" width={250} height={250}></Image>
          </div>
          <div>
            <p className="text-3xl">E-commerce</p>
            <p className="mt-2">Mern stack</p>
            <p className="mt-5">Source code : Github</p>
            <div className="flex gap-5">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
            </div>
            <div className="text-4xl mt-5 flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>

        {/* project 04 */}
        <div className="flex items-center gap-7">
          <div className="shadow-black shadow-2xl">
            <Image src={vogal} alt="vogal" width={250} height={250}></Image>
          </div>
          <div>
            <p className="text-3xl">E-commerce</p>
            <p className="mt-2">Mern stack</p>
            <p className="mt-5">Source code : Github</p>
            <div className="flex gap-5">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
            </div>
            <div className="text-4xl mt-5 flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

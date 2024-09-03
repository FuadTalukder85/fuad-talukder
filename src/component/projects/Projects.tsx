import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div id="projects" className="text-white px-5 md:px-0">
      <div>
        <p>~ My Work</p>
        <h5 className="text-4xl">RECENT PROJECT</h5>
      </div>
      <div className="md:grid grid-cols-2 gap-16 mt-16">
        {/* project 01 */}
        <div className="md:flex items-center gap-7 mt-16 md:mt-0">
          <div className="flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            <Image
              src="https://i.postimg.cc/9MgjTS2B/vogal.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
            <div className="block md:hidden">
              <p className="text-xl">E-commerce</p>
              <p className="mt-2">Mern stack</p>
            </div>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">E-commerce</p>
            <p className="hidden md:block mt-2">Mern stack</p>
            <p className="hidden md:block mt-5">Source code : Github</p>
            <div className="flex gap-5 items-center">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
              <div className="block md:hidden text-2xl">
                <MdArrowOutward />
              </div>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>

        {/* project 02 */}
        <div className="md:flex items-center gap-7 mt-16 md:mt-0">
          <div className="flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            <Image
              src="https://i.postimg.cc/9MgjTS2B/vogal.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
            <div className="block md:hidden">
              <p className="text-xl">E-commerce</p>
              <p className="mt-2">Mern stack</p>
            </div>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">E-commerce</p>
            <p className="hidden md:block mt-2">Mern stack</p>
            <p className="hidden md:block mt-5">Source code : Github</p>
            <div className="flex gap-5 items-center">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
              <div className="block md:hidden text-2xl">
                <MdArrowOutward />
              </div>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>

        {/* project 03 */}
        <div className="md:flex items-center gap-7 mt-16 md:mt-0">
          <div className="flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            <Image
              src="https://i.postimg.cc/9MgjTS2B/vogal.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
            <div className="block md:hidden">
              <p className="text-xl">E-commerce</p>
              <p className="mt-2">Mern stack</p>
            </div>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">E-commerce</p>
            <p className="hidden md:block mt-2">Mern stack</p>
            <p className="hidden md:block mt-5">Source code : Github</p>
            <div className="flex gap-5 items-center">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
              <div className="block md:hidden text-2xl">
                <MdArrowOutward />
              </div>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>

        {/* project 04 */}
        <div className="md:flex items-center gap-7 mt-16 md:mt-0">
          <div className="flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            <Image
              src="https://i.postimg.cc/9MgjTS2B/vogal.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
            <div className="block md:hidden">
              <p className="text-xl">E-commerce</p>
              <p className="mt-2">Mern stack</p>
            </div>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">E-commerce</p>
            <p className="hidden md:block mt-2">Mern stack</p>
            <p className="hidden md:block mt-5">Source code : Github</p>
            <div className="flex gap-5 items-center">
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Frontend code
                <MdArrowOutward />
              </button>
              <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-3 py-2 rounded-lg">
                Backend code
                <MdArrowOutward />
              </button>
              <div className="block md:hidden text-2xl">
                <MdArrowOutward />
              </div>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

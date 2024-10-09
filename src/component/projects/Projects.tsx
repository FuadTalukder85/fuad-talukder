import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div id="projects" className="text-white px-5 md:px-0">
      <div>
        <p>~ My Work</p>
        <h5 className="text-4xl">RECENT PROJECT</h5>
      </div>
      <div className="md:grid grid-cols-2 gap-16 mt-8 md:mt-16">
        {/* project 01 */}
        <div className="md:flex items-center gap-7 mt-8 md:mt-0">
          <div className="md:flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            {/* responsive start */}
            <div className="flex justify-between items-center md:hidden">
              <div>
                <p className="text-xl">E-commerce</p>
                <p className="mt-2 pb-10 md:pb-0">Mern stack</p>
              </div>
              <div className="text-4xl md:mt-5 md:flex justify-end">
                <Link
                  href="https://data-solution-360-rosy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
            {/* responsive end */}
            <Image
              src="https://i.postimg.cc/9MgjTS2B/vogal.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">Vogal : E-commerce</p>
            <p className="hidden md:block mt-2">
              JS, Next.js, Redux, Framer motion, Node, Mongodb
            </p>
            <p className="hidden md:block mt-5">Source code : Github</p>
            <div className="flex gap-5 items-center mt-3">
              <Link
                href="https://github.com/FuadTalukder85/data-solution-360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-1 md:px-3 py-2 rounded-lg">
                  Frontend code
                  <MdArrowOutward />
                </button>
              </Link>
              <Link
                href="https://github.com/FuadTalukder85/data-solution-360-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-1 md:px-3 py-2 rounded-lg">
                  Backend code
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <Link
                href="https://data-solution-360-rosy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>

        {/* project 02 */}
        <div className="md:flex items-center gap-7 mt-16 md:mt-0">
          <div className="md:flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            {/* responsive start */}
            <div className="flex justify-between items-center md:hidden">
              <div>
                <p className="text-xl">E-commerce</p>
                <p className="mt-2 pb-10 md:pb-0">Mern stack</p>
              </div>
              <div className="text-4xl md:mt-5 md:flex justify-end">
                <Link
                  href="https://food-sphere-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
            {/* responsive end */}
            <Image
              src="https://i.postimg.cc/DwKRxxsN/Food-Sphere.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">FoodSphere</p>
            <p className="hidden md:block mt-2">
              TS, React, Redux, Node, Mongodb
            </p>
            <p className="hidden md:block mt-5">Source code : Github</p>
            <div className="flex gap-5 items-center mt-3">
              <Link
                href="https://github.com/FuadTalukder85/foodSphere-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-1 md:px-3 py-2 rounded-lg">
                  Frontend code
                  <MdArrowOutward />
                </button>
              </Link>
              <Link
                href="https://github.com/FuadTalukder85/foodSphere-backend.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-1 md:px-3 py-2 rounded-lg">
                  Backend code
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <Link
                href="https://food-sphere-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>

        {/* project 03 */}
        <div className="md:flex items-center gap-7 mt-16 md:mt-0">
          <div className="md:flex items-center gap-2 md:gap-5 shadow-black shadow-2xl">
            {/* responsive start */}
            <div className="flex justify-between items-center md:hidden">
              <div>
                <p className="text-xl">E-commerce</p>
                <p className="mt-2 pb-10 md:pb-0">Mern stack</p>
              </div>
              <div className="text-4xl md:mt-5 md:flex justify-end">
                <Link
                  href="https://grocer-ease-chi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
            {/* responsive end */}
            <Image
              src="https://i.postimg.cc/T3qFFnJ3/Grocer-Ease.png"
              alt="vogal"
              width={250}
              height={250}
            ></Image>
          </div>
          <div className="border-b md:border-none py-12 md:py-0 pb-5 md:pb-0">
            <p className="hidden md:block text-3xl">GrocerEase</p>
            <p className="hidden md:block mt-2">TS, Next.js</p>
            <p className="hidden md:block mt-5">Source code : Github</p>

            <div className="flex gap-5 items-center mt-3">
              <Link
                href="https://github.com/FuadTalukder85/GrocerEase-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-1 md:px-3 py-2 rounded-lg">
                  Frontend code
                  <MdArrowOutward />
                </button>
              </Link>
              <Link
                href="https://github.com/FuadTalukder85/grocerEase-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white flex items-center gap-3 border-b border-[#ee2fee] hover:text-[#ee2fee] transition-all duration-700 px-1 md:px-3 py-2 rounded-lg">
                  Backend code
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
            <div className="text-4xl md:mt-5 hidden md:flex justify-end">
              <Link
                href="https://grocer-ease-chi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

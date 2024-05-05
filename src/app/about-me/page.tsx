import Skill from "@/component/skill/Skill";
import React from "react";

const AboutMePage = () => {
  return (
    <div className="flex gap-10 p-10 text-white">
      <div className="w-[50%]">
        <h1 className="text-3xl">Fuad Talukder</h1>
        <p>Junior Frontend Developer</p>
        <p className="mt-5">
          Design a website can be a delicate and complex process. I will ensure
          that the correct components are integrated, the website is
          aesthetically pleasing, and it has the proper elements to generate
          conversions. Design Modern, Eye-Catching Responsive website is my
          working Goal.
        </p>
        <div>
          <h1 className="text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
            Education Qualification
          </h1>
        </div>
        <div className="flex gap-48 mt-5">
          <div>
            <p>2015</p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              Secondary School Certificate (S.S.C.) : Science
            </p>
            <p>Mirer Kapashatiya High School, Faridpur</p>
          </div>
        </div>

        <div className="flex gap-48 mt-5">
          <div>
            <p>2019</p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              Diploma in Engineering : Computer
            </p>
            <p>National Polytechnic Institute, Faridpur</p>
          </div>
        </div>
        <p className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          labore ad natus omnis, possimus quidem eos iusto praesentium, ducimus
          cum, quasi molestias perferendis impedit quis quae fugit dolorum neque
          officiis minima recusandae doloremque? Minus ratione assumenda animi
          repellendus temporibus sequi. Nemo eveniet repellendus facere expedita
          facilis quod itaque impedit iure?
        </p>
      </div>

      <div className="w-[50%]">
        <Skill></Skill>
        <p className="mt-5">Contact form</p>
        <p className="mt-5">
          <button>Resume</button>
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;

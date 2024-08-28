"use client";
import aboutMeImg from "../../assets/aboutMeImg/aboutMeImg.png";
import "../about-me/aboutMe.css";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div id="aboutMe" className="bg-color px-32">
        <div className="text-white">
          <p>~ Nice to meet you!</p>
          <h5 className="text-4xl">Everything about me</h5>
          <div className="flex items-center mt-24">
            <div className="w-[40%]">
              <Image
                src={aboutMeImg}
                alt="aboutMeImg01"
                width={450}
                height={450}
              ></Image>
            </div>
            <div className="w-[60%]">
              <p className="text-xl">- About me</p>
              <div>
                <p className="mt-10">
                  <span className="text-[#ee2fee]">Hello, This is Fuad,</span>{" "}
                  Complete Diploma in Computer. I am specialized in web design,
                  Frontend technology and dynamic sector, It,s my passion. I am
                  good at MERN Stack, Javascript, Typescript, Next js,
                  Bootstrap, Tailwind css, Daisyui, Firebase, React Hook Form,
                  Zod Validation, Framer Motion, React Components.
                </p>
                <p className="mt-5">
                  Design a website can be a delicate and complex process. I will
                  ensure that the correct components are integrated, the website
                  is aesthetically pleasing, and it has the proper elements to
                  generate conversions. Design Modern, Eye-Catching Responsive
                  website is my working Goal. My objective is to provide best
                  quality full projects to my clients and establish a good
                  relationship. I,m fully dedicated to my Profession and
                  Reputetion. Hardworking and Honesty is my policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

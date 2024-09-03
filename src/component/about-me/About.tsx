"use client";
import AboutMe from "../../assets/AboutMe02.json";
import Lottie from "react-lottie";
import "../about-me/aboutMe.css";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AboutMe,
  };
  return (
    <div>
      <div id="aboutMe" className="bg-color pt-24 md:pt-24 px-5 md:px-32">
        <div className="text-white">
          <p>~ Nice to meet you!</p>
          <h5 className="text-4xl">Everything about me</h5>
          <div className="md:flex gap-10 items-center mt-6 md:mt-24">
            <div className="md:w-[35%]">
              <Lottie options={defaultOptions} />
            </div>
            <div className="md:w-[65%]">
              <p className="text-xl">- About me</p>
              <div>
                <p className="mt-5">
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

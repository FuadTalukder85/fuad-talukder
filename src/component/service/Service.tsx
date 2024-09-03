import Image from "next/image";
import webDesign from "../../assets/serviceImg/webDesign.jpg";

const Service = () => {
  return (
    <div id="specialties">
      <p className="text-white md:mt-10 px-5 md:px-0">~ My Service</p>
      <h5 className="text-4xl text-white px-5 md:px-0">My Specialties</h5>
      {/* accordion */}
      <div className="collapse collapse-plus text-white mt-16">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-3 items-center">
            <span className="bg-[#ee2fee] w-[11px] h-[11px] rounded-full"></span>
            <p className="text-2xl text-white">Responsive Web UI Design</p>
          </div>
        </div>
        <div className="collapse-content">
          <div className="md:flex gap-10 items-center">
            <Image
              src={webDesign}
              alt="webDesign"
              width={350}
              height={350}
            ></Image>
            <p className="leading-9">
              Design a website can be a delicate and complex process. I will
              ensure that the right components are integrated, the website is
              aesthetically pleasing, and it has the correct elements to
              generate conversions. Design Modern, Eye-Catching Responsive
              website is my working Goal.
            </p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-3 items-center">
            <span className="bg-[#ee2fee] w-[11px] h-[11px] rounded-full"></span>
            <p className="text-2xl text-white">RESTful API Development</p>
          </div>
        </div>
        <div className="collapse-content">
          <div className="md:flex gap-10 items-center">
            <Image
              src={webDesign}
              alt="webDesign"
              width={350}
              height={350}
            ></Image>
            <p className="leading-9">
              I Create RESTful APIs using Node.js and Express.js to perform CRUD
              (Create, Read, Update, Delete) operations on data stored in
              MongoDB. I can understand API design, and can handle routing,
              middleware, authentication, and error handling.
            </p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-3 items-center">
            <span className="bg-[#ee2fee] w-[11px] h-[11px] rounded-full"></span>
            <p className="text-2xl text-white">
              Authentication and Authorization
            </p>
          </div>
        </div>
        <div className="collapse-content">
          <div className="md:flex gap-10 items-center">
            <Image
              src={webDesign}
              alt="webDesign"
              width={350}
              height={350}
            ></Image>
            <p className="leading-9">
              Implement user authentication and authorization features using
              libraries like JSON Web Tokens (JWT). I can secure the
              authenticate users, manage sessions, and restrict access to
              protected routes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

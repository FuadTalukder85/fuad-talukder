import React from "react";

const Service = () => {
  return (
    <div>
      <h1 className="text-white text-3xl border-b-4 border-red-500 w-[330px]">
        What I Do
      </h1>
      <div className="mt-8">
        <div>
          <h5 className="text-white text-xl font-semibold">
            Responsive Web UI Design
          </h5>
          <p className="text-[#cacaca] mt-2">
            Design a website can be a delicate and complex process. I will
            ensure that the right components are integrated, the website is
            aesthetically pleasing, and it has the correct elements to generate
            conversions. Design Modern, Eye-Catching Responsive website is my
            working Goal.
          </p>
        </div>
        <div className="mt-5">
          <h5 className="text-white text-xl font-semibold">
            RESTful API Development
          </h5>
          <p className="text-[#cacaca] mt-2">
            I Create RESTful APIs using Node.js and Express.js to perform CRUD
            (Create, Read, Update, Delete) operations on data stored in MongoDB.
            I can understand API design, and can handle routing, middleware,
            authentication, and error handling.
          </p>
        </div>
        <div className="mt-5">
          <h5 className="text-white text-xl font-semibold">
            Authentication and Authorization
          </h5>
          <p className="text-[#cacaca] mt-2">
            Implement user authentication and authorization features using
            libraries like JSON Web Tokens (JWT). I can secure the authenticate
            users, manage sessions, and restrict access to protected routes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

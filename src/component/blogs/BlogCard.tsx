import React from "react";
import { Inputs } from "./BlogForm";

const BlogCard = ({ allBlogs }: { allBlogs: Inputs[] }) => {
  return (
    <div className="p-10">
      <div className="grid md:grid-cols-3 gap-5">
        {allBlogs.map((blog, index) => (
          <div key={index} className="md:border-r-2 border-red-500 p-5">
            <div>
              <h1 className="text-red-500 font-bold">
                Post by : <span className="text-white">{blog.names}</span>
              </h1>
              <h1 className="text-red-500">{blog.title}</h1>
              {/* <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-white mt-3"
              /> */}
              <div className="text-white">{blog.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;

import React, { useState, useRef, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import JoditEditor from "jodit-react";
// import FroalaEditor from "react-froala-wysiwyg";
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
import { addBlogs } from "@/utils/addBlogs";

export type Inputs = {
  names: string;
  title: string;
  description: string;
  _id: string;
  content: string;
};

const BlogForm = ({ placeholder }: { placeholder?: string }) => {
  // const editor = useRef(null);
  const [content, setContent] = useState("");
  // const config = useMemo(
  //   () => ({
  //     readonly: false,
  //     placeholder: placeholder || "Start typing...", // Dynamic placeholder
  //   }),
  //   [placeholder]
  // );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await addBlogs(data, content);
      reset();
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="mt-5 md:w-[51%] mx-auto p-5 md:p-0">
      <h1 className="text-white text-3xl mt-10">
        Leave your valuable comment about me and my projects
      </h1>
      <div className="card mx-auto shrink-0 w-full shadow-xl border p-5 rounded-xl mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            {/* name */}
            <div className="form-control w-full">
              <input
                {...register("names", { required: "Name is required" })}
                placeholder="Your name"
                className="w-full border py-1 px-3"
              />
              {errors.names && (
                <span className="text-red-500">{errors.names.message}</span>
              )}
            </div>
            {/* title */}
            <div className="form-control w-full">
              <input
                {...register("title", { required: "Title is required" })}
                placeholder="Your title"
                className="w-full border py-1 px-3"
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>
          </div>
          {/* comment */}
          <div className="form-control w-full mt-3">
            {/* <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => setContent(newContent)}
            /> */}
            {/* <FroalaEditor /> */}
            <textarea
              {...register("description", { required: "Title is Description" })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          <div className="form-control mt-5 md:mt-0">
            <button
              type="submit"
              className="bg-[#00715D] hover:bg-[#FFB606] transition-all text-white tracking-widest font-bold rounded py-2 px-5 mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;

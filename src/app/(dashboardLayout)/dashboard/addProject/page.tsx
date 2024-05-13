"use client";
import { addProjects } from "@/utils/addProjects";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  img: string;
  projectName: string;
  technology: string;
  liveUrl: string;
  _id: string;
};
const AddProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await addProjects(data);
      console.log(res);
      reset();
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };
  return (
    <div className="mt-5 w-[40%] mx-auto">
      <Link href="/dashboard">
        <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
          Return to Dashboard
        </button>
      </Link>
      <h1 className="text-white text-3xl mt-10">Add Project :</h1>
      <div className="card mx-auto shrink-0 w-full shadow-xl border p-5 rounded-xl mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* img */}
            <div className="form-control w-full mt-3">
              <input
                {...register("img", { required: "Img is required" })}
                placeholder="Img url"
                className="w-full border py-1 px-3"
              />
              {errors.img && (
                <span className="text-red-500 mt-2">{errors.img.message}</span>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <input
                {...register("projectName", {
                  required: "Project Name is required",
                })}
                placeholder="Project name"
                className="w-full border py-1 px-3"
              />
              {errors.projectName && (
                <span className="text-red-500 mt-2">
                  {errors.projectName.message}
                </span>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <input
                {...register("technology", {
                  required: "Technology is required",
                })}
                placeholder="Technology"
                className="w-full border py-1 px-3"
              />
              {errors.technology && (
                <span className="text-red-500 mt-2">
                  {errors.technology.message}
                </span>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <input
                {...register("liveUrl", {
                  required: "Live Url is required",
                })}
                placeholder="Live Url"
                className="w-full border py-1 px-3"
              />
              {errors.liveUrl && (
                <span className="text-red-500 mt-2">
                  {errors.liveUrl.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-control mt-5 md:mt-0">
            <button
              type="submit"
              className="bg-[#00715D] hover:bg-[#FFB606] transition-all text-white tracking-widest font-bold rounded py-2 px-5 mt-3"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;

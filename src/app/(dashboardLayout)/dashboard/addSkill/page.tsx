"use client";
import { addSkills } from "@/utils/addSkills";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  skill: string;
  _id: string;
};
const AddSkill = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await addSkills(data);
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
      <h1 className="text-white text-3xl mt-10">Skill :</h1>
      <div className="card mx-auto shrink-0 w-full shadow-xl border p-5 rounded-xl mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            {/* skill */}
            <div className="form-control w-full mt-3">
              <input
                {...register("skill", { required: "Skill is required" })}
                placeholder="Skill"
                className="w-full border py-1 px-3"
              />
              {errors.skill && (
                <span className="text-red-500 mt-2">
                  {errors.skill.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-control mt-5 md:mt-0">
            <button
              type="submit"
              className="bg-[#00715D] hover:bg-[#FFB606] transition-all text-white tracking-widest font-bold rounded py-2 px-5 mt-3"
            >
              Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;

"use client";
import { addSkills } from "@/utils/addSkills";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  skill: string;
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
      <h1 className="text-white text-3xl mt-10">Skill :</h1>
      <div className="card mx-auto shrink-0 w-full shadow-xl border p-5 rounded-xl mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            {/* skill */}
            <div className="form-control w-full mt-3">
              <input
                {...register("skill", { required: "Name is required" })}
                placeholder="Skill"
                className="w-full border py-1 px-3"
              />
              {errors.skill && <span>{errors.skill.message}</span>}
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

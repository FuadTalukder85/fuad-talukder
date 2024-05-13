"use client";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { addContacts } from "@/utils/addContacts";

export type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _id: string;
};
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await addContacts(data);
      console.log(res);
      reset();
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };
  return (
    <div className="p-10">
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        How Can I Help You?
      </h1>
      {/* form */}

      <div className="hero mt-5">
        <div className="hero-content w-full">
          <div className="card shrink-0 w-full max-w-5xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex gap-10">
                <div className="w-full">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Full Name"
                      className="px-3 py-2 bg-[#161212] text-white"
                    />
                    {errors.name && (
                      <span className="text-red-500 mt-2">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <input
                      {...register("email", { required: "Email is required" })}
                      type="text"
                      placeholder="Email Address"
                      className="px-3 py-2 bg-[#161212] text-white"
                    />
                    {errors.email && (
                      <span className="text-red-500 mt-2">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      type="text"
                      placeholder="Subject"
                      className="px-3 py-2 bg-[#161212] text-white"
                    />
                    {errors.subject && (
                      <span className="text-red-500 mt-2">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <div className="form-control">
                    <label htmlFor="description" className="label"></label>
                    <textarea
                      {...register("message", {
                        required: "Subject is required",
                      })}
                      placeholder="Message"
                      className="px-3 py-2 pb-24 bg-[#161212] text-white"
                    ></textarea>
                    {errors.message && (
                      <span className="text-red-500 mt-2">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="w-[170px] text-white mt-2 flex items-center gap-3 border border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 mt-16">
        <div className="bg-[#161212] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] border border-[#161212] hover:border hover:border-red-500 transition-all">
          <h5 className="text-[#cacaca]">Email :</h5>
          <p className="text-white mt-3">webfuadtk@gmail.com</p>
        </div>
        <div className="bg-[#161212] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] border border-[#161212] hover:border hover:border-red-500 transition-all">
          <h5 className="text-[#cacaca]">Phone :</h5>
          <p className="text-white mt-3">01756-867585</p>
        </div>
        <div className="bg-[#161212] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] border border-[#161212] hover:border hover:border-red-500 transition-all">
          <h5 className="text-[#cacaca]">Address :</h5>
          <p className="text-white mt-3">Kashipur, Narayanganj</p>
        </div>
        <div className="bg-[#161212] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] border border-[#161212] hover:border hover:border-red-500 transition-all">
          <h5 className="text-[#cacaca]">Follow :</h5>
          <p className="text-white mt-3 flex gap-3">
            <FaGithub /> <CiLinkedin /> <FaSquareInstagram />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

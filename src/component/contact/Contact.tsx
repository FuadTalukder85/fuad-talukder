"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { addContacts } from "@/utils/addContacts";
import Link from "next/link";

export type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _id: string;
};
const Contact = () => {
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
    <div id="contact" className="p-5 md:p-10">
      <p className="text-white">~ Contact</p>
      <h5 className="text-4xl text-white">Reach out me</h5>
      {/* form */}

      <div className="hero md:mt-5">
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
                      className="px-4 py-3 bg-[#2b033077] text-white placeholder-white border border-[#ffe0ff]"
                    />
                    {errors.name && (
                      <span className="text-[#ee2fee] mt-2">
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
                      className="px-4 py-3 bg-[#2b033077] text-white placeholder-white border border-[#ffe0ff]"
                    />
                    {errors.email && (
                      <span className="text-[#ee2fee] mt-2">
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
                      className="px-4 py-3 bg-[#2b033077] text-white placeholder-white border border-[#ffe0ff]"
                    />
                    {errors.subject && (
                      <span className="text-[#ee2fee] mt-2">
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
                        required: "Message is required",
                      })}
                      placeholder="Message"
                      className="px-5 py-5 pb-28 bg-[#2b033077] text-white placeholder-white border border-[#ffe0ff]"
                    ></textarea>
                    {errors.message && (
                      <span className="text-[#ee2fee] mt-2">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="w-[170px] text-white mt-2 flex items-center gap-3 border border-[#ee2fee] hover:bg-[#ee2fee] transition-all duration-700 px-6 py-2 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 mt-16">
        <div className="bg-[#2b033077] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] shadow-black shadow-2xl border border-[#161212] hover:border hover:border-[#ee2fee] transition-all duration-700">
          <h5 className="text-[#cacaca]">Email :</h5>
          <p className="text-white mt-3">webfuadtk@gmail.com</p>
        </div>
        <div className="bg-[#2b033077] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] shadow-black shadow-2xl border border-[#161212] hover:border hover:border-[#ee2fee] transition-all duration-700">
          <h5 className="text-[#cacaca]">Phone :</h5>
          <p className="text-white mt-3">01756-867585</p>
        </div>
        <div className="bg-[#2b033077] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] shadow-black shadow-2xl border border-[#161212] hover:border hover:border-[#ee2fee] transition-all duration-700">
          <h5 className="text-[#cacaca]">Address :</h5>
          <p className="text-white mt-3">Kashipur, Narayanganj</p>
        </div>
        <div className="bg-[#2b033077] ps-2 md:ps-10 py-7 rounded-md md:w-[300px] shadow-black shadow-2xl border border-[#161212] hover:border hover:border-[#ee2fee] transition-all duration-700">
          <h5 className="text-[#cacaca]">Follow :</h5>
          <p className="text-white mt-3 flex gap-3">
            <Link href="https://github.com/FuadTalukder85">
              <button className="border border-[#ee2fee] p-1 rounded-full mr-3">
                <FaGithubSquare />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/fuadtalukder">
              <button className="border border-[#ee2fee] p-1 rounded-full mr-3">
                <FaLinkedin />
              </button>
            </Link>
            <Link href="https://www.instagram.com/fuad_talukder">
              <button className="border border-[#ee2fee] p-1 rounded-full mr-3">
                <FaInstagramSquare />
              </button>
            </Link>

            <Link href="https://www.facebook.com/fuad.hasan.tk">
              <button className="border border-[#ee2fee] p-1 rounded-full mr-3">
                <FaFacebook />
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

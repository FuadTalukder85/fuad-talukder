"use client";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="bg-img h-screen">
      <h1 className="text-center text-4xl text-white mt-36">
        Something went wrong...
      </h1>
      <button className="flex items-center justify-center mx-auto w-[170px] text-white mt-10 gap-3 border border-[#ee2fee] hover:bg-[#ee2fee] transition-all duration-700 px-6 py-2 rounded-lg">
        <Link href={"/"}>Retun home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;

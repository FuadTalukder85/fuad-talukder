"use client";
import Loading from "../assets/loading/Loading.json";
import Lottie from "react-lottie";

const loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
  };
  return (
    <div className="bg-img h-screen w-full">
      <div className="w-[100px] mt-32 mx-auto">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default loading;

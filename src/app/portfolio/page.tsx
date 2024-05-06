import Image from "next/image";
import foodsphere from "../../assets/project/foodsphere.jpg";
import GrocerEase from "../../assets/project/GrocerEase.jpg";
const PortfolioPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        Portfolio
      </h1>
      <div className="flex gap-10 px-28 mt-16">
        {/* portfolio one */}
        <div className="bg-[#161212]">
          <Image src={foodsphere} alt="foodsphere" width={400}></Image>
          <div className="text-[#cacaca] mt-8 px-4 pb-6">
            <div className="flex justify-between items-center">
              <h5>FoodShpere</h5>
              <button className="text-white flex items-center gap-3 border border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                MERN Stack
              </button>
            </div>
            <h5 className="mt-3">
              Live url :{" "}
              <a
                href="https://willowy-sunflower-a54a29.netlify.app"
                className="text-red-500"
              >
                willowy-sunflower-a54a29.netlify.app
              </a>
            </h5>
          </div>
        </div>
        {/* portfolio two */}
        <div className="bg-[#161212]">
          <Image src={GrocerEase} alt="foodsphere" width={400}></Image>
          <div className="text-[#cacaca] mt-8 px-4 pb-6">
            <div className="flex justify-between items-center">
              <h5>GrocerEase</h5>
              <button className="text-white flex items-center gap-3 border border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                Next js
              </button>
            </div>
            <h5 className="mt-3">
              Live url :{" "}
              <a
                href="https://grocerease-seven.vercel.app/"
                className="text-red-500"
              >
                grocerease-seven.vercel.app
              </a>
            </h5>
          </div>
        </div>
        {/* portfolio three */}
        <div className="bg-[#161212]">
          <Image src={foodsphere} alt="foodsphere" width={400}></Image>
          <div className="text-[#cacaca] mt-8 px-4 pb-6">
            <div className="flex justify-between items-center">
              <h5>FoodShpere</h5>
              <button className="text-white flex items-center gap-3 border border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
                MERN Stack
              </button>
            </div>
            <h5 className="mt-3">
              Live url :{" "}
              <a
                href="https://willowy-sunflower-a54a29.netlify.app"
                className="text-red-500"
              >
                willowy-sunflower-a54a29.netlify.app
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

import Image from "next/image";
import foodsphere from "../../assets/project/foodsphere.jpg";
const PortfolioPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-white text-3xl mt-10 border-b-4 border-red-500 w-[330px]">
        Portfolio
      </h1>
      <div className="flex gap-10 px-28 mt-16">
        <div>
          <Image src={foodsphere} alt="foodsphere" width={400}></Image>
        </div>
        <div>
          <Image src={foodsphere} alt="foodsphere" width={400}></Image>
        </div>
        <div>
          <Image src={foodsphere} alt="foodsphere" width={400}></Image>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

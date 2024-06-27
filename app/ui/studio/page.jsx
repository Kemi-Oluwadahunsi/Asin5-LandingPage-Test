import Image from "next/image";
import img from "./image"
import { FaArrowRight } from "react-icons/fa6";
const Studios = () => {
  return (
    <div className="bg-[#F4F4F4] lg:px-[12rem] px-4 lg:py-[3rem] py-8 flex flex-col gap-8 lg:gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] lg:text-[4rem] text-[1.1rem] font-medium mx-auto">
          Our Studio Portfolio
        </h1>
        <p className="lg:w-[71%] lg:text-base text-sm mx-auto">
          Our 2024 Service Incubator Portfolio Companies
        </p>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-8 w-full gap-8">
        {img.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              alt="brands"
              title="brands logo"
              width={150}
              height={120}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="border-none flex gap-4 text-sm lg:text-lg items-center underline underline-offset-4 font-semibold">
          <span>View All Companies</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Studios
import Image from "next/image";
import heroImage from "../../../public/images/heroImage.png";

const Hero = () => {
  return (
    <div className="relative pb-[4rem] lg:pb-0 flex justify-between">
      <div className="flex flex-col lg:pl-4 lg:basis-[50%] ">
        <div className="lg:w-[65%] px-4 lg:px-0 pt-[5rem] flex flex-col gap-8 mx-auto">
          <div className="flex flex-col gap-2">
            <h2 className="lg:font-semibold font-medium text-[1.1rem] leading-loose lg:text-[2.5rem] text-[#212121]">
              SINC Partners is a service incubation company{" "}
            </h2>
            <p className="text-[#4E4E4E] lg:text-[1.5rem] leading-7 lg:leading-10">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
          </div>

          <div>
            <button className=" bg-[#303030] py-3 lg:text-base text-[0.9rem] px-8 lg:py-4 rounded-[2rem] border-none text-white font-semibold">
              SINC With us
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block basis-[48%]">
        <Image
          src={heroImage}
          alt="heroImage"
          title="people clapping hands"
          className="w-full object-cover"
        />
      </div>

      <div className="flex gap-2 absolute top-[90%] left-[50%]">
        <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
};

export default Hero;

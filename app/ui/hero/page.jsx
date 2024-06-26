import Image from "next/image";
import heroImage from "../../../public/images/heroImage.png";

const Hero = () => {
  return (
    <div className="relative flex justify-between">
      <div className="flex flex-col pl-4 basis-[50%] ">
        <div className="w-[65%] pt-[5rem] flex flex-col gap-8 mx-auto">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-[2.5rem] text-[#212121]">
              SINC Partners is a service incubation company{" "}
            </h2>
            <p className="text-[#4E4E4E] text-[1.5rem] leading-10">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
          </div>

          <div>
            <button className=" bg-[#303030] px-8 py-4 rounded-[2rem] border-none text-white font-semibold">
              SINC With us
            </button>
          </div>
        </div>
      </div>

      <div className="basis-[48%]">
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

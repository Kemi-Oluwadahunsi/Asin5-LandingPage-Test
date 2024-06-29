import Image from "next/image";
import video1 from "../../../public/images/video1.png";
import video2 from "../../../public/images/video2.png";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";

const Blogs = () => {
  return (
    <div className=" bg-[#F4F4F4] lg:px-[4rem] xl:px-[10rem] px-4 py-[3rem] flex flex-col gap-[3rem] xl:gap-[5rem]">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-[#212121] lg:text-[3em] text-center xl:text-[4rem] text-[1.1rem] xl:w-[90%] font-medium mx-auto">
          Blogs & Resources
        </h1>

        <div className="flex flex-col gap-[3em] lg:gap-8 xl:gap-[3rem]">
          <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-4 xl:gap-8">
            <div className="w-full">
              <Image src={video1} alt="videoImage" title="Video image" className="sm:w-full object-contain" />
            </div>
            <div className="w-full">
              <Image src={video2} alt="videoImage" title="Video image" className="sm:w-full object-contain" />
            </div>
            <div className="w-full">
              <Image src={video2} alt="videoImage" title="Video image" className="sm:w-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-6">
            <div className="flex xl:gap-2 justify-between flex-1">
              <div className="flex flex-col gap-2 ">
                <h4 className="font-semibold text-sm">
                  Top Ten Most Powerful Startup
                </h4>
                <p className="xl:text-[0.75rem] text-[0.75rem] lg:text-[0.7rem]">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div className="xl:basis-[40%] lg:basis-[45%]">
                <Image
                  src={img1}
                  alt="assetImage"
                  title="asset image"
                  className="object-fill w-full h-full"
                />
              </div>
            </div>

            <div className="flex justify-between flex-1">
              <div className="flex xl:gap-2 flex-col gap-2 ">
                <h4 className="font-semibold text-sm">
                  Top Ten Most Powerful Startup
                </h4>
                <p className="xl:text-[0.75rem] text-[0.75rem] lg:text-[0.7rem]">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div className="xl:basis-[40%] lg:basis-[45%]">
                <Image
                  src={img2}
                  alt="assetImage"
                  title="asset image"
                  className="object-fill w-full h-full"
                />
              </div>
            </div>

            <div className="flex justify-between flex-1">
              <div className="flex xl:gap-2 flex-col gap-2  ">
                <h4 className="font-semibold text-sm">
                  Top Ten Most Powerful Startup
                </h4>
                <p className="xl:text-[0.75rem] text-[0.75rem] lg:text-[0.7rem]">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div className="xl:basis-[40%] lg:basis-[45%]">
                <Image
                  src={img3}
                  alt="assetImage"
                  title="asset image"
                  className="object-fill w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="border-none flex gap-4 lg:text-lg items-center underline underline-offset-4 font-semibold">
          <span>See More Blogs & Resources</span>
        </button>
      </div>
    </div>
  );
};

export default Blogs;

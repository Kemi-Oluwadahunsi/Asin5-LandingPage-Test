import Image from "next/image";
import punch from "../../../public/images/punch.png";
import bjnews from "../../../public/images/bjnews.png";
import manclapping from "../../../public/images/manclapping.png";
import bjbrand from "../../../public/images/bjbrand.png";

const Featured = () => {
  return (
    <div className="bg-[#F4F4F4] lg:flex flex-col gap-8 py-[3rem] hidden w-full">
      <h2 className="text-[#212121] lg:text-[1.2em] xl:text-[2rem] text-[1.1rem] font-medium mx-auto">
        As Featured In
      </h2>
      <div className=" flex justify-between gap-[1rem] w-full">
        <div className="w-[20%]">
          <Image
            src={punch}
            alt="punch"
            title="blog image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex bg-white w-[60%]">
          <div className="basis-[70%]">
            <Image
              src={bjnews}
              alt="bjnews"
              title="blog image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8 basis-[40%] xl:basis-[30%] px-2 xl:px-4 py-8 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="xl:pt-4">
                <Image src={bjbrand} alt="" title="" className="object-contain"/>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-base xl:text-base lg:text-sm">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="text-xs xl:text-sm w-full border leading-relaxed">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </div>
            </div>

            <div className="flex flex-col text-sm xl:text-base gap-2 xl:pt-[4rem]">
              <p>REPORTED BY:</p>
              <p>Rema Viel</p>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <Image
            src={manclapping}
            alt="clappingMan"
            title="blog image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;

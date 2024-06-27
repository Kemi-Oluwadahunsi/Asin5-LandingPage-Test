import Image from "next/image";
import punch from "../../../public/images/punch.png";
import bjnews from "../../../public/images/bjnews.png";
import manclapping from "../../../public/images/manclapping.png";
import bjbrand from "../../../public/images/bjbrand.png";

const Featured = () => {
  return (
    <div className="bg-[#F4F4F4] flex flex-col gap-8 py-[3rem]">
      <div className=" flex justify-between gap-[1rem] w-full">
        <div className="basis-[18%]">
          <Image src={punch} alt="punch" title="blog image" className="w-full"/>
        </div>

        <div className="flex basis-[60%] bg-white">
          <div className="basis-[70%]">
            <Image src={bjnews} alt="bjnews" title="blog image" className="w-full h-full object-cover"/>
          </div>

          <div className="flex flex-col gap-8 basis-[30%] px-4 py-8 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="pt-4">
                <Image src={bjbrand} alt="" title="" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="text-sm w-full border leading-relaxed">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-[4rem]">
              <p>REPORTED BY:</p>
              <p>Rema Viel</p>
            </div>
          </div>
        </div>

        <div className="basis-[18%]">
          <Image
            src={manclapping}
            alt="clappingMan"
            title="blog image"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;

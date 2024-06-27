import { IoTriangleSharp } from "react-icons/io5";
import { PiDiamondFill } from "react-icons/pi";
import { BsFillPentagonFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const IncubationModel = () => {
  return (
    <div className="bg-[#F4F4F4] lg:px-[10rem] px-4 lg:py-[3rem] py-8 flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] lg:text-[4rem] text-[1.1rem] font-medium mx-auto">
          Our Service Incubation Model
        </h1>
        <p className="lg:w-[71%] lg:text-base text-sm mx-auto">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>

      <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#212121] lg:text-[2rem] text-center lg:text-start font-medium">
            Hypothesis
          </h2>
          <p className="text-sm lg:text-base text-center lg:text-start ">
            Just a few reasons we know its time for this model within the
            ecosystem
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-[2rem] w-full">
          <div className="bg-white flex flex-col gap-4 lg:gap-8 px-4 lg:px-8 py-4 flex-1 rounded-2xl ">
            <div className="lg:text-[3rem] text-[#FF88C6]">
              <IoTriangleSharp />
            </div>
            <p className="text-sm text-[#4E4E4E] lg:text-[1.05rem]">
              Most early-stage companies and pre-product startups cannot afford
              professional services especially those who don’t have family and
              friends’ network that can support
            </p>
          </div>

          <div className="bg-white flex flex-col gap-4 lg:gap-8 px-4 lg:px-8 py-4 flex-1 rounded-2xl">
            <div className="lg:text-[3.5rem] text-[#20888F]">
              <PiDiamondFill />
            </div>
            <p className="text-sm text-[#4E4E4E] lg:text-[1.05rem]">
              If startups can seed 5-10% in equity to incubators for $20k to
              $200k funding most times, they will be willing to seed 10% equity
              for a $25k service investment
            </p>
          </div>
          <div className="bg-white flex flex-col  gap-4 lg:gap-8  px-4 lg:px-8 py-4 flex-1 rounded-2xl">
            <div className=" lg:text-[3rem] text-[#FF88C6]">
              <BsFillPentagonFill />
            </div>
            <p className="text-sm text-[#4E4E4E] lg:text-[1.05rem]">
              Young professionals who don’t have a lot of money to invest nor an
              accredited investors will have opportunities to take equity at the
              early stage of their career, usually been the first to invest and
              almost guaranteed of return
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[4rem]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#212121] lg:text-[2rem] text-center lg:text-start font-medium">
              Case Study
            </h2>
            <p className="text-sm lg:text-base text-center lg:text-start">
              See what Service Incubators get, the maths behind Service Equity
              (SEEQ) and what the value of your share equity can be over time
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:w-[80%] gap-4">
            <div className=" bg-white rounded-3xl text-[1.2rem] text-[#212121] py-3 px-8 lg:text-center">
              Service Incubator Equity
            </div>
            <div className=" bg-white rounded-3xl text-[1.2rem] text-[#212121] py-3 px-8 lg:text-center">
              SEEQ Maths Equation
            </div>
            <div className="basis-[40%] bg-white rounded-3xl text-[1.2rem] text-[#212121] py-3 pl-8  lg:px-4 lg:text-center">
              Value of my Equity Over Time
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="border-none flex gap-4 text-sm lg:text-lg items-center underline underline-offset-4 font-semibold">
            <span>Become A Service Incubator</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncubationModel;

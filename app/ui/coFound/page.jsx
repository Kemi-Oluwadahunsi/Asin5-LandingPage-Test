import { FaArrowRight } from "react-icons/fa6";

const CoFound = () => {
  return (
    <div className="bg-[#F4F4F4] lg:px-[10rem] px-4 lg:py-[3rem] py-6 flex flex-col gap-8 lg:gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] lg:text-[4rem] text-[1.1rem] font-medium mx-auto">
          Co-found With Us
        </h1>
        <p className="lg:w-[71%] lg:text-base text-sm mx-auto">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[2rem] w-full">
        <div className="bg-white flex flex-col gap-4 px-4 lg:px-8 py-4 flex-1 rounded-2xl">
          <div className="flex items-center text-sm lg:text-base justify-center bg-black w-10 lgw-[4rem] h-10 lg:h-[4rem] rounded-full text-white">
            1
          </div>
          <h2 className="font-semibold lg:text-[1.4rem] text-[#212121]">
            We Ideate
          </h2>
          <p className="text-[#4E4E4E] text-sm lg:text-base">
            We internally generate concepts and ideas that help solve problems
            in our thesis areas, after which we proceed to develop a nano/micro
            MVP (usually having as low as 30 functions to as high as 100
            functions) of the product that we take to the market.
          </p>
        </div>

        <div className="bg-white flex flex-col gap-4 px-4 lg:px-8 py-4 flex-1 rounded-2xl">
          <div className="flex items-center text-sm lg:text-base justify-center bg-[#F47733] w-10 lg:w-[4rem] h-10 lg:h-[4rem] rounded-full text-white">
            2
          </div>
          <h2 className="font-semibold lg:text-[1.4rem] text-[#212121]">
            You Validate
          </h2>
          <p className="text-[#4E4E4E] text-sm lg:text-base">
            You join our 3 months inResidence program as a business expert to
            run the operations or as a technical expert to further the
            development and validate the idea with an average monthly revenue of
            $1k or 10,000 users and/or an MVP of at least 150 functions
          </p>
        </div>

        <div className="bg-white flex flex-col gap-4 px-4 lg:px-8 py-4 flex-1 rounded-2xl">
          <div className="flex items-center text-sm lg:text-base justify-center bg-[#FF78BF] w-10 lg:w-[4rem] h-10 lg:h-[4rem] rounded-full text-white">
            3
          </div>
          <h2 className="font-semibold lg:text-[1.4rem] text-[#212121]">
            You Co-own
          </h2>
          <p className="text-[#4E4E4E] text-sm lg:text-base ">
            After successful validation and demo day at the end of the EIR
            program, we move those with perfect fit to become co-founders of the
            product they validated as CEO & CTO, each owning 20% of the venture.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="border-none flex gap-4 text-lg items-center underline underline-offset-4 font-semibold">
          <span>Build your dream</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default CoFound
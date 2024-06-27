import Image from "next/image";
import ski from "../../../public/images/20.png"
import kreeka from "../../../public/images/26.png"
import krowb from "../../../public/images/21.png"
import wetaa from "../../../public/images/28.png"
import { FaArrowRight } from "react-icons/fa6";

const Equity = () => {
  return (
    <div className="bg-[#F4F4F4] px-[10rem] py-[3rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] text-[4rem] w-[90%] font-medium mx-auto">
          Equity jobs
        </h1>
        <p className="w-[71%] mx-auto">
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
      </div>

      <div className="flex justify-between gap-8">
        <div className="bg-white px-4 py-4 rounded-2xl flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={ski}
                alt="ski"
                title="brand image"
                width={150}
                height={120}
              />
            </div>
            <p className="text-sm">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
          </div>

          <h3 className="font-medium text-[1.2rem]">Chief Executive Officer</h3>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">LOCATION</p>
              <p className="font-medium">Abuja, Nigeria</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">INDUSTRY</p>
              <p className="font-medium">On-demand print</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">EQUITY</p>
              <p className="font-medium">1.2%</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">STIPEND</p>
              <p className="font-medium">NGN 200,000/mth </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">DEADLINE</p>
              <p className="font-medium">24th, January 2024</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">ROLE TYPE</p>
              <p className="font-medium">Full-time </p>
            </div>
          </div>

          <div className=" flex items-center mt-2">
            <button className=" bg-[#303030] px-8 py-3 rounded-[2rem] border-none text-white">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-white px-4 py-4 rounded-2xl flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={kreeka}
                alt="kreeka"
                title="brand image"
                width={150}
                height={120}
              />
            </div>
            <p className="text-sm">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
          </div>

          <h3 className="font-medium text-[1.2rem]">UX Strategist</h3>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">LOCATION</p>
              <p className="font-medium">Abuja, Nigeria</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">INDUSTRY</p>
              <p className="font-medium">E-commerce</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">EQUITY</p>
              <p className="font-medium">1.2%</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">STIPEND</p>
              <p className="font-medium">NGN 200,000/mth </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">DEADLINE</p>
              <p className="font-medium">24th, January 2024</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">ROLE TYPE</p>
              <p className="font-medium">Full-time </p>
            </div>
          </div>

          <div className=" flex items-center mt-2">
            <button className=" bg-[#303030] px-8 py-3 rounded-[2rem] border-none text-white">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-white px-4 py-4 rounded-2xl flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={krowb}
                alt="krowb"
                title="brand image"
                width={150}
                height={120}
              />
            </div>
            <p className="text-sm">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
          </div>

          <h3 className="font-medium text-[1.2rem]">
            CTO & Head of innovations
          </h3>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">LOCATION</p>
              <p className="font-medium">Abuja, Nigeria</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">INDUSTRY</p>
              <p className="font-medium">Fintech</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">EQUITY</p>
              <p className="font-medium">1.2%</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">STIPEND</p>
              <p className="font-medium">NGN 200,000/mth </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">DEADLINE</p>
              <p className="font-medium">24th, January 2024</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">ROLE TYPE</p>
              <p className="font-medium">Full-time </p>
            </div>
          </div>

          <div className=" flex items-center mt-2">
            <button className=" bg-[#303030] px-8 py-3 rounded-[2rem] border-none text-white">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-white px-4 py-4 rounded-2xl flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={wetaa}
                alt="Wetaa"
                title="brand image"
                width={150}
                height={120}
              />
            </div>
            <p className="text-sm">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
          </div>

          <h3 className="font-medium text-[1.2rem]">Backend Developer</h3>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">LOCATION</p>
              <p className="font-medium">Abuja, Nigeria</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">INDUSTRY</p>
              <p className="font-medium">Transportation</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">EQUITY</p>
              <p className="font-medium">1.2%</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">STIPEND</p>
              <p className="font-medium">NGN 200,000/mth </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E]">DEADLINE</p>
              <p className="font-medium">24th, January 2024</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#8E8E8E] place-self-end">ROLE TYPE</p>
              <p className="font-medium">Full-time </p>
            </div>
          </div>

          <div className=" flex items-center mt-2">
            <button className=" bg-[#303030] px-8 py-3 rounded-[2rem] border-none text-white">
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="border-none flex gap-4 text-lg items-center underline underline-offset-4 font-semibold">
          <span>See More Equity Jobs</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Equity;

import Image from "next/image";
import app from "../../../public/images/app.png";
import meeting from "../../../public/images/meeting.png";
import agreement from "../../../public/images/agreement.png";
import leftarrow from '../../../public/images/leftarrow.png'
import rightarrow from '../../../public/images/rightarrow.png'


const { FaArrowRight } = require("react-icons/fa");

const EntProgram = () => {
  return (
    <div className="bg-[#F4F4F4] px-[10rem] py-[3rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] text-[4rem] w-[90%] font-medium mx-auto">
          Join Our Entrepreneur In Residence (EIR) Program
        </h1>
        <p className="w-[71%] mx-auto">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
      </div>

      <div className="flex justify-between gap-[2rem] w-full">
        <div className="bg-white flex flex-col gap-4 px-4 py-4 flex-1 rounded-2xl">
          <div className="flex items-center justify-center bg-[#4E4E4E] w-[4rem] h-[4rem] rounded-full text-white">
            <Image src={app} alt="app" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-[1.4rem] text-[#212121]">
            Application and Selection
          </h2>

          <div className="flex text-[0.9em] text-[#4E4E4E] flex-col gap-2">
            <p className="">
              Begin your journey by completing our straightforward application
              form. Share insights into your entrepreneurial background,
              expertise, and your vision for supporting the success of our
              portfolio companies. Our dedicated selection committee, comprised
              of key stakeholders at SINC Partners, will carefully review your
              application.
            </p>
            <p>
              Our dedicated selection committee, comprised of key stakeholders
              at SINC Partners, will carefully review your application.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-4 px-4 py-4 flex-1 rounded-2xl">
          <div className="flex items-center justify-center bg-[#4E4E4E] w-[4rem] h-[4rem] rounded-full text-white">
            <Image src={meeting} alt="meeting" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-[1.4rem] text-[#212121]">
            Alignment Meeting and Proposal Submission
          </h2>
          <div className="flex text-[0.9em] text-[#4E4E4E] flex-col gap-2 ">
            <p className="">
              If your application stands out, we&apos;ll invite you to an
              alignment meeting. This is an opportunity to discuss the goals of
              our EIR program and explore how your expertise aligns with the
              needs of our portfolio companies.
            </p>
            <p>
              Following the alignment meeting, submit a formal proposal
              outlining your intended contributions and how you envision adding
              significant value to our portfolio companies.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-4 px-4 py-4 flex-1 rounded-2xl">
          <div className="flex items-center justify-center bg-[#4E4E4E] w-[4rem] h-[4rem] rounded-full text-white">
            <Image src={agreement} alt="agreement" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-[1.4rem] text-[#212121]">
            Negotiation and Agreement
          </h2>
          <div className="flex text-[0.9em] text-[#4E4E4E] flex-col gap-2">
            <p className="">
              Upon successful alignment and proposal review, we&apos;ll engage
              in discussions to finalize the terms of your EIR role. This
              includes the duration, expectations, and any compensation or
              equity arrangements.
            </p>
            <p>
              Once terms are agreed upon, we&apos;ll draft a formal agreement
              outlining the specifics of your EIR engagement, including
              reporting structures, responsibilities, and the support/resources
              provided by SINC Partners.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="border-none flex gap-4 text-lg items-center underline underline-offset-4 font-semibold">
          <span>Support the Future</span>
          <FaArrowRight />
        </button>
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="flex gap-[4rem]">
          <Image src={leftarrow} alt="leftarrow" title="circle arrow left" />
          <Image src={rightarrow} alt="rightarrow" title="circle arrow right" />
        </div>
      </div>
    </div>
  );
};

export default EntProgram;

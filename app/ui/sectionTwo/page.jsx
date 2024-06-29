
import { FaArrowRight } from "react-icons/fa6";

const SectionTwo = () => {
  return (
    <div className="bg-[#F4F4F4] flex flex-col gap-[3rem] px-2 lg:px-0 lg:gap-[5rem] items-center justify-center py-[3rem] lg:py-[5rem]">
      <div className="flex flex-col gap-4 lg:gap-8 bg-white lg:w-[80%] xl:w-[60%] p-4 rounded-2xl px-4 lg:px-8 xl:px-[3rem] py-4 lg:py-8 text-center">
        <p className="text-[#212121] text-medium text-sm lg:text-lg leading-7 lg:leading-9 w-[90%]">
          &quot;Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks&quot;
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm lg:text-base text-[#212121]">
            Daniel Izeghs Oratokhai
          </h3>
          <span className="text-[#4E4E4E] text-sm lg:text-base">
            Managing Partner at SINC Partners Ltd
          </span>
        </div>
      </div>

      <div className="lg:flex flex-col gap-[3rem] hidden">
        <h1 className="text-[#212121] text-center text-[3em] xl:text-[4em] leading-snug lg:w-[75%] xl:w-[70%] mx-auto">
          Network of builders helping startup scale
        </h1>

        <div className="xl:px-[10rem] px-[6rem] flex justify-between gap-8">
          <div className="bg-white px-[2rem] py-8 rounded-2xl flex flex-col h-[25rem] gap-4 w-[25rem] xl:w-[35rem] relative">
            <h2 className="font-semibold text-black text-[1.2em] xl:text-[1.5rem]">
              Work with Service Incubators to expedite your time-to-market
            </h2>
            <div className="text-[#4E4E4E] flex flex-col gap-4 xl:text-lg">
              <p>
                Collaborate with our meticulously chosen service partners, each
                with a vested interest, ensuring a shared commitment to success
                in the game of venture building.
              </p>
              <p className="font-semibold">
                For 7.5% equity, you get a product manager, product designer,
                frontend engineer, software engineer and growth marketer to
                build the MVP of your app or web application and validate it.
              </p>
            </div>

            <div className="absolute top-[87%]">
              <button className="border-none flex gap-4 text-lg items-center underline underline-offset-4 font-semibold">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="bg-white px-[2rem] py-8 rounded-2xl flex flex-col h-[25rem] gap-4 w-[25rem] xl:w-[35rem] relative">
            <h2 className="font-semibold text-black text-[1.2em] xl:text-[1.5rem]">
              Access funding after your mvp is validated
            </h2>
            <div className="text-[#4E4E4E] flex flex-col gap-4 xl:text-lg">
              <p>
                Startups that have built and validated their product can take
                advantage of the financial resources of the SINC Investors
                Network, elevating their potential for success in the venture
                capital landscape.
              </p>
              <p className="font-semibold">
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                months
              </p>
            </div>

            <div className=" absolute top-[87%]">
              <button className="border w-[20rem] flex gap-4 text-lg items-center underline underline-offset-4 font-semibold">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo
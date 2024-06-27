
const BuildCall = () => {
  return (
    <div className="bg-[#F4F4F4] px-[10rem] pt-[3rem] pb-[8rem] hidden lg:flex flex-col gap-[3rem]">
      <h1 className="text-[#212121] text-[4rem] w-[70%] font-medium mx-auto text-center">
        Let&apos;s build companies that help everyone succeed
      </h1>

      <div className="flex gap-8 items-center justify-center">
        <div>
          <button className=" px-[3rem] py-4 rounded-[2rem] border border-[#212121] text-[#212121] font-semibold">
            SINC With us
          </button>
        </div>

        <div>
          <button className=" bg-[#303030] px-12 py-4 rounded-[2rem] border-none text-white font-semibold">
            Apply to SIP 1.0
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuildCall
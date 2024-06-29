import data from "./data";
const AreaOfFocus = () => {
    const bgColorClasses = {
      1: "bg-black",
      2: "bg-[#F47733]",
      3: "bg-[#FF78BF]",
      4: "bg-[#20888F]",
      5: "bg-[#FF78BF]",
    };

  return (
    <div className="bg-[#F4F4F4] lg:px-[3rem] xl:px-[5rem] px-4 lg:py-[3rem] py-8 flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] text-[1.1rem] font-semibold lg:font-normal lg:text-[3em] xl:text-[4rem] leading-snug w-[70%] mx-auto">
          Our Area of Focus
        </h1>
        <p className="lg:w-[70%] xl:w-[50%] text-sm lg:text-base mx-auto">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row w-full">
        {data.map((item) => (
          <div key={item.id} className={`p-4 ${bgColorClasses[item.id]}`}>
            <div className=" text-white text-base xl:text-[1.2rem] xl:px-4 px-2 flex flex-col justify-between h-[4rem] xl:w-[14rem] lg:w-[10em] lg:h-[6em] xl:h-[8rem] lg:gap-2">
              <span>{item.num}</span>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaOfFocus;

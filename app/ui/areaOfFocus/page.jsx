import data from "./data";
const AreaOfFocus = () => {
    const bgColorClasses = {
      1: "bg-black",
      2: "bg-[#F47733]",
      3: "bg-[#FF78BF]",
      4: "bg-[#20888F]",
      5: "bg-[#FF78BF]", // changed to bg-purple-500 since pink is already used for id 3
    };

  return (
    <div className="bg-[#F4F4F4] px-[10rem] py-[3rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] text-[4rem] leading-snug w-[70%] mx-auto">
          Our Area of Focus
        </h1>
        <p className="w-[50%] mx-auto">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
      </div>

      <div className="flex w-full">
        {data.map((item) => (
          <div key={item.id} className={`p-4 ${bgColorClasses[item.id]}`}>
            <div className=" text-white text-[1.2rem] px-4 flex flex-col justify-between w-[14rem] h-[8rem]">
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

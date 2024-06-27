
const Concept = () => {
  return (
    <div className="bg-[#F4F4F4] lg:px-[10rem] px-4 lg:py-[3rem] py-8 flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] lg:text-[4rem] text-[1.1rem] font-medium leading-snug lg:w-[70%] mx-auto">
          Our Concept Innovations
        </h1>
        <p className="lg:w-[80%] text-sm lg:text-base mx-auto">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[4rem] w-full">
        <div className="bg-white flex flex-col gap-4 lg:gap-8 px-4 lg:px-8 py-4 flex-1 rounded-2xl text-center">
          <h2 className="font-semibold lg:text-[1.4rem] text-[#212121]">Service Incubator</h2>
          <p className="text-[#4E4E4E] lg:text-[0.9rem] text-[0.8rem]">
            A service-for-shares model of incubating pre-product startups and
            early-stage companies by building their early stage product and MVP
          </p>
        </div>

        <div className="bg-white flex flex-col gap-4 lg:gap-8 px-4 lg:px-8 py-4 flex-1 rounded-2xl text-center">
          <h2 className="font-semibold lg:text-[1.4rem] text-[#212121]">Virtualting</h2>
          <p className="text-[#4E4E4E] lg:text-[0.9rem] text-[0.8rem]">
            A resource share model that allows companies share the time of
            resources (employees, consultants, technical advisers or
            influencers) while also splitting the service cost of the resource
          </p>
        </div>
        <div className="bg-white flex flex-col gap-4 lg:gap-8 px-4 lg:px-8 py-4 flex-1 rounded-2xl text-center">
          <h2 className="font-semibold lg:text-[1.4rem] text-[#212121]">Diiming</h2>
          <p className="text-[#4E4E4E] lg:text-[0.9rem] text-[0.8rem]">
            A progressive investment model that allows you to put aside income
            (disposable or non-disposable) as investment over a period towards
            an investment or spend of your choice 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Concept
import Image from "next/image";

const InvestorsNetwork = () => {
  return (
    <div className="bg-[#F4F4F4] lg:px-[8rem] py-8 px-[1rem] lg:py-[3rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] lg:text-[4rem] text-[1.1rem] font-medium mx-auto">
          SINC Investors Network
        </h1>
        <div className="flex flex-col text-sm lg:text-base gap-4">
          <p className="lg:w-[80%] mx-auto">
            Our deals are structured not just to take in investments but to
            onboard owners passionate about our solutions. Our portfolio
            companies are valued at $50k at start, with these low valuation, you
            are guaranteed at least 2x-5x, usually been the first to invest.
          </p>
          <p className="lg:w-[80%] mx-auto">
            <span className="font-bold">Disclaimer:</span> These deal flows is a
            statement of our projections and may differ from stage to stage and
            from venture to venture and the guarantee is for deal 1, usually
            the first to invest
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:gap-[4rem] w-full">
        <div className="flex flex-col justify-between gap-[2rem] w-full">
          <h2 className="text-center lg:text-start text-[#212121] lg:text-[1.4rem]">
            <span className="font-semibold">
              Micro Angel Investors & Service incubators
            </span>{" "}
            (Invest from $500 & above)
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:border border-[#A4A4A4] border-l-0 border-t flex flex-col gap-4 pl-4 py-4 flex-1">
              <h3 className="font-semibold">Deal 1</h3>

              <div className=" text-sm flex flex-col gap-2">
                <p>
                  <span className="font-semibold">✓</span> Idea Stage:{" "}
                  <span className="font-medium">$5k for 5% Equity</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Expected Revenue at
                  This Stage: <span className="font-semibold">$0/mth</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Duration of Raise:{" "}
                  <span className="font-medium">1mth</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Who Can Invest:{" "}
                  <span className="font-medium">
                    People with Domain Expertise and Advisors
                  </span>
                </p>
                <p> </p>
              </div>
            </div>

            <div className="border-t border-b border-[#A4A4A4] flex flex-col gap-4 pl-4 py-4 flex-1">
              <h3 className="font-semibold">Deal 2</h3>
              <div className="text-sm flex flex-col gap-2">
                <p>
                  <span className="font-semibold">✓</span> Build Stage:{" "}
                  <span className="font-medium">
                    $25k worth of service for 10% Equity
                  </span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Expected Revenue at
                  This Stage: <span className="font-medium">$100+/mth</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Duration of Raise:{" "}
                  <span className="font-medium">1-3mths</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Who Can Invest:{" "}
                  <span className="font-medium">
                    Developers, Engineers, Growth Marketers
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:border border-[#A4A4A4]  border-r-0 border-l-0 lg:border-l flex flex-col gap-4 pl-4 py-4 flex-1">
              <h3 className="font-semibold">Deal 3</h3>
              <div className="text-sm flex flex-col gap-2">
                <p>
                  <span className="font-semibold">✓</span> Validation Stage:{" "}
                  <span className="font-medium">$50k for 5% Equity</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Expected Revenue at
                  This Stage: <span className="font-medium"> $1k+/mth</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Duration of Raise:{" "}
                  <span className="font-medium"> 3-6mth</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Who Can Invest:{" "}
                  <span className="font-medium">Everyone</span>
                </p>
              </div>
            </div>

            <div className="lg:border border-[#A4A4A4]  border-r-0 border-l-0 lg:border-l border-t border-b flex flex-col gap-4 pl-4 py-4 flex-1">
              <h3 className="font-semibold">Deal 4</h3>
              <div className="text-sm flex flex-col gap-2">
                <p>
                  <span className="font-semibold">✓</span> Traction Stage:{" "}
                  <span className="font-medium">
                    $125k worth of service for 5% Equity
                  </span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Expected Revenue at
                  This Stage: <span className="font-medium">$5k+/mth</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Duration of Raise:{" "}
                  <span className="font-medium"> 6-12mths</span>
                </p>

                <p>
                  <span className="font-semibold">✓</span> Who Can Invest:{" "}
                  <span className="font-medium">
                    Media, Influencers, Celebrity, Platform Owners{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-[2rem] w-full">
            <h2 className="text-center lg:text-start lg:text-[1.4rem] text-[#212121]">
              <span className="font-semibold ">
                Angel Investors & Venture Capital
              </span>{" "}
              (Invest from $50k and above)
            </h2>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:border border-[#A4A4A4] border-l-0 border-t  flex flex-col gap-4 pl-4 py-4 flex-1">
                <h3 className="font-semibold">Deal 5</h3>

                <div className=" text-sm flex flex-col gap-2">
                  <p>
                    <span className="font-semibold">✓</span> Pre-seed Stage:{" "}
                    <span className="font-medium"> $1.5M for 10% Equity</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Expected Revenue at
                    This Stage: <span className="font-semibold">$50k+/mth</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Duration of Raise:{" "}
                    <span className="font-medium">6-18mths</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Who Can Invest:{" "}
                    <span className="font-medium">
                      Angel Investors, VCs, PE, Institutions
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-t border-b border-[#A4A4A4] flex flex-col gap-4 pl-4 py-4 flex-1">
                <h3 className="font-semibold">Deal 6</h3>
                <div className="text-sm flex flex-col gap-2">
                  <p>
                    <span className="font-semibold">✓</span> Seed Stage:{" "}
                    <span className="font-medium">$7.5M for 20% Equity</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Expected Revenue at
                    This Stage: <span className="font-medium">$250k+/mth</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Duration of Raise:{" "}
                    <span className="font-medium"> 12-24mths</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Who Can Invest:{" "}
                    <span className="font-medium">VCs, PE, Institutions</span>
                  </p>
                </div>
              </div>

              <div className="lg:border border-[#A4A4A4]  border-r-0 border-l-0 flex flex-col gap-4 pl-4 py-4 flex-1">
                <h3 className="font-semibold">Deal 7</h3>
                <div className="text-sm flex flex-col gap-2">
                  <p>
                    <span className="font-semibold">✓</span> IPO Stage:{" "}
                    <span className="font-medium">$1.5B for 20% Equity</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Expected Revenue at
                    This Stage: <span className="font-medium"> $1M+/mth</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Duration of Raise:{" "}
                    <span className="font-medium"> 18-36mths</span>
                  </p>

                  <p>
                    <span className="font-semibold">✓</span> Who Can Invest:{" "}
                    <span className="font-medium">The Public</span>
                  </p>
                </div>
              </div>

              <div className="lg:border border-[#A4A4A4]  border-r-0 border-l-0 border-t border-b flex flex-col  gap-4 px-4 py-4 flex-1 ">
                <div className="bg-[#101010] flex flex-col h-full p-4 gap-8">
                  <h3 className="font-semibold text-white">
                    Work with Service Incubators (SINC) to expedite your
                    time to market
                  </h3>
                  <div className=" flex items-center ">
                    <button className=" bg-[#303030] px-6 py-3 rounded-[2rem] border-none text-white font-semibold">
                      Join SINC Network
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsNetwork;

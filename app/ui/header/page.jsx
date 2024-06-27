import Image from "next/image";
import Logo from "../../../public/images/Header/Logo.png";

const Header = () => {
  return (
    <>
      <header className="bg-[#F9F9F9] flex items-center px-[10rem] py-3">
        <nav className="flex justify-between w-full">
          <div className="basis-[50%] flex gap-8 justify-between items-center">
            <div className="flex">
              <Image src={Logo} alt="Logo" title="Logo" />
            </div>

            <ul className="flex basis-[80%] justify-between text-lg font-medium ">
              <li>About</li>
              <li>SIP</li>
              <li>Studio</li>
              <li>SEEQ</li>
              <li>Platforms</li>
              <li>Initiatives</li>
              <li>More</li>
            </ul>
          </div>

          <div className="flex justify-between items-center gap-8 text-white font-semibold">
            <button className=" bg-[#20888F] px-8 py-4 rounded-[2rem] border-none">
              SINC With us
            </button>
            <button className=" bg-black px-8 py-4 rounded-[2rem] border-none">
              Apply to SIP 1.0
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

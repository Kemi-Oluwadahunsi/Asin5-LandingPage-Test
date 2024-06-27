"use client";
import Image from "next/image";
import Logo from "../../../public/images/Header/Logo.png";
import { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="bg-[#F9F9F9] lg:flex items-center px-8 lg:px-[10rem] py-3">
        <nav className="flex justify-between w-full">
          <div className="lg:basis-[50%] flex gap-8 justify-between items-center w-full">
            <div className="flex">
              <Image src={Logo} alt="Logo" title="Logo" />
            </div>

            <ul className="hidden lg:flex basis-[80%] justify-between text-lg font-medium ">
              {[
                "About",
                "SIP",
                "Studio",
                "SEEQ",
                "Platforms",
                "Initiatives",
                "More",
              ].map((link) => (
                <li key={link} className={`cursor-pointer `}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-between items-center gap-8 text-white font-semibold">
            <button className=" bg-[#20888F] px-8 py-4 rounded-[2rem] border-none">
              SINC With us
            </button>
            <button className=" bg-black px-8 py-4 rounded-[2rem] border-none">
              Apply to SIP 1.0
            </button>
          </div>

          {/* mobile nav menu */}
          <div className="block text-center md:hidden">
            <button onClick={toggleMenu} className="text-[#5A6675] flex pt-3">
              {menuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden absolute h-[100dvh] pt-[4rem] pb-8 bg-[#212121] top-[12%] left-0 flex flex-col justify-between items-center z-[10000] w-full">
              <ul className="flex flex-col gap-8 justify-between text-white text-lg font-medium ">
                {[
                  "About",
                  "SIP",
                  "Studio",
                  "SEEQ",
                  "Platforms",
                  "Initiatives",
                  "More",
                ].map((link) => (
                  <li
                    key={link}
                    // className={`cursor-pointer ${
                    //   // activeLink === link ? "text-[#C82090]" : ""
                    // }`}
                  >
                    {link}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col justify-between items-center gap-8 text-white font-semibold">
                <button className=" bg-[#20888F] px-4 py-2 rounded-[2rem] border-none">
                  SINC With us
                </button>
                <button className=" bg-black px-4 py-2 rounded-[2rem] border-none">
                  Apply to SIP 1.0
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

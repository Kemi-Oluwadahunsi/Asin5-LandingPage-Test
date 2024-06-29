import Image from "next/image";
import chat from "../../../public/images/chat.png";
import trustedImage from "../../../public/images/trustedImage.png";
import logoWhite from "../../../public/images/logoWhite.png";
import facebookIcon from "../../../public/images/socials/facebookIcon.png";
import xIcon from "../../../public/images/socials/xIcon.png";
import instaIcon from "../../../public/images/socials/instaIcon.png";
import linkedinIcon from "../../../public/images/socials/linkedinIcon.png";
import smartIcon from "../../../public/images/socials/smartIcon.png";
import youtubeIcon from "../../../public/images/socials/youtubeIcon.png";
import imoIcon from "../../../public/images/socials/imoIcon.png";
import gasusImage from "../../../public/images/gasusImage.png";
import naijaflag from "../../../public/images/naijaflag.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212121] px-4 lg:pl-[4rem] xl:pl-[10rem] text-white">
        <div className="flex flex-col gap-[4rem] py-8">
          <div className="flex flex-col lg:w-[55%] xl:w-[45%]">
            <h1 className="font-semibold lg:text-[3rem] text-[2rem] xl:text-[5rem]">
              Newsletter
            </h1>
            <p className="leading-relaxed">
              Get the latest about SINC Partners, our startup Incubator program,
              Portfolio company offerings - straight into your inbox.
            </p>
          </div>

          <div className="relative flex justify-between border border-[#676767] rounded-[2rem] lg:w-[35%] pl-2 lg:pl-8 text-sm lg:text-base">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" placeholder:text-[#BABABA] py-2 lg:py-3 lg:basis-[80%] bg-transparent"
            />
            <div>
              <button className=" bg-white px-4 lg:px-8 py-2 lg:py-3 rounded-[2rem] border-none text-[#212121] font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row justify-between w-full border-t border-b border-[#E9E9E94D]">
          <div className="lg:basis-[100%] lg:gap-4 flex flex-col lg:flex-row">
            <div className="lg:basis-[20%] flex flex-col gap-8 lg:gap-4 xl:gap-6 pt-4 lg:pt-[3rem] lg:pb-8">
              <div>
                <Image src={logoWhite} alt="logo" title="White Logo" />
              </div>
              <p className="text-[#C9C9C9] text-sm lg:leading-[1.6] xl:leading-[2] font-light xl:w-[85%]">
                SINC Partners is a service incubation company connecting experts
                in product development and growth marketing willing to offer
                their services to amazing startups in exchange for minute equity
                (usually 0.5% to 2%)
              </p>
            </div>

            <div className="flex  pt-4 lg:pt-[3rem] pb-8">
              <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-2 xl:gap-[4rem]">
                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold"> Platforms</h2>

                  <ul className="text-[#C9C9C9] text-[0.95rem] lg:text-sm xl:text-[0.95rem] flex flex-col gap-3 lg:gap-2 xl:gap-3">
                    <li>Kofoundme</li>
                    <li>InResidency</li>
                    <li>Service Market </li>
                    <li>Founders School</li>
                    <li>Metty</li>
                    <li>Grantty</li>
                    <li>Boldtell</li>
                    <li>Chekwa</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold">Initiatives</h2>

                  <ul className="text-[#C9C9C9] text-[0.95rem] lg:text-sm xl:text-[0.95rem] flex flex-col gap-3 lg:gap-2 xl:gap-3">
                    <li>Jabi Plains</li>
                    <li>Local Pricing Initiative</li>
                    <li>Scholarship Program</li>
                    <li> SSMN Pricing</li>
                    <li>University STEM</li>
                    <li>University InResidency </li>
                    <li>1M Nigeria Products</li>
                    <li> Founders Festival</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold">About Us</h2>

                  <ul className="text-[#C9C9C9] text-[0.95rem] lg:text-sm xl:text-[0.95rem] flex flex-col gap-3 lg:gap-2 xl:gap-3">
                    <li>Who We Are</li>
                    <li>Our People</li>
                    <li>Concept Innovations</li>
                    <li>Our Process</li>
                    <li>Investors Network</li>
                    <li>CSR & Events</li>
                    <li>Career</li>
                    <li>Contact</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold"> More</h2>

                  <ul className="text-[#C9C9C9] text-[0.95rem] lg:text-sm xl:text-[0.95rem] flex flex-col gap-3 lg:gap-2 xl:gap-3">
                    <li>Services</li>
                    <li>Equity Jobs</li>
                    <li>EIR Program</li>
                    <li>Offers</li>
                    <li>Innovation News</li>
                    <li>FAQ</li>
                    <li>Blog & Resources</li>
                    <li>Press</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:border-l border-[#E9E9E94D] border-t lg:basis-[20%]">
              <div className="lg:pt-[3rem] pt-4 pl-8 lg:pl-4 xl:pl-8 flex flex-col gap-4 xl:gap-8">
                <h2 className="font-semibold">Locations</h2>
                <div className="lg:text-sm xl:text-base leading-[1.6]">
                  <p>Abuja, Nigeria</p>
                  <p>Lagos, Nigeria</p>
                  <p>Philadelphia, USA</p>
                </div>

                <div className="flex lg:pt-8 gap-8 lg:gap-4 xl:gap-8 w-full">
                  <div>
                    <Image
                      src={trustedImage}
                      alt="accreditedlogo"
                      title="accredited logo"
                      className="object-contain"
                    />
                  </div>

                  <div className="lg:pt-4 xl:pt-6">
                    <Image
                      src={chat}
                      alt="chat"
                      title="chat"
                      className="object-contain flex place-self-end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:pr-[3rem] xl:pr-[10rem]">
          <div className="flex flex-col justify-between gap-8 pt-4 lg:pt-[3rem] pb-4">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-8 xl:gap-[4rem] w-full">
              <p className=" text-xs xl:text-sm pt-2 text-center lg:text-start">
                Guaranteed 2x on your service or cash investment, usually been
                the first to invest.{" "}
                <span className="font-semibold pl-1">
                  {" "}
                  Get in early and SINC your guaranty!
                </span>
              </p>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <Image src={gasusImage} alt="gasusimage" title="gasus image" />
                <p className="text-xs text-center lg:text-start">
                  We are a business built on the{" "}
                  <br className="hidden lg:block" />
                  foundation of Christian values and belief
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 font-medium">
                <p className="text-sm xl:text-base text-center lg:text-start">
                  © 2023 SINC Partners Ltd. All rights reserved
                </p>{" "}
                <ul className="flex justify-center items-center gap-4">
                  <li className="underline underline-offset-4 decoration-white text-xs lg:text-base">
                    Privacy Policy
                  </li>
                  <li className="underline underline-offset-4 decoration-white text-xs lg:text-base">
                    Terms of Service
                  </li>
                  <li className="underline underline-offset-4 decoration-white text-xs lg:text-base">
                    Security
                  </li>
                </ul>

                <div className="flex gap-4 lg:gap-2 xl:gap-4 place-self-center lg:place-self-end">
                  <Image
                    src={facebookIcon}
                    alt="socialIcon"
                    title="social Icons"
                  />
                  <Image src={xIcon} alt="socialIcon" title="social Icons" />
                  <Image
                    src={instaIcon}
                    alt="socialIcon"
                    title="social Icons"
                  />
                  <Image
                    src={linkedinIcon}
                    alt="socialIcon"
                    title="social Icons"
                  />
                  <Image
                    src={smartIcon}
                    alt="socialIcon"
                    title="social Icons"
                  />
                  <Image
                    src={youtubeIcon}
                    alt="socialIcon"
                    title="social Icons"
                  />
                  <Image src={imoIcon} alt="socialIcon" title="social Icons" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pb-4">
            <span>Web In Nigeria</span>
            <Image src={naijaflag} alt="naijaFlag" title="The Nigerian Flag" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

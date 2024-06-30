

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import heroImage1 from "../../../public/images/heroImage1.png";
import heroImage from "../../../public/images/heroImage.png";
import heroImage3 from "../../../public/images/herores.png";
import herocenter from "../../../public/images/herocenter.png";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Hero = () => {
  const [activeDot, setActiveDot] = useState(0);
  const swiperRef = useRef(null);

  const handleDotClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  const sliderSettings = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    onSlideChange: (swiper) => setActiveDot(swiper.realIndex),
    onSwiper: (swiper) => (swiperRef.current = swiper),
  };

  return (
    <div className="relative">
      <Swiper {...sliderSettings} className="w-full" ref={swiperRef}>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row pb-[4rem] lg:pb-0">
            <div className="flex flex-col lg:basis-[55%]">
              <div className="xl:w-[75%] lg:w-[90%] px-4 lg:px-0 pt-[5rem] xl:pt-[5rem] lg:pt-[3rem] flex flex-col lg:gap-4 xl:gap-8 gap-8 mx-auto lg:pb-4 xl:pb-0">
                <div className="flex flex-col gap-2">
                  <h2 className="lg:font-semibold font-medium text-[1.1rem] leading-relaxed lg:text-[2em] xl:text-[2.5rem] text-[#212121]">
                    SINC Partners is a service incubation company{" "}
                  </h2>
                  <p className="text-[#4E4E4E] xl:text-[1.5em] lg:text-[1.2em] leading-7 lg:leading-10">
                    Connecting experts in product development and growth
                    marketing willing to offer their services to amazing
                    startups in exchange for minute equity (usually 0.5% to 2%).
                  </p>
                </div>
                <div>
                  <button className="bg-[#303030] py-3 lg:text-base lg:px-6 lg:py-3 text-[0.9rem] px-8 rounded-[2rem] border-none text-white font-semibold">
                    SINC With us
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:basis-[48%] hidden lg:block">
              <Image
                src={heroImage}
                alt="heroImage"
                title="people clapping hands"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row pb-[4rem] lg:pb-0">
            <div className="flex flex-col lg:basis-[55%]">
              <div className="xl:w-[75%] lg:w-[90%] px-4 lg:px-0 pt-[5rem] xl:pt-[5rem] lg:pt-[3rem] flex flex-col lg:gap-4 xl:gap-8 gap-8 mx-auto lg:pb-4 xl:pb-0">
                <div className="flex flex-col gap-2">
                  <h2 className="lg:font-semibold font-medium text-[1.1rem] leading-relaxed lg:text-[2em] xl:text-[2.5rem] text-[#212121]">
                    Come with an idea, leave with a company.
                  </h2>
                  <p className="text-[#4E4E4E] xl:text-[1.5em] lg:text-[1.2em] leading-7 lg:leading-10">
                    You, alongside seasoned service partners and investors,
                    expedite the growth and market entry of your startup.
                  </p>
                </div>
                <div>
                  <button className="bg-[#303030] py-3 lg:text-base lg:px-6 lg:py-3 text-[0.9rem] px-8 rounded-[2rem] border-none text-white font-semibold">
                    SINC With us
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:basis-[48%] hidden lg:block">
              <Image
                src={heroImage3}
                alt="heroImage"
                title="people clapping hands"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col lg:flex-row pb-[4rem] lg:pb-0">
            <div className="flex flex-col lg:basis-[55%]">
              <div className="xl:w-[75%] lg:w-[90%] px-4 lg:px-0 pt-[5rem] xl:pt-[5rem] lg:pt-[3rem] flex flex-col lg:gap-4 xl:gap-8 gap-8 mx-auto lg:pb-4 xl:pb-0">
                <div className="flex flex-col gap-2">
                  <h2 className="lg:font-semibold font-medium text-[1.1rem] leading-relaxed lg:text-[2em] xl:text-[2.5rem] text-[#212121]">
                    We are big on these 3 things;{" "}
                  </h2>
                  <div className="flex flex-col gap-2 text-[#4E4E4E] xl:text-[1.5em] lg:text-[1.2em]">
                    <p>✓ Service Incubation & Ecosystem Advocacy </p>
                    <p>✓ Building SAAS & Marketing Tech Platforms</p>
                    <p>✓ Institutional Innovations</p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#303030] py-3 lg:text-base lg:px-6 lg:py-3 text-[0.9rem] px-8 rounded-[2rem] border-none text-white font-semibold">
                    SINC With us
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-[48%] z-50 top-[20%] hidden lg:block">
              <Image
                src={herocenter}
                alt="herocenter"
                title="herocenter"
                width={"auto"}
                height={"auto"}
                className="object-contain"
              />
            </div>
            <div className="lg:basis-[48%] hidden lg:block">
              <Image
                src={heroImage1}
                alt="heroImage"
                title="people clapping hands"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-2 absolute top-[90%] left-[50%] transform -translate-x-1/2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full bg-[#D9D9D9] cursor-pointer flex items-center justify-center"
            onClick={() => handleDotClick(index)}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                activeDot === index ? "bg-[#5B5454]" : "bg-[#D9D9D9]"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div
        className="swiper-button-prev bg-[#212121]"
        style={{ color: "#fff", paddingLeft: "" }}
      ></div>
      <div
        className="swiper-button-next"
        style={{ color: "#fff", }}
      ></div>
    </div>
  );
};

export default Hero;

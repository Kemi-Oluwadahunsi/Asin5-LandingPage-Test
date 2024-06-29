"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ski from "../../../public/images/20.png";
import kreeka from "../../../public/images/26.png";
import krowb from "../../../public/images/21.png";
import wetaa from "../../../public/images/28.png";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Equity = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const jobDetails = [
    {
      image: ski,
      role: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "1.2%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
    {
      image: kreeka,
      role: "UX Strategist",
      location: "Abuja, Nigeria",
      industry: "E-commerce",
      equity: "1.2%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
    {
      image: krowb,
      role: "CTO & Head of innovations",
      location: "Abuja, Nigeria",
      industry: "Fintech",
      equity: "1.2%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
    {
      image: wetaa,
      role: "Backend Developer",
      location: "Abuja, Nigeria",
      industry: "Transportation",
      equity: "1.2%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
  ];

  const renderJobCard = (job, index) => (
    <div
      key={index}
      className="bg-white px-4 py-4 rounded-2xl flex flex-col gap-4 flex-1"
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Image
            src={job.image}
            alt={job.role}
            title="brand image"
            width={150}
            height={120}
          />
        </div>
        <p className="text-sm">
          This company is a SAAS Startup that builds AI copy generator...
        </p>
      </div>
      <h3 className="font-medium lg:text-base xl:text-[1.2em] text-[1.2rem]">{job.role}</h3>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#8E8E8E]">LOCATION</p>
          <p className="font-medium">{job.location}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#8E8E8E] place-self-end">INDUSTRY</p>
          <p className="font-medium">{job.industry}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#8E8E8E]">EQUITY</p>
          <p className="font-medium">{job.equity}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#8E8E8E] place-self-end">STIPEND</p>
          <p className="font-medium">{job.stipend}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#8E8E8E]">DEADLINE</p>
          <p className="font-medium">{job.deadline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[#8E8E8E] place-self-end">ROLE TYPE</p>
          <p className="font-medium">{job.roleType}</p>
        </div>
      </div>
      <div className="flex items-center mt-auto">
        <button className="bg-[#303030] px-8 py-3 rounded-[2rem] border-none text-white">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F4F4F4] lg:px-[3rem] xl:px-[5rem] px-8 py-4 lg:py-[3rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <h1 className="text-[#212121] lg:text-[3rem] xl:text-[4rem] text-[1.1rem] font-medium mx-auto">
          Equity jobs
        </h1>
        <p className="lg:w-[90%] xl:w-[71%] lg:text-base text-sm mx-auto">
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
      </div>

      {isMobile ? (
        <Slider {...settings}>
          {jobDetails.map((job, index) => (
            <div key={index}>{renderJobCard(job, index)}</div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-between gap-4 xl:gap-8">
          {jobDetails.map((job, index) => renderJobCard(job, index))}
        </div>
      )}

      <div className="flex items-center justify-center">
        <button className="border-none flex gap-4 lg:text-lg items-center underline underline-offset-4 font-semibold">
          <span>See More Equity Jobs</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Equity;

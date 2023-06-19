"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileData } from "./MobileData";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const MobileSlider = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent(current === MobileData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? MobileData.length - 1 : current - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="relative flex justify-center p-2 xl:p-4">
        <FaArrowCircleLeft
          size={50}
          className="absolute top-[50%] left-[16px] xl:left-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={prevSlide}
        />
        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-2/5 xl:ml-28 mx-auto">
            <Image
              src={MobileData[current].image}
              alt="/"
              width={360}
              height={640}
              // className="ml-28"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full xl:w-3/5 bg-palet-two-qua py-12 xl:py-24 px-2 xl:px-4 text-justify flex flex-col justify-center rounded-2xl xl:mx-4 xl:my-0 mt-10 xl:mt-0 xl:mr-28">
            <h4 className="text-xl xl:text-3xl font-bold p-2 xl:p-4 text-palet-two-pri text-center">
              {MobileData[current].title}
            </h4>
            <p className="text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">
              {MobileData[current].description}
            </p>
            <div className="flex flex-col items-center mt-auto">
              <p className="text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">
                You can learn more about this at:
              </p>
              <div className="text-lg xl:text-xl p-2 xl:p-4 text-palet-two-qui text-center">
                <Link href={MobileData[current].url} target="_blank">
                  {MobileData[current].url}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FaArrowCircleRight
          size={50}
          className="absolute top-[50%] right-[16px] xl:right-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default MobileSlider;

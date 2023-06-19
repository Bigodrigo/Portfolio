"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WebData } from "./WebData";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const WebSlider = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent(current === WebData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? WebData.length - 1 : current - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="relative flex justify-center p-2 xl:p-4">
        <FaArrowCircleLeft
          size={50}
          className="absolute top-[50%] left-[16px] xl:left-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={prevSlide}
        />
        <div className="flex flex-col items-center px-10 xl:px-24">
        <Image
            src={WebData[current].image}
            alt="/"
            width={960}
            height={540}
        />
        <div className=" bg-palet-two-qua m-4 xl:m-8 p-2 xl:p-4 text-justify flex flex-col justify-center rounded-2xl">
        <h4 className="text-xl xl:text-3xl font-bold p-2 xl:p-4 text-palet-two-pri text-center">
            {WebData[current].title}
            </h4>
            <p className="text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">
            {WebData[current].description}
            </p>
            <div className="flex flex-col items-center mt-auto">
            <p className="text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">You can visit this project at:</p>
            <div className="text-lg xl:text-xl p-1 xl:p-2 text-palet-two-qui text-center">
                <Link href={WebData[current].deploy} target="_blank">
                {WebData[current].deploy}
                </Link>
            </div>
            </div>
            <div className="flex flex-col items-center mt-auto">
            <p className="text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">You can learn more about this at:</p>
            <div className="text-lg xl:text-xl p-1 xl:p-2 text-palet-two-qui text-center">
                <Link href={WebData[current].git} target="_blank">
                {WebData[current].git}
                </Link>
            </div>
            </div>
        </div>
        </div>
        <FaArrowCircleRight
          size={50}
          className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
  
  
};

export default WebSlider;

"use client"

import React from "react";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";
import { WebData } from "./WebData";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const WebSlider = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === WebData.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? WebData.length - 1 : prevCurrent - 1
    );
  };

  return (
    <div className="w-full xl:max-w-[1240px] mx-auto">
      <div className="w-full relative flex justify-center p-2 xl:p-4">
        <FaArrowCircleLeft
          size={50}
          className="absolute top-[40%] left-[16px] xl:left-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={prevSlide}
        />
        <div className="w-full flex flex-col items-center sm:px-10 xl:px-24">
          <div className="mx-auto h-auto my-auto">
            <VideoPlayer
              key={current} // Add key prop
              src={WebData[current].video}
              poster={WebData[current].thumb}
            />
          </div>
          <div className="w-full  bg-palet-two-qua m-4 lg:m-8 p-2 lg:p-4 text-justify flex flex-col justify-center rounded-2xl">
            <h4 className="text-sm xs:text-xl lg:text-2xl xl:text-3xl font-bold p-2 xl:p-4 text-palet-two-pri text-center">
              {WebData[current].title}
            </h4>
            <p className="text-xs xs:text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">
              {WebData[current].description}
            </p>
            <div className="flex flex-col items-center mt-auto">
              <p className="text-xs xs:text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">
                Você pode visitar o projeto em:
              </p>
              <div className="text-xs xs:text-lg xl:text-xl p-1 xl:p-2 text-palet-two-qui text-center">
                <Link href={WebData[current].deploy} target="_blank">
                  {WebData[current].deploy}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center mt-auto">
              <p className="text-xs xs:text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri mx-2 xs:mx-auto">
                Você pode entender melhor sobre o projeto em:
              </p>
              <div className="text-xs xs:text-lg xl:text-xl p-1 xl:p-2 text-palet-two-qui text-center">
                <Link href={WebData[current].git} target="_blank">
                  {WebData[current].git}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FaArrowCircleRight
          size={50}
          className="absolute top-[40%] right-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
  
  
};

export default WebSlider;

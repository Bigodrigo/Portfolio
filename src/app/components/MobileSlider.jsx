"use client"

import React from "react";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";
import { MobileData } from "./MobileData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const MobileSlider = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === MobileData.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? MobileData.length - 1 : prevCurrent - 1
    );
  };

  return (
    <div className="w-full xl:max-w-[1240px] mx-auto">
      <div className="w-full relative flex justify-center p-2 xl:p-4">
        <FaArrowCircleLeft
          size={50}
          className="absolute top-[60%] sm:top-[50%] left-[16px] xl:left-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={prevSlide}
        />
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="w-4/5 lg:w-2/5 lg:ml-14 xl:ml-28 mx-auto h-auto my-auto">
            <VideoPlayer
              key={current} // Add key prop
              src={MobileData[current].video}
              poster={MobileData[current].thumb}
            />
          </div>
          <div className="h-auto lg:h-full w-full xs:w-full xs:mx-auto lg:w-3/5 bg-palet-two-qua py-4 lg:py-24 px-2 lg:px-4 text-justify flex flex-col justify-center rounded-2xl lg:mx-4 lg:my-0 mt-10 lg:mt-0 lg:mr-14 xl:mr-28">
            <h4 className="text-sm xs:text-xl lg:text-2xl xl:text-3xl font-bold p-2 xl:p-4 text-palet-two-pri text-center">
              {MobileData[current].title}
            </h4>
            <p className="text-xs xs:text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri">
              {MobileData[current].description}
            </p>
            <div className="flex flex-col items-center mt-auto">
              <p className="text-xs xs:text-lg xl:text-xl p-2 xl:p-4 text-palet-two-pri mx-2 xs:mx-auto">
                Você pode entender melhor sobre o projeto em:
              </p>
              <div className="text-xs xs:text-lg xl:text-xl p-1 xl:p-2 text-palet-two-qui text-center">
                <Link href={MobileData[current].git} target="_blank">
                  {MobileData[current].git}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FaArrowCircleRight
          size={50}
          className="absolute top-[60%] sm:top-[50%] right-[16px] xl:right-[30px] text-white/70 cursor-pointer select-none z-[2] text-palet-two-sec"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default MobileSlider;
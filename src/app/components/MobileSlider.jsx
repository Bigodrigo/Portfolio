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
      <div className="relative flex justify-center p-4">
        <FaArrowCircleLeft
          size={50}
          className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
          onClick={prevSlide}
        />
        <Image
          src={MobileData[current].image}
          alt="/"
          width={360}
          height={640}
          className="ml-28"
          style={{ objectFit: "cover" }}
        />
        <div className="w-900 h-640 bg-palet-two-qui ml-10 mr-28 py-12">
            <h4 className="text-3xl font-bold p-4 text-palet-two-pri text-center">{MobileData[current].title}</h4>
            <p className="text-xl  p-4 text-palet-two-pri ">{MobileData[current].description}</p>
            <p className="text-xl  p-4 text-palet-two-pri ">You can learn more about this at: </p>
            <div className="text-xl p-4 text-palet-two-pri text-center">
                <Link href={MobileData[current].url} target="_blank">
                    {MobileData[current].url}
                </Link>
            </div>
        </div>
        <FaArrowCircleRight
          size={50}
          className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default MobileSlider;

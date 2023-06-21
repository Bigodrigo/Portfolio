import React from "react";
import Image from 'next/image'
import Link from "next/link";
import profilePic from '../assets/profile.jpg'

const Hero = ({ heading, message, desktopClass, mobileClass }) => {
  return (
    <div className={`flex items-center justify-center h-screen ${mobileClass} lg:${desktopClass}`}>
      {/* {Overlay} */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between content-between max-w-screen-lg mx-auto">
        <div className="flex items-center">
          <div className="h-64 w-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <div className="rounded-full">
              <Image src={profilePic} alt="" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        <div className="p-5 text-palet-two-qua mt-5 lg:mt-0 lg:ml-10">
          <h2 className="text-3xl xl:text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-lg xl:text-xl">{message}</p>
          <Link href="/about" className="px-8 py-2 border text-xl xl:text-3xl">
            Sobre Mim
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Hero
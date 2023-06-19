import React from "react";
import Image from 'next/image'
import profilePic from '../assets/profile.jpg'

const Hero = ({ heading, message, desktopClass, mobileClass }) => {
    return (
      <div className={`flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img ${desktopClass} sm:${mobileClass}`}>
        {/* {Overlay} */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between content-between max-w-screen-lg mx-auto">
          <div className="flex items-center">
            <div className="h-64 w-64 sm:w-96 sm:h-96 rounded-full overflow-hidden">
              <div className="rounded-full">
                <Image src={profilePic} alt="" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="p-5 text-palet-two-qua mt-5 sm:mt-0 sm:ml-10">
            <h2 className="text-3xl xl:text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-lg xl:text-xl">{message}</p>
            <button className="px-8 py-2 border text-xl xl:text-3xl">About Me</button>
          </div>
        </div>
      </div>
      )
    }


export default Hero
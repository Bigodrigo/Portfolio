import React from "react";
import Image from 'next/image'
import profilePic from '../assets/profile.jpg'

const Hero = ({heading, message}) => {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
          {/* {Overlay} */}
          <div className="flex justify-between content-between max-w-screen-lg mx-auto">
            <div className="flex items-center">
              <div className="h-64 w-64 rounded-full overflow-hidden">
                <div className="rounded-full">
                  <Image
                    src={profilePic}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="p-5 text-palet-two-qua ml-10">
              <h2 className="text-5xl font-bold">{heading}</h2>
              <p className="py-5 text-xl">{message}</p>
              <button className="px-8 py-2 border">About Me</button>
            </div>
          </div>
        </div>
      )
    }


export default Hero
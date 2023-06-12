import React from "react";
import Image from 'next/image';
import mobileImg1 from '../assets/Saude-App.gif';
import mobileImg2 from '../assets/App.gif';
import webImg1 from '../assets/home.png';
import webImg2 from '../assets/card.png';

const Projects = () => {
    return (
        <div className="flex flex-col items-center bg-palet-two-sec p-4 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-palet-two-qua">Projects</h2>
          <div className="my-4 bg-palet-two-ter p-4 w-full rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Mobile App Projects</h3>
            <div className="flex gap-4 justify-center">
              <div className="w-450 h-800">
                <Image src={mobileImg1} alt="" width={450} height={800} />
              </div>
              <div className="w-450 h-800">
                <Image src={mobileImg2} alt="" width={450} height={800} />
              </div>
            </div>
          </div>
          <div className="my-4 bg-palet-two-ter p-4 w-full rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Website Projects</h3>
            <div className="flex flex-col gap-4">
              <div className="w-1280 h-720">
                <Image src={webImg1} alt="" width={1280} height={720} />
              </div>
              <div className="w-1280 h-720">
                <Image src={webImg2} alt="" width={1280} height={720} />
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Projects;
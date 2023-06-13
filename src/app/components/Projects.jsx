import React from "react";
import MobileSlider from "./MobileSlider";
import WebSlider from "./WebSlider";

const Projects = () => {
  return (
    <div id='projects' className="flex flex-col items-center bg-palet-two-sec p-4 rounded-3xl">
      <h2 className="text-3xl font-bold mb-4 text-palet-two-qua">Projects</h2>
      <div className="my-4 bg-palet-two-ter p-4 w-full rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Mobile App Projects</h3>
        <div className="flex gap-4 justify-center">
          <MobileSlider />
        </div>
      </div>
      <div className="my-4 bg-palet-two-ter p-4 w-full rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Website Projects</h3>
        <div className="flex gap-4 justify-center">
          <WebSlider />
        </div>
      </div>
    </div>
  );
};

export default Projects;

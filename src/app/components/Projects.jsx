import React from "react";
import MobileSlider from "./MobileSlider";
import WebSlider from "./WebSlider";

const Projects = ({ desktopClass, mobileClass }) => {
  return (
    <div
      id="projects"
      className={`flex flex-col items-center w-full mx-1 xs:mx-auto bg-palet-two-sec ${mobileClass} sm:${desktopClass} p-2 sm:p-4 xl:p-10 rounded-3xl`}
    >
      <h2 className="text-xl xl:text-3xl font-bold mb-0 xl:mb-4 text-palet-two-qua">Projetos</h2>
      <div className="my-1 lg:my-4 bg-palet-two-ter p-2 xl:p-4 w-full rounded-2xl">
        <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4">Projetos Mobile</h3>
        <div className="flex gap-4 justify-center">
          <MobileSlider />
        </div>
      </div>
      <div className="my-1 lg:my-4 bg-palet-two-ter p-2 xl:p-4 w-full rounded-2xl">
        <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4">Projetos de Website</h3>
        <div className="flex gap-4 justify-center">
          <WebSlider />
        </div>
      </div>
    </div>
  );
};

export default Projects;

"use client";

import Projects from "./projects";

const Works = () => {
  return (
    <div className="w-full bg-black px-2 md:px-20">
      {/* Introduction */}
      <div className="flex flex-col md:flex-row mx-auto bg-black mt-20 border-b-2 border-white/30 pt-20 md:pt-40 pb-10 md:pb-20">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-6xl text-white font-medium">works</h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-white text-sm md:text-base">
            This portfolio showcases a selection of my work, representing the range and diversity of projects I've undertaken. While some pieces are not displayed due to client confidentiality, I believe these examples capture the breadth of what I can bring to each project.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-black py-20">
        <Projects />
      </div>
    </div>
  );
};

export default Works;

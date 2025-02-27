"use client";

import { useParams } from "next/navigation";
import portfolioProjects from "@/data/projects";
import { notFound } from "next/navigation";

const WorkPage = () => {
  const params = useParams(); // Get the params dynamically
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen bg-black px-2 md:px-20 pt-40 pb-16">
      {/* Project Title */}
      <h1 className="text-white text-start text-2xl md:text-4xl font-bold">
        {project.title}
      </h1>

      {/* Problem & Solution */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 pb-20 border-b-2 border-white/30">
        {/* Problem */}
        <div className="w-full md:w-1/2">
          <h2 className="text-purple-500 text-base md:text-xl font-semibold">problem</h2>
          <p className="text-white text-xs md:text-base mt-2 w-[80%] md:w-[60%]">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="w-full md:w-1/2">
          <h2 className="text-purple-500 text-base md:text-xl font-semibold">solution</h2>
          <p className="text-white text-xs md:text-base mt-2 w-[80%] md:w-[60%]">{project.solution}</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} Image ${index + 1}`}
            className="w-full md:w-[80%] mx-auto h-auto md:max-h-[1200px] rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;

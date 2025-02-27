"use client";

import { useParams } from "next/navigation";
import portfolioProjects from "@/data/projects";
import { notFound } from "next/navigation";

const WorkPage = () => {
  const params = useParams(); // Get the params dynamically
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen bg-black px-8 md:px-20 py-16">
      {/* Project Title */}
      <h1 className="text-white text-start text-4xl md:text-6xl font-bold">
        {project.title}
      </h1>

      {/* Problem & Solution */}
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Problem */}
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-2">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-2xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-2">{project.solution}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;

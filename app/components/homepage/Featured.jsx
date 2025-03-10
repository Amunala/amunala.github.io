import React from "react";
import FeaturedCard from "./FeaturedCard";
import portfolioProjects from "@/data/projects";

export default function Featured() {
  // Manually select featured projects
  const featuredProjects = portfolioProjects.filter((project) =>
    ["cbc-materials", "asamo-insurance-profile", "church-tithe-cards", "moving-minds-posters"].includes(project.slug)
  );

  return (
    <div className="w-full bg-black px-2 md:px-20">
      {/* Introduction */}
      <div className="flex flex-col mx-auto bg-black mt-20 pt-20 md:pt-40 pb-10 md:pb-20">
        <div className="flex gap-4 items-end">
          <h2 className="text-3xl md:text-6xl text-white font-medium">
            featured work.
          </h2>
          <a
            href="/work"
            className="text-white text-sm md:text-base pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-full after:h-[1px] after:bg-white after:opacity-30 hover:after:opacity-100 hover:after:transition-opacity"
          >
            more works +
          </a>
        </div>
      </div>

      {/* Featured Work Cards - Alternating Layout */}
      <div className="flex flex-col gap-24 md:gap-32 pb-20">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`w-full flex ${
              index % 2 === 0 
                ? "justify-start" 
                : "justify-end"
            }`}
          >
            <FeaturedCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
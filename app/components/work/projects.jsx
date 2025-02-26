"use client";


import portfolioProjects from "@/data/projects";
import ProjectCard from "./projectCard";


const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolioProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
export default Projects;

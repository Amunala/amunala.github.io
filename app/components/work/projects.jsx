"use client";

import { motion } from "framer-motion";
import portfolioProjects from "@/data/projects";
import ProjectCard from "./projectCard";

const Projects = () => {
  // Container variant for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 
      }
    }
  };

  // Individual card animation variant
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {portfolioProjects.map((project) => (
        <motion.div 
          key={project.id}
          variants={cardVariants}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
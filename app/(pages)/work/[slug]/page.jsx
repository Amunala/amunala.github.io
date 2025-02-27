"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import portfolioProjects from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/homepage/Navbar";
import CollaborationCTA from "@/app/components/collaboration/collaboration";

const WorkPage = () => {
  const params = useParams();
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black px-2 md:px-20 pt-40 pb-16">
        {/* Project Title */}
        <motion.h1 
          className="text-white text-start text-2xl md:text-4xl font-bold"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          {project.title}
        </motion.h1>

        {/* Problem & Solution */}
        <div className="mt-8 flex flex-col md:flex-row gap-8 pb-20 border-b-2 border-white/30">
          {/* Problem */}
          <div className="w-full md:w-1/2">
            <motion.h2 
              className="text-purple-500 text-base md:text-xl font-semibold"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              problem
            </motion.h2>
            <motion.p 
              className="text-white text-xs md:text-base mt-2 w-[80%] md:w-[60%]"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              {project.problem}
            </motion.p>
          </div>

          {/* Solution */}
          <div className="w-full md:w-1/2">
            <motion.h2 
              className="text-purple-500 text-base md:text-xl font-semibold"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              solution
            </motion.h2>
            <motion.p 
              className="text-white text-xs md:text-base mt-2 w-[80%] md:w-[60%]"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              {project.solution}
            </motion.p>
          </div>
        </div>

        {/* Image Grid with Animation */}
        <div className="mt-12 grid grid-cols-1 gap-8">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.8 + index * 0.5, // Start after text animations
                ease: "easeOut" 
              }}
            >
              <img
                src={image}
                alt={`${project.title} Image ${index + 1}`}
                className="w-full md:w-[80%] mx-auto h-auto md:max-h-[1200px] rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkPage;
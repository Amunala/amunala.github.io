"use client";

import { motion } from "framer-motion";
import Projects from "./projects";

const Works = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full bg-black px-2 md:px-20 ">
      {/* Introduction */}
      <div className="flex flex-col md:flex-row mx-auto bg-black mt-20 border-b-2 border-white/30 pt-20 md:pt-40 pb-10 md:pb-20">
        <div className="w-full md:w-1/2">
          <motion.h2 
            className="text-3xl md:text-6xl text-white font-medium"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            works
          </motion.h2>
        </div>
        <div className="w-full md:w-1/2">
          <motion.p 
            className="text-white text-sm md:text-base"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            This portfolio showcases a selection of my work, representing the range and diversity of projects I've undertaken. While some pieces are not displayed due to client confidentiality, I believe these examples capture the breadth of what I can bring to each project.
          </motion.p>
        </div>
      </div>

      {/* Projects */}
      <motion.div 
        className="bg-black py-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={2} 
      >
        <Projects />
      </motion.div>
    </div>
  );
};

export default Works;
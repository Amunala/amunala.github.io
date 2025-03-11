"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeaturedCard from "./FeaturedCard";
import portfolioProjects from "@/data/projects";

export default function Featured() {
  // Create a ref for the entire component
  const componentRef = useRef(null);
  const isInView = useInView(componentRef, {
    once: true,
    amount: 0.1, // Trigger when 10% of the component is visible
    margin: "0px 0px -100px 0px" // Negative margin to trigger earlier
  });

  // Animation variants for the heading
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Container variant for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2 // Slight delay after the heading animation
      }
    }
  };

  // Individual card animation variant
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Manually select featured projects
  const featuredProjects = portfolioProjects.filter((project) =>
    ["cbc-materials", "asamo-insurance-profile", "church-tithe-cards", "moving-minds-posters"].includes(project.slug)
  );

  return (
    <div ref={componentRef} className="w-full bg-black px-2 md:px-20">
      {/* Introduction */}
      <div className="flex flex-col mx-auto bg-black pt-20 md:pt-40 pb-10 md:pb-20">
        <motion.div
          className="flex gap-4 items-end"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-6xl text-white font-medium">
            featured work.
          </h2>
          <a
            href="/work"
            className="text-white text-sm md:text-base pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-full after:h-[1px] after:bg-white after:opacity-30 hover:after:opacity-100 hover:after:transition-opacity"
          >
            more works +
          </a>
        </motion.div>
      </div>

      {/* Featured Work Cards - Alternating Layout */}
      <motion.div
        className="flex flex-col gap-24 md:gap-32 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`w-full flex ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
            variants={cardVariants}
          >
            <FeaturedCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
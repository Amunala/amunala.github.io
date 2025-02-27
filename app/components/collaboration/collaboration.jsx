"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CollaborationCTA = () => {
  // Text animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.3,
        ease: "easeOut"
      }
    })
  };

  // Staggered letter animation for the main heading
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // Text content
  const headingText = "Let's build something together";

  return (
    <div className="relative">
      {/* 
        This is our fixed CTA component that will be revealed
        It has a lower z-index and is absolutely positioned
      */}
      <div 
        className="w-full bg-black py-28 md:py-40 px-4 md:px-20 absolute top-0 left-0"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animated heading with each letter animating separately */}
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8"
              variants={sentence}
            >
              {headingText.split("").map((char, index) => (
                <motion.span key={index} variants={letter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.p 
              className="text-purple-400 text-base md:text-xl max-w-2xl mx-auto mb-12"
              variants={fadeUp}
              custom={1}
            >
              Ready to transform your vision into reality? I blend creativity and strategy to craft designs that resonate with your audience and elevate your brand.
            </motion.p>
            
            <motion.div
              variants={fadeUp}
              custom={2}
            >
              <Link href="/contact">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Start a Project
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Optional decorative elements */}
          <motion.div 
            className="flex justify-center gap-4 mt-16"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-8 bg-purple-400 rounded-full"></div>
            <div className="h-1 w-4 bg-purple-200 rounded-full"></div>
          </motion.div>
        </div>
      </div>
      
      {/* This is an empty div that provides the height necessary for scrolling */}
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default CollaborationCTA;
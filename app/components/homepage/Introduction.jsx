"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

const Introduction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      data-background="light"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white px-4"
    >
      {/* Left Side Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-8 bottom-32 text-sm text-gray-500 writing-mode-vertical transform rotate-180"
        style={{ writingMode: 'vertical-rl' }}
      >
        Based in Lagos, Nigeria
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-7xl font-light tracking-tight">
              emmanuel
              <span className="text-purple-600">.</span>
            </h1>
            <p className="text-xl text-gray-600 tracking-wide">
              crafting digital experiences with purpose
            </p>
          </div>

          {/* Roles/Skills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8 text-gray-500"
          >
            <span>Developer</span>
            <span>•</span>
            <span>Designer</span>
            <span>•</span>
            <span>Creator</span>
          </motion.div>

          {/* Featured Project Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <p className="text-sm text-gray-400 mb-3">FEATURED PROJECT</p>
            <div className="bg-gray-50 p-6 rounded-lg inline-block">
              <h3 className="text-lg font-medium mb-2">Project Name</h3>
              <p className="text-gray-600 max-w-md">
                Brief description of your featured project. What makes it special and what problems does it solve?
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side Content */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-8 bottom-32 text-sm text-gray-500"
      >
        Available for freelance work
      </motion.div>

      {/* Interactive Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            rgba(147, 51, 234, 0.3) 0%,
            rgba(147, 51, 234, 0) 50%
          )`,
        }}
      />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDownCircle size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Introduction;
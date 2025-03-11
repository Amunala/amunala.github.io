"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Research & Consulting",
        description: "Transforming ideas into meaningful solutions through in-depth research and strategic consulting. From understanding your audience to refining product experiences, I help shape data-driven decisions that drive impact. If additional expertise is needed, I connect with the right specialists to ensure success.",
        subcategories: ["User Experience Research", "Market Research", "Customer Research", "User Stories", "Product Ideation", "Best Practice Review"]
      },
      {
        id: 2,
        title: "UI & UX",
        description: "Designing intuitive and visually compelling digital experiences that balance aesthetics with functionality. From concept to execution, I create seamless user interactions through wireframing, prototyping, and user-centric design strategies.",
        subcategories: ["Graphic Design", "Web Design", "Wireframing", "Prototyping", "Interaction Design", "Brand Identity"]
      },
      {
        id: 3,
        title: "Branding",
        description: "Developing distinctive brand identities that tell a story and leave a lasting impression. Whether crafting logos, defining brand strategy, or shaping a cohesive visual language, I ensure every element aligns with your unique vision.",
        subcategories: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Messaging", "Typography", "Color Theory"]
      }
      
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const componentRef = useRef(null);
  const isInView = useInView(componentRef, { once: true, amount: 0.1 });

  return (
    <div ref={componentRef} className="w-full bg-white px-4 md:px-20 py-20 md:py-32 min-h-[80vh]">
      {/* Section Heading */}
      <motion.div
        className="flex gap-4 items-end mb-16 md:mb-24"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
        }}
      >
        <h2 className="text-base md:text-xl text-black font-medium">
          services.
        </h2>
      </motion.div>

      {/* Services and Categories Container */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Service (Left Side) */}
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
          }}
        >
          <div className="pb-6 border-b border-black/30">
            <h4 className="text-3xl md:text-6xl text-black font-medium mb-2">{selectedService.title}</h4>
            <p className="text-gray-800">{selectedService.description}</p>
          </div>
          
          {/* Service Selector */}
          <div className="mt-6 flex space-x-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 text-sm font-medium text-black border border-black/30 rounded-lg transition-all 
                ${selectedService.id === service.id ? "bg-purple-700" : "hover:bg-purple-500"}`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[2px] bg-black mx-6"></div>

        {/* Categories (Right Side) */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="space-y-8">
            <motion.div className="pb-6 border-b border-black/30">
              <ul className="grid grid-cols-1 gap-2">
                {selectedService.subcategories.map((subcat, index) => (
                  <li key={index} className="text-base md:text-xl text-black">{subcat}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

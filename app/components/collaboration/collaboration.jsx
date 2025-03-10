"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const CollaborationCTA = () => {
  const [smileys, setSmileys] = useState([]);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const animationStarted = useRef(false);
  
  // Constant size for all smileys
  const SMILEY_SIZE = 60;
  
  // Set up the Intersection Observer to detect when component is in view
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          setIsInView(true);
          animationStarted.current = true;
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "100px"
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);
  
  // Initialize and animate smileys only when component is in view
  useEffect(() => {
    // Immediately show smileys if in development mode
    if (process.env.NODE_ENV === "development") {
      setIsInView(true);
      animationStarted.current = true;
    }
    
    if (!isInView || !containerRef.current) return;
    
    const containerHeight = containerRef.current.clientHeight;
    const containerWidth = containerRef.current.clientWidth;
    
    // Create an array to track the height of the pile at each x position
    const pileHeights = Array(Math.ceil(containerWidth)).fill(0);
    
    // Create 20 smileys with random positions but same size
    const newSmileys = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * (containerWidth - SMILEY_SIZE), // Random x position
      y: containerHeight * 0.5 - Math.random() * 100, // Start at middle of container with variation
      rotation: Math.random() * 360, // Random initial rotation
      size: SMILEY_SIZE, // Same size for all smileys
      speed: 1 + Math.random() * 2, // Random falling speed
      settled: false,
      finalY: null, // Will be calculated during animation
    }));
    
    setSmileys(newSmileys);
    
    let animationFrameId;
    const animate = () => {
      setSmileys(prevSmileys => {
        if (prevSmileys.length === 0) return prevSmileys;
        
        return prevSmileys.map(smiley => {
          // If already settled, don't move
          if (smiley.settled) return smiley;
          
          const newY = smiley.y + smiley.speed;
          
          // Calculate the x index for the pile array
          const xIndex = Math.floor(smiley.x);
          if (xIndex < 0 || xIndex >= pileHeights.length) {
            return smiley; // Skip this iteration if index is out of bounds
          }
          
          // Check if smiley has reached the bottom or the top of the pile
          const pileTop = containerHeight - pileHeights[xIndex] - SMILEY_SIZE;
          
          if (newY >= pileTop) {
            // Update the pile height at this x position
            const smileyXRange = Math.ceil(SMILEY_SIZE);
            for (let i = Math.max(0, xIndex - Math.floor(smileyXRange/2)); 
                 i < Math.min(pileHeights.length, xIndex + Math.floor(smileyXRange/2)); 
                 i++) {
              pileHeights[i] += Math.ceil(SMILEY_SIZE * 0.4);
            }
            
            return { 
              ...smiley, 
              y: pileTop, 
              settled: true, 
              rotation: Math.random() * 20 - 10 // Slight random rotation when settled
            };
          }
          
          // Continue falling with slight x movement and rotation
          return { 
            ...smiley, 
            y: newY,
            x: smiley.x + (Math.random() - 0.5) * 0.5, // Slight horizontal movement
            rotation: smiley.rotation + (Math.random() - 0.5) * 2, // Slight rotation
          };
        });
      });
      
      // Continue animation as long as there are smileys that haven't settled
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView]);
  
  // Fallback to ensure smileys appear
  useEffect(() => {
    // Force animation after 1 second if nothing happened yet
    const timer = setTimeout(() => {
      if (smileys.length === 0) {
        setIsInView(true);
        animationStarted.current = true;
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [smileys.length]);
  
  return (
    <div 
      className="px-2 md:px-20 bg-black relative overflow-hidden"
      ref={containerRef}
      style={{ minHeight: "300px" }}
    >
      {/* Falling Smileys as background - lower z-index */}
      {smileys.map(smiley => (
        <div
          key={smiley.id}
          style={{
            position: 'absolute',
            left: `${smiley.x}px`,
            top: `${smiley.y}px`,
            transform: `rotate(${smiley.rotation}deg)`,
            width: `${SMILEY_SIZE}px`,
            height: `${SMILEY_SIZE}px`,
            transition: smiley.settled ? 'transform 0.5s ease-out' : 'none',
            zIndex: 1, // Lower z-index so text appears above
          }}
        >
          <img 
            src="/logo/smiley.webp" 
            alt="Smiley" 
            className="w-full h-full object-contain opacity-80" // Added slight transparency
          />
        </div>
      ))}
      
      {/* Text and hand on top - higher z-index */}
      <div className="border-t-2 border-white/30 pt-20 md:pt-40 pb-16 relative z-10">
        <div className="relative">
          <div className="flex items-center gap-2">
            <p className="text-2xl md:text-5xl font-semibold text-white">
              Let's build
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl md:text-5xl font-semibold text-white">
              something cool
            </p>
            <img src="/hand.svg" alt="Document Icon" className="w-10 h-10 md:w-20 md:h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCTA;
"use client";
import { useEffect, useState } from "react";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen md:h-[80vh] w-full bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-5 -top-20 -left-20"></div>
      <div className="absolute w-40 h-40 rounded-full bg-purple-500  bottom-10 right-10"></div>
      
      {/* Main content container */}
      <div className="h-full w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        {/* Professional title with animation */}
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-black text-sm tracking-widest mb-2 font-light">GRAPHIC DESIGNER</p>
        </div>
        
        {/* Name with animation */}
        <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black tracking-tighter mb-4">
            <span className="inline-block">Emanuel</span>
            <span className="inline-block ml-4 relative">
              Amunala
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500"></span>
            </span>
          </h1>
        </div>
        
        {/* Tagline with animation */}
        <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-purple-500 text-xl md:text-2xl mb-6 font-light">CREATING VISUAL EXPERIENCES THAT MATTER</p>
        </div>
        
        {/* Location info with animation */}
        <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-black text-sm mb-12">Based in <span className="font-medium">Nairobi</span> • Available for freelance projects</p>
        </div>
        
        {/* Scroll indicator with animation */}
        <div className={`flex items-center transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="w-8 h-px bg-purple-500 mr-4"></div>
          <p className="text-black text-sm">SCROLL TO EXPLORE</p>
        </div>
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-500 "></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-purple-500 "></div>
    </section>
  );
};

export default Introduction;
"use client";
import { useState } from "react";
import Link from "next/link";

const FeaturedCard = ({ title, description, imageUrl, slug, tags }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div className="w-full md:w-[70%] h-auto flex flex-col gap-4">
      <Link href={`/work/${slug}`} className="block w-full h-[80vh] overflow-hidden shadow-lg">
        <div
          className="w-full h-full relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Floating 'View Work' text following cursor */}
          {hovered && (
            <div
              className="absolute text-white text-xs md:text-sm font-medium bg-gray-800/80 px-3 py-1 rounded-md shadow-lg pointer-events-none transition-transform duration-75"
              style={{
                top: cursorPos.y,
                left: cursorPos.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              View Work
            </div>
          )}
        </div>
      </Link>

      {/* Content Below Image */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-base md:text-xl">{title}</h3>
        <p className="text-white text-xs md:text-sm">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs md:text-sm text-purple-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
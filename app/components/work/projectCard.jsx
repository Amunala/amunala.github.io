"use client";
import { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ title, description, imageUrl, tags, slug }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg relative group">
      {/* Clickable Image */}
      <Link href={`/work/${slug}`} className="block">
        <div
          className="w-full h-[400px] md:h-[500px] relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
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

      {/* Project Details */}
      <div className="py-6">
        <h3 className="text-white text-lg md:text-2xl font-semibold">{title}</h3>
        <p className="text-white text-xs md:text-sm mt-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs md:text-sm text-purple-500 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

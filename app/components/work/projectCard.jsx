"use client";

const ProjectCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      {/* Project Image */}
      <div className="w-full h-[500px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="py-6">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <p className="text-white text-sm mt-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-white/50 py-1"
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

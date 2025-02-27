"use client";

import Link from "next/link";

const CollaborationCTA = () => {
  return (
    <div className="px-2 md:px-20 bg-black relative">
      <div className="border-t-2 border-white/30 pt-40 pb-16">
        <div className="">
          <div className="flex flex-col items-centr text-centr mb-12">
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
              Let's build
            </p>
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
              something cool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCTA;

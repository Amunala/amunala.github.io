"use client";

import Link from "next/link";

const CollaborationCTA = () => {
  return (
    <div className="px-2 md:px-20 bg-black relative">
      <div className="border-t-2 border-white/30 pt-40 pb-16">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-5xl  font-semibold text-white">
              Let's build
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-5xl  font-semibold text-white">
              something cool
            </p>
            <img src="/hand.svg" alt="Document Icon" className="w-8 h-8 md:w-20 md:h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCTA;

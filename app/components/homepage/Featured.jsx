import React from "react";

export default function Featured() {
  return (
    <div className="w-full bg-black px-2 md:px-20 h-screen">
      {/* Introduction */}
      <div className="flex flex-col md:flex-row mx-auto bg-black mt-20 pt-20 md:pt-40 pb-10 md:pb-20">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-end">
          <h2 className="text-3xl md:text-6xl text-white font-medium">
            featured work.
          </h2>
          <a
            href="/works"
            className="text-white text-sm md:text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-full after:h-[1px] after:bg-white after:opacity-0 hover:after:opacity-30 hover:after:transition-opacity"
          >
            more works +
          </a>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

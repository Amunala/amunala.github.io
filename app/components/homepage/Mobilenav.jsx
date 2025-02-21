"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["home", "work", "about", "contact"];

  return (
    <div className="md:hidden">
      {/* Hamburger Menu / Close Icon */}
      <button onClick={toggleMenu} className="text-black z-50">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Animated Fullscreen Dropdown */}
      <div 
        className={`fixed inset-0 bg-black text-white flex flex-col justify-start items-start px-8 pt-24 space-y-8 z-40 transition-transform duration-700 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close button inside dropdown */}
        <button onClick={closeMenu} className="absolute top-4 right-4 text-white">
          <X size={28} />
        </button>

        {/* Menu Links with Symmetrical Staggered Animation */}
        {navItems.map((item, index) => {
          const route = item === "home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = pathname === route;

          return (
            <Link
              key={item}
              href={route}
              onClick={closeMenu}
              className={`text-3xl tracking-wider transition-all duration-700 transform ${
                isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
              } ${
                isOpen 
                  ? "translate-x-0 opacity-100" 
                  : "-translate-x-16 opacity-0"
              } transition-all duration-700 ease-out ${
                index === 0 ? "delay-300" 
                : index === 1 ? "delay-500"
                : index === 2 ? "delay-700"
                : "delay-900"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
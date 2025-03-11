"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ContactPopup from "../contact/ContactPop";

export default function BlackMobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["home", "work", "about"];

  return (
    <div className="md:hidden">
      {/* Hamburger Menu / Close Icon */}
      <button onClick={toggleMenu} className="text-white z-50">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Animated Fullscreen Dropdown */}
      {isOpen && !isContactOpen && (
        <div 
          className="fixed inset-0 bg-black text-white flex flex-col justify-start items-start px-8 pt-24 space-y-8 z-40 transition-transform duration-700 ease-in-out transform translate-y-0"
        >
        {/* Close button inside dropdown */}
        <button onClick={closeMenu} className="absolute top-4 right-4 text-black">
          <X size={28} />
        </button>

        {navItems.map((item) => {
            const route = item === "home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === route;

            return (
              <Link
                key={item}
                href={route}
                onClick={closeMenu}
                className={`text-3xl tracking-wider transition-all duration-700 transform ${
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                {item}
              </Link>
            );
          })}

          {/* Contact Button */}
          <button
            onClick={() => {
              setIsContactOpen(true);
              closeMenu(); // Close mobile menu
            }}
            className="text-3xl tracking-wider opacity-50 hover:opacity-100"
          >
            contact
          </button>
        </div>
      )}

      {/* Contact Popup */}
      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </div>
  );
}
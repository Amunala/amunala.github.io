"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BlackMobileNavbar from "./BlackMobilenav";
import ContactPopup from "../contact/ContactPop";


export default function BlackNavbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container mx-auto flex justify-between items-center px-4 h-20">
        {/* Left: Logo and Name */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/logo/blacklogo.webp"
            alt="Amunala Logo"
            width={30}
            height={30}
          />
          <span className="text-base tracking-wide text-white">
            <span className="group-hover:hidden transition-all duration-500 ease-in-out">
              e.
            </span>
            <span className="hidden group-hover:inline transition-all duration-500 ease-in-out">
              emmanuel
            </span>{" "}
            amunala
          </span>
        </Link>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex space-x-8 text-base text-white">
          {["Work", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={() => setIsContactOpen(true)}
            className="relative group text-white"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        {/* Mobile Navbar */}
        <BlackMobileNavbar />
      </div>

      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </nav>
  );
}

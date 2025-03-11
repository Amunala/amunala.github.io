"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MobileNavbar from "./Mobilenav";
import ContactPopup from "../contact/ContactPop";


export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 h-20">
        {/* Left: Logo and Name */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/logo/blacklogo.webp"
            alt="Amunala Logo"
            width={30}
            height={30}
          />
          <span className="text-base tracking-wide text-black">
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
        <div className="hidden md:flex space-x-8 text-base text-black">
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
            className="relative group text-black"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        {/* Mobile Navbar */}
        <MobileNavbar />
      </div>

      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </nav>
  );
}

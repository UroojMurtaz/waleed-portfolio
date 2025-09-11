// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // clean icons for hamburger/close

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-20 bg-black/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Waleed Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <span
            className="ml-3 text-2xl md:text-3xl font-bold tracking-[1px]
              bg-gradient-to-r from-[#00bcd4] to-[#b3e5fc]
              bg-clip-text text-transparent
              [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]"
          >
            Waleed Shahid
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {items.map((it) => (
            <ScrollLink
              key={it.id}
              to={it.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              className="cursor-pointer text-white hover:text-gray-400 transition"
              activeClass="text-blue-400 font-semibold"
            >
              {it.label}
            </ScrollLink>
          ))}
          <a
            href="/assets/CV.pdf"
            download="Waleed_Shahid_CV.pdf"
            className="text-white hover:text-gray-400 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6">
          {items.map((it) => (
            <ScrollLink
              key={it.id}
              to={it.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={() => setMenuOpen(false)} // close after click
              className="cursor-pointer text-white hover:text-blue-400 transition text-lg"
              activeClass="text-blue-400 font-semibold"
            >
              {it.label}
            </ScrollLink>
          ))}
          <a
            href="/assets/CV.pdf"
            download="Waleed_Shahid_CV.pdf"
            className="text-white hover:text-blue-400 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

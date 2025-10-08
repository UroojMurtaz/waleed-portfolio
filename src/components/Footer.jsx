import React from "react";

function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 py-10 px-6 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between  gap-8 text-center">
        {/* Contact Section */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-blue-400 uppercase tracking-wide font-semibold text-lg mb-3">
            Contact Me
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:waleedshahid43@gmail.com"
                className="hover:text-blue-300 transition"
              >
                waleedshahid43@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+923180499968"
                className="hover:text-blue-300 transition"
              >
                +92 318 0499968
              </a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-blue-400 uppercase tracking-wide font-semibold text-lg mb-3">
            Address
          </h3>
          <p className="text-sm leading-relaxed">Islamabad, Pakistan</p>
        </div>

        {/* Follow Section */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-blue-400 uppercase tracking-wide font-semibold text-lg mb-3">
            Follow Me
          </h3>
          <div className="flex justify-center  gap-4 text-sm">
            <a
              href="https://linkedin.com/in/waleed-shahid-a24a27156"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition"
            >
              LinkedIn
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://github.com/waleed3298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-gray-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-400">Waleed Shahid</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

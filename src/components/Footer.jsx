import React from 'react';

function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-8 text-left">
        
        {/* Contact */}
        <div className="min-w-[200px] flex-1">
          <h3 className="text-blue-400 uppercase tracking-wide font-semibold text-lg mb-3">
            Contact Me
          </h3>
          <p className="text-gray-300 text-sm">Email: waleedshahid43@gmail.com</p>
          <p className="text-gray-300 text-sm">Phone: +923180499968</p>
        </div>

        {/* Address */}
        <div className="min-w-[200px] flex-1">
          <h3 className="text-blue-400 uppercase tracking-wide font-semibold text-lg mb-3">
            Address
          </h3>
          <p className="text-gray-300 text-sm">Islamabad, Pakistan</p>
        </div>

        {/* Follow */}
        <div className="min-w-[200px] flex-1">
          <h3 className="text-blue-400 uppercase tracking-wide font-semibold text-lg mb-3">
            Follow Me
          </h3>
          <p className="text-gray-300 text-sm">
            <a
              href="https://linkedin.com/in/waleed-shahid-a24a27156"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/waleed3298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-white/10 pt-4 text-gray-400 text-xs">
        <p>&copy; 2025 Waleed Shahid. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

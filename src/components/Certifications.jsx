import React from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const certifications = [
  {
    name: 'Azure Administrator Associate',
    code: 'AZ-104',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    name: 'Azure Developer Associate',
    code: 'AZ-204',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    name: 'Power Platform Developer Associate',
    code: 'PL-400',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  {
    name: 'Azure Solutions Architect Expert',
    code: 'AZ-305',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
  },
  {
    name: 'Power Platform Solution Architect Expert',
    code: 'PL-600',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
  },
];

function Certifications() {
  return (
    <Element 
      name="certifications" 
      className="relative md:pt-10 pb-4 bg-[url('https://images.unsplash.com/photo-1600585154526-990d71ebb6ed?fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center flex justify-center items-center text-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1a1a]/90 z-0"></div>

      <motion.div
        className="relative z-10 p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">CERTIFICATIONS</h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-10 md:px-0 px-4">
          Recognitions and certifications that highlight my expertise in development, architecture design and devops.
        </p>

        <div className="flex flex-col items-center gap-12">
          {/* First row (3 certs) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-w-6xl mx-auto mdLpx-0 px-4">
            {certifications.slice(0, 3).map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-white/10 p-4 rounded-lg transition-transform duration-200 hover:-translate-y-1"
              >
                <img src={cert.image} alt={cert.name} className="w-16 h-16 object-contain" />
                <div className="flex flex-col text-left">
                  <span className="text-blue-500 font-bold text-base">{cert.code}</span>
                  <span className="text-white font-semibold text-sm">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second row (2 certs) */}
          <div className="flex justify-center gap-12 flex-wrap">
            {certifications.slice(3).map((cert, index) => (
              <div 
                key={index + 3} 
                className="flex items-center gap-4 bg-white/10 p-4 rounded-lg transition-transform duration-200 hover:-translate-y-1"
              >
                <img src={cert.image} alt={cert.name} className="w-16 h-16 object-contain" />
                <div className="flex flex-col text-left">
                  <span className="text-blue-500 font-bold text-base">{cert.code}</span>
                  <span className="text-white font-semibold text-sm">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Element>
  );
}

export default Certifications;

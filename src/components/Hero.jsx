import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <Element
      name="hero"
      className="relative h-screen flex justify-center items-center text-center bg-[url('/assets/portfolio_image.jpg')] bg-cover bg-center overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-4xl text-white mb-3">
          Full Stack Developer
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Waleed Shahid
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
          I build scalable apps that don’t just work — they perform. From .NET
          to Python, React to ML, I turn complex problems into sleek,
          production-ready solutions.
        </p>

        <ScrollLink
          key="projects"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
          className="inline-block"
          activeClass="font-bold text-blue-500"
        >
          <button className="bg-white text-black px-6 py-3 rounded-full text-base font-medium hover:bg-gray-200 transition">
            See My Work
          </button>
        </ScrollLink>
      </motion.div>
    </Element>
  );
}

export default Hero;

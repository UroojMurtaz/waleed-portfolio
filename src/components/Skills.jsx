import React, { useState } from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Javascript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Blazor.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg' },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
      { name: 'ASP.NET Core', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'FastAPI', image: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Azure', image: '/assets/Azure.png' },
      { name: 'AWS', image: '/assets/aws.png' },
      { name: 'GCP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    ],
  },
  {
    title: 'Workflow Automation',
    skills: [
      { name: 'Power Automate', image: '/assets/PA.png' },
      { name: 'Databricks', image: '/assets/db.png' },
    ],
  },
];

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === skillGroups.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? skillGroups.length - 1 : prev - 1));
  };

  return (
    <Element 
      name="skills" 
      className="relative mt-16 mb-20 bg-[url('https://images.unsplash.com/photo-1600585154526-990d71ebb6ed?fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center flex justify-center items-center text-center"
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">SKILLS</h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-10 md:px-0 px-4">
          A showcase of my technical proficiencies across languages, frameworks, and databases.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center md:max-w-7xl mx-auto md:px-6">
          <button 
            className="absolute left-0 bg-black/20 text-white text-2xl px-3 py-2 rounded-full hover:bg-white/40 transition"
            onClick={prevSlide}
          >
            &lt;
          </button>

          <div className="flex flex-col items-center w-full px-10">
            <h3 className="text-2xl font-semibold text-blue-400 uppercase tracking-wide mb-8">
              {skillGroups[currentSlide]?.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {skillGroups[currentSlide].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center gap-3 bg-gray-100 p-4 rounded-lg w-64 h-40 shadow hover:-translate-y-1 transition"
                >
                  <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain" />
                  <span className="text-base font-semibold text-black">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute right-0 bg-black/20 text-white text-2xl px-3 py-2 rounded-full hover:bg-white/40 transition"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </motion.div>
    </Element>
  );
}

export default Skills;
``

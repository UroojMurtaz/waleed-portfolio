import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { skillGroups } from "./Skills";

const projectTechMap = {
  "Pipeline Integrity System": [
    "C#",
    "Angular",
    "ASP.NET Core",
    "SQL",
    "Azure",
  ],
  "Psychometric Evaluations": ["C#", "Angular", "ASP.NET Core", "SQL", "AWS"],
  "Healthcare Insurance Suite": [
    "C#",
    "Blazor.NET",
    "ASP.NET Core",
    "SQL",
    "Azure",
  ],
  "Medical Claims RCM": ["C#", "React", "ASP.NET Core", "MongoDB", "GCP"],
  "Real Estate Platform": ["Python", "React", "Django", "PostgreSQL"],
  "Smart Shopping Extension": ["Javascript", "Python"],
  "Inventory Management System": [
    "C#",
    "React",
    "ASP.NET Core",
    "PostgreSQL",
    "GCP",
  ],
  "Automated BI Dashboards": ["Power Automate"],
};

// Combine all skills into a single dictionary for logo lookup
const skillLogos = [
  ...skillGroups[0].skills,
  ...skillGroups[1].skills,
  ...skillGroups[2].skills,
  ...skillGroups[3].skills,
  ...skillGroups[4].skills,
  ...skillGroups[5].skills,
].reduce((acc, skill) => {
  acc[skill.name] = skill.image;
  return acc;
}, {});

// Projects with **full original descriptions**
const projects = [
  {
    name: "Pipeline Integrity System",
    description:
      "Implemented cognitive integrity management system to process geographical information system data for oil and gas pipelines. It included detecting erosion, dents, and failures in pipelines identified through cpig devices.",
    image: "/assets/OBS.png",
  },
  {
    name: "Psychometric Evaluations",
    description:
      "Implemented a system for evaluating candidates before hiring through psychometric assessments created by professional psychologists, including 360-degree feedback and employee engagement surveys.",
    image: "/assets/sacs.jpg",
  },
  {
    name: "Healthcare Insurance Suite",
    description:
      "Developed a web application for insurance agencies/agents to manage products, leads, sales, and finances in a unified platform.",
    image: "/assets/AMS.jpg",
  },
  {
    name: "Medical Claims RCM",
    description:
      "Implemented a system for revenue cycle management to simplify medical billing processes across multiple departments, including appeals, arbitration, and litigation.",
    image: "/assets/rcm.jpg",
  },
  {
    name: "Real Estate Platform",
    description:
      "Developed a platform where sellers can list properties and buyers can connect via in-app chat. Integrated property price predictions with 94% accuracy.",
    image: "/assets/realestate.png",
  },
  {
    name: "Smart Shopping Extension",
    description:
      "Developed a browser extension that scrapes data from websites like eBay, Walmart, Target, and more to find discounted prices for items in the user’s cart.",
    image: "/assets/cart.png",
  },
  {
    name: "Inventory Management System",
    description:
      "Created an inventory management system for tracking sales, stock updates, and reporting low inventory to management, integrated with Power BI dashboards.",
    image: "/assets/inventory.png",
  },
  {
    name: "Automated BI Dashboards",
    description:
      "Built a Power Automate flow that exported Microsoft Planner data into Azure storage, connected to Power BI for real-time dashboard updates.",
    image: "/assets/workflow.png",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Element
      name="projects"
      className="relative bg-[url('https://images.unsplash.com/photo-1600585154526-990d71ebb6ed?fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center text-center py-20"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a1a1a]/90 z-0"></div>

      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          PROJECTS
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-12 md:px-0 px-4">
          Explore my latest development projects that showcase my skills and
          creativity.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-w-6xl mx-auto md:px-0 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 text-white rounded-lg shadow-lg flex flex-col overflow-hidden transition hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold truncate mb-2 ">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3 mb-2 text-ju4stify px-2 leading-6">
                  {project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-400 text-center hover:text-blue-200 text-sm font-medium underline mb-3"
                >
                  Read More
                </button>

                {/* Tech logos */}
                <div className="flex justify-end gap-3 border-t border-white/10 pt-3 mt-auto">
                  {projectTechMap[project.name]?.map((tech, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={skillLogos[tech]}
                        alt={`${tech} logo`}
                        className="w-6 h-6 object-contain transition-transform duration-200 group-hover:scale-125"
                      />
                      {/* Tooltip */}
                      <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-3">{selectedProject.name}</h2>
            <p className="text-sm text-gray-300 mb-4">
              {selectedProject.description}
            </p>

            {/* Tech stack inside modal */}
            <div className="flex flex-wrap justify-start gap-3 border-t border-white/10 pt-3">
              {projectTechMap[selectedProject.name]?.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded"
                >
                  <img
                    src={skillLogos[tech]}
                    alt={tech}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Element>
  );
}

export default Projects;

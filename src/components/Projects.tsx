"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Smart Tourist Travel Advisor App (CeyloGuider)",
      description: "CeyloGuider is a smart tourist travel advisor mobile application developed as a university project to help foreign tourists travel safely and conveniently in Sri Lanka. The app provides vehicle recommendations, travel package suggestions, cultural etiquette guidance, seasonal travel advice, and map-based tourist location support in one platform. The system was developed using Flutter, Firebase, OpenStreetMap (OSM), and Figma, demonstrating how technology can improve tourism experiences and make travel smarter and more convenient for visitors.",
      image: "/ceylo-guider.png",
      objectFit: "contain",
      tags: ["Flutter", "Firebase", "Mobile Application Development", "UI/UX Design", "Figma"],
      github: "https://github.com/supunmenaka2004/traveel_app",
      demo: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7459124225077977088/"
    }
  ];

  return (
    <section id="projects" className="w-full py-24 text-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-4 tracking-wide">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-mono">
            A selection of my recent work, showcasing my skills in building 
            complex, scalable, and automated cloud solutions.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 relative group overflow-hidden rounded-[20px] border border-white/10">
                <div className={`aspect-video w-full relative ${project.objectFit === "contain" ? "bg-black/40" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      project.objectFit === "contain" ? "object-contain py-4" : "object-cover"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-4 bg-zinc-800 text-white border border-white/20 rounded-full hover:bg-accent hover:text-black transition-all">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="p-4 bg-zinc-800 text-white border border-white/20 rounded-full hover:bg-accent hover:text-black transition-all">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

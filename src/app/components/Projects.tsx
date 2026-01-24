"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AuroraBlobs from "./AuroraBlobs";
import { projectsData } from "../data/project";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className="relative w-full py-6 md:py-20">
      <AuroraBlobs
        variant="bottom-left"
        palette="sunset"
        intensity="subtle"
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="top-right"
        palette="vaporwave"
        intensity="subtle"
        hideOnMobile={false}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl text-left">
            <span className="bg-gradient-to-r from-[#EACDA3] via-[#D6AE7B] to-[#9F7928] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#EACDA3] drop-shadow-[0_0_8px_rgba(214,174,123,0.5)]">
            A collection of personal projects I&apos;ve worked on.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-[#C79D47] to-[#8F6B29]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 px-0 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

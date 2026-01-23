"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import AuroraBlobs from "./AuroraBlobs";

// Data skills tetap sama
const skillsData = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-6 md:py-20">
      <AuroraBlobs
        variant="top-left"
        palette="royal"
        intensity="subtle"
        hideOnMobile={false}
        size="sm"
      />
      <AuroraBlobs
        variant="bottom-right"
        palette="royal"
        intensity="subtle"
        hideOnMobile={false}
        size="md"
      />
      <AuroraBlobs
        variant="top-center"
        palette="royal"
        intensity="subtle"
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="bottom-center"
        palette="sunset"
        intensity="subtle"
        hideOnMobile={false}
        size="sm"
      />

      <div className="container relative z-10 max-w-6xl px-6 mx-auto text-left text-white">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            {/* HEADLINE: Gradasi Champagne -> Bronze */}
            <span className="bg-gradient-to-r from-[#EACDA3] via-[#D6AE7B] to-[#9F7928] bg-clip-text text-transparent">
              Skills & Technology
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#EACDA3] drop-shadow-[0_0_8px_rgba(214,174,123,0.5)]">
            Tools & libraries I use regularly.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-[#C79D47] to-[#8F6B29]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              role="listitem"
              aria-label={skill.name}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-[#111625]/50 backdrop-blur-md border border-[#D6AE7B]/10 p-6 rounded-lg flex flex-col items-center justify-center gap-3
                         text-slate-200 shadow-sm hover:shadow-[0_0_15px_-5px_rgba(214,174,123,0.3)] hover:border-[#D6AE7B]/40 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-[#D6AE7B] group-hover:text-[#EACDA3] drop-shadow-lg transition-colors duration-300"
              >
                {skill.icon}
              </motion.div>

              <p className="font-medium text-[#EACDA3]/80 text-center text-sm group-hover:text-[#EACDA3]">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

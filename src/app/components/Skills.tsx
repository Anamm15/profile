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
// Pastikan path import sesuai
import AuroraBlobs from "./AuroraBlobs";

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
    <section id="skills" className="relative py-20 px-4">
      <AuroraBlobs
        variant="top-left"
        palette="mint"
        intensity="subtle"
        hideOnMobile={false}
        size="sm"
      />
      <AuroraBlobs
        variant="bottom-right"
        palette="tealGlow"
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

      <div className="container relative z-10 px-4 max-w-5xl mx-auto text-left text-white">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technology
            </span>
          </h2>
          <p className="mt-2 text-sm text-neutral-300">
            Tools & libraries I use regularly.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-cyan-500 to-blue-600" />
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
              className="bg-neutral-800/50 backdrop-blur-md border border-white/5 p-6 rounded-lg flex flex-col items-center justify-center gap-3
                         text-neutral-100 shadow-sm hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-cyan-400 group-hover:text-cyan-300 drop-shadow-lg"
              >
                {skill.icon}
              </motion.div>

              <p className="font-medium text-neutral-200 text-center text-sm group-hover:text-white">
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

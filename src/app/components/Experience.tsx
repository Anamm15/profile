"use client";

import { motion } from "framer-motion";
import AuroraBlobs from "./AuroraBlobs";

interface ExperienceData {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

const experienceData: ExperienceData[] = [
  {
    role: "Freelance Web Developer",
    company: "Multiple Clients",
    duration: "Dec 2023 - Present",
    description: [
      "Designed and developed end to end websites and web applications based on client requirements.",
      "Communicated directly with clients to gather requirements, provide progress updates, and ensure satisfaction.",
      "Handled deployment, maintenance, and performance optimization across multiple projects.",
    ],
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "Golang",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Figma",
    ],
  },
  {
    role: "Front End Developer",
    company: "Schematics ITS",
    duration: "Apr 2025 - Dec 2025",
    description: [
      "Collaborated within a team to build a complex website from scratch.",
      "Built responsive and interactive user interfaces from figma using Next.js and Tailwind CSS.",
    ],
    tags: ["TypeScript", "Next.js", "Figma", "Tailwind CSS"],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="relative w-full py-6 md:py-20">
      <AuroraBlobs
        variant="center"
        palette="sunset"
        intensity="subtle"
        animate={true}
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="center"
        palette="gold"
        intensity="subtle"
        hideOnMobile={false}
        size="md"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            {/* HEADLINE: Gradasi Champagne -> Bronze */}
            <span className="bg-gradient-to-r from-[#EACDA3] via-[#D6AE7B] to-[#9F7928] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#EACDA3] drop-shadow-[0_0_8px_rgba(214,174,123,0.5)]">
            A little bit about my work experience.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-[#C79D47] to-[#8F6B29]"></div>
        </motion.div>

        <motion.div
          className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full"
              variants={itemVariants}
            >
              <div className="group relative h-full rounded-xl border border-[#D6AE7B]/10 bg-[#111625]/50 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#D6AE7B]/30 hover:shadow-2xl hover:shadow-[#D6AE7B]/10 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#EACDA3] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[#D6AE7B] bg-[#D6AE7B]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-[#D6AE7B]/20">
                    {exp.duration}
                  </p>
                </div>

                <p className="mb-6 text-lg font-medium text-white border-b border-[#D6AE7B]/10 pb-4">
                  {exp.company}
                </p>

                {/* List Description */}
                <ul className="list-disc space-y-3 pl-4 text-sm text-white mb-6 transition-colors">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="leading-relaxed pl-1 marker:text-[#D6AE7B]"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0B0F19] border border-[#D6AE7B]/10 px-3 py-1 text-xs font-medium text-white transition-colors group-hover:border-[#D6AE7B]/30 group-hover:text-[#D6AE7B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

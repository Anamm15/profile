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
    company: "Berbagai Klien",
    duration: "Jan 2023 - Sekarang",
    description: [
      "Merancang dan mengembangkan website dan aplikasi web end-to-end sesuai kebutuhan klien.",
      "Berkomunikasi langsung dengan klien untuk mengumpulkan persyaratan, memberikan pembaruan, dan memastikan kepuasan.",
      "Mengelola deployment, pemeliharaan, dan optimisasi performa untuk berbagai proyek.",
    ],
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Vercel", "Figma"],
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jun 2021 - Des 2022",
    description: [
      "Berkontribusi dalam tim untuk membangun platform SaaS yang kompleks dari awal.",
      "Mengembangkan fitur backend menggunakan Express.js dan mengelola database MongoDB.",
      "Membangun antarmuka pengguna yang responsif dan interaktif dengan TypeScript dan React.",
    ],
    tags: ["TypeScript", "React", "Express.js", "MongoDB", "Docker", "AWS"],
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
    <section id="experience" className="relative w-full py-20">
      <AuroraBlobs
        variant="center"
        palette="ocean"
        intensity="medium"
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="center"
        palette="mint"
        intensity="medium"
        hideOnMobile={false}
        size="md"
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-2 text-sm text-neutral-300">
            A little bit about my work experience.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-cyan-500 to-blue-600 "></div>
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
              <div className="group relative h-full rounded-xl border border-white/5 bg-neutral-900/50 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1">
                {/* Header Card */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-cyan-500 bg-cyan-950/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-cyan-500/20">
                    {exp.duration}
                  </p>
                </div>

                <p className="mb-6 text-lg font-medium text-neutral-300 border-b border-white/5 pb-4">
                  {exp.company}
                </p>

                {/* List Description */}
                <ul className="list-disc space-y-3 pl-4 text-sm text-white mb-6 transition-colors">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed pl-1">
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-800 border border-white/5 px-3 py-1 text-xs font-medium text-neutral-300 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-400"
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

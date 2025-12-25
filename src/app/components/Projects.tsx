"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AuroraBlobs from "./AuroraBlobs";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

const projectsData: Project[] = [
  {
    title: "Platform E-commerce Modern",
    description:
      "Sebuah platform e-commerce yang dibangun dengan Next.js, Redux Toolkit, dan integrasi pembayaran Stripe.",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "Redux"],
    image: "https://placehold.co/600x400/171717/38bdf8?text=Proyek+1",
    github: "#",
    live: "#",
  },
  {
    title: "Aplikasi Dashboard Analitik",
    description:
      "Dashboard untuk visualisasi data pengguna dengan chart interaktif menggunakan Chart.js dan otentikasi NextAuth.",
    tags: ["React", "Chart.js", "NextAuth", "TypeScript"],
    image: "https://placehold.co/600x400/171717/38bdf8?text=Proyek+2",
    github: "#",
    live: "#",
  },
  {
    title: "Website Landing Page SaaS",
    description:
      "Landing page untuk produk software-as-a-service dengan fokus pada animasi scroll dan desain yang bersih.",
    tags: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
    image: "https://placehold.co/600x400/171717/38bdf8?text=Proyek+3",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className="relative w-full py-20">
      <AuroraBlobs
        variant="bottom-left"
        palette="tealGlow"
        intensity="medium"
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="top-right"
        palette="nebula"
        intensity="medium"
        hideOnMobile={false}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl text-left">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-2 text-sm text-neutral-300">
            A collection of personal projects I&apos;ve worked on.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-cyan-500 to-blue-600"></div>
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

import { Project } from "@/types";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, tags, image, github, live } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-[#111625]/50 border border-[#D6AE7B]/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D6AE7B]/30 hover:shadow-2xl hover:shadow-[#D6AE7B]/10"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60 z-10" />
        <Image
          src={image}
          width={500}
          height={500}
          alt={`Thumbnail ${title}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col flex-grow p-6 z-20">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#EACDA3] transition-colors">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-white flex-grow">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#D6AE7B]/10 border border-[#D6AE7B]/20 px-3 py-1 text-xs font-medium text-[#D6AE7B]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#D6AE7B]/10">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white transition-colors hover:text-[#EACDA3]"
          >
            <Github size={18} /> Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white transition-colors hover:text-[#EACDA3]"
          >
            <ArrowUpRight size={18} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

"use client";

import { motion, Variants } from "framer-motion";
import AuroraBlobs from "./AuroraBlobs";

const SkillIcon = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => (
  <motion.div
    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-[#111625]/50 backdrop-blur-sm border border-[#D6AE7B]/10 transition-colors duration-300 hover:bg-[#D6AE7B]/5 hover:border-[#D6AE7B]/40 hover:shadow-[0_0_15px_-5px_rgba(214,174,123,0.3)]"
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
    <p className="text-sm font-medium text-[#EACDA3]">{name}</p>
  </motion.div>
);

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="relative w-full py-20">
      <AuroraBlobs
        variant="top-right"
        palette="royal"
        intensity="subtle"
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="bottom-left"
        palette="ocean"
        intensity="subtle"
        hideOnMobile={false}
      />

      <motion.div
        className="container relative z-10 mx-auto max-w-5xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-left" variants={itemVariants}>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-[#EACDA3] via-[#D6AE7B] to-[#9F7928] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#EACDA3] drop-shadow-[0_0_8px_rgba(214,174,123,0.5)]">
            A little bit about myself.
          </p>
          <div className="mt-4 h-1 w-24 rounded bg-gradient-to-r from-[#C79D47] to-[#8F6B29]"></div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-lg text-white"
          >
            <p className="leading-relaxed text-justify">
              Since starting my journey as a programmer, I have fallen in love
              with the process of solving complex problems and building
              applications that benefit others. I believe that technology has
              the power to change the world for the better, and I want to be a
              part of that change.
            </p>
            <p className="leading-relaxed text-justify">
              Outside of coding, I enjoy exploring new technologies,
              contributing to open-source projects, and reading books on product
              design. I am always looking for new challenges to grow as an
              engineer.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <h3 className="mb-4 text-xl font-semibold text-[#EACDA3] drop-shadow-[0_0_8px_rgba(214,174,123,0.5)]">
              Main Skills
            </h3>
            <motion.div
              className="grid grid-cols-3 gap-4"
              variants={containerVariants}
            >
              <SkillIcon name="React">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D6AE7B]"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 4.44a7.56 7.56 0 100 15.12 7.56 7.56 0 000-15.12zM12 18a6 6 0 110-12 6 6 0 010 12z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 15a3 3 0 110-6 3 3 0 010 6z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.93 4.93l-1.414 1.414a10 10 0 0114.142 0l-1.414-1.414A8 8 0 004.93 4.93z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.07 19.07l1.414-1.414a10 10 0 01-14.142 0l1.414 1.414A8 8 0 0019.07 19.07z"
                    fill="currentColor"
                  />
                </svg>
              </SkillIcon>
              <SkillIcon name="Node.js">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D6AE7B]"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.05 15.3l-3.3-6.22V17H6V7h1.65v5.88l3.18-5.88H12.5l-3.6 6.58 3.75 3.72h-1.7zm6.75-1.12c-.52 0-.96-.4-1.04-.92H14V7h5v2.5h-2.2v1.4h1.7v2.5h-1.7v1.48c.08.52.52.92 1.04.92.52 0 .96-.4 1.04-.92H20c-.08 1.6-1.48 2.82-3.3 2.82z"
                    fill="currentColor"
                  />
                </svg>
              </SkillIcon>
              <SkillIcon name="TypeScript">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D6AE7B]"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.5 10.5h-2v5.66h-1.5V10.5h-2V9h5.5v1.5zM9.5 14H8v-3.5H6.5V9h4v1.5H9v3.5h.5v1.5z"
                    fill="currentColor"
                  />
                </svg>
              </SkillIcon>
              <SkillIcon name="Tailwind">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D6AE7B]"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S9.83 11 9 11s-1.5.67-1.5 1.5zm6 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                    fill="currentColor"
                  />
                </svg>
              </SkillIcon>
              <SkillIcon name="Figma">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D6AE7B]"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 9h-3v3h3c.83 0 1.5-.67 1.5-1.5S15.83 9 15 9zm-1.5 1.5c0-.83.67-1.5 1.5-1.5v3c-.83 0-1.5-.67-1.5-1.5z"
                    fill="currentColor"
                  />
                  <path
                    d="M9 9H6v6h3v-3c0-.83-.67-1.5-1.5-1.5S9 11.17 9 12V9z"
                    fill="currentColor"
                  />
                </svg>
              </SkillIcon>
              <SkillIcon name="Git">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D6AE7B]"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5 11.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM6.5 13H15v-2H6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5z"
                    fill="currentColor"
                  />
                </svg>
              </SkillIcon>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

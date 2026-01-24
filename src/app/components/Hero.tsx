"use client";

import { motion, Variants } from "framer-motion";
import { MoveRight, Sparkles } from "lucide-react";
import AuroraBlobs from "./AuroraBlobs";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative text-white pt-40 pb-10 h-max">
      <AuroraBlobs
        variant="center"
        palette="aurora"
        intensity="subtle"
        hideOnMobile={false}
        animate={true}
      />

      <div className="container relative z-10 mt-10 mx-auto flex max-w-6xl items-center justify-center px-6 h-fit">
        <motion.div
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 py-1 text-sm text-[#EACDA3] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-50"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C5A059]"></span>
                </span>
                Available for Freelance Projects
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="mb-2 block text-xl font-medium md:text-2xl">
                Hello, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-[#EACDA3] via-[#D6AE7B] to-[#9F7928] bg-clip-text text-transparent drop-shadow-sm">
                Choirul Anam
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white md:mx-0"
            >
              A{" "}
              <span className="font-bold text-[#D6AE7B]">
                Full-Stack Developer
              </span>{" "}
              who is passionate about creating innovative digital solutions and
              seamless interfaces using modern technology.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a href="#projects" className="w-full sm:w-auto">
                <motion.button
                  className="group relative w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C79D47] to-[#8F6B29] px-8 py-4 font-bold text-white shadow-lg shadow-[#8F6B29]/20 transition-all duration-300 hover:shadow-[#8F6B29]/40 hover:brightness-110"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore My Work
                  <MoveRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />
                </motion.button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <motion.button
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#D6AE7B]/40 hover:text-[#EACDA3]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles size={18} className="text-[#D6AE7B]" />
                  Let&apos;s Connect
                </motion.button>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <div className="group relative">
              <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[#0e7490] to-[#1e40af] opacity-40 blur-2xl transition duration-500 group-hover:opacity-60"></div>

              <div className="relative rounded-full border-4 border-[#1e293b] bg-[#0B0F19] p-2 shadow-2xl">
                <motion.img
                  src="/profile.jpg"
                  alt="Choirul Anam"
                  className="h-64 w-64 rounded-full object-cover shadow-inner md:h-80 md:w-80"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

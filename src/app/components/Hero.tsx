"use client";

import { motion, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";
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
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative text-white pb-10 h-170 md:h-150 flex flex-col justify-center"
    >
      <AuroraBlobs
        variant="center"
        palette="royal"
        intensity="medium"
        hideOnMobile={false}
      />
      <AuroraBlobs
        variant="bottom-center"
        palette="vaporwave"
        intensity="subtle"
        hideOnMobile={false}
        size="sm"
      />
      <div className="container relative z-10 mt-20 mx-auto flex max-w-5xl items-center justify-center px-4 h-fit">
        <motion.div
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Kolom Kiri: Teks & Tombol Aksi */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              <span className="mb-2 block text-lg">Hii, I'm</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Choirul Anam
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-lg text-lg text-neutral-300 md:mx-0"
            >
              a{" "}
              <span className="font-semibold text-white">
                Full-Stack Developer
              </span>{" "}
              who is passionate about creating innovative digital solutions and
              seamless interfaces.
            </motion.p>

            {/* Tombol Aksi */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <a href="#projects">
                <motion.button
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Lihat Proyek Saya
                  <MoveRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />
                </motion.button>
              </a>
              <a href="#contact">
                <motion.button
                  className="rounded-full border-2 border-neutral-600 px-6 py-3 font-semibold transition-all duration-300 hover:bg-neutral-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hubungi Saya
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="group relative mx-auto w-fit">
              {/* Bingkai Gradien */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-70 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200"></div>
              <motion.img
                src="/profile.jpg"
                alt="Foto Profesional Choirul Anam"
                width={300}
                height={300}
                className="relative mx-auto h-52 w-52 rounded-full object-cover shadow-xl md:h-72 md:w-72"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

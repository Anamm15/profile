"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State untuk mengelola status pengiriman form
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("sending");

    // --- SIMULASI PENGIRIMAN FORM ---
    // Di aplikasi nyata, ganti ini dengan logika API call (misalnya fetch ke backend atau layanan seperti Formspree)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // --------------------------------

    // Contoh hasil: anggap saja berhasil
    console.log("Data formulir:", formData);
    setSubmissionStatus("success");
    setFormData({ name: "", email: "", message: "" });

    // Reset status setelah beberapa detik
    setTimeout(() => setSubmissionStatus("idle"), 5000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    <section id="contact" className="relative w-full py-10">
      {/* Efek Latar Belakang Aurora */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />

      <motion.div
        className="container mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Kolom Kiri: Informasi Kontak */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="mt-2 text-sm text-neutral-300">
            My contact details and social links.
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-gradient-to-r from-cyan-500 to-blue-600 md:mx-0"></div>
          <p className="mt-6 text-lg text-neutral-300">
            Have an interesting project or just want to say hello? I had love to
            hear from you. Contact me via email, social media, or fill out the
            form below.
          </p>
          <div className="mt-12 space-y-6">
            <motion.a
              href="mailto:choirulanm.15@anda.com"
              className="group flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <Mail className="h-7 w-7 text-cyan-400" />
              <span className="text-lg text-neutral-300 transition-colors group-hover:text-white">
                choirulanm.15@anda.com
              </span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/choirulanm15/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <Linkedin className="h-7 w-7 text-cyan-400" />
              <span className="text-lg text-neutral-300 transition-colors group-hover:text-white">
                LinkedIn Profile
              </span>
            </motion.a>
            <motion.a
              href="https://github.com/Anamm15"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <Github className="h-7 w-7 text-cyan-400" />
              <span className="text-lg text-neutral-300 transition-colors group-hover:text-white">
                GitHub Profile
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Kolom Kanan: Formulir Kontak */}
        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-800/50 p-3 text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-neutral-700 bg-neutral-800/50 p-3 text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-md border border-neutral-700 bg-neutral-800/50 p-3 text-white outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            disabled={submissionStatus === "sending"}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            {submissionStatus === "sending"
              ? "Sending..."
              : "Send me a message"}
            <Send
              className={`h-5 w-5 transition-transform duration-300 ${
                submissionStatus !== "sending"
                  ? "group-hover:translate-x-1"
                  : ""
              }`}
            />
          </motion.button>
          {submissionStatus === "success" && (
            <p className="text-center text-green-400">
              Your message has sent. Thank You!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-center text-red-400">
              An error occured. Please Try Again
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;

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

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Data formulir:", formData);
    setSubmissionStatus("success");
    setFormData({ name: "", email: "", message: "" });

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
    <section id="contact" className="relative w-full py-6 md:py-10">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-[#D6AE7B]/10 to-[#9F7928]/10 blur-3xl" />

      <motion.div
        className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Kolom Kiri: Informasi Kontak */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold md:text-4xl">
            {/* HEADLINE: Gradasi Champagne -> Bronze */}
            <span className="bg-gradient-to-r from-[#EACDA3] via-[#D6AE7B] to-[#9F7928] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#EACDA3] drop-shadow-[0_0_8px_rgba(214,174,123,0.5)]">
            My contact details and social links.
          </p>
          {/* DIVIDER: Gold Solid */}
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-gradient-to-r from-[#C79D47] to-[#8F6B29] md:mx-0"></div>

          <p className="mt-6 text-lg text-white">
            Have an interesting project or just want to say hello? I&apos;d love
            to hear from you. Contact me via email, social media, or fill out
            the form below.
          </p>

          <div className="mt-12 space-y-6">
            <motion.a
              href="mailto:choirulanm.15@anda.com"
              className="group flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              {/* ICON: Gold Muted */}
              <Mail className="h-7 w-7 text-[#D6AE7B] group-hover:text-[#EACDA3] transition-colors" />
              <span className="text-lg text-white transition-colors group-hover:text-[#EACDA3]">
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
              <Linkedin className="h-7 w-7 text-[#D6AE7B] group-hover:text-[#EACDA3] transition-colors" />
              <span className="text-lg text-white transition-colors group-hover:text-[#EACDA3]">
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
              <Github className="h-7 w-7 text-[#D6AE7B] group-hover:text-[#EACDA3] transition-colors" />
              <span className="text-lg text-white transition-colors group-hover:text-[#EACDA3]">
                GitHub Profile
              </span>
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white"
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
              className="w-full rounded-md border border-neutral-700 bg-[#111625]/50 p-3 text-white outline-none transition-all duration-300 focus:border-[#D6AE7B] focus:ring-1 focus:ring-[#D6AE7B]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
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
              className="w-full rounded-md border border-neutral-700 bg-[#111625]/50 p-3 text-white outline-none transition-all duration-300 focus:border-[#D6AE7B] focus:ring-1 focus:ring-[#D6AE7B]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white"
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
              className="w-full resize-none rounded-md border border-neutral-700 bg-[#111625]/50 p-3 text-white outline-none transition-all duration-300 focus:border-[#D6AE7B] focus:ring-1 focus:ring-[#D6AE7B]"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={submissionStatus === "sending"}
            // BUTTON: Gradient Gold/Bronze (Sama seperti Hero)
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C79D47] to-[#8F6B29] px-6 py-3 font-semibold text-white shadow-lg shadow-[#8F6B29]/20 transition-all duration-300 hover:shadow-[#8F6B29]/40 hover:brightness-110 disabled:opacity-50"
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
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

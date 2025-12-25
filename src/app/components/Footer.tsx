"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300 hover:bg-cyan-500/20 hover:text-white"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const socials = [
    { href: "#", icon: <Github size={20} /> },
    { href: "#", icon: <Linkedin size={20} /> },
    { href: "#", icon: <Twitter size={20} /> },
  ];

  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800 py-8">
      <div className="container mx-auto px-4 text-center text-neutral-400">
        <div className="">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Choirul Anam. Seluruh hak cipta.
          </p>
          <p className="text-xs mt-2">
            Dibuat dengan <span className="text-cyan-400">Next.js</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

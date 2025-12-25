"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

type SocialIconProps = {
  href: string;
  children: React.ReactNode;
};

const SocialIcon = ({ href, children }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="social link"
    className="p-2 rounded-full bg-neutral-800 text-neutral-400
               transition-colors duration-300
               hover:bg-cyan-500/20 hover:text-cyan-400"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const socials = [
    {
      href: "https://github.com/username",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/username",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/username",
      icon: <Twitter size={20} />,
      label: "Twitter",
    },
  ];

  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800 py-8">
      <div className="container mx-auto px-4 text-center text-neutral-400">
        <div className="flex justify-center gap-4 mb-4">
          {socials.map((social) => (
            <SocialIcon key={social.label} href={social.href}>
              {social.icon}
            </SocialIcon>
          ))}
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Choirul Anam. All rights reserved.
        </p>

        <p className="text-xs mt-2">
          Made with <span className="text-cyan-400">Next.js</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

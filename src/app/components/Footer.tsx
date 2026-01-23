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
    className="p-2 rounded-full bg-[#111625] border border-[#D6AE7B]/10 text-white
               transition-colors duration-300
               hover:bg-[#D6AE7B]/10 hover:border-[#D6AE7B]/50 hover:text-[#EACDA3] hover:shadow-[0_0_15px_-5px_rgba(214,174,123,0.5)]"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const socials = [
    {
      href: "https://github.com/Anamm15",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/choirulanm15/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/",
      icon: <Twitter size={20} />,
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative w-full bg-[#0B0F19] py-8 border-t border-[#D6AE7B]/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D6AE7B]/50 to-transparent"></div>

      <div className="container mx-auto px-4 text-center text-white">
        <div className="flex justify-center gap-4 mb-4">
          {socials.map((social) => (
            <SocialIcon key={social.label} href={social.href}>
              {social.icon}
            </SocialIcon>
          ))}
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#EACDA3]">Choirul Anam</span>. All rights
          reserved.
        </p>

        <p className="text-xs mt-2 text-white">
          Made with <span className="text-[#D6AE7B] font-medium">Next.js</span>{" "}
          & <span className="text-[#D6AE7B] font-medium">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

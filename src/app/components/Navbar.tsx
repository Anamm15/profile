"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Cpu,
  TrendingUp,
  Mail,
  Code,
} from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Skills", href: "#skills", icon: <Cpu size={20} /> },
    { name: "Projects", href: "#projects", icon: <Code size={20} /> },
    { name: "Experience", href: "#experience", icon: <TrendingUp size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    setActiveTab(name);

    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-6 inset-x-0 mx-auto w-fit z-50 px-4 pointer-events-none">
      <motion.nav
        layout // Magic Prop: Ini yang bikin lebar navbar memanjang/memendek otomatis!
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-2xl shadow-black/50"
      >
        {navLinks.map((link) => {
          const isActive = activeTab === link.name;
          const isHovered = hoveredTab === link.name;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.name)}
              onMouseEnter={() => setHoveredTab(link.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative flex items-center justify-center"
            >
              {/* Background Bubble (Active State) */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-neutral-700/60 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Item Menu Content */}
              <motion.div
                layout // Layout agar item bergeser mulus saat sebelahnya melebar
                className={`relative flex items-center justify-center px-3 py-2.5 rounded-full transition-all duration-300 z-10 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {/* ICON */}
                <span className="relative z-10">{link.icon}</span>

                {/* LABEL TEKS (Expand Animation) */}
                <AnimatePresence>
                  {/* Teks muncul HANYA jika: Tidak Mobile DAN (Sedang di-Hover ATAU Sedang Aktif) */}
                  {/* Jika ingin hanya saat Hover saja, hapus bagian '|| isActive' */}
                  {!isMobile && (isHovered || isActive) && (
                    <motion.span
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="relative z-10 whitespace-nowrap overflow-hidden text-sm font-medium"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;

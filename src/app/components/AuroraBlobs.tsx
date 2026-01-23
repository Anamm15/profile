import React from "react";

// --- KONFIGURASI PALET WARNA BARU (DARK GOLD / LUXURY THEME) ---
export const PALETTES = {
  // 1. DEFAULT (Sekarang menjadi tema Emas/Champagne)
  // Cocok untuk Hero Section
  aurora: ["bg-[#D6AE7B]", "bg-[#EACDA3]", "bg-indigo-900"],

  // 2. LUXURY / ROYAL (Ungu Gelap dengan sentuhan Emas)
  // Cocok untuk About Section
  royal: ["bg-indigo-800", "bg-[#D6AE7B]", "bg-violet-900"],

  // 3. WARM / BRONZE (Tembaga & Emas Tua)
  // Cocok untuk Projects / Experience
  sunset: ["bg-[#9F7928]", "bg-orange-900", "bg-[#C79D47]"],
  magma: ["bg-rose-900", "bg-orange-800", "bg-[#8F6B29]"],

  // 4. COOL / DEEP SEA (Biru Laut Dalam, bukan Cyan terang)
  // Cocok untuk Skills (sebagai kontras dingin)
  ocean: ["bg-sky-900", "bg-blue-900", "bg-[#111625]"],
  tealGlow: ["bg-teal-900", "bg-cyan-900", "bg-emerald-900"],

  // 5. MYSTERIOUS (Aksen Pink/Ungu yang redup/mahal)
  nebula: ["bg-indigo-900", "bg-fuchsia-900", "bg-[#4c1d95]"], // violet-900
  vaporwave: ["bg-rose-900", "bg-indigo-900", "bg-[#D6AE7B]"], // Rose Gold

  // 6. KHUSUS TEXTURE (Sangat redup, hampir menyatu background)
  mint: ["bg-emerald-900", "bg-[#0f172a]", "bg-teal-950"],
  gold: ["bg-[#EACDA3]", "bg-[#C79D47]", "bg-[#8F6B29]"], // Full Gold Spectrum
};

type PaletteKey = keyof typeof PALETTES;

type Variant =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "center";

type Size = "sm" | "md" | "lg" | "xl";

interface AuroraBlobsProps {
  variant?: Variant;
  palette?: PaletteKey;
  intensity?: "subtle" | "medium" | "strong";
  size?: Size;
  hideOnMobile?: boolean;
}

export default function AuroraBlobs({
  variant = "top-left",
  palette = "aurora",
  intensity = "medium",
  size = "lg",
  hideOnMobile = true,
}: AuroraBlobsProps) {
  const colors = PALETTES[palette] || PALETTES.aurora;

  const opacityClass = {
    subtle: "opacity-30",
    medium: "opacity-45",
    strong: "opacity-60",
  }[intensity];

  const sizes = {
    sm: "w-[320px] h-[320px]",
    md: "w-[420px] h-[420px]",
    lg: "w-[500px] h-[500px]",
    xl: "w-[640px] h-[640px]",
  };

  const blobSizes = {
    sm: "w-48 h-48",
    md: "w-60 h-60",
    lg: "w-72 h-72",
    xl: "w-96 h-96",
  };

  const positions = {
    "top-left": "-top-20 -left-20",
    "top-center": "-top-24 left-1/2 -translate-x-1/2",
    "top-right": "-top-20 -right-20",
    "bottom-left": "-bottom-20 -left-20",
    "bottom-center": "-bottom-24 left-1/2 -translate-x-1/2",
    "bottom-right": "-bottom-20 -right-20",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const visibility = hideOnMobile ? "hidden md:block" : "block";

  return (
    <div
      aria-hidden="true"
      className={`absolute ${positions[variant]} ${visibility} pointer-events-none z-0 ${sizes[size]}`}
    >
      <div className={`relative w-full h-full ${opacityClass}`}>
        {/* Blob 1 */}
        <div
          className={`absolute top-0 -left-4 ${blobSizes[size]} ${colors[0]} rounded-full 
                     mix-blend-normal md:mix-blend-screen 
                     filter blur-3xl md:blur-[80px] 
                     opacity-70 
                     animate-none md:animate-blob gpu-accelerated`}
        />

        {/* Blob 2 */}
        <div
          className={`absolute top-0 -right-4 ${blobSizes[size]} ${colors[1]} rounded-full 
                     mix-blend-normal md:mix-blend-screen 
                     filter blur-3xl md:blur-[80px] 
                     opacity-70 
                     animate-none md:animate-blob gpu-accelerated md:animation-delay-2000`}
        />

        {/* Blob 3 */}
        <div
          className={`absolute -bottom-8 left-1/4 ${blobSizes[size]} ${colors[2]} rounded-full 
                     mix-blend-normal md:mix-blend-screen 
                     filter blur-3xl md:blur-[80px] 
                     opacity-70 
                     animate-none md:animate-blob gpu-accelerated md:animation-delay-4000`}
        />
      </div>
    </div>
  );
}

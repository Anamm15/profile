import React from "react";

export const PALETTES = {
  // --- DEFAULT ---
  tealGlow: ["bg-cyan-400", "bg-teal-300", "bg-emerald-400"],
  aurora: ["bg-violet-500", "bg-cyan-400", "bg-fuchsia-400"],

  // --- HOT / ENERGETIC ---
  magma: ["bg-rose-500", "bg-orange-500", "bg-yellow-400"],
  sunset: ["bg-orange-400", "bg-rose-400", "bg-yellow-300"],

  // --- COOL / CALM ---
  ocean: ["bg-sky-500", "bg-blue-600", "bg-cyan-300"],
  mint: ["bg-emerald-300", "bg-teal-400", "bg-lime-300"],

  // --- MYSTERIOUS / MAGIC ---
  nebula: ["bg-indigo-500", "bg-purple-500", "bg-pink-500"],
  vaporwave: ["bg-fuchsia-500", "bg-cyan-400", "bg-pink-400"],

  // --- ELEGANT / LUXURY ---
  royal: ["bg-indigo-800", "bg-violet-600", "bg-blue-700"],
  gold: ["bg-yellow-500", "bg-amber-400", "bg-orange-300"],
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

  /* =========================
     Intensity (opacity)
  ========================= */
  const opacityClass = {
    subtle: "opacity-20",
    medium: "opacity-35",
    strong: "opacity-50",
  }[intensity];

  /* =========================
     Size mapping
     lg === ukuran lama (500px)
  ========================= */
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

  /* =========================
     Position variants
  ========================= */
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
          className={`absolute top-0 -left-4 ${blobSizes[size]} ${colors[0]} rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob`}
        />

        {/* Blob 2 */}
        <div
          className={`absolute top-0 -right-4 ${blobSizes[size]} ${colors[1]} rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000`}
        />

        {/* Blob 3 */}
        <div
          className={`absolute -bottom-8 left-1/4 ${blobSizes[size]} ${colors[2]} rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000`}
        />
      </div>
    </div>
  );
}

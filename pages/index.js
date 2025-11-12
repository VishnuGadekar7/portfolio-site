"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* ===== Background Layer ===== */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img
          src="/pill-bg.jpg"
          alt="Matrix background"
          className="w-full h-full object-cover object-center fixed inset-0 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      {/* ===== Foreground Content ===== */}
      <main className="relative min-h-screen flex items-center justify-center z-10 overflow-hidden">
        <div className="relative w-full max-w-7xl min-h-[700px] flex items-center justify-center px-4 md:px-10">

          {/* --- Blue Netflix Card (Left) --- */}
          <motion.div
            className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 -translate-y-1/2 top-[45%] md:top-[57%] md:left-[17%] md:translate-x-0"
            initial={{ opacity: 0, y: -60, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Link href="/eresume" className="group relative rounded-3xl overflow-hidden w-60 md:w-72 h-40 md:h-48 cursor-pointer shadow-2xl transition-transform duration-500">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 group-hover:via-blue-800" />
              {/* Glow shadow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-blue-500/40" />
              {/* Card content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest bg-blue-500/20 px-2 py-1 rounded-full">
                    Resume
                  </span>
                  <h2 className="mt-3 text-xl md:text-2xl font-bold tracking-wide group-hover:scale-105 transition-transform duration-500">
                    eResume
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-gray-200/80 group-hover:text-white transition-colors duration-300">
                  View professional CV & achievements
                </p>
              </div>
            </Link>
          </motion.div>

          {/* --- Red Netflix Card (Right) --- */}
          <motion.div
            className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 -translate-y-1/2 top-[65%] md:top-[57%] md:left-auto md:right-[17%] md:translate-x-0"
            initial={{ opacity: 0, y: 60, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Link href="/portfolio" className="group relative rounded-3xl overflow-hidden w-60 md:w-72 h-40 md:h-48 cursor-pointer shadow-2xl transition-transform duration-500">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900 group-hover:via-red-800" />
              {/* Glow shadow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-red-500/40" />
              {/* Card content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest bg-red-500/20 px-2 py-1 rounded-full">
                    Portfolio
                  </span>
                  <h2 className="mt-3 text-xl md:text-2xl font-bold tracking-wide group-hover:scale-105 transition-transform duration-500">
                    My Work
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-gray-200/80 group-hover:text-white transition-colors duration-300">
                  Explore creative projects and designs
                </p>
              </div>
            </Link>
          </motion.div>

          {/* --- Center Text (Cinematic Intro) --- */}
          <motion.div
            className="absolute text-center text-gray-200 px-4 top-[20%] md:top-[33%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-wide text-white drop-shadow-lg">
              Choose Your Path
            </h1>
            <p className="text-sm md:text-lg opacity-90">
              Blue Pill for eResume | Red Pill for Portfolio
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}

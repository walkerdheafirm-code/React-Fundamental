import React from 'react';
import { motion } from 'framer-motion';
import { Store, ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage({ onStart }) {
  return (
    <div className="fixed inset-0 bg-slate-900 text-white flex flex-col items-center justify-center z-50 overflow-hidden px-4">
      {/* Background Animated Blobs/Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="text-center z-10 max-w-xl mx-auto flex flex-col items-center">
        
        {/* Animasi Logo Glowing */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, duration: 1 }}
          className="relative mb-6"
        >
          <div className="p-6 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl shadow-2xl shadow-blue-500/50 flex items-center justify-center">
            <Store size={64} className="text-white" />
          </div>
          {/* Subtle Sparkle Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 bg-pink-500 p-2 rounded-full shadow-lg"
          >
            <Sparkles size={16} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Animasi Judul & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-3"
        >
          Walking Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-slate-400 text-sm sm:text-base mb-8 max-w-md leading-relaxed"
        >
          Temukan koleksi sepatu & apparel impianmu dengan pengalaman belanja katalog yang modern dan interaktif.
        </motion.p>

        {/* Tombol "Jelajahi Katalog" */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          onClick={onStart}
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl cursor-pointer group"
        >
          Jelajahi Katalog
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Footer watermark */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 text-xs text-slate-500 tracking-widest uppercase font-medium"
      >
        React Fundamental • 2026
      </motion.p>
    </div>
  );
}
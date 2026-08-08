import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  {
    id: 1,
    title: "Diskon Akhir Pekan Hingga 50%",
    subtitle: "Dapatkan koleksi sepatu & pakaian impianmu dengan harga termurah!",
    bg: "bg-gradient-to-r from-blue-600 to-indigo-700",
    badge: "Promo Terbatas"
  },
  {
    id: 2,
    title: "Koleksi Terbaru Streetwear 2026",
    subtitle: "Tampil makin percaya diri dengan style paling up-to-date.",
    bg: "bg-gradient-to-r from-purple-600 to-pink-600",
    badge: "New Release"
  }
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));

  const current = banners[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative ${current.bg} text-white rounded-2xl p-6 md:p-8 mb-8 shadow-xl transition-colors duration-700 overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 max-w-xl"
        >
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles size={14} /> {current.badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight">{current.title}</h2>
          <p className="text-sm md:text-base text-blue-100 mb-4">{current.subtitle}</p>
        </motion.div>
      </AnimatePresence>

      {/* Tombol Panah Kiri-Kanan dengan efek Hover Scale */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
      >
        <ChevronLeft size={20} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
      >
        <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}
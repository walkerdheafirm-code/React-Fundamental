import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Store, ArrowRight, Sparkles, Volume2, VolumeX } from 'lucide-react';

export default function LandingPage({ onStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const startAmbientMusic = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (intervalRef.current) return;

      const notes = [261.63, 329.63, 392.00, 493.88, 587.33];
      let step = 0;

      intervalRef.current = setInterval(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[step % notes.length], ctx.currentTime);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.2);

        step++;
      }, 400);

      setIsPlaying(true);
    } catch {
      // Fallback
    }
  };

  const stopAmbientMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      stopAmbientMusic();
    } else {
      startAmbientMusic();
    }
  };

  const playClickSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Fallback
    }
  };

  const handleStartCatalog = () => {
    playClickSound();
    stopAmbientMusic();
    onStart();
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      startAmbientMusic();
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction);

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      stopAmbientMusic();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900 text-white flex flex-col items-center justify-center z-50 overflow-hidden px-4">
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Tombol Audio Control */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleSound}
        className={`absolute top-6 right-6 p-3 rounded-full border transition cursor-pointer flex items-center gap-2 text-xs font-medium backdrop-blur-md shadow-lg ${
          isPlaying
            ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 animate-pulse"
            : "bg-white/10 border-white/10 text-slate-300 hover:bg-white/20"
        }`}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span className="hidden sm:inline">{isPlaying ? "Musik Aktif 🎵" : "Klik Layar Untuk Musik 🎵"}</span>
      </motion.button>

      {/* Hero Content */}
      <div className="text-center z-10 max-w-xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, duration: 1 }}
          className="relative mb-6"
        >
          <div className="p-6 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl shadow-2xl shadow-blue-500/50 flex items-center justify-center">
            <Store size={64} className="text-white" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 bg-pink-500 p-2 rounded-full shadow-lg"
          >
            <Sparkles size={16} className="text-white" />
          </motion.div>
        </motion.div>

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

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          onClick={handleStartCatalog}
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl cursor-pointer group"
        >
          Jelajahi Katalog
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

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
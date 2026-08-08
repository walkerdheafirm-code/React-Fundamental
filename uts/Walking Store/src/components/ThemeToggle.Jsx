import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-xl transition border flex items-center gap-2 text-xs font-semibold cursor-pointer ${
        darkMode
          ? 'bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700'
          : 'bg-gray-100 text-slate-700 border-gray-200 hover:bg-gray-200'
      }`}
    >
      {darkMode ? (
        <>
          <Sun size={16} className="text-amber-400 fill-amber-400" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={16} className="text-indigo-600" />
          <span>Dark Mode</span>
        </>
      )}
    </motion.button>
  );
}
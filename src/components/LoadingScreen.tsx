import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 100 }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF5F0] via-[#FFEBF0] to-[#FFF9E6] text-[#4E342E] select-none">
      {/* Soft pastel ambient glow */}
      <div className="absolute w-80 h-80 rounded-full bg-blush-200/50 blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center max-w-sm px-6 text-center z-10"
      >
        {/* Animated Cute Puffy Cloud Icon */}
        <div className="relative mb-6">
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [-2, 2, -2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-cute-lg border-2 border-blush-200"
          >
            <span className="text-5xl">☁️</span>
          </motion.div>
          <div className="absolute -top-1 -right-1 text-2xl animate-spin">
            ✨
          </div>
        </div>

        {/* Loading text as requested */}
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-burgundy-700 tracking-wide mb-2">
          Preparing something for Sir ji… 🤭
        </h2>
        
        <p className="text-xs sm:text-sm text-warmBrown-600 font-sans font-medium mb-6">
          Setting up your colorful 3D universe 🌸
        </p>

        {/* Cute Pastel Progress Bar */}
        <div className="w-56 h-3 bg-white rounded-full overflow-hidden border-2 border-blush-200 p-0.5 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blush-400 via-burgundy-500 to-peach-400 rounded-full"
            initial={{ width: "15%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <span className="text-xs font-mono font-bold text-burgundy-600 mt-3">
          {progress}%
        </span>
      </motion.div>
    </div>
  );
};

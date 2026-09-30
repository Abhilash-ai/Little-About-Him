import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart, Sparkles } from 'lucide-react';
import { fireSubtleConfetti } from '../utils/confetti';
import { SITE_CONFIG } from '../data/content';

interface FinalSectionProps {
  onRestart: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ onRestart }) => {
  const punchline = SITE_CONFIG.finalPunchline;
  const [isHugged, setIsHugged] = useState(false);

  const handleRestartClick = () => {
    fireSubtleConfetti();
    onRestart();
  };

  const handleHugTap = () => {
    setIsHugged(true);
    fireSubtleConfetti();
    setTimeout(() => setIsHugged(false), 500);
  };

  return (
    <section id="final-punchline" className="py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Main Glassmorphism Punchline Card */}
        <div className="glass-pinterest w-full max-w-xl p-7 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] mb-10 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(232,160,175,0.25)] border border-white/95">
          {/* Subtle Decorative Tape */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 tape-translucent w-28 h-6 rounded-sm z-10" />

          {/* Soft ambient radial background glows */}
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#FFDAE0]/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[#FFE5D9]/40 blur-3xl pointer-events-none" />

          {/* Section Sub-header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-white text-xs font-mono font-bold text-[#E85D75] tracking-wider uppercase mb-5 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{punchline.preHeader}</span>
          </motion.div>

          {/* Part 1: "You're not my boyfriend," */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl sm:text-2xl font-serif text-neutral-800 font-semibold leading-relaxed mb-4"
          >
            {punchline.part1}
          </motion.p>

          {/* Playful Pause Indicator */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-1 my-3 text-neutral-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85D75]/60 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85D75]/60 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85D75]/60 animate-bounce" style={{ animationDelay: '300ms' }} />
          </motion.div>

          {/* Part 2: "but I'll still share “you're my saiyaan” reels with you. 😂😭🤭🙂↔️❤️" */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="text-lg sm:text-2xl font-serif text-neutral-800 font-medium leading-relaxed my-4"
          >
            {punchline.part2}
          </motion.p>

          {/* Final Line: "Because I like you. 😌🌻" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="my-7 p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-xs"
          >
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D96B5B] via-[#E85D75] to-[#B05B75] tracking-tight">
              {punchline.punchline}
            </h1>
          </motion.div>

          {/* Playful Stamp: "Usual Bubu behaviour™" */}
          <motion.button
            type="button"
            initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="rubber-stamp select-none text-xs sm:text-sm font-extrabold mb-8 cursor-pointer hover:scale-105 active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:outline-none"
            onClick={handleHugTap}
            aria-label="Usual Bubu behaviour stamp, tap for celebration"
            title="Click to seal Bubu's behaviour"
          >
            {punchline.behaviorStamp}
          </motion.button>

          {/* Subtle Dudu-Bubu hugging micro-interaction */}
          <motion.button
            type="button"
            onClick={handleHugTap}
            aria-label="Bubu and Dudu cuddle sticker, tap for hearts"
            animate={{
              y: [-3, 3, -3],
              scale: isHugged ? [1, 1.15, 1] : 1,
            }}
            transition={{
              y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              scale: { duration: 0.35, ease: "easeOut" },
            }}
            className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden bg-white/80 border-2 border-white shadow-md cursor-pointer relative group p-1 mb-6 block focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:outline-none"
            title="Bubu & Dudu (Tap for confetti!)"
          >
            <img
              src="./bubu_dudu_hug.jpg"
              alt="Dudu and Bubu hugging"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute -top-1 -right-1 p-1 bg-white rounded-full shadow-xs">
              <Heart className="w-3 h-3 text-[#E85D75] fill-current animate-pulse" />
            </div>
          </motion.button>

          {/* Closing & Signature */}
          <div className="pt-6 border-t border-white/80 flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-800">
              {punchline.closingSalutation}
            </h3>
            <span className="font-handwriting text-3xl sm:text-4xl text-[#E85D75] font-bold mt-1">
              {punchline.signature}
            </span>
          </div>
        </div>

        {/* Start over / Replay button */}
        <motion.button
          type="button"
          onClick={handleRestartClick}
          aria-label="Start over from the beginning"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-glass min-h-[48px] px-8 py-3.5 rounded-full text-neutral-900 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase cursor-pointer flex items-center gap-2.5 shadow-md mb-8 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:outline-none"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#E85D75] group-hover:-rotate-90 transition-transform duration-500" />
          <span>Start over ↻</span>
          <Heart className="w-3.5 h-3.5 text-[#E85D75] fill-current ml-1" />
        </motion.button>

        {/* Final tiny footer */}
        <div className="pt-4 border-t border-neutral-200/50 text-center px-4">
          <p className="font-mono text-[11px] sm:text-xs text-neutral-400">
            {punchline.footerText}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

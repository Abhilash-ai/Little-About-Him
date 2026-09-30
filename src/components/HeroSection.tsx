import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { fireSubtleConfetti } from '../utils/confetti';
import { SITE_CONFIG } from '../data/content';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [isHugClicked, setIsHugClicked] = useState(false);
  const dept = SITE_CONFIG.department;

  // 3D tactile tilt physics for Dudu-Bubu hugging visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-80, 80], [8, -8]);
  const rotateY = useTransform(mouseX, [-80, 80], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleHugClick = () => {
    setIsHugClicked(true);
    fireSubtleConfetti();
    setTimeout(() => setIsHugClicked(false), 500);
  };

  const handleEnter = () => {
    fireSubtleConfetti();
    setTimeout(() => {
      onExplore();
    }, 700);
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 text-center max-w-4xl mx-auto overflow-hidden">
      {/* Translucent Glass Department Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="glass-pinterest p-7 sm:p-14 rounded-[2.5rem] w-full max-w-2xl relative flex flex-col items-center shadow-[0_20px_60px_rgba(232,160,175,0.22)]"
      >
        {/* Subtle Decorative Tape at Top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 tape-translucent w-28 h-6 rounded-sm z-10" />

        {/* Department Emblems */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-2xl bg-white/80 border border-white flex items-center justify-center text-3xl shadow-sm mb-3">
            🏢
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E85D75] font-bold px-3 py-1 rounded-full bg-white/70 border border-white/80 shadow-xs">
            {dept.division}
          </span>
        </div>

        {/* Main Department Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-neutral-900 tracking-tight leading-tight my-2"
        >
          {dept.title}
        </motion.h1>

        {/* Personnel Attribution Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-4"
        >
          {/* Founded by Bubu */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
            <span className="text-[11px] font-sans text-neutral-400 uppercase tracking-wider font-semibold">Founded by</span>
            <span className="text-xs font-bold text-neutral-800">Bubu ({dept.founderFullName})</span>
          </div>

          <span className="text-neutral-300 hidden sm:inline">✦</span>

          {/* Dedicated to Dudu */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-[#FFDAE0]/50 to-[#FFE5D9]/50 border border-white shadow-xs">
            <span className="text-[11px] font-sans text-[#E85D75] uppercase tracking-wider font-bold">Dedicated to</span>
            <span className="text-xs font-bold text-[#A84A5B]">Dudu ({dept.dedicateeFullName})</span>
          </div>
        </motion.div>

        {/* The Big Department Statement */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-neutral-800 max-w-lg leading-snug my-2"
        >
          {dept.heroStatement}
        </motion.p>

        {/* Playful subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-handwriting text-2xl sm:text-3xl text-[#E85D75] font-semibold transform -rotate-1 mt-1 mb-2"
        >
          {dept.heroPlayfulSubtext}
        </motion.p>

        {/* Cute Dudu-Bubu Hugging Visual with Floating Animation and 3D Depth */}
        <div className="perspective-1000 my-4 sm:my-5 flex flex-col items-center select-none">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleHugClick}
            animate={{
              y: [-6, 6, -6],
              rotate: [-1, 1, -1],
              scale: isHugClicked ? [1, 1.1, 1] : 1,
            }}
            transition={{
              y: { repeat: Infinity, duration: 3.8, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
              scale: { duration: 0.4, ease: "easeOut" },
            }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="cursor-pointer group relative flex flex-col items-center"
            title="Bubu & Dudu cuddle (Click for affection ♡)"
          >
            {/* Soft Ambient Pastel Glow behind illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDAE0]/50 to-[#FFE5D9]/50 rounded-full blur-2xl transform scale-90 -z-10 group-hover:scale-110 transition-transform duration-500" />

            {/* Hugging Character Artwork Frame */}
            <div className="p-2 sm:p-2.5 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_15px_35px_rgba(232,160,175,0.28)] group-hover:shadow-[0_20px_45px_rgba(232,160,175,0.4)] transition-all duration-300">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-white/40">
                <img
                  src="/bubu_dudu_hug.jpg"
                  alt="Dudu and Bubu cuddling warmly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* "Bubu 🤍 Dudu" Glass Pill Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white shadow-xs text-xs font-sans font-bold text-[#8C4A3E]"
            >
              <span className="text-[#A84A5B]">Bubu</span>
              <Heart className="w-3.5 h-3.5 text-[#E85D75] fill-current animate-pulse" />
              <span className="text-[#8C4A3E]">Dudu</span>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleEnter}
          aria-label={dept.heroCta}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="btn-glass min-h-[48px] px-8 sm:px-10 py-4 rounded-full text-neutral-900 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase cursor-pointer flex items-center gap-2.5 mt-2 group shadow-sm focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:outline-none"
        >
          <span>{dept.heroCta}</span>
          <ArrowRight className="w-4 h-4 text-[#E85D75] group-hover:translate-x-1 transition-transform" />
          <Sparkles className="w-3.5 h-3.5 text-[#E85D75]" />
        </motion.button>
      </motion.div>
    </section>
  );
};

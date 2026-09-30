import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { fireSubtleConfetti } from '../utils/confetti';

export const SixMonthMilestoneSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const anniversary = SITE_CONFIG.serviceAnniversary;

  const toggleLetter = () => {
    if (!isOpen) {
      fireSubtleConfetti();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="milestone" className="py-24 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        {/* Date & Milestone Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 border border-white/90 shadow-xs text-xs font-serif font-bold text-[#8C4A3E] tracking-widest uppercase mb-3"
        >
          <Calendar className="w-3.5 h-3.5 text-[#E85D75]" />
          <span>{anniversary.date}</span>
        </motion.div>

        {/* Department Milestone Label */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-mono tracking-widest uppercase text-[#E85D75] font-bold mb-3 px-3 py-0.5 rounded-full bg-[#FFDAE0]/40 border border-[#FFC2CC]/60"
        >
          {anniversary.milestoneTag}
        </motion.span>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-7xl font-serif font-bold text-neutral-900 tracking-tight"
        >
          {anniversary.title}
        </motion.h2>
      </div>

      {/* Interactive Unfolding 3D Glass Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-pinterest w-full max-w-2xl mx-auto rounded-[2.5rem] overflow-hidden relative shadow-[0_25px_60px_rgba(232,160,175,0.22)]"
      >
        {/* Decorative Translucent Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 tape-translucent w-28 h-6 rounded-sm z-10" />

        {/* Card Header / Fold Flap */}
        <button
          type="button"
          onClick={toggleLetter}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fold letter to Sir ji" : "Unfold and read letter to Sir ji"}
          className="w-full text-left p-6 sm:p-8 bg-white/50 backdrop-blur-md border-b border-white/70 flex items-center justify-between cursor-pointer group hover:bg-white/75 transition-colors focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:outline-none"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FFDAE0] to-[#FFE5D9] flex items-center justify-center text-[#E85D75] shadow-xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-neutral-800 text-base sm:text-lg">
                  A Letter for Sir ji 💌
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFE5D9]/70 text-[10px] font-sans font-semibold text-[#8C4A3E]">
                  <Sparkles className="w-2.5 h-2.5 text-[#E85D75]" /> Anniversary Record
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                {isOpen ? "Click to fold letter" : "Click to unfold & read letter"}
              </p>
            </div>
          </div>

          <span aria-hidden="true" className="p-2 rounded-full text-neutral-400 group-hover:text-neutral-900 transition-colors">
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </span>
        </button>

        {/* Letter Body */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-8 sm:p-12 text-left space-y-6 text-neutral-700 bg-white/30 backdrop-blur-xs">
                <p className="font-serif text-2xl sm:text-3xl text-neutral-900 font-bold mb-4">
                  {anniversary.title}
                </p>

                {anniversary.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="font-sans text-neutral-700 text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-8 mt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row items-baseline justify-between gap-4">
                  <div className="font-handwriting text-3xl sm:text-4xl text-[#E85D75] font-bold">
                    {anniversary.closing}
                  </div>
                  <div className="font-serif font-bold text-neutral-900 text-lg">
                    {anniversary.signature}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

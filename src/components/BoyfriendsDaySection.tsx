import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const BoyfriendsDaySection: React.FC = () => {
  const bf = SITE_CONFIG.boyfriendsDay;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-xs uppercase tracking-widest text-[#E85D75] font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-xs flex items-center gap-1.5"
        >
          <Heart className="w-3.5 h-3.5 text-[#E85D75] fill-current" />
          <span>07 · Special Occasion</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 tracking-tight mb-3"
        >
          {bf.heading}
        </motion.h2>
        <p className="text-sm sm:text-base text-neutral-500 font-sans max-w-md italic">
          {bf.subheading}
        </p>
      </div>

      {/* Frosted Glass Tribute Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
        className="glass-pinterest w-full max-w-lg mx-auto p-6 sm:p-12 rounded-[2.5rem] relative overflow-hidden text-center shadow-[0_25px_60px_rgba(232,160,175,0.2)]"
      >
        {/* Decorative Translucent Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 tape-translucent w-28 h-6 rounded-sm z-10" />

        <div className="space-y-3 font-serif text-lg sm:text-xl text-neutral-800 leading-relaxed font-normal">
          {bf.lines.map((line, idx) => (
            <p key={idx} className={idx === bf.lines.length - 1 ? "font-semibold text-neutral-900 text-xl sm:text-2xl mt-4" : ""}>
              {line}
            </p>
          ))}
        </div>

        <div className="mt-7 pt-5 border-t border-white/80 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E85D75]" />
          <span className="font-handwriting text-2xl sm:text-3xl text-[#E85D75] font-bold">
            And making an entire website about it. 🤭
          </span>
        </div>
      </motion.div>
    </section>
  );
};

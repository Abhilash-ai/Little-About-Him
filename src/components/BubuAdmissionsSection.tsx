import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MessageCircleHeart } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const BubuAdmissionsSection: React.FC = () => {
  const admissions = SITE_CONFIG.bubuAdmissions;

  return (
    <section id="admissions" className="py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-[#E85D75] font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/90 shadow-xs flex items-center gap-1.5"
        >
          <MessageCircleHeart className="w-3.5 h-3.5 text-[#E85D75]" />
          <span>Confidential Admission</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 tracking-tight mb-3"
        >
          {admissions.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-neutral-500 font-sans max-w-md italic"
        >
          “Okay fine… Bubu likes being around Dudu a LOT.” 😭🤭
        </motion.p>
      </div>

      {/* Progressive Scroll-Revealed Confession Cards */}
      <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
        {admissions.items.map((item, index) => {
          if (!item.isSpecial) {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-pinterest p-5 sm:p-7 rounded-[2rem] relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_10px_30px_rgba(232,160,175,0.14)] border border-white/90 group"
              >
                {/* Subtle soft gradient glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFDAE0]/30 to-[#FFE5D9]/20 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-white flex items-center justify-center text-xs font-mono font-bold text-[#E85D75] shrink-0 shadow-2xs mt-0.5 sm:mt-0">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-neutral-800 leading-snug">
                      {item.text}
                    </h3>
                  </div>
                </div>

                {item.subnote && (
                  <span className="text-[11px] font-sans text-neutral-400 self-end sm:self-center font-medium bg-white/50 px-2.5 py-1 rounded-full border border-white/70">
                    {item.subnote}
                  </span>
                )}
              </motion.div>
            );
          }

          // Special 4th line: "And I really, really love being in your arms. 🤭😩❤️"
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.85,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-pinterest p-6 sm:p-9 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(232,160,175,0.28)] border-2 border-white/95 bg-gradient-to-br from-white/90 via-white/80 to-[#FFDAE0]/30"
            >
              {/* Decorative Translucent Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 tape-translucent w-24 h-5 rounded-sm z-10" />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFDAE0]/60 text-[11px] font-sans font-bold text-[#A84A5B] border border-[#FFC2CC] mb-2">
                    <Sparkles className="w-3 h-3 text-[#E85D75]" />
                    <span>The Big Admission</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-snug">
                    {item.text}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-neutral-500 pt-1 font-medium">
                    {item.subnote}
                  </p>
                </div>

                {/* Tiny Dudu-Bubu Hugging Illustration beside the final line */}
                <motion.div
                  animate={{
                    y: [-4, 4, -4],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.6,
                    ease: "easeInOut",
                  }}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-white/70 border-2 border-white shadow-md shrink-0 p-1.5 relative select-none"
                >
                  <img
                    src="/bubu_dudu_hug.jpg"
                    alt="Bubu and Dudu hugging closely"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-1.5 -right-1.5 p-1.5 rounded-full bg-white shadow-xs">
                    <Heart className="w-3.5 h-3.5 text-[#E85D75] fill-current animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* End Note */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 sm:mt-12 text-center"
      >
        <span className="font-handwriting text-2xl sm:text-3xl text-[#E85D75] font-bold inline-block transform -rotate-1 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-xs">
          {admissions.closingNote}
        </span>
      </motion.div>
    </section>
  );
};

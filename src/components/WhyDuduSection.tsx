import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { fireSubtleConfetti } from '../utils/confetti';

export const WhyDuduSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    const isOpening = expandedId !== id;
    setExpandedId(isOpening ? id : null);
    if (isOpening) {
      fireSubtleConfetti();
    }
  };

  // Pastel styles for each investigation exhibit
  const pastelAccents = [
    {
      badge: "bg-[#FFDAE0]/70 text-[#A84A5B] border-[#FFC2CC]",
      glow: "hover:shadow-[0_20px_40px_rgba(255,182,193,0.35)]",
      dot: "#E85D75",
    },
    {
      badge: "bg-[#FFE5D9]/70 text-[#9C533A] border-[#FFCCB8]",
      glow: "hover:shadow-[0_20px_40px_rgba(255,188,160,0.35)]",
      dot: "#D96B5B",
    },
    {
      badge: "bg-[#FFF1C5]/70 text-[#8C6B1F] border-[#FFE699]",
      glow: "hover:shadow-[0_20px_40px_rgba(255,230,153,0.35)]",
      dot: "#D49E24",
    },
    {
      badge: "bg-[#E8D7F1]/70 text-[#6B4E7D] border-[#D4BBE3]",
      glow: "hover:shadow-[0_20px_40px_rgba(216,180,226,0.35)]",
      dot: "#8E5AA3",
    },
    {
      badge: "bg-[#D8E2DC]/70 text-[#3F6352] border-[#C3D4CA]",
      glow: "hover:shadow-[0_20px_40px_rgba(181,214,178,0.35)]",
      dot: "#4A7C59",
    },
    {
      badge: "bg-[#D0E8FF]/70 text-[#2B5E8A] border-[#B5DAFF]",
      glow: "hover:shadow-[0_20px_40px_rgba(186,230,253,0.35)]",
      dot: "#3884B8",
    },
  ];

  return (
    <section id="why-dudu" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[#E85D75] font-semibold mb-3 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 shadow-xs flex items-center gap-1.5"
        >
          <Search className="w-3 h-3 text-[#E85D75]" />
          <span>02 · Department Investigation</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-neutral-900 tracking-tight mb-4"
        >
          WHY DUDU?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-neutral-500 font-sans max-w-lg italic"
        >
          “A very serious investigation conducted by the Department of Happiness.”
        </motion.p>
      </div>

      {/* 6 Pinterest-style Investigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {SITE_CONFIG.whyDuduInvestigation.map((card, idx) => {
          const isExpanded = expandedId === card.id;
          const style = pastelAccents[idx % pastelAccents.length];

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => toggleCard(card.id)}
              className={`glass-pinterest p-6 sm:p-7 rounded-[2rem] cursor-pointer flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${style.glow} ${
                isExpanded ? 'bg-white/90 ring-2 ring-white shadow-lg' : ''
              }`}
            >
              {/* Soft decorative glow */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: style.dot }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                    {card.iconTag}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs border border-white flex items-center justify-center text-neutral-500 group-hover:scale-110 transition-transform shadow-xs">
                    {isExpanded ? (
                      <Minus className="w-3.5 h-3.5 text-[#E85D75]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-neutral-500" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 mb-1 group-hover:text-[#E85D75] transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans mt-1">
                  {card.frontNote}
                </p>
              </div>

              {/* Revealable Affectionate Finding */}
              <AnimatePresence>
                {isExpanded ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden pt-4 mt-4 border-t border-white/80"
                  >
                    <p className="text-sm font-sans text-neutral-700 leading-relaxed italic bg-white/50 p-3.5 rounded-2xl border border-white/70">
                      "{card.revealedMessage}"
                    </p>
                  </motion.div>
                ) : (
                  <div className="mt-6 pt-3 border-t border-white/50 flex items-center justify-between text-[11px] text-neutral-400 font-sans">
                    <span className="flex items-center gap-1 group-hover:text-neutral-700 transition-colors">
                      <Sparkles className="w-3 h-3 text-[#E85D75]" /> Click to inspect finding
                    </span>
                    <span className="font-mono text-neutral-300">✦</span>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

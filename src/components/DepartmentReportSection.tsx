import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, RefreshCw, Activity, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { fireSubtleConfetti } from '../utils/confetti';

export const DepartmentReportSection: React.FC = () => {
  const [recalcCount, setRecalcCount] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const report = SITE_CONFIG.departmentReport;

  const funResponses = [
    "Recalculating with quantum accuracy... Yep, Dudu is still 100% adorable. 🤍",
    "Running 10,000 simulations... Confirmed: Bubu has zero poker face around Dudu. 🤭",
    "Audit results finalized: Happiness generated exceeds system buffer limits. 📈❤️",
    "Notice: Attempt to pretend Bubu is normal about Dudu failed with code 0.4%. 😂",
    "System check: Dudu continues to be the chief reason for this department. 🏢🤍",
  ];

  const handleRecalculate = () => {
    setIsCalculating(true);
    setToastMessage("Crunching the numbers with Department precision...");
    setTimeout(() => {
      setIsCalculating(false);
      setToastMessage(funResponses[recalcCount % funResponses.length]);
      setRecalcCount((prev) => prev + 1);
      fireSubtleConfetti();
    }, 600);
  };

  const metricGradients = [
    "bg-gradient-to-r from-[#FF9AA2] to-[#FFB7B2]", // coral blush
    "bg-gradient-to-r from-[#FFE699] to-[#FFD166]", // butter yellow
    "bg-gradient-to-r from-[#FFB7C5] via-[#E85D75] to-[#D8B4E2]", // emotional peak gradient
    "bg-gradient-to-r from-[#B5D6B2] to-[#A2D2FF]", // sage to baby blue
  ];

  return (
    <section id="report" className="py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-xs uppercase tracking-widest text-[#E85D75] font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-xs flex items-center gap-1.5"
        >
          <BarChart3 className="w-3 h-3 text-[#E85D75]" />
          <span>05 · Department Analytics</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 tracking-tight mb-4"
        >
          {report.heading} 📊
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-neutral-500 font-sans max-w-md"
        >
          {report.subtitle}
        </motion.p>
      </div>

      {/* Modern SaaS-meets-Cute Frosted Glass Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="glass-pinterest w-full max-w-2xl mx-auto p-6 sm:p-12 rounded-[2.5rem] relative shadow-[0_20px_50px_rgba(232,160,175,0.2)]"
      >
        {/* Decorative Translucent Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 tape-translucent w-28 h-6 rounded-sm z-10" />

        {/* Dashboard Top System Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/80 pb-5 mb-8 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600">
              METRIC STATUS: 100% NOMINAL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/80 text-neutral-500 border border-white font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> AUDIT PASSED
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFDAE0]/60 text-[#A84A5B] border border-[#FFC2CC] font-bold">
              BUBU-VERIFIED
            </span>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-7 sm:space-y-8 text-left">
          {report.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-2.5">
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-sm sm:text-base font-sans font-medium text-neutral-800 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#E85D75]" />
                  {metric.label}
                </span>
                <span className="font-mono font-bold text-neutral-900 text-sm sm:text-base shrink-0">
                  {metric.displayValue}
                </span>
              </div>

              {/* Minimalist Pastel Pill Meter */}
              <div className="w-full h-3 rounded-full bg-white/80 border border-white/90 p-0.5 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${Math.max(metric.percentage, 1)}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: idx * 0.12, ease: "easeOut" }}
                  className={`h-full rounded-full shadow-xs ${metricGradients[idx % metricGradients.length]}`}
                />
              </div>

              <p className="text-xs text-neutral-400 font-sans italic">
                {metric.comment}
              </p>
            </div>
          ))}
        </div>

        {/* Recalculate Metric Trigger (min-h-[44px] for mobile tap) */}
        <div className="mt-9 pt-6 border-t border-white/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleRecalculate}
            disabled={isCalculating}
            aria-label="Recalculate Department stats"
            className="btn-glass min-h-[44px] w-full sm:w-auto px-6 py-2.5 rounded-full text-neutral-800 text-xs font-sans font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:outline-none"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#E85D75] ${isCalculating ? 'animate-spin' : ''}`} />
            <span>{isCalculating ? "Auditing metrics..." : "Recalculate Department stats ↻"}</span>
          </button>

          {toastMessage && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-sans text-[#E85D75] font-semibold text-center sm:text-right"
            >
              {toastMessage}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

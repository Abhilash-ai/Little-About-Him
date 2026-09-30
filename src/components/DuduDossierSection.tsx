import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShieldCheck, Sparkles, QrCode } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { fireSubtleConfetti } from '../utils/confetti';

interface DuduDossierSectionProps {
  photoUrl: string;
}

export const DuduDossierSection: React.FC<DuduDossierSectionProps> = ({
  photoUrl,
}) => {
  const dossier = SITE_CONFIG.duduDossier;
  const [isStamped, setIsStamped] = useState(false);

  // Mouse tilt physics for 3D tactile badge
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSealClick = () => {
    setIsStamped(true);
    fireSubtleConfetti();
    setTimeout(() => setIsStamped(false), 500);
  };

  return (
    <section id="dossier" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[#E85D75] font-semibold mb-3 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 shadow-xs"
        >
          01 · Personnel File
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-neutral-900 tracking-tight mb-3"
        >
          DUDU DOSSIER 🗂️
        </motion.h2>
        <p className="text-sm sm:text-base text-neutral-500 font-sans max-w-md">
          Official security clearance & credentials registered at the Department of Happiness.
        </p>
      </div>

      {/* 3D Tilt ID Card Container */}
      <div className="perspective-1000 flex justify-center">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full max-w-md glass-pinterest rounded-[2.5rem] p-6 sm:p-8 relative shadow-[0_25px_60px_rgba(232,160,175,0.25)] border border-white/90 select-none"
        >
          {/* Lanyard Hole & Clip Simulation */}
          <div className="flex flex-col items-center -mt-10 sm:-mt-12 mb-4">
            <div className="w-12 h-4 rounded-full bg-neutral-300/80 border border-white shadow-inner flex items-center justify-center">
              <div className="w-6 h-1.5 rounded-full bg-neutral-400" />
            </div>
            <div className="w-16 h-2 bg-gradient-to-r from-[#FFDAE0] to-[#FFE5D9] rounded-b-sm border-x border-b border-white shadow-xs" />
          </div>

          {/* Card Top Banner */}
          <div className="flex items-center justify-between border-b border-white/80 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏢</span>
              <div>
                <h4 className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#E85D75]">
                  Dept. of Happiness
                </h4>
                <p className="text-xs font-serif font-bold text-neutral-800">
                  OFFICIAL ACCESS PASS
                </p>
              </div>
            </div>

            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ACTIVE
            </span>
          </div>

          {/* Photo & Identity Section */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-6">
            {/* 3D Photo Frame */}
            <div className="relative group select-none">
              <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-neutral-100 border-2 border-white shadow-md relative">
                <img
                  src={photoUrl}
                  alt={dossier.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-2 inset-x-0 text-center">
                  <span className="text-[10px] font-mono font-semibold text-white/90 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                    ID: {dossier.nickname}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Profile Highlights */}
            <div className="flex-1 w-full space-y-2 text-left">
              <div className="bg-white/50 p-2.5 rounded-xl border border-white/70">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block font-bold">
                  Official Name
                </span>
                <span className="text-base font-serif font-bold text-neutral-900">
                  {dossier.name}
                </span>
              </div>

              <div className="bg-white/50 p-2.5 rounded-xl border border-white/70">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block font-bold">
                  Designation / Role
                </span>
                <span className="text-sm font-sans font-bold text-[#E85D75]">
                  {dossier.position}
                </span>
              </div>

              <div className="bg-white/50 p-2.5 rounded-xl border border-white/70">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block font-bold">
                  Assigned Bubu
                </span>
                <span className="text-sm font-sans font-semibold text-neutral-800">
                  {dossier.assignedBubu}
                </span>
              </div>
            </div>
          </div>

          {/* Dossier Field Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6 text-left">
            <div className="bg-white/60 p-3 rounded-2xl border border-white/80">
              <span className="text-[10px] uppercase font-mono text-neutral-400 block font-semibold">
                Status Level
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-neutral-800 flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E85D75]" />
                {dossier.status}
              </span>
            </div>

            <div className="bg-white/60 p-3 rounded-2xl border border-white/80">
              <span className="text-[10px] uppercase font-mono text-neutral-400 block font-semibold">
                Happiness Output
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#E85D75] flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                {dossier.happinessLevel}
              </span>
            </div>
          </div>

          {/* Official Seal / Rubber Stamp */}
          <div className="pt-4 border-t border-white/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-neutral-400">
              <QrCode className="w-8 h-8 opacity-60" />
              <div className="text-left font-mono text-[9px] leading-tight">
                <div>SERIAL: {dossier.badgeId}</div>
                <div>AUTH: BUBU-01</div>
              </div>
            </div>

            <motion.div
              onClick={handleSealClick}
              animate={isStamped ? { scale: [1, 1.25, 1], rotate: [-10, -4, -8] } : { rotate: -8 }}
              transition={{ duration: 0.3 }}
              className="rubber-stamp text-[11px] sm:text-xs font-extrabold cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              title="Click to stamp approval"
            >
              {dossier.officialSeal}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { DuduDossierSection } from './components/DuduDossierSection';
import { WhyDuduSection } from './components/WhyDuduSection';
import { BubuAdmissionsSection } from './components/BubuAdmissionsSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { DepartmentReportSection } from './components/DepartmentReportSection';
import { SixMonthMilestoneSection } from './components/SixMonthMilestoneSection';
import { BoyfriendsDaySection } from './components/BoyfriendsDaySection';
import { FinalSection } from './components/FinalSection';
import { SITE_CONFIG } from './data/content';
import type { PhotoItem } from './data/content';

export const App: React.FC = () => {
  const [photos] = useState<PhotoItem[]>(SITE_CONFIG.photos);

  const handleExplore = () => {
    const el = document.getElementById('dossier');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-[#382A24] selection:bg-[#E85D75] selection:text-white pinterest-bg overflow-x-hidden">
      {/* Floating Department Header & Lo-fi Music Player */}
      <HeaderNav />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Hero: Department of Happiness Glass Sign & Dudu-Bubu Hugging Visual */}
        <HeroSection onExplore={handleExplore} />

        {/* Section 01: DUDU DOSSIER 🗂️ (Interactive Employee ID Card) */}
        <DuduDossierSection
          photoUrl={SITE_CONFIG.duduDossier.photoUrl}
        />

        {/* Section 02: WHY DUDU? (Department Investigation Cards) */}
        <WhyDuduSection />

        {/* Section 03: A FEW THINGS BUBU HAS TO ADMIT 🤭 (Reluctant Sweet Confessions) */}
        <BubuAdmissionsSection />

        {/* Section 04: MY FAVOURITE PICTURES OF DUDU 🤍 (Asymmetric Floating Lookbook) */}
        <PhotoGallerySection
          photos={photos}
        />

        {/* Section 05: DUDU HAPPINESS REPORT 📊 (SaaS-meets-Cute Dashboard) */}
        <DepartmentReportSection />

        {/* Section 06: 6 MONTHS OF US. ❤️ (08 · September · 2026 Milestone Letter) */}
        <SixMonthMilestoneSection />

        {/* Section 07: HAPPY BOYFRIEND'S DAY, DUDU 🤍 */}
        <BoyfriendsDaySection />

        {/* Section 08: ONE SMALL THING… 🤭 (The Final Reels Punchline & Replay) */}
        <FinalSection onRestart={handleRestart} />
      </main>
    </div>
  );
};

export default App;

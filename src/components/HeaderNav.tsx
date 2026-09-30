import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { ambientSound } from '../utils/audio';

export const HeaderNav: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const togglePlay = () => {
    if (isPlaying) {
      ambientSound.pause();
      setIsPlaying(false);
    } else {
      ambientSound.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const muted = ambientSound.toggleMute();
    setIsMuted(muted);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-3 sm:px-8 py-3 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Department of Happiness Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(232,160,175,0.15)] text-xs font-sans font-medium text-neutral-700">
          <span className="text-sm">🏢</span>
          <span className="font-semibold tracking-tight text-neutral-900 hidden xs:inline">Dept. of Happiness</span>
          <span className="font-semibold tracking-tight text-neutral-900 xs:hidden">DOH</span>
          <span className="text-neutral-300">|</span>
          <span className="text-[#E85D75] font-semibold">Bubu & Dudu</span>
        </div>

        {/* Right: Quick Links & Audio Controller */}
        <div className="flex items-center gap-2">
          {/* Quick links on desktop */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(232,160,175,0.15)] text-xs font-sans font-medium text-neutral-600">
            <button
              onClick={() => scrollTo('dossier')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors cursor-pointer"
            >
              Dossier
            </button>
            <button
              onClick={() => scrollTo('why-dudu')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors cursor-pointer"
            >
              Why Dudu
            </button>
            <button
              onClick={() => scrollTo('admissions')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors cursor-pointer text-[#E85D75] font-medium"
            >
              Admit 🤭
            </button>
            <button
              onClick={() => scrollTo('photos')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors cursor-pointer"
            >
              Photos
            </button>
            <button
              onClick={() => scrollTo('report')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors cursor-pointer"
            >
              Report
            </button>
            <button
              onClick={() => scrollTo('milestone')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors font-semibold text-[#E85D75] cursor-pointer"
            >
              6 Months ❤️
            </button>
            <button
              onClick={() => scrollTo('final-punchline')}
              className="px-2.5 py-1 rounded-full hover:text-neutral-900 hover:bg-white/80 transition-colors cursor-pointer"
            >
              Reels 🤭
            </button>
          </nav>

          {/* Cute Music Controller */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(232,160,175,0.15)]">
            <button
              onClick={togglePlay}
              className="min-h-[44px] sm:min-h-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-sans font-medium transition-all cursor-pointer shadow-xs active:scale-95"
              title={isPlaying ? "Pause music" : "Play soft piano chimes"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#FFB7C5]" />
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 bg-[#FFB7C5] h-2 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 bg-[#FFB7C5] h-2.5 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-0.5 bg-[#FFB7C5] h-1.5 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-white fill-current ml-0.5" />
                  <span className="hidden sm:inline text-xs text-white">Music ♡</span>
                </>
              )}
            </button>

            {isPlaying && (
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#E85D75]" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

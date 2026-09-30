import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface SceneMeta {
  id: number;
  title: string;
  shortTitle: string;
}

export const SCENES: SceneMeta[] = [
  { id: 0, title: "Cute Welcome World 🌸", shortTitle: "Start" },
  { id: 1, title: "Your Little World 🎀", shortTitle: "World" },
  { id: 2, title: "So… Why This? 🤭", shortTitle: "Why" },
  { id: 3, title: "Favourite Pictures 📸", shortTitle: "Photos" },
  { id: 4, title: "6 Months of Us ❤️", shortTitle: "6 Months" },
  { id: 5, title: "Things I Like About You 🌷", shortTitle: "Garden" },
  { id: 6, title: "Serious Research 🔬", shortTitle: "Research" },
  { id: 7, title: "Official Notice 📜", shortTitle: "Notice" },
  { id: 8, title: "Final Garden ✨", shortTitle: "End" },
];

interface NavigationHUDProps {
  currentScene: number;
  totalScenes: number;
  onSelectScene: (sceneIndex: number) => void;
  onNext: () => void;
  onPrev: () => void;
  hasEntered: boolean;
}

export const NavigationHUD: React.FC<NavigationHUDProps> = ({
  currentScene,
  totalScenes,
  onSelectScene,
  onNext,
  onPrev,
  hasEntered,
}) => {
  if (!hasEntered && currentScene === 0) return null;

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 flex flex-col items-center pointer-events-none px-4">
      {/* Active Scene Indicator Pill */}
      <motion.div
        key={currentScene}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-2 px-4 py-1 rounded-full bg-white/95 border-2 border-blush-200 text-[11px] font-sans font-bold text-burgundy-700 tracking-wider uppercase shadow-cute"
      >
        <span className="text-blush-500 mr-1.5 font-extrabold">0{currentScene}</span>
        <span>{SCENES[currentScene]?.title || "Journey"}</span>
      </motion.div>

      {/* Main navigation controls bar (Pastel White Pill) */}
      <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-5 py-2 rounded-full bg-white/95 hover:bg-white border-2 border-blush-200 shadow-cute-lg pointer-events-auto transition-all">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentScene <= 0}
          className={`p-2 rounded-full transition-all ${
            currentScene <= 0
              ? 'text-warmBrown-300 cursor-not-allowed opacity-40'
              : 'text-burgundy-700 hover:bg-blush-100 active:scale-95 cursor-pointer'
          }`}
          title="Previous scene (Left Arrow)"
          aria-label="Previous scene"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scene Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-1">
          {SCENES.map((scene) => {
            const isActive = scene.id === currentScene;
            return (
              <button
                key={scene.id}
                onClick={() => onSelectScene(scene.id)}
                className="group relative py-2 px-1 focus:outline-none cursor-pointer"
                title={scene.title}
                aria-label={`Go to ${scene.title}`}
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-7 sm:w-9 bg-gradient-to-r from-blush-400 via-burgundy-500 to-peach-400 shadow-sm'
                      : 'w-2.5 bg-blush-200 group-hover:bg-blush-300 group-hover:w-3.5'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentScene >= totalScenes - 1}
          className={`p-2 rounded-full transition-all ${
            currentScene >= totalScenes - 1
              ? 'text-warmBrown-300 cursor-not-allowed opacity-40'
              : 'text-burgundy-700 hover:bg-blush-100 active:scale-95 cursor-pointer'
          }`}
          title="Next scene (Right Arrow)"
          aria-label="Next scene"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

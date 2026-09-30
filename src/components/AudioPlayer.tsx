import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { ambientSound } from '../utils/audio';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

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

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      {/* Tooltip hint on hover */}
      {showTooltip && (
        <div className="hidden sm:block px-3.5 py-1.5 rounded-full text-xs font-sans font-bold text-burgundy-700 bg-white/95 border-2 border-blush-200 shadow-cute animate-fade-in">
          {isPlaying ? (isMuted ? "Audio muted" : "Playing sweet piano chimes 🌸") : "Play cute music 🎵"}
        </div>
      )}

      {/* Main player pill */}
      <div 
        className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 hover:bg-white border-2 border-blush-200 shadow-cute transition-all"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blush-400 to-burgundy-500 hover:from-blush-500 hover:to-burgundy-600 text-white text-xs font-sans font-bold transition-all shadow-sm cursor-pointer"
          title={isPlaying ? "Pause music" : "Play ambient music"}
          aria-label={isPlaying ? "Pause music" : "Play ambient music"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-white" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 bg-white h-2 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 bg-white h-3 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 bg-white h-1.5 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
              <span className="hidden sm:inline text-xs text-white">Music 🎵</span>
            </>
          )}
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full text-warmBrown-600 hover:text-burgundy-600 hover:bg-blush-100 transition-colors cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-burgundy-600" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-warmBrown-600" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

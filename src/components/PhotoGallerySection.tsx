import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Camera } from 'lucide-react';
import type { PhotoItem } from '../data/content';
import { fireSubtleConfetti } from '../utils/confetti';

interface PhotoGallerySectionProps {
  photos: PhotoItem[];
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  photos,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const isNowLiked = !likedPhotos[id];
    setLikedPhotos((prev) => ({ ...prev, [id]: isNowLiked }));
    if (isNowLiked) {
      fireSubtleConfetti();
    }
  };

  return (
    <section id="photos" className="py-20 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-xs uppercase tracking-widest text-[#E85D75] font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-xs flex items-center gap-1.5"
        >
          <Camera className="w-3 h-3 text-[#E85D75]" />
          <span>04 · Visual Archive</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 tracking-tight mb-4"
        >
          MY FAVOURITE PICTURES OF DUDU 🤍
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-neutral-500 font-sans max-w-md mb-6"
        >
          No couple photos. Just a floating physical lookbook of Dudu curated by Bubu.
        </motion.p>
      </div>

      {/* Asymmetric Pinterest Floating Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {photos.slice(0, 6).map((photo, index) => {
          const tilts = [-2, 2.2, -1.5, 1.8, -2.5, 1.6];
          const tilt = photo.tiltDeg ?? tilts[index % tilts.length];
          const isLiked = !!likedPhotos[photo.id];

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, rotateZ: 0, scale: 1.02 }}
              style={{ rotate: `${tilt}deg` }}
              onClick={() => setSelectedPhoto(photo)}
              className="polaroid-card p-4 pb-6 rounded-2xl cursor-pointer group flex flex-col relative"
            >
              {/* Translucent washi tape accent at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 tape-translucent w-20 h-5 rounded-sm z-10" />

              {/* Photo Frame */}
              <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100 mb-4 relative shadow-inner">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Heart Reaction Badge (minimum 44px tap target) */}
                <button
                  onClick={(e) => toggleLike(e, photo.id)}
                  className={`absolute top-2 right-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 shadow-sm cursor-pointer ${
                    isLiked
                      ? 'bg-[#E85D75] text-white scale-105 shadow-[0_0_12px_rgba(232,93,117,0.5)]'
                      : 'bg-white/80 text-neutral-400 hover:text-[#E85D75] hover:bg-white'
                  }`}
                  title={isLiked ? "Saved to Bubu's favorites!" : "Like this photo"}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Captions */}
              <div className="text-center mt-auto px-2">
                <p className="font-handwriting text-2xl text-neutral-800 leading-tight font-semibold">
                  "{photo.caption}"
                </p>
                {photo.subcaption && (
                  <p className="text-[11px] font-sans text-neutral-400 mt-1.5 uppercase tracking-wider font-medium">
                    {photo.subcaption}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/65 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-sm sm:max-w-md w-full glass-pinterest p-5 rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (min 44px tap target) */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-3 -right-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 mb-4 shadow-sm">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center pb-2">
                <h3 className="font-handwriting text-3xl text-neutral-900 font-bold">
                  "{selectedPhoto.caption}"
                </h3>
                {selectedPhoto.subcaption && (
                  <p className="font-sans text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">
                    {selectedPhoto.subcaption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

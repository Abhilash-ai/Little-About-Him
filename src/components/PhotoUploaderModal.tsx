import React from 'react';
import { X, Image as ImageIcon, Sparkles, Upload } from 'lucide-react';
import type { PhotoItem } from '../data/content';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  onUpdatePhoto: (id: string, newUrl: string, newCaption?: string) => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({
  isOpen,
  onClose,
  photos,
  onUpdatePhoto,
}) => {
  if (!isOpen) return null;

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      onUpdatePhoto(id, objectUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col rounded-3xl bg-white border-4 border-blush-200 shadow-cute-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-blush-100 bg-blush-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blush-200 text-burgundy-700">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-burgundy-700">
                Prabhat's Photo Manager 📸
              </h3>
              <p className="text-xs text-warmBrown-600 font-sans">
                Upload your favourite photos of Prabhat to preview them live in the 3D polaroids!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-warmBrown-500 hover:text-burgundy-700 hover:bg-blush-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Photos */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="p-3.5 rounded-2xl bg-honey-50 border-2 border-honey-200 text-xs text-warmBrown-800 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
            <div>
              <strong>Quick Note for Abhilash:</strong> Any photos you pick here are previewed directly inside the 3D polaroids in real-time. To make them permanent across devices, place them in the project folder and edit <code className="bg-white px-1.5 py-0.5 rounded border border-honey-200 text-burgundy-700 font-bold">src/data/content.ts</code>!
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {photos.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 border-2 border-blush-100 hover:border-blush-300 transition-all shadow-sm"
              >
                {/* Polaroid thumbnail */}
                <div className="relative w-16 h-20 rounded-md bg-white p-1 shadow-sm shrink-0 flex flex-col overflow-hidden border border-zinc-200">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-14 object-cover rounded-sm"
                  />
                  <div className="text-[7px] text-zinc-600 truncate font-handwriting mt-auto text-center font-bold">
                    #{index + 1}
                  </div>
                </div>

                {/* Info & upload button */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-handwriting text-burgundy-700 truncate font-bold">
                    "{item.caption}"
                  </h4>
                  <p className="text-[11px] text-warmBrown-500 truncate mb-2">
                    {item.subcaption || `Photo slot ${index + 1}`}
                  </p>

                  <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-blush-100 text-burgundy-700 text-xs font-bold border border-blush-300 cursor-pointer transition-colors shadow-sm">
                    <Upload className="w-3 h-3 text-burgundy-600" />
                    <span>Upload photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(item.id, e)}
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3 border-t-2 border-blush-100 bg-blush-50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blush-400 via-burgundy-500 to-peach-400 hover:from-blush-500 hover:to-peach-500 text-white text-xs font-bold transition-all shadow-cute cursor-pointer"
          >
            Done & Return to 3D Space ✨
          </button>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Lightbox } from "./Lightbox";

interface PhotoGalleryProps {
  photos: string[];
  eventName: string;
}

export function PhotoGallery({ photos, eventName }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="photo-strip">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group flex-shrink-0 snap-start relative w-64 md:w-80 aspect-[4/3] rounded-xl overflow-hidden border border-border/30 hover:border-foreground/30 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={photo}
              alt={`${eventName} photo ${index + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Photo
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        photos={photos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
        eventName={eventName}
      />
    </>
  );
}

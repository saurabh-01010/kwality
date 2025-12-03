import React, { useState } from 'react';
import { galleryItems } from '../data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-maroon tracking-[0.2em] uppercase text-sm font-medium">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 mb-4">Gallery</h2>
          <div className="w-16 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden cursor-pointer aspect-square bg-gray-200"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-maroon/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-serif text-lg italic border border-gold px-4 py-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-2"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={galleryItems[selectedImageIndex].src} 
              alt={galleryItems[selectedImageIndex].caption} 
              className="max-w-full max-h-[80vh] object-contain border-4 border-gold shadow-2xl"
            />
            <p className="text-center text-gold font-serif text-xl mt-4">
              {galleryItems[selectedImageIndex].caption}
            </p>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-2"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
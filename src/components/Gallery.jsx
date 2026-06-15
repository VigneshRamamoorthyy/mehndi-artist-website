import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';


// Array of images so they can be easily replaced later
const galleryImages = [
  { id: 1, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781276485/portfolio1_yuritq.png', alt: 'Custom bridal mehndi design' },
  { id: 2, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781277003/porttfolio_4_amsvt9.png', alt: 'Festival mehndi design' },
  { id: 3, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781287007/portfolio6_g1zxmn.png', alt: 'Engagement mehndi design' },
  { id: 4, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781269577/portfolio5_b8g3cq.png', alt: 'Guest mehndi design 1' },
  { id: 5, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781286115/portfolio5_jys72b.png', alt: 'Baby shower mehndi design' },
  { id: 6, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781275665/portfolio2_ob2omd.png', alt: 'Bridal mehndi design 2' },
  { id: 7, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781366417/portfolio_8_ct9qgi.png', alt: 'Traditional mehndi design' },
  { id: 8, src: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781365895/portfolio7_feagyz.png', alt: 'Modern mehndi design' },
];

const Gallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const handlePrev = () => {
    setSelectedImgIndex((prev) => {
      if (prev === null) return null;
      let prevIndex = prev === 0 ? galleryImages.length - 1 : prev - 1;
      while (!galleryImages[prevIndex].src && prevIndex !== prev) {
        prevIndex = prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const handleNext = () => {
    setSelectedImgIndex((prev) => {
      if (prev === null) return null;
      let nextIndex = (prev + 1) % galleryImages.length;
      while (!galleryImages[nextIndex].src && nextIndex !== prev) {
        nextIndex = (nextIndex + 1) % galleryImages.length;
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    if (selectedImgIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedImgIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImgIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-maroon mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into our intricate henna artistry and satisfied clients. Follow our Instagram for daily updates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => img.src && setSelectedImgIndex(index)}
              className={`relative aspect-[3/4] overflow-hidden rounded-xl shadow-md group transition-all duration-300 ${img.src ? 'cursor-pointer hover:shadow-lg' : 'cursor-default opacity-60'
                }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {img.src && (
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white bg-maroon/80 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Design
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/rekha_henna_artist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-maroon border border-maroon hover:bg-maroon hover:text-white rounded-full font-medium transition-all duration-300 shadow-sm"
          >
            View More on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImgIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none animate-fade-in"
          onClick={() => setSelectedImgIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImgIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all duration-300 z-50 hover:scale-105"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Lightbox Container */}
          <div
            className="relative flex flex-col items-center max-w-4xl w-full h-full justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 md:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 sm:bg-white/10 hover:bg-white/20 p-2 sm:p-4 rounded-full transition-all duration-300 flex items-center justify-center z-40 hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Image & Info Panel */}
            <div
              className="relative flex flex-col items-center max-h-[75vh] max-w-full justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                key={selectedImgIndex} // Reset stateful animation on index change
                src={galleryImages[selectedImgIndex].src}
                alt={galleryImages[selectedImgIndex].alt}
                className="max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10 animate-scale-up"
              />

              {/* Caption and Dynamic Action Button */}
              <div className="w-full mt-4 text-center px-4 flex flex-col items-center gap-3">
                <div>

                  <p className="text-white/60 text-xs sm:text-sm mt-1 font-body">
                    Design {selectedImgIndex + 1} of {galleryImages.length}
                  </p>
                </div>

                {/* WhatsApp booking link */}
                <a
                  href={`https://wa.me/918940870183?text=${encodeURIComponent(
                    `Hi Rekha! I am interested in booking this mehndi design:  (${galleryImages[selectedImgIndex].src}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#25D366] text-white hover:bg-[#20bd5a] font-body text-sm sm:text-base font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-105"
                >
                  <MessageCircle size={18} className="fill-white sm:w-5 sm:h-5" />
                  <span>Book Similar Design</span>
                </a>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 md:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 sm:bg-white/10 hover:bg-white/20 p-2 sm:p-4 rounded-full transition-all duration-300 flex items-center justify-center z-40 hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Mobile swipe helper */}
            <p className="sm:hidden text-white/40 text-[10px] mt-2 font-body">
              Swipe left / right to navigate
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

import React from 'react';
import { MessageCircle, Image as ImageIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dwcp6zcbi/image/upload/v1777529885/hero_zq4xhb.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 sm:mt-0">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg text-balance leading-tight">
          Mehndi Artist for Brides & Special Events
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-white mb-10 drop-shadow-md font-light">
          Home service available <span className="hidden sm:inline">|</span><br className="sm:hidden" /> Trusted by 18K+ Instagram followers
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#gallery"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-white/95 border border-white/30 text-maroon hover:bg-gold hover:text-white rounded-full font-medium transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            <ImageIcon className="mr-2" size={20} />
            View Designs
          </a>

          <a
            href="https://wa.me/91 8940870183?text=Hi! I would like to book a mehndi appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-maroon text-white hover:bg-maroon/90 border border-maroon hover:border-maroon/90 rounded-full font-medium transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            <MessageCircle className="mr-2" size={20} />
            Book via WhatsApp
          </a>
        </div>

        <p className="text-sm text-white/80 mt-4 font-body">
          ⚡ Limited slots available for wedding season
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { ChefHat, Clock, MapPin, Star, UtensilsCrossed } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/225/1920/1080" // Tea/Classic vibe placeholder
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-maroon/80 to-charcoal/60 mix-blend-multiply opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-ivory mt-16">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-16 h-[1px] bg-gold self-center"></span>
          <span className="mx-4 text-gold tracking-[0.2em] text-sm md:text-base uppercase font-medium">The Pride of Connaught Place</span>
          <span className="inline-block w-16 h-[1px] bg-gold self-center"></span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-gold-light to-gold drop-shadow-lg">
          Experience Timeless <br /> Fine Dining Since 1940
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Authentic North Indian & Mughlai Cuisine in the heart of New Delhi. <br className="hidden md:block"/>
          Step into a legacy of royal flavours and colonial charm at Regal Building.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-gold-light/80 text-xs md:text-sm font-medium tracking-wide uppercase">
          <div className="flex items-center gap-2"><Clock size={16} /> <span>12 PM – 11 PM</span></div>
          <div className="flex items-center gap-2"><MapPin size={16} /> <span>Regal Building, CP</span></div>
          <div className="flex items-center gap-2"><Star size={16} /> <span>Heritage Icon</span></div>
          <div className="flex items-center gap-2"><ChefHat size={16} /> <span>Mughlai Specialists</span></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-3 bg-gold text-charcoal font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(207,175,110,0.3)]">
            Reserve a Table
          </a>
          <a href="#menu" className="px-8 py-3 border border-gold text-gold font-bold uppercase tracking-wider hover:bg-gold/10 transition-all duration-300">
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
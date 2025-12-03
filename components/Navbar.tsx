import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Legacy', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-sm border-gold/30 py-2 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center group">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold tracking-widest uppercase group-hover:text-gold-light transition-colors">
            Kwality
          </h1>
          <span className="text-[10px] md:text-xs text-ivory tracking-[0.3em] uppercase mt-1">Est. 1940 • CP</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-ivory text-sm font-medium hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+911123412424" 
            className="flex items-center gap-2 border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase text-xs font-bold tracking-wider"
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gold hover:text-ivory transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-charcoal border-b border-gold/20 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-ivory text-center text-sm font-medium hover:text-gold py-2 border-b border-white/5 uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
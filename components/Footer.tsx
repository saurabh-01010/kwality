import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg text-gold mb-2">Kwality Restaurant</p>
        <p className="text-xs uppercase tracking-widest mb-4">Connaught Place, New Delhi</p>
        <p className="text-xs">&copy; {new Date().getFullYear()} Kwality Restaurant. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center gap-4 text-xs">
            <a href="#" className="hover:text-gold">Facebook</a>
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">TripAdvisor</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
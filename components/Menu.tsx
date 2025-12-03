import React, { useState } from 'react';
import { menuData } from '../data';
import { Leaf } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);

  return (
    <section id="menu" className="py-20 bg-charcoal text-ivory relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-wood.png")'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium">Culinary Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory mt-2 mb-4">Our Menu</h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-6 py-2 text-sm md:text-base font-medium tracking-wider uppercase transition-all duration-300 border border-gold ${
                activeCategory === category.title
                  ? 'bg-gold text-charcoal'
                  : 'bg-transparent text-gold hover:bg-gold/10'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto min-h-[400px]">
          {menuData.find(c => c.title === activeCategory)?.items.map((item, index) => (
            <div key={index} className="flex justify-between items-start group border-b border-white/10 pb-6 hover:border-gold/50 transition-colors">
              <div className="pr-4">
                <h3 className="text-xl font-serif font-semibold text-gold group-hover:text-white transition-colors flex items-center gap-2">
                  {item.name}
                  {item.veg && <Leaf size={14} className="text-green-500" fill="currentColor" />}
                </h3>
                <p className="text-gray-400 text-sm mt-2 italic font-light">{item.description}</p>
              </div>
              <div className="text-lg font-bold text-ivory whitespace-nowrap">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
           <p className="text-gray-500 text-xs uppercase tracking-widest">
             * Taxes & Service Charges Extra as Applicable
           </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
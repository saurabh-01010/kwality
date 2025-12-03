import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 relative">
             <div className="absolute -inset-4 border-2 border-gold/30 z-0 m-4 rounded-sm"></div>
             <img 
               src="https://picsum.photos/seed/vintage1/400/500" 
               alt="Vintage Kwality" 
               className="w-full h-64 md:h-80 object-cover rounded-sm shadow-xl z-10 relative transform translate-y-4"
             />
             <img 
               src="https://picsum.photos/seed/chef/400/500" 
               alt="Our Chefs" 
               className="w-full h-64 md:h-80 object-cover rounded-sm shadow-xl z-10 relative transform -translate-y-4"
             />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-maroon font-bold uppercase tracking-widest text-sm mb-2">Since 1940</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              A Legacy of <br/> <span className="text-gold">Fine Dining</span>
            </h2>
            <div className="w-24 h-1 bg-maroon mb-8 mx-auto md:mx-0"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For over eight decades, Kwality Restaurant has been the gold standard of fine dining in Connaught Place. 
              Established in pre-independent India, we have served generations of royalty, dignitaries, and families who seek 
              the authentic taste of North Indian and Mughlai cuisine.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Our chefs continue to use traditional recipes passed down through the years, ensuring that every kebab 
              is succulent and every curry is rich with heritage. Whether it's our iconic Chana Bhatura or the 
              creamy Butter Chicken, Kwality is more than a meal—it's a journey back in time.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-8">
               <div className="text-center">
                 <span className="block text-3xl font-serif font-bold text-maroon">80+</span>
                 <span className="text-xs uppercase tracking-wider text-gray-500">Years of Service</span>
               </div>
               <div className="text-center">
                 <span className="block text-3xl font-serif font-bold text-maroon">1M+</span>
                 <span className="text-xs uppercase tracking-wider text-gray-500">Happy Guests</span>
               </div>
               <div className="text-center">
                 <span className="block text-3xl font-serif font-bold text-maroon">1940</span>
                 <span className="text-xs uppercase tracking-wider text-gray-500">Est. Year</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
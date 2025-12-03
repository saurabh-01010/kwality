import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-charcoal text-ivory py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-gold mb-6">Reservations & Contact</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We recommend booking a table in advance, especially for dinner and weekends. 
              Celebrate your special moments with the timeless charm of Kwality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-1">Address</h4>
                  <p className="text-gray-400">No. 7, Regal Building, Connaught Place,<br/> New Delhi – 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-1">Phone</h4>
                  <p className="text-gray-400">+91 98100 54068 <br/> +91 11 2341 2424</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-maroon p-3 rounded-full text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-1">Opening Hours</h4>
                  <p className="text-gray-400">12:00 PM – 11:00 PM (All Days)</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-10 w-full h-64 bg-gray-800 border border-gold/30 rounded-sm relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/map/600/300?grayscale" 
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-gold text-charcoal px-6 py-2 font-bold uppercase text-sm hover:bg-white transition-colors">
                   View on Google Maps
                 </button>
               </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:w-1/2 bg-white/5 p-8 md:p-12 border border-gold/20 rounded-sm backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-gray-700 pb-4">Book A Table</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-600 focus:border-gold outline-none py-2 text-white transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold mb-2">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-600 focus:border-gold outline-none py-2 text-white transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold mb-2">Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-gray-600 focus:border-gold outline-none py-2 text-white transition-colors scheme-dark" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold mb-2">Time</label>
                  <input type="time" className="w-full bg-transparent border-b border-gray-600 focus:border-gold outline-none py-2 text-white transition-colors scheme-dark" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gold mb-2">Number of Guests</label>
                <select className="w-full bg-transparent border-b border-gray-600 focus:border-gold outline-none py-2 text-white transition-colors">
                  <option className="bg-charcoal" value="2">2 Guests</option>
                  <option className="bg-charcoal" value="3">3 Guests</option>
                  <option className="bg-charcoal" value="4">4 Guests</option>
                  <option className="bg-charcoal" value="5">5 Guests</option>
                  <option className="bg-charcoal" value="6+">6+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gold mb-2">Special Requests</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-600 focus:border-gold outline-none py-2 text-white transition-colors" placeholder="Anniversary, Dietary restrictions, etc."></textarea>
              </div>

              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <button type="submit" className="flex-1 bg-gold text-charcoal font-bold py-3 uppercase tracking-widest hover:bg-white transition-colors">
                  Reserve Table
                </button>
                <button type="button" className="flex-1 border border-green-500 text-green-400 font-bold py-3 uppercase tracking-widest hover:bg-green-500 hover:text-charcoal transition-colors">
                  WhatsApp Booking
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { RollingTestimonials } from './RollingTestimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Drivers love FUELabc</h2>
          <p className="text-gray-400">Join 500,000+ drivers saving money daily.</p>
        </div>

        <RollingTestimonials />
      </div>
    </section>
  );
};
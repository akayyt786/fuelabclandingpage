import React from 'react';
import { Download } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start saving fuel today</h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
              Download FUELabc now and join the community of smart drivers who save money and the planet.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Download size={24} className="text-primary" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">Get it on</div>
                  <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                </div>
              </a>

              <button className="flex items-center justify-center space-x-3 bg-black/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-black/30 transition-colors shadow-lg cursor-default">
                <div className="text-3xl pb-1"></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-white/70 leading-none">Coming soon on</div>
                  <div className="text-sm font-bold leading-none mt-1">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
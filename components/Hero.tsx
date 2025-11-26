import React from 'react';
import { Download, Star } from 'lucide-react';
import { PhoneMockup, MockupHeader, MockupStats } from './PhoneMockup';
import TiltedCard from './TiltedCard';
import Squares from './Squares';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"></div>
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="rgba(31, 175, 75, 0.1)"
          hoverFillColor="rgba(31, 175, 75, 0.2)"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <Reveal direction="left">
              <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm font-medium text-primary-dark dark:text-primary-light">#1 Fuel Saving App in India</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
                Save up to <span className="text-primary relative inline-block">
                  30%
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> on your daily fuel costs.
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join 500,000+ drivers using AI-powered route optimization to reduce fuel consumption and carbon footprint.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Download size={24} />
                  <span>Download App</span>
                </a>
                <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 transition-all duration-300">
                  <span>View Demo</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <span>10k+ Reviews</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-gray-900 dark:text-white font-bold">4.8/5</span>
                  <span>Rating</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Visual (Phone) */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
            <Reveal direction="right" delay={0.4}>
              {/* Decorative circles behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[80px]"></div>

              {/* Phone with Tilted Card Effect */}
              <TiltedCard
                containerHeight="auto"
                containerWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showTooltip={false}
              >
                <PhoneMockup className="shadow-2xl">
                  <MockupHeader title="Dashboard" />
                  <div className="p-6 bg-gray-50">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
                      <div className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-2">Fuel Efficiency</div>
                      <div className="flex items-end space-x-2">
                        <span className="text-4xl font-bold text-gray-900">18.5</span>
                        <span className="text-sm text-gray-500 font-medium mb-1">km/l</span>
                      </div>
                      <div className="mt-2 text-xs text-green-600 font-bold flex items-center">
                        <span className="bg-green-100 p-1 rounded mr-1">↑ 12%</span> vs last week
                      </div>
                    </div>
                    <MockupStats />
                    <div className="mt-4 bg-primary text-white p-4 rounded-xl shadow-lg shadow-primary/30 flex justify-between items-center">
                      <div>
                        <div className="text-xs opacity-90">Current Route Savings</div>
                        <div className="text-lg font-bold">₹ 45.00</div>
                      </div>
                      <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">→</div>
                    </div>
                  </div>
                </PhoneMockup>
              </TiltedCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
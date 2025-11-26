import React from 'react';
import { PhoneMockup, MockupHeader, MockupMap } from './PhoneMockup';
import { CheckCircle } from 'lucide-react';
import TiltedCard from './TiltedCard';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 flex justify-center">
            <Reveal direction="left">
              <TiltedCard
                containerHeight="auto"
                containerWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.02}
                showTooltip={false}
              >
                <PhoneMockup className="shadow-2xl">
                  <MockupHeader title="Route Planner" />
                  <div className="relative h-full">
                    <MockupMap />
                    <div className="absolute bottom-10 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-800">Recommended Route</span>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">Save ₹45</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>32 min</span>
                        <span>14 km</span>
                        <span>0.8L Fuel</span>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </TiltedCard>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal direction="right">
              <h3 className="text-primary font-semibold mb-2">Route Optimization</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Take the route that costs less, not just the shortest.</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                GPS usually finds the fastest route, but that often involves highways or traffic jams that burn more fuel. FUELabc calculates the most fuel-efficient path.
              </p>
              <ul className="space-y-4">
                {['Live fuel price markers on map', 'Traffic-adjusted consumption', 'Alternative eco-routes'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 flex justify-center">
            <Reveal direction="right">
              <TiltedCard
                containerHeight="auto"
                containerWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.02}
                showTooltip={false}
              >
                <PhoneMockup className="shadow-2xl border-gray-800">
                  <MockupHeader title="Efficiency Graph" />
                  <div className="p-6 h-full bg-white">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Mileage Analysis</h3>
                      <p className="text-xs text-gray-500">Last 7 Days</p>
                    </div>

                    {/* Fake Chart */}
                    <div className="h-48 w-full border-l border-b border-gray-200 relative mt-8">
                      <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M0,40 L15,35 L30,42 L45,20 L60,25 L75,10 L90,15 L100,5" fill="none" stroke="#1FAF4B" strokeWidth="2" />
                        <circle cx="15" cy="35" r="1.5" fill="white" stroke="#1FAF4B" />
                        <circle cx="45" cy="20" r="1.5" fill="white" stroke="#1FAF4B" />
                        <circle cx="75" cy="10" r="1.5" fill="white" stroke="#1FAF4B" />
                        <circle cx="100" cy="5" r="1.5" fill="white" stroke="#1FAF4B" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                      <span>Sun</span>
                    </div>

                    <div className="mt-8 bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="flex items-start space-x-3">
                        <div className="bg-white p-2 rounded-full shadow-sm text-lg">💡</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">Smart Tip</h4>
                          <p className="text-xs text-gray-600 mt-1">Driving at 60-70 km/h improves your mileage by 15% on this terrain.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </TiltedCard>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal direction="left">
              <h3 className="text-primary font-semibold mb-2">Smart Insights</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Know your vehicle inside out.</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Our advanced algorithms analyze your driving patterns to suggest optimal speeds and gear shifts for maximum mileage.
              </p>
              <ul className="space-y-4">
                {['Speed vs. Mileage graphs', 'Monthly savings reports', 'Maintenance alerts'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};
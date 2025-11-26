import React from 'react';
import { Car, MapPin, PiggyBank, ChevronRight } from 'lucide-react';
import TiltedCard from './TiltedCard';
import { Reveal } from './Reveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Enter Vehicle Details',
      text: 'Input your car model and fuel type once. We configure the algorithm for your specific engine efficiency.',
      icon: Car,
    },
    {
      id: 2,
      title: 'Choose Efficient Route',
      text: 'Enter your destination. We compare multiple routes based on traffic, hills, and distance to find the cheapest one.',
      icon: MapPin,
    },
    {
      id: 3,
      title: 'Drive & Save',
      text: 'Follow the green route. Get real-time alerts on efficient speed and acceleration.',
      icon: PiggyBank,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Start saving in 3 steps</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <Reveal direction="up" delay={index * 0.2}>
                <TiltedCard
                  containerHeight="auto"
                  containerWidth="100%"
                  rotateAmplitude={15}
                  scaleOnHover={1.1}
                  showTooltip={false}
                >
                  <div className="flex flex-col items-center p-4 rounded-2xl transition-all duration-300">
                    <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md border-4 border-gray-50 dark:border-gray-600 mb-6 relative z-10 transition-colors duration-300">
                      <step.icon size={32} className="text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white dark:border-gray-700">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">{step.text}</p>
                  </div>
                </TiltedCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
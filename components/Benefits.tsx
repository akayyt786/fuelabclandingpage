import React from 'react';
import { Map, TrendingUp, DollarSign, Leaf } from 'lucide-react';
import TiltedCard from './TiltedCard';
import { Reveal } from './Reveal';

const benefits = [
  {
    title: 'Smart Route Comparison',
    description: 'See exact fuel costs for different routes before you drive. We calculate traffic and distance to find the cheapest path.',
    icon: Map,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Mileage Analysis',
    description: 'Track your mileage vs. speed in real-time. Understand how your driving habits affect your tank.',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Save Real Money',
    description: 'Users save an average of ₹2,500 per month by optimizing their daily commutes and long drives.',
    icon: DollarSign,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Reduce Emissions',
    description: 'Efficient driving means less fuel burned. Reduce your carbon footprint with every smart trip.',
    icon: Leaf,
    color: 'bg-emerald-100 text-emerald-600',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why drivers choose FUELabc</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We don't just show you the map; we show you the cost. Make informed decisions every time you start your engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <TiltedCard
                containerHeight="auto"
                containerWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showTooltip={false}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${benefit.color} transition-transform duration-300`}>
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </TiltedCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
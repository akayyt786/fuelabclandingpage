import React, { useEffect, useState } from 'react';
import { Fuel } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar to 100% over approx 2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.random() * 10 + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-ping opacity-20"></div>
          <div className="relative bg-white p-5 rounded-2xl shadow-xl border border-gray-50">
            <Fuel size={48} className="text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          FUEL<span className="text-primary">abc</span>
        </h1>
        
        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Dynamic Status Text */}
        <div className="mt-4 h-6 flex items-center justify-center">
          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase animate-pulse">
            {progress < 30 && "Connecting..."}
            {progress >= 30 && progress < 70 && "Optimizing Routes..."}
            {progress >= 70 && progress < 100 && "Syncing Fuel Prices..."}
            {progress === 100 && "Ready"}
          </p>
        </div>
      </div>
    </div>
  );
};
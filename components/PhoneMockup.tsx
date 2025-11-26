import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-[2.5rem] h-[500px] w-[280px] sm:h-[600px] sm:w-[320px] shadow-2xl ${className}`}>
      {/* Notch */}
      <div className="w-[100px] h-[20px] bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
      
      {/* Side Buttons */}
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[12px] top-[100px] rounded-l-lg"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[12px] top-[160px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[12px] top-[140px] rounded-r-lg"></div>

      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative z-10">
        {children}
      </div>
    </div>
  );
};

// UI Components for inside the mockups to simulate the app
export const MockupHeader = ({ title }: { title: string }) => (
  <div className="bg-primary pt-8 pb-4 px-4 text-white">
    <div className="flex justify-between items-center">
      <div className="h-6 w-6 rounded-full bg-white/20"></div>
      <span className="font-semibold text-sm">{title}</span>
      <div className="h-6 w-6 rounded-full bg-white/20"></div>
    </div>
  </div>
);

export const MockupMap = () => (
  <div className="h-full w-full bg-gray-100 relative">
    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
    {/* Route Line */}
    <svg className="absolute inset-0 h-full w-full pointer-events-none">
      <path d="M 80 450 C 120 400, 100 300, 160 250 S 240 100, 200 80" stroke="#1FAF4B" strokeWidth="4" fill="none" strokeDasharray="8 4" />
      <circle cx="80" cy="450" r="6" fill="#1FAF4B" />
      <circle cx="200" cy="80" r="6" fill="#EF4444" />
    </svg>
    {/* Price Markers */}
    <div className="absolute top-1/4 left-1/3 bg-white px-2 py-1 rounded shadow text-[10px] font-bold text-gray-700 border border-green-500">
      ₹96.5
    </div>
    <div className="absolute bottom-1/3 right-1/4 bg-white px-2 py-1 rounded shadow text-[10px] font-bold text-gray-700">
      ₹98.2
    </div>
  </div>
);

export const MockupStats = () => (
  <div className="p-4 space-y-4">
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h4 className="text-xs text-gray-500 mb-2">Monthly Savings</h4>
      <div className="text-2xl font-bold text-primary">₹1,240</div>
      <div className="h-32 mt-4 flex items-end justify-between space-x-2">
        {[40, 65, 45, 80, 55, 90].map((h, i) => (
          <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group">
             <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-primary rounded-t-sm"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

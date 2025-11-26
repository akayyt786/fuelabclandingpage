import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import TiltedCard from './TiltedCard';

export const QRCodeDownload: React.FC = () => {
    // Using a static QR code API for demonstration. In production, this would be a real app store link.
    const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN";

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 border border-primary/10 dark:border-primary/20 overflow-hidden relative">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <Reveal direction="left">
                                <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full shadow-sm mb-6">
                                    <Smartphone size={16} className="text-primary" />
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Get the App</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    Scan to Download <br />
                                    <span className="text-primary">FUELabc App</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                                    Experience the full power of AI route optimization on your phone. Available for iOS and Android.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>4.8 Star Rating</span>
                                    </div>
                                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>1M+ Downloads</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Content - QR Code */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <Reveal direction="right" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    <TiltedCard
                                        containerHeight="auto"
                                        containerWidth="auto"
                                        rotateAmplitude={10}
                                        scaleOnHover={1.05}
                                        showTooltip={false}
                                    >
                                        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative">
                                            <img
                                                src={qrCodeUrl}
                                                alt="Download QR Code"
                                                className="w-48 h-48 rounded-lg mix-blend-multiply dark:mix-blend-normal dark:invert"
                                            />
                                            <div className="mt-4 flex items-center justify-center space-x-2 text-primary font-bold text-sm">
                                                <span>Scan Me</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </TiltedCard>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

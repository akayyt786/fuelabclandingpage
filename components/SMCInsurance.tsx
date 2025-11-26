import React from 'react';
import { Shield, Heart, Car, Plane, CheckCircle } from 'lucide-react';
import { Reveal } from './Reveal';

export const SMCInsurance: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <Reveal direction="left">
                            <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100 dark:border-gray-600">
                                <Shield className="text-blue-600 dark:text-blue-400" size={20} />
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Trusted Insurance Partner</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                SMC Insurance
                            </h2>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                SMC Insurance is a trusted leader in the insurance industry, known for its comprehensive and customer-centric solutions. With a mission to simplify the insurance process, SMC offers a wide range of policies tailored to meet the unique needs of individuals and businesses.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    { icon: Heart, label: "Health Insurance" },
                                    { icon: Shield, label: "Life Insurance" },
                                    { icon: Car, label: "Motor Insurance" },
                                    { icon: Plane, label: "Travel Insurance" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                                            <item.icon className="text-blue-600 dark:text-blue-400" size={24} />
                                        </div>
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center space-x-2">
                                <span>Explore Policies</span>
                                <Shield size={20} />
                            </button>
                        </Reveal>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2">
                        <Reveal direction="right">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
                                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">

                                    {/* Decorative Header */}
                                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-gray-800 pb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                                SMC
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">SMC Insurance</h3>
                                                <p className="text-xs text-gray-500">Official Partner</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        </div>
                                    </div>

                                    {/* Content Mockup */}
                                    <div className="space-y-6">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                                            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Why Choose SMC?</h4>
                                            <ul className="space-y-3">
                                                {['Comprehensive Coverage', 'Fast Claim Settlement', '24/7 Customer Support', 'Digital-First Experience'].map((feature, i) => (
                                                    <li key={i} className="flex items-center space-x-3">
                                                        <CheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={18} />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Active Policies</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white">1M+</p>
                                            </div>
                                            <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Claim Ratio</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white">98.5%</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

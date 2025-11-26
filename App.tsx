import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyMetrics } from './components/KeyMetrics';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { SMCInsurance } from './components/SMCInsurance';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FinalCTA } from './components/FinalCTA';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollStack, ScrollStackItem } from './components/ScrollStack';
import { ScrollProgress } from './components/ScrollProgress';
import { QRCodeDownload } from './components/QRCodeDownload';

import { Reveal } from './components/Reveal';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col relative bg-white dark:bg-gray-900 transition-colors duration-300 ${loading ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
      <ScrollProgress />

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white dark:bg-gray-900"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-1000 delay-300 transform ${loading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <ScrollStack>
            <ScrollStackItem className="z-10 bg-white dark:bg-gray-900">
              <Reveal><Hero /></Reveal>
            </ScrollStackItem>

            <ScrollStackItem className="z-20 bg-white dark:bg-gray-900">
              <Reveal delay={0.4}><KeyMetrics /></Reveal>
            </ScrollStackItem>

            <ScrollStackItem className="z-30 bg-white dark:bg-gray-900">
              <Reveal><Benefits /></Reveal>
            </ScrollStackItem>

            <ScrollStackItem className="z-40 bg-white dark:bg-gray-900">
              <Reveal><HowItWorks /></Reveal>
            </ScrollStackItem>

            <ScrollStackItem className="z-50 bg-white dark:bg-gray-900">
              <Reveal><Features /></Reveal>
            </ScrollStackItem>

            <ScrollStackItem className="z-[55] bg-white dark:bg-gray-900">
              <Reveal><SMCInsurance /></Reveal>
            </ScrollStackItem>

            <ScrollStackItem className="z-[60] bg-white dark:bg-gray-900">
              <Reveal><Testimonials /></Reveal>
            </ScrollStackItem>
            <ScrollStackItem id="faq" className="z-[70] bg-white dark:bg-gray-900">
              <Reveal><FAQ /></Reveal>
            </ScrollStackItem>
            <ScrollStackItem id="download" className="z-[75] bg-white dark:bg-gray-900">
              <Reveal><QRCodeDownload /></Reveal>
            </ScrollStackItem>
            <ScrollStackItem id="cta" className="z-[80] bg-white dark:bg-gray-900">
              <Reveal><FinalCTA /></Reveal>
            </ScrollStackItem>
          </ScrollStack>
        </main>
        <div className="relative z-[90] bg-white dark:bg-gray-900">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
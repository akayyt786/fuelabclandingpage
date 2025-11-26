import React, { useState } from 'react';
import { Menu, X, Fuel, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'APIs', href: 'https://api.ssrinnovationlab.com/api/browse/', external: true },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: 'https://www.fuelabc.com/contact.php', external: true },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="FUELabc Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group relative px-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out"
              >
                {/* 3D Text Lift Effect */}
                <span className="relative z-10 block transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:text-primary group-hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)] dark:group-hover:text-primary-light">
                  {link.name}
                </span>

                {/* Floor Shadow Effect (appears below the text when it lifts) */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary/30 rounded-full blur-[2px] transition-all duration-300 opacity-0 group-hover:w-1/2 group-hover:opacity-100"></span>
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a
              href="https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(31,175,75,0.39)] hover:shadow-[0_10px_20px_rgba(31,175,75,0.3)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
            >
              Get App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary text-white px-5 py-3 rounded-xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
};
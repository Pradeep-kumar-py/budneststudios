'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set initial active section from hash
    if (window.location.hash) {
      setActiveSection(window.location.hash.slice(1));
    }

    // Intersection Observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle 50% of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'home';
          setActiveSection(sectionId);
          // Update URL hash without scrolling
          if (sectionId !== 'home') {
            window.history.replaceState(null, '', `#${sectionId}`);
          } else {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'services', 'portfolio', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#fcfcfb]/0 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
        <div className="text-lg sm:text-xl font-extrabold tracking-tighter text-primary">
          BudNest Studios
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <Link className={`font-medium pb-1 border-b-2 transition-colors duration-300 ${activeSection === 'home' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`} href="#home">Home</Link>
          <Link className={`font-medium pb-1 border-b-2 transition-colors duration-300 ${activeSection === 'services' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`} href="#services">Services</Link>
          <Link className={`font-medium pb-1 border-b-2 transition-colors duration-300 ${activeSection === 'portfolio' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`} href="#portfolio">Portfolio</Link>
          <Link className={`font-medium pb-1 border-b-2 transition-colors duration-300 ${activeSection === 'contact' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`} href="#contact">Contact</Link>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block btn-primary-premium text-on-primary px-7 py-3 rounded-xl font-bold text-sm">
          Start a Project
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-primary"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fcfcfb] border-b border-outline-variant/10">
          <div className="px-4 py-6 space-y-4">
            <Link
              className={`block font-bold py-3 px-4 rounded-xl transition-colors ${activeSection === 'home' ? 'text-primary bg-primary/5' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`block font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'services' ? 'text-primary bg-primary/5' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              className={`block font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'portfolio' ? 'text-primary bg-primary/5' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              className={`block font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'contact' ? 'text-primary bg-primary/5' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full btn-primary-premium text-on-primary px-7 py-4 rounded-xl font-bold text-sm mt-2">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

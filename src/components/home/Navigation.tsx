'use client';

import React, { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcfcfb]/90 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
        <div className="text-lg sm:text-xl font-extrabold tracking-tighter text-primary">
          BudNest Studios
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Home</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#services">Services</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#portfolio">Portfolio</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
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
            <a
              className="block text-primary font-bold py-3 px-4 rounded-xl bg-primary/5"
              href="#"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="block text-on-surface-variant font-medium py-3 px-4 rounded-xl hover:bg-surface-container-low transition-colors"
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="block text-on-surface-variant font-medium py-3 px-4 rounded-xl hover:bg-surface-container-low transition-colors"
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              className="block text-on-surface-variant font-medium py-3 px-4 rounded-xl hover:bg-surface-container-low transition-colors"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="w-full btn-primary-premium text-on-primary px-7 py-4 rounded-xl font-bold text-sm mt-2">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

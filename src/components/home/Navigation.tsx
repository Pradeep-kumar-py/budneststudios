import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcfcfb]/90 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
        <div className="text-xl font-extrabold tracking-tighter text-primary">
          BudNest Studios
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Home</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#services">Services</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#portfolio">Portfolio</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </div>
        <button className="btn-primary-premium text-on-primary px-7 py-3 rounded-xl font-bold text-sm">
          Start a Project
        </button>
      </div>
    </nav>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-24">
      <div className="max-w-7xl mx-auto px-8 pb-16 flex flex-col md:flex-row justify-between">
        <div className="mb-16 md:mb-0">
          <div className="text-2xl font-black text-primary uppercase tracking-tighter mb-8">
            BudNest Studios
          </div>
          <p className="text-on-surface-variant font-medium text-base tracking-wide max-w-sm mb-10 leading-relaxed">
            Crafting digital ateliers with absolute precision, passion, and professional purpose.
          </p>
          <div className="flex gap-4">
            <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
            <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined text-xl">hub</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
          <div>
            <h5 className="font-bold text-sm mb-8 uppercase tracking-[0.2em] text-on-surface">Explore</h5>
            <ul className="space-y-5 text-base text-on-surface-variant font-medium">
              <li><a className="hover:text-primary transition-all" href="#">Home</a></li>
              <li><a className="hover:text-primary transition-all" href="#services">Services</a></li>
              <li><a className="hover:text-primary transition-all" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:text-primary transition-all" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-8 uppercase tracking-[0.2em] text-on-surface">Studio</h5>
            <ul className="space-y-5 text-base text-on-surface-variant font-medium">
              <li><a className="hover:text-primary transition-all" href="#">Innovation</a></li>
              <li><a className="hover:text-primary transition-all" href="#">Reliability</a></li>
              <li><a className="hover:text-primary transition-all" href="#">Our Process</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-8 uppercase tracking-[0.2em] text-on-surface">Legal</h5>
            <ul className="space-y-5 text-base text-on-surface-variant font-medium">
              <li><a className="hover:text-primary transition-all" href="#">Privacy</a></li>
              <li><a className="hover:text-primary transition-all" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-10 border-t border-outline-variant/10 text-center md:text-left">
        <p className="text-xs text-on-surface-variant/60 font-medium tracking-[0.1em] uppercase">
          © 2024 BudNest Studios. All Rights Reserved. Crafting digital ateliers.
        </p>
      </div>
    </footer>
  );
}

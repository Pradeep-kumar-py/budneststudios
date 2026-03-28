import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-0">
      <div className="absolute inset-0">
        <Image alt="Premium digital workspace" className="object-cover" src="/hero-bg.jpg" fill priority />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold mb-6 sm:mb-8 border border-white/20">
            The Digital Atelier
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Building Smart Digital Solutions for <span className="text-[#f3ccc3] italic font-medium">Modern</span> Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8 sm:mb-12">
            We design and develop scalable web and mobile applications tailored for startups and established businesses looking to redefine their digital presence with precision engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button className="btn-primary-premium text-on-primary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg w-full sm:w-auto">
              Get Started
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all w-full sm:w-auto">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

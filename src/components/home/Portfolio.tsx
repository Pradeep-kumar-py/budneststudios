import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-4 sm:mb-6">Our Portfolio</h2>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-md">A glimpse into the digital ateliers we've built for our global partners.</p>
          </div>
          <div className="h-[2px] bg-primary/10 flex-grow mx-12 hidden md:block"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 bg-surface-container relative shadow-lg">
              <Image alt="SaaS Dashboard Project" className="object-cover group-hover:scale-110 transition-transform duration-700" src="/port1.jpg" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
              </div>
            </div>
            <h4 className="font-bold text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">Vanguard Analytics</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-widest font-semibold">SaaS Dashboard • Web App</p>
          </div>
          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 bg-surface-container relative shadow-lg">
              <Image alt="Mobile App Interface" className="object-cover group-hover:scale-110 transition-transform duration-700" src="/port2.jpg" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
              </div>
            </div>
            <h4 className="font-bold text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">Flora Lifestyle</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-widest font-semibold">Mobile Interface • iOS App</p>
          </div>
          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 bg-surface-container relative shadow-lg">
              <Image alt="Business Website" className="object-cover group-hover:scale-110 transition-transform duration-700" src="/port3.jpg" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
              </div>
            </div>
            <h4 className="font-bold text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">Nexus Corporate</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-widest font-semibold">Brand Website • Web Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

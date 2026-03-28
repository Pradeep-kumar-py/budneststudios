import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section className="py-32 bg-surface-container-low" id="portfolio">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">Our Portfolio</h2>
            <p className="text-on-surface-variant text-lg max-w-md">A glimpse into the digital ateliers we've built for our global partners.</p>
          </div>
          <div className="h-[2px] bg-primary/10 flex-grow mx-12 hidden md:block"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-8 bg-surface-container relative shadow-lg">
              <Image alt="SaaS Dashboard Project" className="object-cover group-hover:scale-110 transition-transform duration-700" src="/port1.jpg" fill />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
              </div>
            </div>
            <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">Vanguard Analytics</h4>
            <p className="text-sm text-on-surface-variant font-label uppercase tracking-widest font-semibold">SaaS Dashboard • Web App</p>
          </div>
          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-8 bg-surface-container relative shadow-lg">
              <Image alt="Mobile App Interface" className="object-cover group-hover:scale-110 transition-transform duration-700" src="/port2.jpg" fill />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
              </div>
            </div>
            <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">Flora Lifestyle</h4>
            <p className="text-sm text-on-surface-variant font-label uppercase tracking-widest font-semibold">Mobile Interface • iOS App</p>
          </div>
          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-8 bg-surface-container relative shadow-lg">
              <Image alt="Business Website" className="object-cover group-hover:scale-110 transition-transform duration-700" src="/port3.jpg" fill />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
              </div>
            </div>
            <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">Nexus Corporate</h4>
            <p className="text-sm text-on-surface-variant font-label uppercase tracking-widest font-semibold">Brand Website • Web Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

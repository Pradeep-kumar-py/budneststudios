import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-center">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 sm:mb-8 leading-tight">Innovative engineering meets artistic precision.</h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              At BudNest Studios, we don't just write code; we architect experiences. Our philosophy centers on reliability and the relentless pursuit of digital innovation, ensuring every product we build is future-proof and functionally beautiful.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl flex-shrink-0">terminal</span>
                <div>
                  <h4 className="font-bold text-on-surface text-base sm:text-lg">Custom Software Development</h4>
                  <p className="text-on-surface-variant text-sm sm:text-base">Bespoke solutions engineered for your unique operational needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl flex-shrink-0">rocket_launch</span>
                <div>
                  <h4 className="font-bold text-on-surface text-base sm:text-lg">Startup MVP Development</h4>
                  <p className="text-on-surface-variant text-sm sm:text-base">Rapid prototyping and launch-ready MVPs to hit the market fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl flex-shrink-0">psychology</span>
                <div>
                  <h4 className="font-bold text-on-surface text-base sm:text-lg">AI-Powered Solutions</h4>
                  <p className="text-on-surface-variant text-sm sm:text-base">Integrating machine learning to automate and enhance your workflow.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image alt="Professional Studio Space" className="object-cover grayscale-[10%] sepia-[5%] hover:scale-105 transition-transform duration-700" src="/studio.jpg" fill sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-primary p-8 sm:p-12 rounded-3xl shadow-2xl border border-primary-container">
              <p className="text-on-primary font-headline text-4xl sm:text-5xl font-extrabold italic">10+</p>
              <p className="text-on-primary/70 text-xs sm:text-sm font-label uppercase tracking-widest mt-2">Years of Craft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8 leading-tight">Innovative engineering meets artistic precision.</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              At BudNest Studios, we don't just write code; we architect experiences. Our philosophy centers on reliability and the relentless pursuit of digital innovation, ensuring every product we build is future-proof and functionally beautiful.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">Custom Software Development</h4>
                  <p className="text-on-surface-variant">Bespoke solutions engineered for your unique operational needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">Startup MVP Development</h4>
                  <p className="text-on-surface-variant">Rapid prototyping and launch-ready MVPs to hit the market fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">AI-Powered Solutions</h4>
                  <p className="text-on-surface-variant">Integrating machine learning to automate and enhance your workflow.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image alt="Professional Studio Space" className="object-cover grayscale-[10%] sepia-[5%] hover:scale-105 transition-transform duration-700" src="/studio.jpg" fill />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-3xl shadow-2xl hidden lg:block border border-primary-container">
              <p className="text-on-primary font-headline text-5xl font-extrabold italic">10+</p>
              <p className="text-on-primary/70 text-sm font-label uppercase tracking-widest mt-2">Years of Craft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

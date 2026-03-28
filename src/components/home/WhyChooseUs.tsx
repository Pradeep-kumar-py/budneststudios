import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8">Why partner with us?</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              We blend creative strategy with technical excellence to ensure your digital tools are your strongest business assets.
            </p>
            <button className="btn-primary-premium text-on-primary px-10 py-5 rounded-xl font-bold">
              Schedule a Consultation
            </button>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">speed</span>
              <h4 className="font-bold text-xl mb-4">Fast Delivery</h4>
              <p className="text-on-surface-variant">We prioritize momentum without compromising on the fine details of craftsmanship.</p>
            </div>
            <div className="p-10 rounded-3xl bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">layers</span>
              <h4 className="font-bold text-xl mb-4">Scalable Architecture</h4>
              <p className="text-on-surface-variant">Built on robust frameworks designed to grow alongside your expanding user base.</p>
            </div>
            <div className="p-10 rounded-3xl bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">favorite</span>
              <h4 className="font-bold text-xl mb-4">Client-Centric</h4>
              <p className="text-on-surface-variant">Your vision is our blueprint. We work as an extension of your core team.</p>
            </div>
            <div className="p-10 rounded-3xl bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">payments</span>
              <h4 className="font-bold text-xl mb-4">Affordable Premium</h4>
              <p className="text-on-surface-variant">Premium results optimized for emerging budgets and venture-backed ventures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

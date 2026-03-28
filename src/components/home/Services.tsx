import React from 'react';

export default function Services() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-16 sm:mb-20 md:mb-24 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-4 sm:mb-6">Our Services</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-primary rounded-full mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Web Dev */}
          <div className="group p-8 sm:p-10 rounded-3xl bg-surface hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-outline-variant/10">
            <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-container text-on-primary-container">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">web</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Web Development</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Modern, high-performance websites using Next.js and the MERN stack.</p>
            <ul className="text-xs sm:text-sm font-bold text-primary space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Next.js / React
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> MERN Stack
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Performance Tuning
              </li>
            </ul>
          </div>
          {/* Mobile Dev */}
          <div className="group p-8 sm:p-10 rounded-3xl bg-surface hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-outline-variant/10">
            <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary-container text-on-secondary-container">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">smartphone</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Mobile Apps</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Cross-platform mobile experiences via React Native and Expo.</p>
            <ul className="text-xs sm:text-sm font-bold text-primary space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> React Native
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> iOS &amp; Android
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Expo Ecosystem
              </li>
            </ul>
          </div>
          {/* Backend */}
          <div className="group p-8 sm:p-10 rounded-3xl bg-surface hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-outline-variant/10">
            <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container-highest text-on-surface">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">dns</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Backend Systems</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Secure, scalable server architectures with Node.js and Express.</p>
            <ul className="text-xs sm:text-sm font-bold text-primary space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Node.js / Express
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> API Security
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Scalable Databases
              </li>
            </ul>
          </div>
          {/* AI */}
          <div className="group p-8 sm:p-10 rounded-3xl bg-surface hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-outline-variant/10">
            <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary text-on-primary">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">auto_awesome</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">AI Integration</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Smart automation and AI integration to optimize business flow.</p>
            <ul className="text-xs sm:text-sm font-bold text-primary space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> LLM Implementation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Process Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> Data Intelligence
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

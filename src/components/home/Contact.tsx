import React from 'react';

export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Column: Form */}
          <div className="bg-surface-container-low p-12 md:p-16 rounded-[3rem] shadow-sm border border-outline-variant/10">
            <h3 className="font-headline text-3xl font-bold mb-10 text-on-surface">Send us a message</h3>
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="name">Full Name</label>
                  <input className="w-full bg-surface border-transparent rounded-2xl p-5 focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-outline-variant text-sm shadow-sm" id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="email">Email Address</label>
                  <input className="w-full bg-surface border-transparent rounded-2xl p-5 focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-outline-variant text-sm shadow-sm" id="email" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="project-type">Project Type</label>
                <select className="w-full bg-surface border-transparent rounded-2xl p-5 focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm shadow-sm appearance-none" id="project-type">
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="mvp">Startup MVP</option>
                  <option value="ai">AI Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="message">Message</label>
                <textarea className="w-full bg-surface border-transparent rounded-2xl p-5 focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-outline-variant text-sm min-h-[180px] shadow-sm" id="message" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button className="w-full btn-primary-premium text-on-primary py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
          {/* Right Column: Info */}
          <div className="lg:pt-12">
            <span className="inline-block px-5 py-2 rounded-full bg-primary-container text-on-primary-container text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
              Connect
            </span>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface mb-8 leading-tight">Get in Touch</h2>
            <p className="text-on-surface-variant text-xl leading-relaxed mb-16">
              We're excited to hear about your next digital venture. Our team typically responds to all inquiries within 24 business hours.
            </p>
            <div className="space-y-12 mb-16">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">Email</p>
                  <a className="text-xl font-bold hover:text-primary transition-colors" href="mailto:hello@budnest.com">hello@budnest.com</a>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">Studio</p>
                  <p className="text-xl font-bold">San Francisco, CA • Remote Global</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Social Networks</p>
              <div className="flex gap-6">
                <a className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:shadow-xl transition-all duration-300 border border-outline-variant/10" href="#">
                  <span className="material-symbols-outlined text-2xl">hub</span>
                </a>
                <a className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:shadow-xl transition-all duration-300 border border-outline-variant/10" href="#">
                  <span className="material-symbols-outlined text-2xl">share</span>
                </a>
                <a className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:shadow-xl transition-all duration-300 border border-outline-variant/10" href="#">
                  <span className="material-symbols-outlined text-2xl">language</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

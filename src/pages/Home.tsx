import React from 'react';
import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Portfolio from '../components/home/Portfolio';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

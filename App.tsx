
import React, { useEffect } from 'react';
import AOS from 'aos';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ShowcaseSection from './components/ShowcaseSection';
import StylesSection from './components/StylesSection';
import TypographyPlayground from './components/TypographyPlayground';
import VariableFontsExplorer from './components/VariableFontsExplorer';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import CaseStudySection from './components/CaseStudySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up
    return () => {
      // Potentially destroy lenis instance if needed, though not always necessary
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ShowcaseSection />
        <StylesSection />
        <TypographyPlayground />
        <VariableFontsExplorer />
        <ProcessSection />
        <TestimonialsSection />
        <CaseStudySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
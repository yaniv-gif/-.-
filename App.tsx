import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Methodology } from './components/Methodology';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { VisualProof } from './components/VisualProof';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-bronze-500 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      {/* Services moved up for immediate value proposition */}
      <Services />
      <VisualProof />
      <Methodology />
      <Process />
      <About />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
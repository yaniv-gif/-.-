import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { VisualProof } from './components/VisualProof';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { Transformation } from './components/Transformation';
import { TrustedPartners } from './components/TrustedPartners';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-bronze-500 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      {/* Trusted Partners - Social Proof Anchor */}
      <TrustedPartners />
      {/* Services moved up for immediate value proposition - The "What" */}
      <Services />
      {/* Visual Proof - The "Evidence" */}
      <VisualProof />
      {/* Transformation - The "Magic" (Visualizing the change) */}
      <Transformation />
      {/* Methodology Section Removed as per request */}
      {/* Process - The "How" (Trust) */}
      <Process />
      {/* About - The "Who" (Connection) */}
      <About />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
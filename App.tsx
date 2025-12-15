import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { VisualProof } from './components/VisualProof';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { TrustedPartners } from './components/TrustedPartners';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-bronze-500 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      
      {/* Social Proof Anchor - "Who trusts us" */}
      <TrustedPartners />
      
      {/* The Offer - "What we do" */}
      <Services />
      
      {/* The Evidence - "See the quality" - Updated to match screenshot perfectly */}
      <VisualProof />
      
      {/* The Method - "How we work (Quiet Protocol)" */}
      <Process />
      
      {/* The Connection - "Who is Jericho" */}
      <About />
      
      {/* The Closer - "Objection Handling" */}
      <FAQ />
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
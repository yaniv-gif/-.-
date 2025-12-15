import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar'; // NEW
import { About } from './components/About';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { VisualProof } from './components/VisualProof';
import { Guarantee } from './components/Guarantee'; // NEW
import { LeadForm } from './components/LeadForm'; // NEW
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { TrustedPartners } from './components/TrustedPartners';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-bronze-500 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      
      {/* NEW: Immediate "Hard" Trust Signal */}
      <TrustBar />
      
      {/* Brands Anchor */}
      <TrustedPartners />
      
      {/* What we do */}
      <Services />
      
      {/* Evidence (Optimized for Middle Segment) */}
      <VisualProof />
      
      {/* NEW: Safety & Warranty (Objection Handling) */}
      <Guarantee />
      
      {/* How we work */}
      <Process />
      
      {/* Who is Jericho */}
      <About />
      
      {/* NEW: Primary Conversion Point */}
      <LeadForm />
      
      {/* Objection Handling */}
      <FAQ />
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
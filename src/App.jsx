import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1a1a1a]">
     
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background font-inter antialiased">
      <Hero />
      <Projects />
      <Philosophy />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

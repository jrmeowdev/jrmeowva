import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="App">
      <Preloader onComplete={() => setShowContent(true)} />
      
      {showContent && (
        <main className="fade-in">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;

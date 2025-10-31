import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import img1 from '../assets/img1.jpg';
import CVDownloadModal from './CVDownloadModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate to-charcoal opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gold opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Hi, I'm <span className="gradient-text">Jeremiah Reyes</span> 👋
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-2xl md:text-3xl text-gold mb-6 font-semibold"
            >
              Virtual Assistant with a Developer's Mindset.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Motivated. Organized. Ready to make your work easier.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary gold-glow inline-flex items-center gap-2">
                <Mail size={20} />
                Hire Me
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-outline gold-glow inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Portrait Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-gold opacity-20 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              
              {/* Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                <img 
                  src={img1} 
                  alt="Jeremiah Reyes - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Download Modal */}
      <CVDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

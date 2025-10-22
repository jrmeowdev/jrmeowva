import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyber-dark via-cyber-navy to-cyber-darker"
    >
      {/* Neon Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-transparent to-cyber-pink/20 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyber-purple/10 via-transparent to-cyber-blue/10"></div>

      {/* Animated Neon Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle absolute top-20 left-10 w-3 h-3 bg-cyber-blue rounded-full neon-blue-glow"></div>
        <div className="particle absolute top-40 right-20 w-4 h-4 bg-cyber-pink rounded-full neon-pink-glow" style={{ animationDelay: '2s' }}></div>
        <div className="particle absolute bottom-32 left-1/4 w-2 h-2 bg-cyber-purple rounded-full" style={{ animationDelay: '4s' }}></div>
        <div className="particle absolute top-1/3 right-1/3 w-3 h-3 bg-cyber-blue rounded-full" style={{ animationDelay: '1s' }}></div>
        <div className="particle absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyber-pink rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Smoke Effect Circles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="smoke absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyber-blue/30 to-transparent rounded-full blur-3xl"></div>
        <div className="smoke absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-tl from-cyber-pink/30 to-transparent rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="smoke absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-cyber-purple/20 to-transparent rounded-full blur-3xl" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Diagonal Neon Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent transform -rotate-12 neon-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-pink to-transparent transform rotate-12 neon-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 animate-slide-right">
          <div className="space-y-2">
            <p className="text-cyber-purple text-lg font-medium tracking-wide uppercase">VIRTUAL ASSISTANT</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-cyber-text">
              Hi, I'm{' '}
              <span className="gradient-text neon-pulse">Jeremiah Reyes</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-cyber-text leading-relaxed">
            A Tech-Savvy Virtual Assistant with a Developer's Edge.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            Combining administrative excellence with technical expertise to deliver 
            efficient, innovative solutions for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-pink text-white font-bold rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 neon-blue-glow hover:neon-pink-glow"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-80}
              className="glass-blue px-8 py-4 border-2 border-cyber-blue/50 text-cyber-text font-bold rounded-lg hover:border-cyber-pink hover:bg-cyber-pink/10 transition-all duration-300 cursor-pointer"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Right Content - 3D Gradient Portrait */}
        <div className="relative animate-fade-in">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Neon Gradient Orb */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/30 via-cyber-pink/20 to-cyber-purple/30 rounded-full blur-3xl animate-float neon-pulse"></div>
            
            {/* Sliced Portrait Effect */}
            <div className="relative w-full h-full">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/40 via-cyber-navy to-cyber-pink/40 rounded-full opacity-80 neon-blue-glow"></div>
              
              {/* Sliced Layers */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-cyber-pink/50 via-cyber-purple/30 to-transparent rounded-full transform translate-x-8 -translate-y-8 opacity-70 neon-pink-glow"></div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-cyber-blue/50 via-cyber-purple/30 to-transparent rounded-full transform -translate-x-8 translate-y-8 opacity-70"></div>
              
              {/* Center Highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue/50 via-cyber-pink/30 to-cyber-purple/50 rounded-full blur-2xl neon-pulse"></div>
              </div>
              
              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold gradient-text neon-pulse">JR</span>
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute top-1/4 -right-4 w-16 h-16 border-2 border-cyber-blue/50 rounded-lg transform rotate-12 animate-float neon-blue-glow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 -left-4 w-12 h-12 border-2 border-cyber-pink/50 rounded-full animate-float neon-pink-glow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex justify-center pt-2 neon-blue-glow">
          <div className="w-1 h-2 bg-gradient-to-b from-cyber-blue to-cyber-pink rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

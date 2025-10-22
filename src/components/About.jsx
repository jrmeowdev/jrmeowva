import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-cyber-darker via-cyber-navy to-cyber-dark overflow-hidden"
    >
      {/* Neon Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-pink/5"></div>
      
      {/* Diagonal Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-cyber-dark diagonal-divider"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Decorative Element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Geometric Shapes */}
              <div className="absolute inset-0 border-2 border-cyber-blue/30 rounded-lg transform rotate-6 neon-blue-glow"></div>
              <div className="absolute inset-8 border-2 border-cyber-pink/40 rounded-lg transform -rotate-6 neon-pink-glow"></div>
              <div className="absolute inset-16 glass-blue rounded-lg"></div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyber-blue/30 to-cyber-pink/30 rounded-full flex items-center justify-center neon-pulse">
                    <svg className="w-12 h-12 text-cyber-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-cyber-purple font-medium">Innovation Meets Efficiency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-2">
              <p className="text-cyber-purple font-semibold tracking-wider uppercase">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text neon-pulse">
                Virtual Assistant with a Technical Edge
              </h2>
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue via-cyber-pink to-transparent"></div>

            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-cyber-blue font-semibold">tech-savvy Virtual Assistant</span> with 
                a strong background in IT and software development. This unique combination allows me to 
                provide not just administrative support, but innovative, tech-driven solutions that 
                streamline workflows and boost productivity.
              </p>
              
              <p>
                With expertise spanning from <span className="text-cyber-pink font-semibold">data management</span> and
                <span className="text-cyber-pink font-semibold"> customer support</span> to 
                <span className="text-cyber-purple font-semibold"> e-commerce operations</span> and 
                <span className="text-cyber-purple font-semibold"> digital tools</span>, I bridge the gap between 
                traditional VA services and modern technical requirements.
              </p>

              <p>
                Whether it's managing your calendar, handling customer inquiries, or optimizing your 
                online store, I bring a developer's mindset to every task—ensuring accuracy, efficiency, 
                and scalability.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="glass-blue rounded-lg p-4 text-center space-y-1 hover:scale-105 transition-transform">
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-sm text-gray-400">Tools Mastered</p>
              </div>
              <div className="glass-pink rounded-lg p-4 text-center space-y-1 hover:scale-105 transition-transform">
                <p className="text-3xl font-bold gradient-text">100%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="glass-blue rounded-lg p-4 text-center space-y-1 hover:scale-105 transition-transform">
                <p className="text-3xl font-bold gradient-text">24/7</p>
                <p className="text-sm text-gray-400">Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

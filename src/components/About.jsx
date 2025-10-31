import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import img2 from '../assets/img2.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-slate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #CBA135 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Portrait Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold to-transparent opacity-20 rounded-lg" />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-gold shadow-2xl">
                <img 
                  src={img2} 
                  alt="Jeremiah Reyes - About Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                A <span className="text-gold font-semibold">detail-oriented Virtual Assistant</span> passionate 
                about helping teams stay organized and productive. I may be new to the field, but my technical 
                skills in web development and tools like <span className="text-gold">Google Workspace</span>, 
                <span className="text-gold"> Notion</span>, <span className="text-gold">Canva</span>, and <span className="text-gold">AI Usage</span> allow 
                me to adapt quickly and deliver professional results.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With a background in software development, I bring a unique problem-solving approach to 
                administrative tasks. I understand workflows, automation, and efficiency — making me more 
                than just a task executor, but a strategic partner in your business operations.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-charcoal border border-gold rounded-full text-gold text-sm font-semibold">
                  Fast Learner
                </span>
                <span className="px-4 py-2 bg-charcoal border border-gold rounded-full text-gold text-sm font-semibold">
                  Tech-Savvy
                </span>
                <span className="px-4 py-2 bg-charcoal border border-gold rounded-full text-gold text-sm font-semibold">
                  Self-Motivated
                </span>
                <span className="px-4 py-2 bg-charcoal border border-gold rounded-full text-gold text-sm font-semibold">
                  Reliable
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Loom Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-6">
            Get to Know <span className="gradient-text">Me Better</span>
          </h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.loom.com/embed/af0e6969c45d46bb8693cab0df47475f?sid=a8f2e8f4-c0e4-4e0d-9a9a-1e8f2e8f4c0e"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-gold shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>
    </section>
  );
};

export default About;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
      role: "Motivational Quote"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      role: "Motivational Quote"
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      role: "Motivational Quote"
    }
  ];

  const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card-hover bg-slate p-8 rounded-lg relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={80} className="text-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-2xl">💭</span>
          </div>
          <div>
            <h4 className="text-white font-bold">{testimonial.author}</h4>
            <p className="text-gold text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </motion.div>
  );

  return (
    <section id="testimonials" className="py-20 bg-slate relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Words of <span className="gradient-text">Inspiration</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Guiding principles that drive my work ethic and dedication
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-8 bg-charcoal rounded-lg border border-gold max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-3">
            <span className="gradient-text">Client Testimonials Coming Soon</span>
          </h3>
          <p className="text-gray-400">
            As I build my portfolio, I'm committed to delivering exceptional service that earns glowing reviews. 
            Your project could be featured here!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

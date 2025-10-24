import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-charcoal relative overflow-hidden">
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
            Let's <span className="gradient-text">Connect!</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to work together? Drop me a message and let's discuss how I can help your business thrive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate border border-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate border border-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate border border-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary gold-glow w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Portrait Image 3 */}
            {/* <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold to-transparent opacity-20 rounded-lg blur-xl" />
              
              <div className="relative w-full h-full bg-gradient-to-br from-slate to-charcoal rounded-lg flex items-center justify-center border-2 border-gold shadow-2xl overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-8xl">👨‍💼</span>
                  </div>
                  <p className="text-gold font-semibold text-lg">Professional Portrait</p>
                  <p className="text-sm text-gray-400">Corner/Contact Photo</p>
                </div>
              </div>
            </div> */}

            {/* Contact Details */}
            <div className="bg-slate p-6 rounded-lg border border-gold">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center border border-gold">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:jeremiahreyes.r01@gmail.com" className="text-white hover:text-gold transition-colors">
                      jeremiahreyes.r01@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center border border-gold">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+639489715221" className="text-white hover:text-gold transition-colors">
                      +63 948 971 5221
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center border border-gold">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Available Remotely</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gold">
                <p className="text-gray-400 mb-4">Connect with me:</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="https://www.linkedin.com/in/jeremiah-reyes-832a02321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center border border-gold gold-glow"
                  >
                    <Linkedin size={20} className="text-gold" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="https://github.com/jrmeowdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center border border-gold gold-glow"
                  >
                    <Github size={20} className="text-gold" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="mailto:jeremiahreyes.r01@gmail.com"
                    className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center border border-gold gold-glow"
                  >
                    <Mail size={20} className="text-gold" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

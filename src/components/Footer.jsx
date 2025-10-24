import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate border-t border-gold py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Jeremiah Reyes</h3>
            <p className="text-gray-400 text-sm">
              Virtual Assistant with a Developer's Mindset
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="mailto:jeremiah@example.com"
                className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-gold gold-glow"
                aria-label="Email"
              >
                <Mail size={18} className="text-gold" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-gold gold-glow"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gold" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-gold gold-glow"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gold" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Jeremiah Reyes | Virtual Assistant Portfolio
            <span className="text-gold">•</span>
            Made with <Heart size={14} className="text-gold inline" fill="#CBA135" /> and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

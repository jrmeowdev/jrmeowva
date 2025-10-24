import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Database, Headphones, Globe } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Briefcase,
      title: 'Administrative Support',
      description: 'Email management, calendar scheduling, document preparation, and general office tasks to keep your operations running smoothly.',
      features: ['Email & Calendar Management', 'Document Organization', 'Meeting Coordination', 'Travel Arrangements']
    },
    {
      icon: Database,
      title: 'Data Entry & File Organization',
      description: 'Accurate data entry, file management, and database organization with attention to detail and efficiency.',
      features: ['Data Entry & Processing', 'File Organization', 'Database Management', 'Spreadsheet Creation']
    },
    {
      icon: Headphones,
      title: 'Customer Service Assistance',
      description: 'Professional customer support via email, chat, or social media to maintain positive client relationships.',
      features: ['Email Support', 'Chat Support', 'Social Media Responses', 'Customer Inquiries']
    },
    {
      icon: Globe,
      title: 'Website Maintenance',
      description: 'Basic HTML/CSS updates, content management, and website maintenance to keep your online presence fresh.',
      features: ['Content Updates', 'HTML/CSS Edits', 'Bug Fixes', 'Performance Monitoring']
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-hover bg-charcoal p-8 rounded-lg relative overflow-hidden group"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mb-6 relative z-10"
      >
        <service.icon size={32} className="text-charcoal" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed relative z-10">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 relative z-10">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-gray-300">
            <span className="text-gold mt-1">✓</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
    </motion.div>
  );

  return (
    <section id="services" className="py-20 bg-charcoal relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive virtual assistant services tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-slate to-charcoal p-12 rounded-lg border border-gold max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">
            Let's make your operations smoother — <span className="gradient-text">together</span>.
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Ready to streamline your workflow and boost productivity?
          </p>
          <a href="#contact" className="btn-primary gold-glow inline-block">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

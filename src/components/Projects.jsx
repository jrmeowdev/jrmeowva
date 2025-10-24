import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'CYSDO Scholarship Portal',
      description: 'Developed as backend web developer; created application system with automated email notifications.',
      role: 'Backend Developer',
      tools: ['PHP', 'MySQL', 'JavaScript', 'Email Automation'],
      gradient: 'from-gold to-yellow-600'
    },
    {
      title: 'Offline Inventory App',
      description: 'Built with Java/SQLite for small store operations with real-time stock tracking.',
      role: 'Full Stack Developer',
      tools: ['Java', 'SQLite', 'Desktop App'],
      gradient: 'from-gold to-amber-600'
    },
    {
      title: 'Task Dashboard (VA Demo)',
      description: 'Sample VA dashboard built using Notion and automation workflow for client task management.',
      role: 'Virtual Assistant',
      tools: ['Notion', 'Automation', 'Workflow Design'],
      gradient: 'from-gold to-orange-600'
    },
    {
      title: 'Email Management System',
      description: 'Organized and streamlined email workflows using filters, labels, and automated responses.',
      role: 'Administrative Support',
      tools: ['Gmail', 'Google Workspace', 'Filters'],
      gradient: 'from-gold to-yellow-700'
    },
    {
      title: 'Social Media Content Calendar',
      description: 'Created and managed content scheduling system for consistent social media presence.',
      role: 'Social Media Assistant',
      tools: ['Buffer', 'Canva', 'Content Planning'],
      gradient: 'from-gold to-amber-700'
    },
    {
      title: 'Data Entry & Organization',
      description: 'Processed and organized large datasets with accuracy and efficiency using spreadsheets.',
      role: 'Data Entry Specialist',
      tools: ['Google Sheets', 'Excel', 'Data Validation'],
      gradient: 'from-gold to-yellow-800'
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover bg-slate p-6 rounded-lg group"
    >
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg`}>
          <Code2 size={24} className="text-charcoal" />
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="p-2 bg-charcoal rounded-lg border border-gold opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ExternalLink size={20} className="text-gold" />
        </motion.button>
      </div>

      {/* Project Content */}
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
      
      {/* Role */}
      <div className="mb-4">
        <span className="text-gold text-sm font-semibold">Role: </span>
        <span className="text-gray-300 text-sm">{project.role}</span>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-charcoal border border-gold rounded-full text-gold text-xs font-semibold"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-slate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#CBA135 1px, transparent 1px), linear-gradient(90deg, #CBA135 1px, transparent 1px)',
          backgroundSize: '100px 100px'
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
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of tasks and projects I've completed, demonstrating my versatility
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Want to see more? Let's discuss your project needs.
          </p>
          <a href="#contact" className="btn-primary gold-glow inline-block">
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

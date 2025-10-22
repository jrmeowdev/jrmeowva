import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: "Mother's Milk Platform",
      role: 'Internship Project',
      period: '2024',
      description: 'Coordinated data management and administrative tasks for a healthcare platform connecting mothers with milk donation services. Managed user data, facilitated communication between stakeholders, and ensured smooth operational workflows.',
      highlights: [
        'Coordinated data collection and organization for 100+ users',
        'Streamlined communication processes between donors and recipients',
        'Maintained accurate records and documentation',
        'Supported platform testing and quality assurance',
      ],
      tags: ['Data Management', 'Coordination', 'Healthcare', 'Documentation'],
    },
    {
      title: 'Freelance Development & VA Tasks',
      role: 'Virtual Assistant & Developer',
      period: '2023 - Present',
      description: 'Providing comprehensive virtual assistant services combined with technical development skills. Specializing in e-commerce product management, data entry automation, and administrative support for various clients.',
      highlights: [
        'Created and optimized 500+ product listings for e-commerce stores',
        'Automated data entry processes, reducing manual work by 60%',
        'Managed client calendars, emails, and customer support inquiries',
        'Developed custom solutions for workflow optimization',
      ],
      tags: ['E-commerce', 'Product Listing', 'Data Entry', 'Automation', 'Customer Support'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-cyber-dark via-cyber-navy to-cyber-darker overflow-hidden"
    >
      {/* Neon Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyber-blue/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-cyber-pink/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cyber-purple font-semibold tracking-wider uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text neon-pulse mb-4">
            Experience & Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects showcasing my expertise in virtual assistance and technical solutions
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple mx-auto mt-4"></div>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image/Visual Side */}
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="relative aspect-video glass rounded-lg overflow-hidden border border-cyber-blue/30 group-hover:border-cyber-pink/50 transition-colors hover:neon-blue-glow">
                    {/* Project Visual Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyber-blue/30 to-cyber-pink/30 rounded-full flex items-center justify-center neon-pulse">
                          <svg className="w-10 h-10 text-cyber-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-medium">{project.title}</p>
                      </div>
                    </div>

                    {/* Decorative Grid */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'linear-gradient(rgba(0,191,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,79,216,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyber-blue/40 rounded-tl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyber-pink/40 rounded-br-lg"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="font-semibold">{project.role}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-cyber-text group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <p className="text-cyber-blue font-semibold">Key Achievements:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <svg className="w-5 h-5 text-cyber-pink mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 glass-blue rounded-full text-sm text-gray-400 hover:border-cyber-pink/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider (except for last item) */}
              {index < projects.length - 1 && (
                <div className="mt-12 h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-cyber-pink/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useEffect, useRef, useState } from 'react';

const Tools = () => {
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

  const tools = [
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'Microsoft Office', category: 'Productivity' },
    { name: 'Trello', category: 'Project Management' },
    { name: 'Notion', category: 'Documentation' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'Canva', category: 'Design' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Zoom', category: 'Video Conferencing' },
    { name: 'Asana', category: 'Task Management' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Mailchimp', category: 'Email Marketing' },
    { name: 'WordPress', category: 'Content Management' },
  ];

  return (
    <section
      id="tools"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-cyber-darker via-cyber-navy to-cyber-dark overflow-hidden"
    >
      {/* Neon Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-cyber-blue/5 via-transparent to-cyber-pink/5"></div>
      
      {/* Diagonal Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-cyber-dark diagonal-divider"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cyber-purple font-semibold tracking-wider uppercase mb-2">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text neon-pulse mb-4">
            Tools & Platforms
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in industry-leading tools and platforms to deliver exceptional results
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple mx-auto mt-4"></div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`group relative glass p-6 rounded-lg border border-cyber-blue/20 hover:border-cyber-pink/50 transition-all duration-500 hover:neon-blue-glow ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-pink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              
              <div className="relative z-10 text-center space-y-3">
                {/* Tool Icon Placeholder */}
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue/40 to-cyber-pink/40 rounded"></div>
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-bold text-cyber-text group-hover:gradient-text transition-all">
                  {tool.name}
                </h3>

                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {tool.category}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-blue/20 rounded-bl-lg group-hover:border-cyber-pink/50 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block glass-blue rounded-lg p-6">
            <p className="text-gray-400 text-lg">
              <span className="gradient-text font-semibold">Always learning.</span> I continuously expand my toolkit to stay current with the latest platforms and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, Calendar, Database, Search, CheckSquare, Share2,
  MessageCircle, Code, Palette, Cloud, FileText, Zap 
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vaSkills = [
    { icon: Mail, name: 'Email & Calendar Management', color: '#CBA135' },
    { icon: Database, name: 'Data Entry & Organization', color: '#CBA135' },
    { icon: Search, name: 'Internet Research', color: '#CBA135' },
    { icon: CheckSquare, name: 'Task Tracking (Trello, Notion, ClickUp, Jira)', color: '#CBA135' },
    { icon: MessageCircle, name: 'Customer Support Basics', color: '#CBA135' },
    { icon: Share2, name: 'Social Media Scheduling', color: '#CBA135' },
  ];

  const techSkills = [
    { icon: Code, name: 'HTML, CSS, JavaScript, React, UI/UX', color: '#CBA135' },
    { icon: Database, name: 'PHP, MySQL, NodeJS, MongoDB, Firebase', color: '#CBA135' },
    { icon: Palette, name: 'Canva, Figma, Capcut', color: '#CBA135' },
    { icon: Cloud, name: 'Google Workspace & MS Office', color: '#CBA135' },
    { icon: FileText, name: 'File Management', color: '#CBA135' },
    { icon: Zap, name: 'Automation Scripts', color: '#CBA135' },
  ];

  const SkillCard = ({ icon: Icon, name, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card-hover bg-charcoal p-6 rounded-lg"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-slate rounded-lg border border-gold">
          <Icon size={24} style={{ color }} />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg">{name}</h4>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-charcoal relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A powerful combination of virtual assistant expertise and technical proficiency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* VA Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <span className="text-gold">🧰</span>
                Virtual Assistant Skills
              </h3>
              <p className="text-gray-400">Core competencies for seamless support</p>
            </motion.div>
            
            <div className="grid gap-4">
              {vaSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Tech Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <span className="text-gold">💻</span>
                Developer & Tech Tools
              </h3>
              <p className="text-gray-400">Technical skills that set me apart</p>
            </motion.div>
            
            <div className="grid gap-4">
              {techSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tool Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Proficient with popular tools:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Notion', 'Trello', 'ClickUp', 'Canva', 'Figma', 'Google Workspace', 
              'Microsoft Office', 'Buffer', 'Meta Business Suite', 'GitHub'].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="px-5 py-2 bg-slate border border-gold rounded-full text-gold font-semibold text-sm gold-glow"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

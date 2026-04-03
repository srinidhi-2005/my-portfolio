import React, { useState } from 'react';
import { Code, Brain, Workflow, Globe } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillCategories = [
    { id: 'ai', name: 'AI/ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'lang', name: 'Languages', icon: <Code className="w-5 h-5" /> },
    { id: 'dev', name: 'DevOps', icon: <Workflow className="w-5 h-5" /> },
    { id: 'web', name: 'Web Technologies', icon: <Globe className="w-5 h-5" /> }
  ];

  const skills = [
    // ai
    { name: 'Deep Learning', level: 87, category: 'ai' },
    { name: 'Transformers', level: 85, category: 'ai' },
    { name: 'NLP', level: 82, category: 'ai' },
    { name: 'Neural Networks', level: 92, category: 'ai' },
    { name: 'Machine Learning', level: 88, category: 'ai' },
    
    // lang
    { name: 'Python', level: 95, category: 'lang' },
    { name: 'Java', level: 85, category: 'lang' },
    { name: 'SQL', level: 90, category: 'lang' },
    
    // dev
    { name: 'Docker', level: 90, category: 'dev' },
    { name: 'Git & Github', level: 92, category: 'dev' },
    { name: 'Github Actions (CI/CD)', level: 89, category: 'dev' },
    
    // web
    { name: 'React JS', level: 80, category: 'web' },
    { name: 'Node JS', level: 75, category: 'web' },
    { name: 'Express JS', level: 75, category: 'web' },
    { name: 'MongoDB', level: 80, category: 'web' },
    { name: 'REST APIs', level: 80, category: 'web' },
    { name: 'Tailwind CSS', level: 70, category: 'web' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const floatingElements = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 via-black to-yellow-400/5"></div>
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Enhanced Floating Elements */}
      {floatingElements.map((i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          <div className={`${i % 4 === 0 ? 'w-3 h-3' : i % 4 === 1 ? 'w-2 h-2' : i % 4 === 2 ? 'w-1 h-1' : 'w-4 h-1'} bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50`}></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className='transform transition-all duration-1500'>
            <h1 className="text-6xl md:text-6xl font-black mb-6 relative group">
              <span className="text-yellow-400 drop-shadow-2xl hover:text-yellow-300 transition-colors duration-500">
                Skills
              </span>
            </h1>
          </div>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1500 delay-300'>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-yellow-400/20 border-yellow-400/70 text-yellow-400'
                  : 'bg-gray-900/50 border-yellow-400/30 text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transform transition-all duration-1500 delay-500'>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-yellow-400/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:transform hover:scale-105">
                
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-yellow-400">{skill.name}</h3>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-2 overflow-hidden">
                    <div 
                      className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 shadow-sm shadow-yellow-400/50"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slideIn 1s ease-out ${index * 0.1}s forwards`,
                        '--target-width': `${skill.level}%`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
import React, { useState } from 'react';
import { Code, Palette, Brain, Server, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Star className="w-5 h-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Palette className="w-5 h-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'ai', name: 'AI/ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <Code className="w-5 h-5" /> }
  ];

  const skills = [
    // Frontend
    { name: 'React JS', level: 90, category: 'frontend', description: 'Building dynamic UIs' },
    { name: 'JavaScript', level: 95, category: 'frontend', description: 'ES6+ & Modern JS' },
    { name: 'Tailwind CSS', level: 95, category: 'frontend', description: 'Utility-first styling' },
    { name: 'HTML/CSS', level: 100, category: 'frontend', description: 'Semantic & responsive' },
    
    // Backend
    { name: 'Node.js', level: 75, category: 'backend', description: 'Server-side JavaScript' },
    { name: 'Express.js', level: 75, category: 'backend', description: 'Fast web framework' },
    { name: 'MongoDB', level: 50, category: 'backend', description: 'NoSQL database' },
    { name: 'Python', level: 90, category: 'backend', description: 'Backend & scripting' },
    { name: 'REST APIs', level: 70, category: 'backend', description: 'API design & development' },
    
    // AI/ML
    { name: 'Machine Learning', level: 50, category: 'ai', description: 'Predictive models' },
    { name: 'Deep Learning', level: 50, category: 'ai', description: 'Neural network architectures' },
    { name: 'PyTorch', level: 70, category: 'ai', description: 'Deep learning framework' },
    { name: 'Neural Networks', level: 80, category: 'ai', description: 'ANNs, CNNs' },
    { name: 'Transformers', level: 70, category: 'ai', description: 'Attention-based models' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools', description: 'Version control' },
    { name: 'VS Code', level: 95, category: 'tools', description: 'Development environment' },
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

                {/* Description */}
                <p className="text-gray-300 text-sm">{skill.description}</p>

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
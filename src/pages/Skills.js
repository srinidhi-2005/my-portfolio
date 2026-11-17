import React, { useState } from 'react';
import { Code, Brain, Workflow, Database, Server, Network, ScanEye, MessagesSquare } from 'lucide-react';
import {
  SiPytorch,
  SiPython,
  SiOpenjdk,
  SiMysql,
  SiMongodb,
  SiFastapi,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiHuggingface,
  SiScikitlearn,
  SiTensorflow
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillCategories = [
    { id: 'ai', name: 'AI/ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'lang', name: 'Programming Languages', icon: <Code className="w-5 h-5" /> },
    { id: 'back', name: 'Frameworks & Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'dev', name: 'DevOps & Tools', icon: <Workflow className="w-5 h-5" /> },
    { id: 'db', name: 'Databases', icon: <Database className="w-5 h-5" /> }
  ];

  const skills = [
    // ai
    { name: 'Machine Learning', category: 'ai', icon: <SiScikitlearn className="w-6 h-6" />, description: 'Building predictive models from structured and unstructured data.' },
    { name: 'Deep Learning', category: 'ai', icon: <SiTensorflow className="w-6 h-6" />, description: 'Training deep neural nets for complex pattern recognition.' },
    { name: 'Neural Networks', category: 'ai', icon: <Network className="w-6 h-6" />, description: 'Designing architectures for classification and generation tasks.' },
    { name: 'Transformers', category: 'ai', icon: <SiHuggingface className="w-6 h-6" />, description: 'Fine-tuning attention models for language and multimodal work.' },
    { name: 'NLP', category: 'ai', icon: <MessagesSquare className="w-6 h-6" />, description: 'Processing and understanding text with modern NLP pipelines.' },
    { name: 'Computer Vision', category: 'ai', icon: <ScanEye className="w-6 h-6" />, description: 'Detecting and analyzing visual content from images and video.' },
    { name: 'PyTorch', category: 'ai', icon: <SiPytorch className="w-6 h-6" />, description: 'Primary framework for research and production deep learning.' },

    // lang
    { name: 'Python', category: 'lang', icon: <SiPython className="w-6 h-6" />, description: 'Go-to language for AI, scripting and backend services.' },
    { name: 'Java', category: 'lang', icon: <SiOpenjdk className="w-6 h-6" />, description: 'Strong OOP foundation for scalable application development.' },
    { name: 'SQL', category: 'lang', icon: <Database className="w-6 h-6" />, description: 'Querying and modeling relational data efficiently.' },

    // back
    { name: 'FastAPI', category: 'back', icon: <SiFastapi className="w-6 h-6" />, description: 'High-performance Python APIs with async support.' },
    { name: 'React.js', category: 'back', icon: <SiReact className="w-6 h-6" />, description: 'Building responsive, component-driven user interfaces.' },
    { name: 'Node.js', category: 'back', icon: <SiNodedotjs className="w-6 h-6" />, description: 'Server-side JavaScript for APIs and real-time apps.' },
    { name: 'Express.js', category: 'back', icon: <SiExpress className="w-6 h-6" />, description: 'Lightweight routing and middleware for Node backends.' },

    // dev
    { name: 'Docker', category: 'dev', icon: <SiDocker className="w-6 h-6" />, description: 'Containerizing apps for consistent local and cloud runs.' },
    { name: 'Git & Github', category: 'dev', icon: <SiGithub className="w-6 h-6" />, description: 'Version control, collaboration and code review workflows.' },
    { name: 'Github Actions (CI/CD)', category: 'dev', icon: <SiGithubactions className="w-6 h-6" />, description: 'Automating tests, builds and deployments on every push.' },

    // db
    { name: 'MySQL', category: 'db', icon: <SiMysql className="w-6 h-6" />, description: 'Relational database design, indexing and query optimization.' },
    { name: 'MongoDB', category: 'db', icon: <SiMongodb className="w-6 h-6" />, description: 'Flexible document storage for fast-changing application data.' },
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
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
          <div className="transform transition-all duration-1500">
            <h1 className="text-6xl md:text-6xl font-black mb-6 relative group">
              <span className="text-yellow-400 drop-shadow-2xl hover:text-yellow-300 transition-colors duration-500">
                Skills
              </span>
            </h1>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1500 delay-300">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transform transition-all duration-1500 delay-500">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-yellow-400/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:transform hover:scale-105">

                {/* Skill Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-400 flex-shrink-0">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-yellow-400">{skill.name}</h3>
                </div>

                {/* Short Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {skill.description}
                </p>

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

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Code2, Zap, ZapOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '../components/Tooltip';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  const projects = projectsData;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleDetailsClick = () => {
    navigate(`/project/${projects[currentIndex].id}`);
  };

  const handleGithubClick = () => {
    if (projects[currentIndex].githubUrl !== '#') {
      window.open(projects[currentIndex].githubUrl, '_blank');
    }
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit && !showFullDescription) {
      return words.slice(0, wordLimit).join(' ') + '...';
    } else {
      return description;
    }
  };

  return (
    <section id='projects' className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 mb-3">
            <div className="text-left">
              <h1 className="text-6xl font-black bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent mt-10">
                Projects
              </h1>
            </div>
          </div>
        </div>

        <div className="relative mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${projects[currentIndex].color} p-1 shadow-2xl shadow-yellow-400/10`}>
                <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {projects[currentIndex].image ? (
                      <img 
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    ) : (
                      <div className="w-4/5 h-4/5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-yellow-400/20 flex items-center justify-center">
                        <Code2 className="w-16 h-16 text-yellow-400/50" />
                      </div>
                    )}
                    
                    <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button 
                        onClick={handleGithubClick}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                      <div className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${
                        projects[currentIndex].status === 'Completed' 
                          ? 'bg-green-500/20 border border-green-400/30' 
                          : projects[currentIndex].status === 'In Progress'
                          ? 'bg-blue-500/20 border border-blue-400/30'
                          : 'bg-yellow-500/20 border border-yellow-400/30'
                      }`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          projects[currentIndex].status === 'Completed' ? 'bg-green-400' : 
                          projects[currentIndex].status === 'In Progress' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`}></div>
                        <span className="text-sm font-medium text-white">{projects[currentIndex].status}</span>
                      </div>
                      <div className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${
                        projects[currentIndex].type === 'Individual' 
                          ? 'bg-purple-500/20 border border-purple-400/30' 
                          : 'bg-orange-500/20 border border-orange-400/30'
                      }`}>
                        <span className="text-sm font-medium text-white">{projects[currentIndex].type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-medium rounded-full border border-yellow-400/30">
                    {projects[currentIndex].category}
                  </span>
                  <span className="text-gray-400 text-sm">{projects[currentIndex].year}</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-2">
                  {projects[currentIndex].title}
                </h2>
                
                <p className="text-xl text-yellow-400 font-medium mb-6">
                  {projects[currentIndex].subtitle}
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {truncateDescription(projects[currentIndex].description, 10)}
                  {projects[currentIndex].description.split(' ').length > 10 && (
                    <button 
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="ml-2 text-yellow-400 hover:text-yellow-300 font-semibold focus:outline-none"
                    >
                      {showFullDescription ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {projects[currentIndex].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg border border-gray-700/50 hover:border-yellow-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={handleDetailsClick}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 px-8 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Details</span>
                  </div>
                </button>
                <button 
                  onClick={handleGithubClick}
                  className="flex-1 bg-white/10 backdrop-blur-sm text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              onClick={prevProject}
              className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
            </button>
            <button
              onClick={nextProject}
              className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
            </button>
          </div>

          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/50'
                    : 'w-3 h-3 bg-gray-600/50 hover:bg-gray-500/70'
                }`}
              />
            ))}
          </div>

          <Tooltip message={isAutoPlaying ? 'Autoplay is ON' : 'Autoplay is OFF'}>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isAutoPlaying ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
            >
              {isAutoPlaying ? <Zap className="w-6 h-6 animate-pulse" /> : <ZapOff className="w-6 h-6" />}
            </button>
          </Tooltip>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800/50">
            <span className="text-yellow-400 font-bold text-lg">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <span className="text-gray-400">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Bg from "../assets/img.jpg";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Code2,
  Calendar,
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Clock,
  Award,
  CheckCircle,
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find(p => p.id === parseInt(id));
  const currentIndex = projectsData.findIndex(p => p.id === parseInt(id));

  useEffect(() => {
    if (project && project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 3000); // 3 seconds
      return () => clearInterval(interval);
    }
  }, [project]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % project.images.length
    );
  };

  const nextProjectId = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1].id : null;
  const prevProjectId = currentIndex > 0 ? projectsData[currentIndex - 1].id : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          Go Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section
      id='project-details'
      className="min-h-screen bg-black text-white relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back to Projects</span>
        </button>

        {/* Previous Project Button */}
        {prevProjectId && (
          <button
            onClick={() => navigate(`/project/${prevProjectId}`)}
            className="fixed top-1/2 -translate-y-1/2 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>
        )}

        {/* Next Project Button */}
        {nextProjectId && (
          <button
            onClick={() => navigate(`/project/${nextProjectId}`)}
            className="fixed top-1/2 -translate-y-1/2 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 shadow-lg"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Main Content Container */}
        <div className="rounded-3xl p-8 md:p-12 border border-yellow-400/30 shadow-2xl shadow-yellow-400/10">

          {/* Project Header */}
          <div className="text-center mb-12">
            {/* Project Image Slider */}
            {project.images && project.images.length > 0 ? (
              <div className="relative mb-8 group">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full max-h-96 object-contain rounded-2xl shadow-lg border border-yellow-400/20 mx-auto transition-opacity duration-500"
                  style={{ maxWidth: '80%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-gray-700/70 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-gray-700/70 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                            ? 'bg-yellow-400 w-4'
                            : 'bg-gray-400/50 hover:bg-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full max-h-96 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-8 flex items-center justify-center mx-auto border border-yellow-400/20" style={{ maxWidth: '80%' }}>
                <Code2 className="w-20 h-20 text-yellow-400/50" />
              </div>
            )}

            {/* Title and Subtitle */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 text-sm font-medium rounded-full border border-yellow-400/30 mb-4">
                {project.category} • {project.year}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-yellow-400 mb-3 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium italic">{project.subtitle}</p>
            </div>

            {/* Status and Type Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Status Indicator */}
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${project.status === 'Completed'
                  ? 'bg-green-500/20 border border-green-400/30'
                  : project.status === 'In Progress'
                    ? 'bg-blue-500/20 border border-blue-400/30'
                    : 'bg-yellow-500/20 border border-yellow-400/30'
                }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${project.status === 'Completed' ? 'bg-green-400' :
                    project.status === 'In Progress' ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}></div>
                <span className="text-sm font-medium text-white">{project.status}</span>
              </div>

              {/* Project Type */}
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${project.type === 'Individual'
                  ? 'bg-purple-500/20 border border-purple-400/30'
                  : 'bg-orange-500/20 border border-orange-400/30'
                }`}>
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium text-white">{project.type}</span>
              </div>

              {/* Duration (if available) */}
              {project.duration && (
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm bg-gray-500/20 border border-gray-400/30">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium text-white">{project.duration}</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Project Overview</h2>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-3 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/40 rounded-xl text-sm font-medium text-yellow-300 hover:from-yellow-400/20 hover:to-yellow-500/20 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-yellow-400/30 transition-colors">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Role & Responsibilities (for team projects) */}
          {project.type === 'Team' && project.myRole && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">My Role & Responsibilities</h2>
              </div>
              <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-medium rounded-full">
                    {project.myRole}
                  </span>
                  {project.teamSize && (
                    <span className="text-gray-400 text-sm">
                      Team of {project.teamSize} members
                    </span>
                  )}
                </div>
                {project.responsibilities && (
                  <ul className="space-y-2">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-lg border border-red-400/20 hover:border-red-400/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results & Impact */}
          {project.results && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Results & Impact</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.metrics && (
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-400/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-green-400" />
                      <h3 className="text-green-400 font-semibold">Key Metrics</h3>
                    </div>
                    <p className="text-gray-300">{project.results.metrics}</p>
                  </div>
                )}
                {project.results.impact && (
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-400/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-blue-400" />
                      <h3 className="text-blue-400 font-semibold">Real-world Impact</h3>
                    </div>
                    <p className="text-gray-300">{project.results.impact}</p>
                  </div>
                )}
              </div>
              {project.results.userFeedback && (
                <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-400/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <h3 className="text-purple-400 font-semibold">User Feedback</h3>
                  </div>
                  <p className="text-gray-300 italic">"{project.results.userFeedback}"</p>
                </div>
              )}
            </div>
          )}

          {/* Timeline */}
          {project.timeline && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Project Timeline</h2>
              </div>
              <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                      <Calendar className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-sm text-gray-400">Start Date</p>
                    <p className="text-white font-semibold">{project.timeline.start}</p>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 mx-8"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-400">End Date</p>
                    <p className="text-white font-semibold">{project.timeline.end}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Lessons Learned</h2>
              </div>
              <div className="grid gap-4">
                {project.lessonsLearned.map((lesson, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Lightbulb className="w-3 h-3 text-yellow-400" />
                      </div>
                      <p className="text-gray-300">{lesson}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Enhancements */}
          {project.futureEnhancements && project.futureEnhancements.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Future Enhancements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.futureEnhancements.map((enhancement, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{enhancement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 px-8 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live Project</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 backdrop-blur-sm text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View Source Code</span>
            </a>
          </div>

          {/* Navigation to Other Projects */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="text-center">
              <p className="text-gray-400 mb-4">Explore more projects</p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
              >
                Back to All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
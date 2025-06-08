import React, { useState, useEffect } from 'react';
import { GraduationCap, Sparkles, Brain, Rocket } from 'lucide-react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = ['Python', 'React JS', 'Tailwind CSS', 'Bootstrap', 'AI/ML'];
  const floatingElements = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div id='about' className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 via-black to-yellow-400/5"></div>
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      {floatingElements.map((i) => (
        <div
          key={i}
          className="absolute animate-float opacity-30"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + Math.random() * 3}s`
          }}
        >
          <div className={`${i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-1 h-1'} bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50`}></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16 mt-16">
          <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-6xl font-black mb-7 relative group">
              <span className="text-yellow-400 drop-shadow-2xl hover:text-yellow-300 transition-colors duration-500">
                So, Who am I ?
              </span>
              <div className="absolute top-7 -right-2 animate-spin-slow group-hover:animate-pulse">
                <Sparkles className="w-10 h-10 text-yellow-400" />
              </div>
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 font-semibold">
              <span className="typing-animation">Full Stack Developer x AI Enthusiast</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Bio Section */}
          <div className={`lg:col-span-2 transform transition-all duration-1500 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="group relative">
              <div className="absolute -inset-1 bg-yellow-400/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
                <div className="absolute top-4 right-4">
                  <Brain className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/50"></div>
                
                <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                  <p className="hover:text-white transition-colors duration-300">
                    Hello! I'm <span className="text-yellow-400 font-semibold text-xl">Srinidhi</span>, a passionate Full Stack Developer driven by curiosity for how technology learns and evolves. I integrate AI into modern web solutions—crafting seamless frontend and scalable backend to build intelligent, high-performance systems.
                  </p>
                  
                  <p className="hover:text-white transition-colors duration-300">
                    I build real-time, interactive applications that merge intuitive design with AI-driven intelligence. From predictive systems to immersive 3D experiences, I thrive at the intersection of design, data, and innovation.
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/40 rounded-full text-sm text-yellow-300 hover:bg-yellow-400/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className={`space-y-6 transform transition-all duration-1500 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Education Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-yellow-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4 mx-auto">
                  <GraduationCap className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3 text-center">Education</h3>
                <p className="text-gray-300 text-center text-xl">B.Tech CSE @NGIT'27</p>
              </div>
            </div>

            {/* What Fuels Me Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-yellow-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4 mx-auto">
                  <Rocket className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3 text-center">What Fuels Me</h3>
                <p className="text-gray-300 text-center text-lg italic">
                  "I craft responsive, real-time web applications that blend elegant frontend design with powerful AI-driven intelligence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3s steps(40) 1s forwards;
          width: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
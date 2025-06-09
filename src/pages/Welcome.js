import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ImDownload2 } from "react-icons/im";
import Bg from '../assets/bg.png';

export default function WelcomeSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 bg-black text-white"
    >
      <div className="container mx-auto px-4 md:px-6 z-10 relative flex flex-row-reverse items-center justify-between">
        <div className="max-w-3xl ml-auto flex-1">
          <h2 className="text-yellow-400 font-semibold mb-7 text-3xl">I'm an</h2>
          <h1 className="text-5xl font-bold mb-6 text-white">AI-Driven Full Stack Developer</h1>
          <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
          <h3 className="text-gray-300 mb-3 max-w-lg text-2xl">"I create immersive experiences, </h3>
          <h3 className="text-gray-300 mb-16 max-w-lg text-2xl"> not just websites..."</h3>
          <div className="flex space-x-7 mb-8">
            <button
              className="inline-block px-8 py-3 font-semibold rounded-sm transition-colors bg-yellow-400 text-black hover:bg-yellow-300"
              onClick={() => scrollToSection('projects')}
            >
              My Work
            </button>
            <button
              className="inline-block px-8 py-3 border font-semibold rounded-sm transition-colors border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              onClick={() => scrollToSection('contact')}
            >
              Connect with me
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-lg flex-1 flex justify-center items-center">
          <img
            src={Bg}
            alt="Profile Visual"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
            style={{ minHeight: 900, maxHeight: 900 }}
          />
        </div>
      </div>

      <div className="absolute bottom-12 right-8 flex flex-col space-y-6">
        <div className="relative group">
          <a
            href="https://github.com/srinidhi-2005"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 rounded-full p-2 text-gray-400 hover:text-yellow-400 hover:border-white transition-colors shadow-lg bg-black/60 backdrop-blur block"
          >
            <Github size={40} />
          </a>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Check out my GitHub
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
        
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/srinidhi-martha-426106301/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 rounded-full p-2 text-gray-400 hover:text-yellow-400 hover:border-white transition-colors shadow-lg bg-black/60 backdrop-blur block"
          >
            <Linkedin size={40} />
          </a>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Connect with me on LinkedIn
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
        
        <div className="relative group">
          <a
            href="mailto:marthasrinidhi16@gmail.com"
            className="border-2 border-yellow-400 rounded-full p-2 text-gray-400 hover:text-yellow-400 hover:border-white transition-colors shadow-lg bg-black/60 backdrop-blur block"
          >
            <Mail size={40} />
          </a>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Send me an Email
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
        
        <div className="relative group">
          <a
            href={require('../assets/Srinidhi Martha Resume.pdf')}
            download="Srinidhi Martha_Resume.pdf"
            className="border-2 border-yellow-400 rounded-full p-2 text-gray-400 hover:text-yellow-400 hover:border-white transition-colors shadow-lg bg-black/60 backdrop-blur block"
          >
            <ImDownload2 size={40} />
          </a>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Download my Resume
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
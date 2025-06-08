import React from 'react';
import Navbar from '../components/Navbar';
import WelcomeSection from './Welcome';
import AboutSection from './About';
import SkillsSection from './Skills';
import ProjectsSection from './Projects';
import ContactSection from './Contact';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none">
        <Navbar/>
      </div>
      <div className="h-3" />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
import React from 'react';
import Navbar from './Navbar';
import Welcome from '../pages/Welcome';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function Layout() {
  return (
    <div>
      <Navbar />
      <section id="welcome">
        <Welcome />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Layout; 
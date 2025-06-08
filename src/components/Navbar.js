import React from 'react';

const navLinks = [
  { id: 'about', label: 'About' }
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  return (
    <nav className="pointer-events-auto flex items-center justify-between w-3/4 mx-auto px-8 py-3 rounded-2xl bg-black/90 shadow-2xl border border-yellow-400/40 backdrop-blur-lg ring-1 ring-yellow-400/30">
      <span className="text-4xl font-bold text-yellow-400 ml-5 font-satisfy" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('welcome')}>Srinidhi</span>
      <div className="flex items-center space-x-16 mr-16">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={
              `group relative text-lg font-semibold px-2 py-1 transition-colors duration-200 focus:outline-none text-white hover:text-yellow-400`
            }
          >
            {link.label}
            <span className={
              `absolute left-0 -bottom-1 w-full h-0.5 rounded bg-yellow-400 transition-all duration-300 opacity-0 group-hover:opacity-100`
            }></span>
          </button>
        ))}
      </div>
    </nav>
  );
}
"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ease-in-out ${scrolled ? 'bg-opacity-100 bg-gray-800' : 'bg-opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="py-6">Razin</div>
          <div className="flex space-x-4 items-center py-2">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="#arts" className="text-white hover:text-gray-300">Arts</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

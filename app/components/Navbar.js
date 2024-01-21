"use client"
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure you have react-icons installed

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="text-white text-xl">Razin</div>
          <div className="hidden md:flex space-x-4">
            {/* Navigation links for medium and up screen sizes */}
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="#arts" className="text-white hover:text-gray-300">Arts</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden text-white text-2xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          {/* Mobile Navigation Menu */}
          <div className={`absolute top-full left-0 w-full bg-black bg-opacity-90 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center py-4">
              <a href="#home" className="text-white hover:text-gray-300 py-2">Home</a>
              <a href="#about" className="text-white hover:text-gray-300 py-2">About</a>
              <a href="#projects" className="text-white hover:text-gray-300 py-2">Projects</a>
              <a href="#arts" className="text-white hover:text-gray-300 py-2">Arts</a>
              <a href="#contact" className="text-white hover:text-gray-300 py-2">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


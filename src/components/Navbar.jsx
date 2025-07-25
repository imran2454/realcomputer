// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

import navlogo from '../components/navlogo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change 50 to whatever scroll position you prefer
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {name: 'Course', path:'/course'},
   
   
    { name: 'About Us', path: '/about-us' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Result', path: '/result' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-blue-900 shadow-lg text-black' // Example colors
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div >
          {/* <Link to="/" className="text-white text-2xl font-bold">
              <span>REAL COMPUTER</span><BR></BR><SPan>skill Up</SPan>
          </Link> */}
          <h1 className='text-white text-2xl font-bold'>REAL COMPUTER</h1>
          
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              
              className="text-white   hover:bg-blue-900 px-3 py-2 rounded-md  transition duration-200 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700"> {/* Example background for mobile menu */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
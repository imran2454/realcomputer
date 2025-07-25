// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Example social icons

const Footer = () => {
  const footerNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/course' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Section 1: Name and Logo */}
        <div className="flex flex-col items-center md:items-start">
          {/* Replace with your actual logo if it's an image */}
          <Link to="/" className="text-3xl font-bold text-white mb-4">
           THE REAL COMPUTER EDUCATION
            {/* <img src="/path/to/your/logo.png" alt="Your Company Logo" className="h-10" /> */}
          </Link>
          
          
          <p className="text-gray-400 text-sm mt-2">
            123, Main Street, City, State, Country
            <br />
            Email: info@example.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>

        {/* Section 2: Navbar */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerNavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-2xl"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
            <p className="text-gray-400 text-sm text-center mt-5 mb-4">
            &copy; {new Date().getFullYear()}  THE REAL COMPUTER EDUCATION ALL RIGHTS RESERVED  <br />
           
          </p>
      <p className='text-white font-thin text-base  text-center '>DESIGNED AND DEVELOPED BY IMRAM. </p>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (<nav className="fixed w-full z-50 bg-ivory/95 backdrop-blur-sm border-b border-gold/20 shadow-sm transition-all duration-300">
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">


      <div className="w-full flex justify-between items-center h-20 ">

        {/* Logo */}
        <div className=" " >
          <a href="#home" className="flex items-center ">

            <img
              src="https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781248006/RM_logo_efinfm.png"
              alt="Rekha Mehndi Logo"
              className="h-28  object-contain"
            />

          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-maroon font-medium transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-maroon hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-ivory border-t border-gold/20 shadow-lg absolute w-full">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-800 hover:text-maroon hover:bg-gold/5 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    )}
  </nav>


  );
};

export default Navbar;

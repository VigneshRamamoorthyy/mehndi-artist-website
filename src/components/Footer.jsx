import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-gold mb-4 tracking-wide">
              Rekha Mehndi
            </h2>
            <p className="font-body text-gray-400 leading-relaxed mb-6">
              Elevating the art of henna with premium, organic materials and bespoke designs for your most special moments.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 font-body">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About the Artist</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Business Hours</h3>
            <ul className="space-y-3 font-body text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center font-body text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rani Mehndi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

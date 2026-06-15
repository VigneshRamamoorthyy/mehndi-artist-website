import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91 8940870183?text=Hi! I am reaching out from your website."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;

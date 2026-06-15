import React from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { Instagram } from './Icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const event = document.getElementById("event").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
      `Hello Rekha Mehndi Artist!%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Event Type: ${event}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/918940870183?text=${whatsappMessage}`,
      "_blank"
    );
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-maroon mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to adorn your hands with beautiful henna? Contact us to book your appointment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-ivory rounded-3xl overflow-hidden shadow-xl">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 bg-maroon text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-3xl font-bold mb-8">Contact Information</h3>
              <p className="text-maroon-100 mb-10 opacity-90">
                Fill out the form and our team will get back to you within 24 hours. For immediate bookings, please use WhatsApp.
              </p>

              <div className="space-y-6">
                <a href="tel:+918940870183" className="flex items-center gap-4 hover:text-gold transition-colors">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">+91 89408 70183</span>
                </a>

                <a href="mailto:rekhamehndiartist@gmail.com" className="flex items-center gap-4 hover:text-gold transition-colors">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">rekhamehndiartist@gmail.com</span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <span className="font-medium">Home service available within 50 km</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://wa.me/918940870183"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-gold hover:text-maroon transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://instagram.com/rekha_henna_artist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-gold hover:text-maroon transition-all"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Decorative circle */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-tl-full pointer-events-none"></div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5 p-10 lg:p-14">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>

            {/* UI ONLY: Add an onSubmit handler to connect to a backend later */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-maroon focus:ring-2 focus:ring-maroon/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-maroon focus:ring-2 focus:ring-maroon/20 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select
                  id="event"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-maroon focus:ring-2 focus:ring-maroon/20 outline-none transition-all"
                >
                  <option value="">Select an event type...</option>
                  <option value="bridal">Bridal Mehndi</option>
                  <option value="engagement">Engagement</option>
                  <option value="festival">Festival</option>
                  <option value="guest">Guest Mehndi</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Event Date & Details)</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-maroon focus:ring-2 focus:ring-maroon/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your event date, location, and what kind of design you're looking for..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-maroon text-white font-medium rounded-lg hover:bg-maroon/90 shadow-lg shadow-maroon/30 transition-all transform hover:-translate-y-0.5"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

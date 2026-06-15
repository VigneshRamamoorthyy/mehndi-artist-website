import React from 'react';
import { MessageCircle } from 'lucide-react';

const services = [
  {
    id: 'bridal',
    title: 'Bridal Mehndi',
    description: 'Intricate, full-length designs for your special day. From traditional motifs to modern portraits.',
    // Placeholder image: replace with actual bridal mehndi image
    image: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781201927/Bridal_mehndi_wlrvlx.png',
    whatsappMessage: 'Hi! I would like to check availability for Bridal Mehndi.',
  },
  {
    id: 'engagement',
    title: 'Engagement Mehndi',
    description: 'Elegant and detailed designs perfectly crafted for your engagement ceremony.',
    // Placeholder image: replace with actual engagement mehndi image
    image: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781251770/Engagment_mehndii_ezqlcl.png',
    whatsappMessage: 'Hi! I would like to check availability for Engagement Mehndi.',
  },
  {
    id: 'festival',
    title: 'Festival Mehndi',
    description: 'Celebrate Diwali, Christmas and Eid with our beautiful festival-special mehndi designs.',
    // Placeholder image: replace with actual festival mehndi image
    image: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781201926/Festival_mehndi_rvfkz2.png',
    whatsappMessage: 'Hi! I would like to check availability for Festival Mehndi.',
  },
  {
    id: 'guest',
    title: 'Guest Mehndi',
    description: 'Minimalist and quick designs for family and guests at weddings and events.',
    // Placeholder image: replace with actual guest mehndi image
    image: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781254019/guest_mehndi_epso6o.png',
    whatsappMessage: 'Hi! I would like to book a session for Guest Mehndi at an event.',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower Mehndi',
    description: 'Safe, organic henna designs tailored for mothers-to-be on their baby shower.',
    // Placeholder image: replace with actual baby shower mehndi image
    image: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781201932/Baby_shower_mehndi_GPT_wtmclq.png',
    whatsappMessage: 'Hi! I would like to check availability for Baby Shower Mehndi.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-maroon mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
            Specializing in premium, organic henna artistry for all your memorable occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${index === services.length - 1 && services.length % 2 !== 0 && services.length % 3 !== 0
                ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' // Center the last item if it's the 5th item
                : ''
                }`}
            >
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-heading text-2xl font-semibold text-maroon mb-3">{service.title}</h3>
                <p className="font-body text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/91 8940870183?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-maroon text-white rounded-lg hover:bg-maroon/90 transition-colors font-medium"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

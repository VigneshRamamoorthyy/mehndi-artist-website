import React from 'react';
import { Award, Users, Heart } from 'lucide-react';
import { Instagram } from './Icons';

const About = () => {
  return (<section id="about" className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    <div className="flex flex-col lg:flex-row items-center gap-16">

      {/* Image Section */}
      <div className="w-full lg:w-[45%] relative">

        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0 h-[650px]">

          <img
            src="https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781202986/Rekha_henna_cekugo.png"
            alt="Rekha Mehndi Artist"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />

          {/* Instagram Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between shadow-lg">

            <div className="flex items-center gap-3">

              <div className="bg-maroon p-2 rounded-full text-white">
                <Instagram size={20} />
              </div>

              <div>
                <p className="font-heading font-bold text-gray-900 leading-tight">
                  Follow on Instagram
                </p>

                <p className="font-body text-sm text-gray-500">
                  18K+ Followers
                </p>
              </div>

            </div>

            <a
              href="https://instagram.com/rekha_henna_artist"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gold text-white text-sm font-medium rounded-lg hover:bg-gold/90 transition-colors"
            >
              Follow
            </a>

          </div>

        </div>

        {/* Decorative Border */}
        <div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-gold/20 rounded-3xl hidden lg:block"></div>

      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[55%]">

        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-maroon mb-4">
          Meet Rekha – Creating Beautiful Mehndi Stories
        </h2>

        <div className="w-24 h-1 bg-gold mb-8 rounded-full"></div>

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">

          <p>
            Rekha Mehndi Artist is known for creating elegant and intricate henna designs for bridal, engagement, baby shower, festival, and family celebrations. Every design is carefully customized to match the occasion and personal style of each client.
          </p>

          <p>
            With 3+ years of professional experience and over 2000 happy clients, we proudly provide premium home-service mehndi for weddings, engagements, baby showers, festivals, and special occasions. We use only natural henna to ensure a rich stain, beautiful finish, and safe application for every customer.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="text-center p-6 bg-ivory rounded-2xl shadow-sm hover:shadow-md transition">

            <Award className="w-8 h-8 text-gold mx-auto mb-3" />

            <h4 className="font-heading text-3xl font-bold text-maroon">
              3+
            </h4>

            <p className="text-gray-500">
              Years Experience
            </p>

          </div>

          <div className="text-center p-6 bg-ivory rounded-2xl shadow-sm hover:shadow-md transition">

            <Users className="w-8 h-8 text-gold mx-auto mb-3" />

            <h4 className="font-heading text-3xl font-bold text-maroon">
              2000+
            </h4>

            <p className="text-gray-500">
              Happy Clients
            </p>

          </div>

          <div className="text-center p-6 bg-ivory rounded-2xl shadow-sm hover:shadow-md transition">

            <Heart className="w-8 h-8 text-gold mx-auto mb-3" />

            <h4 className="font-heading text-3xl font-bold text-maroon">
              18K+
            </h4>

            <p className="text-gray-500">
              Instagram Followers
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
  </section>


  );
};

export default About;

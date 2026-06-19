import React from 'react';
import { Star, Quote, MessageCircle } from 'lucide-react';


/* ── Data ──────────────────────────────────────────────── */


const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    event: 'Bridal Mehndi',
    photo: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781346410/IMG-20260611-WA0043_uvumft.jpg',
    rating: 5,
    review: 'The stain turned out beautifully dark and the detailing was amazing. Rekha was patient, professional, and made my special day even more memorable',
    featured: true,
  },
  {
    id: 2,
    name: 'Neha Gupta',
    event: 'Engagement Mehndi',
    photo: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781346410/IMG-20260611-WA0043_uvumft.jpg',
    rating: 5,
    review: "Booked her for my engagement and couldn't be happier. The intricate lotus motifs were exactly what I envisioned. She finishes each piece with such love and precision. Highly recommend!",
    featured: false,
  },
  {
    id: 3,
    name: 'Anjali Desai',
    event: 'Baby Shower Mehndi',
    photo: 'https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781346410/IMG-20260611-WA0043_uvumft.jpg',
    rating: 5,
    review: 'She used completely organic henna for my baby shower — such peace of mind! The design was elegant, the stain lasted weeks, and the whole experience felt personal and warm. Truly wonderful.',
    featured: false,
  },
];

/* ── Stars helper ───────────────────────────────────────── */
const Stars = ({ count = 5, size = 16 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={size} className="text-gold fill-gold" />
    ))}
  </div>
);

/* ── Component ──────────────────────────────────────────── */
const Testimonials = () => {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  const whatsappHref = `https://wa.me/918940870183?text=${encodeURIComponent(
    'Hi Rekha! I would like to book a mehndi design. Can you help me?'
  )}`;

  return (
    <section id="testimonials" className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading ──────────────────────────────────────── */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-maroon mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Every mehndi design tells a story. Here's what our brides and clients say about their experience.
          </p>
        </div>



        {/* ── Featured Card ────────────────────────────────────────── */}
        <div className="mb-6">
          {featured && (
            <div className="group relative bg-white rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gold/10">
              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-maroon to-gold z-10" />

              <div className="flex flex-col md:flex-row gap-0">

                {/* Photo pane */}
                <div className="md:w-72 lg:w-900 shrink-0 relative overflow-hidden">
                  <img
                    src={featured.photo}
                    alt={featured.name}
                    className="w-full h-[400px] md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Mobile-only: author identity overlaid on image bottom */}
                  <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-6 pb-3 flex items-end gap-3">
                    <img
                      src={featured.photo}
                      alt={featured.name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-gold shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm leading-tight">
                        {featured.name}
                      </h4>
                      <span className="font-body text-[10px] text-gold font-semibold uppercase tracking-wider">
                        {featured.event}
                      </span>
                      <div className="mt-0.5">
                        <Stars count={featured.rating} size={11} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content pane */}
                <div className="flex flex-col justify-center px-5 pt-3 pb-4 md:px-7 md:py-9 flex-1">
                  {/* Quote icon — desktop only */}
                  <div className="hidden md:block mb-5 text-gold/30">
                    <Quote size={48} className="fill-current" />
                  </div>

                  {/* Review text — clamped to 3 lines on mobile */}
                  <p className="font-body text-gray-700 text-sm md:text-lg leading-relaxed italic mb-3 md:mb-6 line-clamp-3 md:line-clamp-none">
                    "{featured.review}"
                  </p>

                  {/* Author row — desktop only */}
                  <div className="hidden md:flex items-center gap-4">
                    <img
                      src={featured.photo}
                      alt={featured.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold shadow-sm"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-maroon text-lg leading-tight">
                        {featured.name}
                      </h4>
                      <span className="font-body text-xs text-gold font-semibold uppercase tracking-wider">
                        {featured.event}
                      </span>
                      <div className="mt-1">
                        <Stars count={featured.rating} size={14} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* ── Supporting Cards ─────────────────────────────────────── */}

        {false && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {rest.map((t) => (
              <div
                key={t.id}
                className="group relative bg-white rounded-[20px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gold/10 overflow-hidden flex flex-col"
              >
                {/* Photo banner */}
                <div className="relative h-56 sm:h-60 shrink-0 overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-body text-[11px] font-semibold uppercase tracking-widest text-white bg-maroon/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/30">
                    {t.event}
                  </span>
                  <div className="absolute bottom-3 right-4">
                    <Stars count={t.rating} size={13} />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                  <Quote size={24} className="text-gold/30 fill-current mb-3 shrink-0" />
                  <p className="font-body text-gray-600 italic leading-relaxed text-sm flex-1 mb-5">
                    "{t.review}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover object-center border-2 border-gold/50 shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-maroon text-sm leading-tight">{t.name}</h4>
                      <span className="font-body text-[11px] text-gold font-semibold uppercase tracking-wider">
                        Verified Client
                      </span>
                    </div>
                    <div className="ml-auto bg-green-50 text-green-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-green-200 flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      5★ Review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>)}

        {/* ── WhatsApp CTA ─────────────────────────────────────────── */}
        <div className="relative bg-maroon rounded-3xl overflow-hidden px-8 py-14 text-center shadow-2xl">
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gold/10 rounded-full pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to Book Your Mehndi Design?
          </h3>
          <p className="font-body text-white/70 max-w-md mx-auto mb-8 relative z-10 text-sm sm:text-base">
            Message us on WhatsApp for quick bookings, design consultations, and availability.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-body font-semibold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={22} className="fill-white" />
            Book via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

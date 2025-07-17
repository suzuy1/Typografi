import React from 'react';

const showcaseItems = [
  { char: 'A', style: 'font-black' },
  { char: 'g', style: 'italic' },
  { char: 'K', style: 'font-black text-brand-blue' },
  { char: 'R', style: 'font-thin' },
  { char: 'S', style: 'font-black' },
  { char: 'e', style: 'italic' },
  { char: 'W', style: 'font-thin' },
  { char: 'x', style: 'italic font-black text-brand-blue' },
  { char: 'Z', style: 'font-black' },
  { char: 'b', style: 'font-thin' },
  { char: 'q', style: 'italic' },
  { char: 'M', style: 'font-black' },
];

const ShowcaseSection: React.FC = () => {
  return (
    <section id="showcase" className="py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 
          className="font-display text-4xl sm:text-5xl font-bold tracking-tighter mb-4"
        >
          <div className="line-wrap">
            <div data-aos="reveal-up">Galeri Tipografi</div>
          </div>
        </h2>
        <p 
          className="max-w-2xl mx-auto text-lg text-gray-400 mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Koleksi gaya, ketebalan, dan bentuk pilihan yang mendefinisikan bahasa visual kami.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 group hover:!opacity-100 hover:transform hover:-translate-y-2 hover:shadow-glow"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <span className={`font-display text-6xl md:text-8xl transition-transform duration-300 group-hover:scale-110 ${item.style}`}>
                {item.char}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
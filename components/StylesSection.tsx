import React from 'react';

const styles = [
  {
    title: 'Serif Elegan',
    fontClass: 'font-serif',
    sampleText: 'Klasik & Terpercaya',
    description: 'Font serif memiliki goresan kecil di ujung huruf, memberikan nuansa tradisional, formal, dan dapat diandalkan. Sempurna untuk teks panjang dan branding yang berwibawa.',
    delay: 100
  },
  {
    title: 'Sans-Serif Modern',
    fontClass: 'font-sans',
    sampleText: 'Bersih & Lugas',
    description: 'Tanpa goresan tambahan, sans-serif menawarkan tampilan yang bersih, minimalis, dan modern. Sangat mudah dibaca di layar digital dan ideal untuk pesan yang langsung ke intinya.',
    delay: 200
  },
  {
    title: 'Skrip Ekspresif',
    fontClass: 'font-script',
    sampleText: 'Personal & Artistik',
    description: 'Meniru tulisan tangan, font skrip menambahkan sentuhan personal, elegan, dan artistik. Cocok untuk undangan, logo, atau saat Anda ingin menunjukkan kreativitas.',
    delay: 300
  }
];

const StylesSection: React.FC = () => {
  return (
    <section id="styles" className="py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Menjelajahi Gaya</div>
            </div>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Setiap keluarga font memiliki kepribadiannya sendiri. Temukan suara yang tepat untuk merek Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((style) => (
            <div 
              key={style.title}
              className="border border-gray-800 p-8 rounded-lg flex flex-col items-center text-center bg-gray-900/30 transition-transform duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={style.delay}
            >
              <h3 className={`text-4xl font-bold mb-4 ${style.fontClass}`}>{style.sampleText}</h3>
              <h4 className="font-display text-2xl font-bold mb-3">{style.title}</h4>
              <p className="text-gray-400 text-base">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
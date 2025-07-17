import React, { useState } from 'react';

const headlineFonts = [
  { name: 'Syne', family: 'Syne, sans-serif' },
  { name: 'Playfair Display', family: "'Playfair Display', serif" },
];

const bodyFonts = [
  { name: 'Inter', family: 'Inter, sans-serif' },
  { name: 'Lato', family: 'Lato, sans-serif' },
];

const TypographyPlayground: React.FC = () => {
  const [headlineFont, setHeadlineFont] = useState(headlineFonts[0].family);
  const [bodyFont, setBodyFont] = useState(bodyFonts[0].family);

  return (
    <section id="playground" className="py-24 md:py-32 bg-black/50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Arena Bermain <span className="text-brand-blue">Tipografi</span></div>
            </div>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Eksperimen dengan pasangan font secara real-time. Pilih font judul dan teks isi untuk melihat bagaimana mereka bekerja sama menciptakan suara yang unik.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* Controls */}
          <div className="lg:col-span-1 bg-gray-900/50 border border-gray-800 rounded-lg p-8 space-y-8 flex flex-col justify-center">
            <div>
              <label htmlFor="headline-font" className="block text-sm font-medium text-gray-400 mb-2">Font Judul</label>
              <div className="relative">
                <select
                  id="headline-font"
                  value={headlineFont}
                  onChange={(e) => setHeadlineFont(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition appearance-none"
                >
                  {headlineFonts.map(font => (
                    <option key={font.name} value={font.family} style={{ fontFamily: font.family }}>
                      {font.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="body-font" className="block text-sm font-medium text-gray-400 mb-2">Font Teks Isi</label>
              <div className="relative">
                  <select
                    id="body-font"
                    value={bodyFont}
                    onChange={(e) => setBodyFont(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition appearance-none"
                  >
                    {bodyFonts.map(font => (
                      <option key={font.name} value={font.family} style={{ fontFamily: font.family }}>
                        {font.name}
                      </option>
                    ))}
                  </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12 overflow-hidden">
            <h3 
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6 transition-all duration-300"
              style={{ fontFamily: headlineFont }}
            >
              Seni Harmoni Visual
            </h3>
            <p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed transition-all duration-300"
              style={{ fontFamily: bodyFont }}
            >
              Ini adalah demonstrasi bagaimana font judul dan teks isi yang dipilih dengan baik dapat bekerja sama. Judul menarik perhatian dengan karakternya yang khas, sementara teks isi memastikan pengalaman membaca yang nyaman dan jelas. Tipografi yang efektif bukan hanya tentang memilih font yang indah; ini tentang menciptakan sistem yang fungsional dan ekspresif yang memandu pengguna dan memperkuat pesan merek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographyPlayground;
import React, { useState } from 'react';

const VariableFontsExplorer: React.FC = () => {
  const [weight, setWeight] = useState(400);
  const [width, setWidth] = useState(100);
  const [slant, setSlant] = useState(0);

  const fontVariationSettings = `'wght' ${weight}, 'wdth' ${width}, 'slnt' ${slant}`;

  const sliderStyle = "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-brand-blue";

  return (
    <section id="explorer" className="py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Penjelajah Font <span className="text-brand-blue">Variabel</span></div>
            </div>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Rasakan masa depan tipografi. Sesuaikan penggeser untuk memanipulasi karakteristik font secara real-time.
          </p>
        </div>

        <div 
          className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {/* Preview Area */}
          <div className="w-full h-48 sm:h-64 flex items-center justify-center bg-black rounded-lg mb-12 overflow-hidden">
            <p
              className="font-variable text-6xl sm:text-7xl md:text-9xl font-black transition-all duration-100 ease-linear"
              style={{ fontVariationSettings }}
            >
              Flex
            </p>
          </div>

          {/* Controls Area */}
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="weight-slider" className="font-medium">Ketebalan</label>
                <span className="font-mono text-sm text-gray-400">{weight}</span>
              </div>
              <input
                id="weight-slider"
                type="range"
                min="100"
                max="1000"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className={sliderStyle}
              />
            </div>
             <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="width-slider" className="font-medium">Lebar</label>
                 <span className="font-mono text-sm text-gray-400">{width}</span>
              </div>
              <input
                id="width-slider"
                type="range"
                min="25"
                max="151"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className={sliderStyle}
              />
            </div>
             <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="slant-slider" className="font-medium">Kemiringan</label>
                 <span className="font-mono text-sm text-gray-400">{slant}</span>
              </div>
              <input
                id="slant-slider"
                type="range"
                min="-10"
                max="0"
                step="1"
                value={slant}
                onChange={(e) => setSlant(Number(e.target.value))}
                className={sliderStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VariableFontsExplorer;
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    setOffset({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = (factor: number) => ({
    transform: `translate(${offset.x * factor}px, ${offset.y * factor}px)`,
    transition: 'transform 0.1s ease-out',
  });

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 relative">
      <div 
        className="absolute inset-0 z-0 text-[35vw] font-display font-extrabold text-gray-900/50 opacity-20" 
        style={parallaxStyle(0.2)}
        aria-hidden="true"
      >
        <span className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">T</span>
        <span className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">Y</span>
      </div>
      <div className="relative z-10">
        <div style={parallaxStyle(1)}>
          <h1 className="font-display font-extrabold text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] leading-none tracking-tighter">
            <div data-aos="fade-up" data-aos-delay="100" className="text-white">
              MERANGKAI
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="text-white relative">
              KISAH <span className="text-brand-blue">VISUAL</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="text-gray-600">
              DENGAN HURUF
            </div>
          </h1>
        </div>
        <p 
          className="mt-8 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-gray-400"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Kami mengubah kata-kata menjadi pengalaman visual yang kuat. Jelajahi seni tipografi modern yang memikat dan berkomunikasi dengan keanggunan dan dampak.
        </p>
         <div 
          className="mt-10"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a href="#about" className="bg-white text-brand-dark font-bold py-3 px-6 text-sm sm:py-4 sm:px-10 sm:text-lg rounded-full hover:bg-gray-200 transition-colors duration-300">
            Jelajahi Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
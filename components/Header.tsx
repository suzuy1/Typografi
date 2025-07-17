import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const navLinks = [
  { href: '#about', label: 'Tentang Kami' },
  { href: '#showcase', label: 'Galeri' },
  { href: '#styles', label: 'Gaya' },
  { href: '#playground', label: 'Arena' },
  { href: '#explorer', label: 'Penjelajah' },
  { href: '#process', label: 'Proses' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#case-study', label: 'Studi Kasus' },
];

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 py-4 px-6 md:px-12 transition-all duration-300 ${
            hasScrolled 
            ? 'backdrop-blur-md bg-brand-dark/50 border-b border-gray-800'
            : 'bg-transparent border-b border-transparent'
        }`}
        data-aos="fade-down"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold font-display tracking-tighter">
            Typo<span className="text-brand-blue">Graphy</span>.
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">{link.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:block bg-brand-blue text-white font-bold py-2 px-6 rounded-full hover:bg-blue-500 transition-colors duration-300">
            Hubungi Kami
          </a>
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Buka menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
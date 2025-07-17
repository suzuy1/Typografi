import React from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, navLinks }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Sidebar Panel */}
      <aside 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-brand-darker/90 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 id="sidebar-title" className="text-xl font-bold font-display">Menu</h2>
            <button onClick={onClose} aria-label="Tutup menu">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={onClose}
              className="text-gray-300 hover:text-white hover:bg-brand-blue/20 text-xl font-display tracking-wide p-4 rounded-md transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
           <a 
              href="#contact" 
              onClick={onClose}
              className="bg-brand-blue text-white font-bold py-4 px-6 rounded-full hover:bg-blue-500 transition-colors duration-300 text-xl text-center mt-6"
            >
              Hubungi Kami
            </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
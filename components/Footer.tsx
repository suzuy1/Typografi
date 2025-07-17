import React from 'react';

const TwitterIcon: React.FC = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current h-5 w-5"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
);

const DribbbleIcon: React.FC = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current h-5 w-5"><title>Dribbble</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-0.6 13.92c-3.37 0-6.1-2.73-6.1-6.1s2.73-6.1 6.1-6.1s6.1 2.73 6.1 6.1c0 3.36-2.73 6.1-6.1 6.1zm2.34-7.58c0.02-0.07-0.03-0.14-0.1-0.16-0.65-0.29-1.33-0.44-2.04-0.44c-0.58 0-1.15 0.1-1.68 0.29c-0.08 0.03-0.13 0.12-0.1 0.2c0.23 1.14 0.94 2.15 1.95 2.78c0.07 0.04 0.16 0.03 0.22-0.04c0.5-0.58 0.81-1.31 0.81-2.13zm-5.46 2.05c-0.07 0.04-0.16 0.02-0.2-0.05c-1.1-1.68-1.4-3.71-0.93-5.63c0.03-0.11 0.15-0.18 0.26-0.15c2.14 0.58 3.92 1.93 5.06 3.73c0.06 0.09 0.02 0.21-0.08 0.25c-0.6 0.25-1.24 0.38-1.9 0.38c-0.8 0-1.58-0.19-2.21-0.53zm8.4-1.22c-0.11-0.03-0.22 0.04-0.26 0.15c-0.82 2.33-2.69 4.14-5.02 4.7c-0.1 0.02-0.2-0.04-0.22-0.14c-0.15-0.75-0.09-1.53 0.18-2.26c0.05-0.1 0.16-0.15 0.26-0.1c0.88 0.43 1.88 0.67 2.92 0.67c1.33 0 2.59-0.42 3.63-1.17c0.09-0.06 0.11-0.18 0.05-0.27c-0.34-0.54-0.75-1.02-1.22-1.44z"/></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved. Created by <span className="font-medium text-brand-blue">oriza</span>.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors duration-300">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors duration-300">
              <DribbbleIcon />
            </a>
             <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
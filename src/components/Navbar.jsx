import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { items } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-10">
      <nav className={`max-w-6xl mx-auto transition-all duration-500 ease-out transform ${
        scrolled
          ? 'bg-black/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/30' 
          : 'bg-transparent border border-white/10 shadow-lg shadow-black/20'
        } rounded-2xl`}>
        
        <div className="px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between py-4 lg:py-5">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer mb-2 lg:mb-0">
              <img className="mx-2 w-10" src="/my-logo.png" alt='Asjad Logo' />

            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-medium group"
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-purple-400 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>

        
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2 text-white/80 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden`}>
          <div className="px-6 sm:px-8 pt-2">
            <div className="space-y-2">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="relative block px-4 py-3 text-white/80 hover:text-white transition-all duration-300 font-medium rounded-xl group"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-2 left-6 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-purple-400 group-hover:w-8 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

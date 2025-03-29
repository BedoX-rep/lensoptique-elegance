
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isRtl = language === 'ar';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  }, [isRtl]);
  
  const navItems = [
    { key: 'nav.home', href: '#' },
    { key: 'nav.products', href: '#products' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' }
  ];
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-playfair text-2xl font-bold text-navy"
        >
          LENS OPTIQUE
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="font-medium text-navy hover:text-gold transition-all"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-medium text-navy hover:text-gold transition-all py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

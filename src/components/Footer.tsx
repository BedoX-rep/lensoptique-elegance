
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-navy text-white py-12">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">LENS OPTIQUE</h3>
            <p className="max-w-xs text-white/70">
              Premium eyewear combining elegant design with medical precision
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-gold">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Home</a></li>
                <li><a href="#products" className="text-white/70 hover:text-gold transition-colors">Products</a></li>
                <li><a href="#about" className="text-white/70 hover:text-gold transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gold">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@lensoptique.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Elegance St., New York</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gold">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-sm">
          &copy; {currentYear} Lens Optique. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

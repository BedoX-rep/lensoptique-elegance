
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-16 pb-6">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">LENS OPTIQUE</h3>
            <p className="text-white/70 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gold text-lg">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {['home', 'products', 'about', 'virtual', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item === 'home' ? '' : item}`} 
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gold text-lg">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {['prescription', 'eyeExams', 'contactLenses', 'sunglasses', 'repairs'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    {t(`footer.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gold text-lg">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-white/70">123 Elegance Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-white/70">info@lensoptique.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Lens Optique. {t('footer.rights')}.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              {t('footer.faq')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

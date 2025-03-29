
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section className="min-h-screen bg-cream/30 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2000&auto=format')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl" dir={isRtl ? 'rtl' : 'ltr'}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-navy/80 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('hero.subtitle')}
          </p>
          
          <Button 
            className="bg-navy hover:bg-navy/90 text-white px-6 py-2 rounded-none animate-fade-in flex items-center gap-2"
            style={{animationDelay: '0.4s'}}
          >
            {t('hero.cta')}
            {isRtl ? (
              <ArrowRight className="h-4 w-4 rtl-flip" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

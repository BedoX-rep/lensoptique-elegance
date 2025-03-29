
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Glasses } from 'lucide-react';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-cream/30 to-white z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2000&auto=format')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" dir={isRtl ? 'rtl' : 'ltr'}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-navy/80 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-none flex items-center gap-2"
              >
                {t('hero.cta')}
                {isRtl ? (
                  <ArrowRight className="h-4 w-4 rtl-flip" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
              
              <Button 
                variant="outline" 
                className="border-navy text-navy hover:bg-navy/10 rounded-none flex items-center gap-2"
              >
                {t('hero.virtual')}
                <Glasses className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format" 
                alt="Digital eyewear fitting" 
                className="rounded shadow-xl animate-fade-in"
                style={{animationDelay: '0.6s'}}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Glasses, MousePointer } from 'lucide-react';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-blue-50 to-cream">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2000&auto=format')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gold/20 rounded-full blur-2xl z-0"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" dir={isRtl ? 'rtl' : 'ltr'}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6 animate-fade-in">
              {t('hero.tagline')}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-navy/80 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-none flex items-center gap-2 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {t('hero.cta')}
                <span className="group-hover:translate-x-1 transition-transform">
                  {isRtl ? (
                    <ArrowRight className="h-5 w-5 rtl-flip" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-navy text-navy hover:bg-navy/10 rounded-none flex items-center gap-2 px-8 py-6 text-lg"
              >
                {t('hero.virtual')}
                <Glasses className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <MousePointer className="h-5 w-5 text-blue-600 animate-bounce" />
              <span className="ml-2 text-navy/60">{t('hero.scrollDown')}</span>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format" 
                alt="Digital eyewear fitting" 
                className="rounded-lg shadow-2xl animate-fade-in border-4 border-white"
                style={{animationDelay: '0.6s'}}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center">
                <Glasses className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

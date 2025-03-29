
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const features = [
    { key: 'about.quality', icon: <CheckCircle className="h-5 w-5 text-gold" /> },
    { key: 'about.precision', icon: <CheckCircle className="h-5 w-5 text-gold" /> },
    { key: 'about.design', icon: <CheckCircle className="h-5 w-5 text-gold" /> }
  ];
  
  return (
    <section id="about" className="py-20 bg-navy/5">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=1000&auto=format" 
                alt="Eyewear craftsmanship"
                className="w-full object-cover shadow-xl"
                style={{ height: '500px' }}
              />
              <div className="absolute inset-0 border border-gold/50 translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-navy/70 mb-6">
              {t('about.subtitle')}
            </p>
            
            <p className="text-navy/80 mb-8">
              {t('about.description')}
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {feature.icon}
                  <span className="text-navy">{t(feature.key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

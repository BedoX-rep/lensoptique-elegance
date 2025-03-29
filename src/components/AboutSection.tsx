
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const features = [
    { 
      key: 'about.quality', 
      icon: <CheckCircle className="h-5 w-5 text-gold" />,
      description: t('about.qualityDesc')
    },
    { 
      key: 'about.precision', 
      icon: <CheckCircle className="h-5 w-5 text-gold" />,
      description: t('about.precisionDesc')
    },
    { 
      key: 'about.design', 
      icon: <CheckCircle className="h-5 w-5 text-gold" />,
      description: t('about.designDesc')
    }
  ];
  
  const stats = [
    { value: '15+', label: t('about.experience'), icon: <Clock className="h-6 w-6 text-blue-500" /> },
    { value: '50k+', label: t('about.customers'), icon: <Users className="h-6 w-6 text-blue-500" /> },
    { value: '12', label: t('about.awards'), icon: <Award className="h-6 w-6 text-blue-500" /> }
  ];
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=1000&auto=format" 
                alt="Eyewear craftsmanship"
                className="w-full object-cover shadow-xl rounded-lg"
                style={{ height: '500px' }}
              />
              <div className="absolute inset-0 border border-gold/50 translate-x-4 translate-y-4 -z-10 rounded-lg"></div>
              
              <div className="absolute -bottom-10 -right-10 bg-white shadow-xl p-6 rounded-lg max-w-xs">
                <div className="flex flex-col gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-navy">{stat.value}</div>
                        <div className="text-sm text-navy/70">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              {t('about.tagline')}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-navy/70 mb-6">
              {t('about.subtitle')}
            </p>
            
            <p className="text-navy/80 mb-8">
              {t('about.description')}
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{t(feature.key)}</h4>
                    <p className="text-navy/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-gold hover:bg-gold/90 text-white rounded-none px-8 py-6">
              {t('about.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

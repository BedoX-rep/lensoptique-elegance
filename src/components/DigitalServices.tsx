
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Upload, Ruler, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalServices = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const services = [
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />,
      title: t('digital.upload.title'),
      description: t('digital.upload.description'),
      link: '#upload'
    },
    {
      icon: <Upload className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />,
      title: t('digital.prescription.title'),
      description: t('digital.prescription.description'),
      link: '#prescription'
    },
    {
      icon: <Ruler className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />,
      title: t('digital.customize.title'),
      description: t('digital.customize.description'),
      link: '#customize'
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />,
      title: t('digital.delivery.title'),
      description: t('digital.delivery.description'),
      link: '#delivery'
    }
  ];

  return (
    <section id="digital-services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('digital.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-navy/70">
            {t('digital.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:bg-blue-600 hover:text-white"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy/70 mb-6 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
                <a 
                  href={service.link} 
                  className="inline-block text-blue-600 group-hover:text-white border-b border-blue-600 group-hover:border-white transition-all"
                >
                  {t('digital.learnMore')}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-none text-lg"
          >
            {t('digital.startNow')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;

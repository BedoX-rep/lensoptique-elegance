
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Upload, Ruler, Truck } from 'lucide-react';

const DigitalServices = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const services = [
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: t('digital.upload.title'),
      description: t('digital.upload.description')
    },
    {
      icon: <Upload className="h-10 w-10 text-blue-600" />,
      title: t('digital.prescription.title'),
      description: t('digital.prescription.description')
    },
    {
      icon: <Ruler className="h-10 w-10 text-blue-600" />,
      title: t('digital.customize.title'),
      description: t('digital.customize.description')
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: t('digital.delivery.title'),
      description: t('digital.delivery.description')
    }
  ];

  return (
    <section id="digital-services" className="py-20 bg-blue-50">
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
            <Card key={index} className="border-none shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-navy/70">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;

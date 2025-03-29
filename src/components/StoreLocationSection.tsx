
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, CalendarCheck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const StoreLocationSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const services = [
    t('store.service1'),
    t('store.service2'),
    t('store.service3'),
    t('store.service4')
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          <div className="md:w-1/2">
            <div className="h-full">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
                {t('store.tagline')}
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t('store.title')}
              </h2>
              
              <p className="text-lg text-navy/70 mb-6">
                {t('store.subtitle')}
              </p>
              
              <Card className="bg-white shadow-lg border-none mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy">{t('store.address')}</p>
                      <p className="text-navy/70">{t('store.city')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy">{t('store.hours')}</p>
                      <p className="text-navy/70">{t('store.weekdays')}</p>
                      <p className="text-navy/70">{t('store.weekend')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy">+1 (800) 555-LENS</p>
                      <p className="text-navy/70">contact@lensoptique.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">{t('store.services')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-navy/80">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t('store.cta')}
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-none">
                  <CalendarCheck className="h-4 w-4 mr-2" />
                  {t('store.appointment')}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="h-full relative">
              <img 
                src="https://images.unsplash.com/photo-1633546366466-a606fb81d793?q=80&w=1000&auto=format" 
                alt="Lens Optique Store"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg inline-block">
                  <p className="font-bold text-navy text-xl">Lens Optique</p>
                  <p className="text-navy/80">Premium Eyewear Boutique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocationSection;

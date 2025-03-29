
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ScanFace, ArrowRight } from 'lucide-react';

const VirtualTryOn = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section className="py-20 bg-white">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format" 
                alt="Virtual Try-On"
                className="w-full rounded shadow-xl"
              />
              <div className="absolute inset-0 border-2 border-blue-300 rounded translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="text-right md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t('virtual.title')}
              </h2>
              
              <p className="text-lg text-navy/70 mb-8">
                {t('virtual.description')}
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>{t('virtual.feature1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>{t('virtual.feature2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>{t('virtual.feature3')}</span>
                </li>
              </ul>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none flex items-center gap-2">
                <ScanFace className="h-4 w-4" />
                {t('virtual.cta')}
                {isRtl ? (
                  <ArrowRight className="h-4 w-4 rtl-flip" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;


import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ScanFace, ArrowRight, Check } from 'lucide-react';

const VirtualTryOn = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format" 
                alt="Virtual Try-On"
                className="w-full rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-blue-300 rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                {t('virtual.new')}
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                {t('virtual.demo')}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="text-right md:text-left">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
                {t('virtual.tagline')}
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t('virtual.title')}
              </h2>
              
              <p className="text-lg text-navy/70 mb-8">
                {t('virtual.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                {[t('virtual.feature1'), t('virtual.feature2'), t('virtual.feature3')].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Check className="h-4 w-4 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button className="group bg-blue-600 hover:bg-blue-700 text-white rounded-none flex items-center gap-2 px-6 py-6">
                  <ScanFace className="h-5 w-5" />
                  {t('virtual.cta')}
                  <span className="group-hover:translate-x-1 transition-transform">
                    {isRtl ? (
                      <ArrowRight className="h-5 w-5 rtl-flip" />
                    ) : (
                      <ArrowRight className="h-5 w-5" />
                    )}
                  </span>
                </Button>
                
                <a 
                  href="#demo" 
                  className="inline-flex items-center border-b-2 border-transparent hover:border-blue-600 text-navy hover:text-blue-600 transition-all"
                >
                  {t('virtual.watchDemo')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;

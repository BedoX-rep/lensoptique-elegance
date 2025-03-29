
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: t('contact.phone'),
      value: '+1 (555) 123-4567'
    },
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      title: t('contact.email'),
      value: 'info@lensoptique.com'
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      title: t('contact.address'),
      value: '123 Elegance Street, New York, NY 10001'
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            {t('contact.tagline')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('contact.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-navy/70">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-navy mb-6">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{item.title}</h4>
                    <p className="text-navy/70">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-navy mb-4">{t('contact.followUs')}</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-navy mb-6">
              {t('contact.sendMessage')}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-navy font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-navy font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-navy font-medium mb-2">
                  {t('contact.subject')}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-navy font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              
              <Button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-none flex items-center justify-center gap-2">
                {t('contact.send')}
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

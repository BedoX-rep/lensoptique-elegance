
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: t('testimonials.customer'),
      text: t('testimonials.quote1'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: t('testimonials.customer'),
      text: t('testimonials.quote2'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: t('testimonials.customer'),
      text: t('testimonials.quote3'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-navy/70">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border border-blue-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4 gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-navy/70">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200 opacity-50" />
                  <p className="text-navy/80 italic pl-4">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

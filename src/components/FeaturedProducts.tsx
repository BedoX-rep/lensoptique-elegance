
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  isNew: boolean;
}

const FeaturedProducts = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Celestial',
      category: 'Classic',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=500&auto=format',
      isNew: true,
    },
    {
      id: 2,
      name: 'Elegance',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=500&auto=format',
      isNew: false,
    },
    {
      id: 3,
      name: 'Luminary',
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format',
      isNew: true,
    },
    {
      id: 4,
      name: 'Aurora',
      category: 'Designer',
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=500&auto=format',
      isNew: false,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
          {t('featured.title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="border-none rounded-none shadow-none overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 right-2 bg-gold text-white hover:bg-gold/90 rounded-none">
                    {t('product.new')}
                  </Badge>
                )}
              </div>
              
              <CardContent className="pt-4 px-0">
                <p className="text-sm text-navy/60">{product.category}</p>
                <h3 className="text-lg font-bold text-navy">{product.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-b border-navy text-navy hover:text-gold hover:border-gold transition-all"
          >
            {t('featured.viewMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

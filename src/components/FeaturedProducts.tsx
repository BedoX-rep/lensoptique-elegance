
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, ShoppingCart, Heart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  isNew: boolean;
  isFeatured: boolean;
}

const FeaturedProducts = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Celestial Blue',
      category: 'Classic',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=500&auto=format',
      isNew: true,
      isFeatured: true,
    },
    {
      id: 2,
      name: 'Elegance Gold',
      category: 'Premium',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=500&auto=format',
      isNew: false,
      isFeatured: true,
    },
    {
      id: 3,
      name: 'Luminary Black',
      category: 'Luxury',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format',
      isNew: true,
      isFeatured: false,
    },
    {
      id: 4,
      name: 'Aurora Silver',
      category: 'Designer',
      price: '$269',
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=500&auto=format',
      isNew: false,
      isFeatured: true,
    },
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory);

  // Categories
  const categories = ['all', ...new Set(products.map(p => p.category.toLowerCase()))];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            {t('featured.tagline')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('featured.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-navy/70">
            {t('featured.description')}
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 border border-gray-200 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group border-none rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 right-2 bg-gold text-white hover:bg-gold/90 rounded-full">
                    {t('product.new')}
                  </Badge>
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                    <Eye className="h-4 w-4 text-navy" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4 text-navy" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                    <ShoppingCart className="h-4 w-4 text-navy" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="pt-4 px-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-navy/60">{product.category}</p>
                  <p className="font-bold text-blue-600">{product.price}</p>
                </div>
                <h3 className="text-lg font-bold text-navy">{product.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all rounded-none px-6"
          >
            {t('featured.viewMore')}
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

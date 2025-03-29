
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Premium Eyewear For Every Style',
    'hero.subtitle': 'Discover our collection of luxury frames and prescription glasses',
    'hero.cta': 'Explore Collection',
    'featured.title': 'Featured Collections',
    'featured.viewMore': 'View More',
    'product.new': 'New',
    'about.title': 'Craftsmanship & Precision',
    'about.subtitle': 'The perfect blend of style and medical precision',
    'about.description': 'At Lens Optique, we combine decades of optical expertise with contemporary design philosophy. Each pair of glasses is crafted with meticulous attention to detail, ensuring both visual perfection and aesthetic elegance.',
    'about.quality': 'Premium Quality',
    'about.precision': 'Medical Precision',
    'about.design': 'Elegant Design',
    'footer.rights': 'All Rights Reserved',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'hero.title': 'Lunettes Premium Pour Chaque Style',
    'hero.subtitle': 'Découvrez notre collection de montures de luxe et de verres correcteurs',
    'hero.cta': 'Explorer la Collection',
    'featured.title': 'Collections en Vedette',
    'featured.viewMore': 'Voir Plus',
    'product.new': 'Nouveau',
    'about.title': 'Artisanat & Précision',
    'about.subtitle': 'Le mélange parfait de style et de précision médicale',
    'about.description': 'Chez Lens Optique, nous combinons des décennies d\'expertise optique avec une philosophie de design contemporaine. Chaque paire de lunettes est fabriquée avec une attention méticuleuse aux détails, assurant à la fois une perfection visuelle et une élégance esthétique.',
    'about.quality': 'Qualité Premium',
    'about.precision': 'Précision Médicale',
    'about.design': 'Design Élégant',
    'footer.rights': 'Tous Droits Réservés',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'نظارات فاخرة لكل أسلوب',
    'hero.subtitle': 'اكتشف مجموعتنا من الإطارات الفاخرة والنظارات الطبية',
    'hero.cta': 'استكشف المجموعة',
    'featured.title': 'المجموعات المميزة',
    'featured.viewMore': 'عرض المزيد',
    'product.new': 'جديد',
    'about.title': 'الحرفية والدقة',
    'about.subtitle': 'المزيج المثالي من الأناقة والدقة الطبية',
    'about.description': 'في لينز أوبتيك، نجمع بين عقود من الخبرة البصرية وفلسفة التصميم المعاصرة. يتم تصنيع كل زوج من النظارات مع الاهتمام الدقيق بالتفاصيل، مما يضمن الكمال البصري والأناقة الجمالية.',
    'about.quality': 'جودة ممتازة',
    'about.precision': 'دقة طبية',
    'about.design': 'تصميم أنيق',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

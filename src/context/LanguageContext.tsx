
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
    'hero.title': 'Premium Eyewear For Your Digital Lifestyle',
    'hero.subtitle': 'Order prescription glasses and designer frames online with our innovative digital fitting service',
    'hero.cta': 'Shop Collection',
    'hero.virtual': 'Try Virtually',
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
    'digital.title': 'Digital Prescription Service',
    'digital.subtitle': 'Order your prescription glasses from the comfort of your home in 4 simple steps',
    'digital.upload.title': 'Choose Frames',
    'digital.upload.description': 'Browse our collection and select your perfect frames',
    'digital.prescription.title': 'Upload Prescription',
    'digital.prescription.description': 'Upload your digital prescription or we can contact your optometrist',
    'digital.customize.title': 'Customize Lenses',
    'digital.customize.description': 'Select lens type, coatings, and additional features',
    'digital.delivery.title': 'Home Delivery',
    'digital.delivery.description': 'Receive your custom glasses delivered to your doorstep',
    'virtual.title': 'Virtual Try-On Technology',
    'virtual.description': 'See how your selected frames look on your face before making a purchase with our state-of-the-art virtual try-on technology',
    'virtual.feature1': 'Real-time face mapping using advanced AI',
    'virtual.feature2': 'Try multiple frames in seconds',
    'virtual.feature3': 'Share with friends and family for opinions',
    'virtual.cta': 'Try Frames Now',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'hero.title': 'Lunettes Premium Pour Votre Mode de Vie Numérique',
    'hero.subtitle': 'Commandez des lunettes de vue et des montures de créateur en ligne avec notre service d\'ajustement numérique innovant',
    'hero.cta': 'Voir la Collection',
    'hero.virtual': 'Essayer Virtuellement',
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
    'digital.title': 'Service de Prescription Numérique',
    'digital.subtitle': 'Commandez vos lunettes de prescription depuis le confort de votre domicile en 4 étapes simples',
    'digital.upload.title': 'Choisir des Montures',
    'digital.upload.description': 'Parcourez notre collection et sélectionnez vos montures parfaites',
    'digital.prescription.title': 'Télécharger l\'Ordonnance',
    'digital.prescription.description': 'Téléchargez votre ordonnance numérique ou nous pouvons contacter votre opticien',
    'digital.customize.title': 'Personnaliser les Verres',
    'digital.customize.description': 'Sélectionnez le type de verre, les revêtements et les fonctionnalités supplémentaires',
    'digital.delivery.title': 'Livraison à Domicile',
    'digital.delivery.description': 'Recevez vos lunettes personnalisées livrées à votre porte',
    'virtual.title': 'Technologie d\'Essayage Virtuel',
    'virtual.description': 'Voyez comment les montures sélectionnées s\'adaptent à votre visage avant d\'acheter grâce à notre technologie d\'essayage virtuel de pointe',
    'virtual.feature1': 'Cartographie du visage en temps réel utilisant l\'IA avancée',
    'virtual.feature2': 'Essayez plusieurs montures en quelques secondes',
    'virtual.feature3': 'Partagez avec vos amis et votre famille pour obtenir des avis',
    'virtual.cta': 'Essayer des Montures Maintenant',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'نظارات فاخرة لأسلوب حياتك الرقمي',
    'hero.subtitle': 'اطلب النظارات الطبية وإطارات المصممين عبر الإنترنت من خلال خدمة التركيب الرقمية المبتكرة',
    'hero.cta': 'تسوق المجموعة',
    'hero.virtual': 'جرّب افتراضيًا',
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
    'digital.title': 'خدمة الوصفات الطبية الرقمية',
    'digital.subtitle': 'اطلب نظاراتك الطبية من راحة منزلك في 4 خطوات بسيطة',
    'digital.upload.title': 'اختيار الإطارات',
    'digital.upload.description': 'تصفح مجموعتنا واختر إطاراتك المثالية',
    'digital.prescription.title': 'تحميل الوصفة الطبية',
    'digital.prescription.description': 'قم بتحميل وصفتك الطبية الرقمية أو يمكننا الاتصال بطبيب العيون الخاص بك',
    'digital.customize.title': 'تخصيص العدسات',
    'digital.customize.description': 'اختر نوع العدسة والطلاءات والميزات الإضافية',
    'digital.delivery.title': 'التوصيل للمنزل',
    'digital.delivery.description': 'استلم نظاراتك المخصصة موصلة إلى باب منزلك',
    'virtual.title': 'تقنية التجربة الافتراضية',
    'virtual.description': 'شاهد كيف تبدو الإطارات المختارة على وجهك قبل الشراء باستخدام تقنية التجربة الافتراضية المتطورة',
    'virtual.feature1': 'رسم خرائط الوجه في الوقت الفعلي باستخدام الذكاء الاصطناعي المتقدم',
    'virtual.feature2': 'جرب إطارات متعددة في ثوانٍ',
    'virtual.feature3': 'شارك مع الأصدقاء والعائلة للحصول على الآراء',
    'virtual.cta': 'جرب الإطارات الآن',
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

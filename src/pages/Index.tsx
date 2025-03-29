
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import DigitalServices from '../components/DigitalServices';
import VirtualTryOn from '../components/VirtualTryOn';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DigitalServices />
      <FeaturedProducts />
      <VirtualTryOn />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;

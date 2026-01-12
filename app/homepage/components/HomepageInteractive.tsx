'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import EmergencyFloatingButton from '@/components/common/EmergencyFloatingButton';
import HeroSection from './HeroSection';
import TrustIndicators from './TrustIndicators';
import ServicesGrid from './ServicesGrid';
import TestimonialCarousel from './TestimonialCarousel';
import LocationSection from './LocationSection';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

const HomepageInteractive = () => {
    const { currentLanguage } = useLanguage();
  const [isHydrated, setIsHydrated] = useState(false);

 useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('preferredLanguage', currentLanguage);
    }
  }, [currentLanguage, isHydrated]);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-20 bg-card animate-pulse" />
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-8">
            <div className="h-96 bg-muted rounded-card animate-pulse" />
            <div className="h-64 bg-muted rounded-card animate-pulse" />
            <div className="h-96 bg-muted rounded-card animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header className="mb-0" />
      
      <main className="pt-32 lg:pt-40">
        <HeroSection currentLanguage={currentLanguage} />
        <TrustIndicators currentLanguage={currentLanguage} />
        <ServicesGrid currentLanguage={currentLanguage} />
        <TestimonialCarousel currentLanguage={currentLanguage} />
        <LocationSection currentLanguage={currentLanguage} />
      </main>

      <Footer currentLanguage={currentLanguage} />
      <EmergencyFloatingButton />
    </div>
  );
};

export default HomepageInteractive;
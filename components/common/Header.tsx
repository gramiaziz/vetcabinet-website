'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/context/LanguageContext';
import AppImage from '../ui/AppImage';


interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLanguage, toggleLang } = useLanguage();
  const navigationItems = [
    { label: 'Accueil', labelAr: 'الرئيسية', href: '/homepage' },
    { label: 'Services', labelAr: 'الخدمات', href: '/services' },
    /*{ label: 'À Propos', labelAr: 'من نحن', href: '/about' },*/
    /*{ label: 'Témoignages', labelAr: 'الشهادات', href: '/testimonials' },*/
    /* { label: 'Ressources', labelAr: 'الموارد', href: '/resources' },*/
  ];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
         {/* Logo Section */}
<Link href="/homepage"   className="flex items-center gap-2 hover:opacity-90 transition-opacity">
  <div className="relative w-11 h-11 lg:w-12 lg:h-12 flex-shrink-0">
    <AppImage
      src="/images/logo.png"
      alt="Logo"
      className="w-full h-full object-contain"
      priority
    />
  </div>

  <div className="flex flex-col leading-tight">
<span className="font-heading font-bold text-base lg:text-lg bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent leading-tight">
  ANIMAUX D&apos;ABORD
</span>

    <span className="text-xs text-muted-foreground font-medium">
      Cabinet Vétérinaire
    </span>
  </div>
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-heading font-medium text-foreground hover:text-primary transition-colors rounded-button hover:bg-muted"
              >
                {currentLanguage === 'fr' ? item.label : item.labelAr}
              </Link>
            ))}
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-button hover:bg-muted"
              aria-label="Toggle language"
            >
              <Icon name="LanguageIcon" size={20} />
              <span>{currentLanguage === 'fr' ? 'FR' : 'AR'}</span>
            </button>

            {/* Emergency Contact Button */}
            <Link
              href="/contact"
              className="flex items-center space-x-2 px-6 py-3 bg-error text-error-foreground font-heading font-semibold rounded-button hover:bg-error/90 transition-all shadow-emergency animate-pulse-emergency"
            >
              <Icon name="PhoneIcon" size={20} />
              <span className="text-sm">
                {currentLanguage === 'fr' ? 'Urgence 24/7' : 'طوارئ 24/7'}
              </span>
            </Link>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="px-6 py-3 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive"
            >
              <span className="text-sm">
                {currentLanguage === 'fr' ? 'Prendre Rendez-vous' : 'حجز موعد'}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-heading font-medium text-foreground hover:text-primary hover:bg-muted rounded-button transition-colors"
              >
                {currentLanguage === 'fr' ? item.label : item.labelAr}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLang}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-button transition-colors"
            >
              <span>{currentLanguage === 'fr' ? 'Langue / اللغة' : 'اللغة / Langue'}</span>

              <Icon name="LanguageIcon" size={20} />
            </button>

            {/* Mobile Emergency Button */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-error text-error-foreground font-heading font-semibold rounded-button hover:bg-error/90 transition-all shadow-emergency"
            >
              <Icon name="PhoneIcon" size={20} />
              <span className="text-sm">
                {currentLanguage === 'fr' ? 'Urgence 24/7' : 'طوارئ 24/7'}
              </span>
            </Link>

            {/* Mobile Primary CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-4 gradient-primary text-white text-center font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive"
            >
              <span className="text-sm">
                {currentLanguage === 'fr' ? 'Prendre Rendez-vous' : 'حجز موعد'}
              </span>
            </Link>
          </nav>
        </div>
      )}

      {/* Trust Badge Bar - Desktop Only */}
      <div className="hidden lg:block bg-muted border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="StarIcon" size={16} className="text-gold" variant="solid" />
              <span className="font-medium text-foreground">5.0</span>
              <span className="text-muted-foreground">
                {currentLanguage === 'fr' ? '(122 avis)' : '(122 تقييم)'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={16} className="text-primary" />
              <span className="font-medium text-foreground">
                {currentLanguage === 'fr' ? 'Urgences 24/7' : 'طوارئ 24/7'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={16} className="text-success" />
              <span className="font-medium text-foreground">
                {currentLanguage === 'fr' ? 'Dr. Asma - Vétérinaire Certifiée' : 'د. أسماء - طبيبة بيطرية معتمدة'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'ar'>('fr');

  const navigationItems = [
    { label: 'Accueil', labelAr: 'الرئيسية', href: '/homepage' },
    { label: 'Services', labelAr: 'الخدمات', href: '/services' },
    /*{ label: 'À Propos', labelAr: 'من نحن', href: '/about' },*/
    /*{ label: 'Témoignages', labelAr: 'الشهادات', href: '/testimonials' },*/
   /* { label: 'Ressources', labelAr: 'الموارد', href: '/resources' },*/
  ];

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'fr' ? 'ar' : 'fr');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/homepage" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="50%" stopColor="#F7931E" />
                    <stop offset="100%" stopColor="#FF69B4" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" opacity="0.1" />
                <path d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8ZM24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12Z" fill="url(#logoGradient)" />
                <path d="M18 22C19.105 22 20 21.105 20 20C20 18.895 19.105 18 18 18C16.895 18 16 18.895 16 20C16 21.105 16.895 22 18 22Z" fill="url(#logoGradient)" />
                <path d="M30 22C31.105 22 32 21.105 32 20C32 18.895 31.105 18 30 18C28.895 18 28 18.895 28 20C28 21.105 28.895 22 30 22Z" fill="url(#logoGradient)" />
                <path d="M24 32C27.314 32 30 29.314 30 26H18C18 29.314 20.686 32 24 32Z" fill="url(#logoGradient)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-primary leading-tight">
                ANIMAUX D&apos;ABORD
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Clinique Vétérinaire
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
              onClick={toggleLanguage}
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
              onClick={toggleLanguage}
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
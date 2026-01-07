'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  currentLanguage: 'fr' | 'ar';
}

const HeroSection = ({ currentLanguage }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const content = {
    fr: {
      headline: "Votre animal mérite les meilleurs soins",
      subheadline: "Clinique vétérinaire moderne à Manouba avec urgences 24/7. Dr. Asma GNAOUI, vétérinaire certifiée, au service de vos compagnons.",
      ctaPrimary: "Prendre Rendez-vous",
      ctaSecondary: "Urgence 24/7",
      ctaTertiary: "Nos Services",
      badge1: "Urgences 24/7",
      badge2: "Vétérinaire Certifiée",
      badge3: "5.0 ★ (122 avis)"
    },
    ar: {
      headline: "حيوانك يستحق أفضل رعاية",
      subheadline: "عيادة بيطرية حديثة في منوبة مع طوارئ 24/7. د. أسماء قناوي، طبيبة بيطرية معتمدة، في خدمة رفاقك.",
      ctaPrimary: "حجز موعد",
      ctaSecondary: "طوارئ 24/7",
      ctaTertiary: "خدماتنا",
      badge1: "طوارئ 24/7",
      badge2: "طبيبة معتمدة",
      badge3: "5.0 ★ (122 تقييم)"
    }
  };

  const lang = content[currentLanguage];

  if (!isHydrated) {
    return (
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-16 bg-muted rounded-button animate-pulse" />
              <div className="h-24 bg-muted rounded-button animate-pulse" />
              <div className="flex flex-wrap gap-4">
                <div className="h-14 w-48 bg-muted rounded-button animate-pulse" />
                <div className="h-14 w-40 bg-muted rounded-button animate-pulse" />
              </div>
            </div>
            <div className="h-96 bg-muted rounded-card animate-pulse" />
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-error/10 text-error rounded-button border border-error/20">
                <Icon name="ClockIcon" size={18} variant="solid" />
                <span className="text-sm font-semibold">{lang.badge1}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 text-success rounded-button border border-success/20">
                <Icon name="ShieldCheckIcon" size={18} variant="solid" />
                <span className="text-sm font-semibold">{lang.badge2}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gold/10 text-gold-foreground rounded-button border border-gold/20">
                <Icon name="StarIcon" size={18} variant="solid" className="text-gold" />
                <span className="text-sm font-semibold">{lang.badge3}</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
                {lang.headline}
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {lang.subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive hover:scale-105">

                <Icon name="CalendarIcon" size={20} />
                <span>{lang.ctaPrimary}</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-error text-error-foreground font-heading font-semibold rounded-button hover:bg-error/90 transition-all shadow-emergency animate-pulse-emergency">

                <Icon name="PhoneIcon" size={20} />
                <span>{lang.ctaSecondary}</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-card text-foreground font-heading font-semibold rounded-button hover:bg-muted transition-all border-2 border-border hover:border-primary">

                <span>{lang.ctaTertiary}</span>
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {currentLanguage === 'fr' ? 'Ans d\'expérience' : 'سنوات خبرة'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {currentLanguage === 'fr' ? 'Animaux soignés' : 'حيوانات معالجة'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {currentLanguage === 'fr' ? 'Disponibilité' : 'التوفر'}
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-card overflow-hidden shadow-card">
             <AppImage
  src="/images/Asma.jpg"
  alt="Female veterinarian in white coat examining a golden retriever dog with a stethoscope in a modern clinic"
  className="w-full h-[500px] lg:h-[600px] object-cover"
/>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-button p-6 shadow-interactive">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary">
                    <AppImage
                      src="/images/Asma.jpg"
                      alt="Professional headshot of Dr. Asma GNAOUI, female veterinarian with dark hair in medical scrubs smiling at camera"
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      Dr. Asma GNAOUI
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentLanguage === 'fr' ? 'Vétérinaire Certifiée • 15 ans d\'expérience' : 'طبيبة بيطرية معتمدة • 15 سنة خبرة'}
                    </p>
                    <div className="flex items-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) =>
                      <Icon key={star} name="StarIcon" size={16} className="text-gold" variant="solid" />
                      )}
                      <span className="text-sm font-semibold text-foreground ml-2">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
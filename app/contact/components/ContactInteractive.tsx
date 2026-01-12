'use client';

import { useState, useEffect } from 'react';
import ContactMethodCard from './ContactMethodCard';
import ClinicHoursCard from './ClinicHoursCard';
import LocationInfoCard from './LocationInfoCard';
import EmergencyContactSection from './EmergencyContactSection';
import ContactFormSection from './ContactFormSection';
import GoogleMapSection from './GoogleMapSection';
import { useLanguage } from '@/context/LanguageContext';


interface ContactMethod {
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  action: string;
  actionAr: string;
  href: string;
  color: string;
}

export default function ContactInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
    const { currentLanguage } = useLanguage();

 useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-muted rounded-card"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const contactMethods: ContactMethod[] = [
    {
      icon: "PhoneIcon",
      title: "Téléphone",
      titleAr: "الهاتف",
      description: "Appelez-nous pour prendre rendez-vous ou pour toute question",
      descriptionAr: "اتصل بنا لحجز موعد أو لأي استفسار",
      action: "Appeler maintenant",
      actionAr: "اتصل الآن",
      href: "tel:+21622024232",
      color: "bg-primary"
    },
    {
      icon: "EnvelopeIcon",
      title: "Email",
      titleAr: "البريد الإلكتروني",
      description: "Envoyez-nous un email, nous répondons sous 24h",
      descriptionAr: "أرسل لنا بريدًا إلكترونيًا، نرد خلال 24 ساعة",
      action: "Envoyer un email",
      actionAr: "إرسال بريد إلكتروني",
      href: "mailto:contact@animauxdabord.tn",
      color: "bg-secondary"
    },
    {
      icon: "ChatBubbleLeftRightIcon",
      title: "WhatsApp",
      titleAr: "واتساب",
      description: "Contactez-nous via WhatsApp pour une réponse rapide",
      descriptionAr: "اتصل بنا عبر واتساب للحصول على رد سريع",
      action: "Ouvrir WhatsApp",
      actionAr: "فتح واتساب",
      href: "https://wa.me/21622024232",
      color: "bg-whatsapp"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Contact Methods Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {currentLanguage === 'fr' ? 'Contactez-Nous' : 'اتصل بنا'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentLanguage === 'fr' ?'Plusieurs moyens de nous joindre pour répondre à tous vos besoins' :'طرق متعددة للتواصل معنا لتلبية جميع احتياجاتك'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <ContactMethodCard
              key={index}
              {...method}
              currentLanguage={currentLanguage}
            />
          ))}
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section>
        <EmergencyContactSection currentLanguage={currentLanguage} />
      </section>

      {/* Contact Form and Info Grid */}
      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ContactFormSection currentLanguage={currentLanguage} />
        </div>
        <div className="space-y-6">
          <ClinicHoursCard currentLanguage={currentLanguage} />
          <LocationInfoCard currentLanguage={currentLanguage} />
        </div>
      </section>

      {/* Google Map Section */}
      <section>
        <GoogleMapSection currentLanguage={currentLanguage} />
      </section>
    </div>
  );
}
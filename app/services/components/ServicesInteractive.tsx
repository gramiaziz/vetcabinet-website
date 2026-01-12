'use client';

import { useState, useEffect } from 'react';
import ServiceHero from './ServiceHero';
import ServiceCard from './ServiceCard';
import ServiceComparison from './ServiceComparison';
import ServiceFAQ from './ServiceFAQ';
import CaseStudies from './CaseStudies';
import BookingModal from './BookingModal';
import { useLanguage } from '@/context/LanguageContext';

interface Service {
  id: string;
  titleFr: string;
  titleAr: string;
  descriptionFr: string;
  descriptionAr: string;
  image: string;
  alt: string;
  icon: string;
  features: {
    fr: string[];
    ar: string[];
  };
  priceRange: string;
  duration: string;
}

const ServicesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
   const { currentLanguage } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
  {
    id: 'vaccination',
    titleFr: 'Vaccination',
    titleAr: 'التطعيم',
    descriptionFr: 'Protection complète contre les maladies infectieuses avec un calendrier personnalisé adapté à l\'âge et au mode de vie de votre animal.',
    descriptionAr: 'حماية كاملة ضد الأمراض المعدية مع جدول مخصص يتكيف مع عمر ونمط حياة حيوانك الأليف.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1683586c1-1767267926251.png",
    alt: 'Veterinarian in white coat administering vaccine injection to calm brown dog on examination table',
    icon: 'ShieldCheckIcon',
    features: {
      fr: [
      'Vaccins essentiels et optionnels',
      'Rappels automatiques par SMS',
      'Carnet de vaccination numérique',
      'Consultation pré-vaccinale incluse'],

      ar: [
      'لقاحات أساسية واختيارية',
      'تذكيرات تلقائية عبر الرسائل القصيرة',
      'دفتر تطعيم رقمي',
      'استشارة ما قبل التطعيم مشمولة']

    },
    priceRange: '30-80 TND',
    duration: '30 min'
  },
  {
    id: 'consultation',
    titleFr: 'Consultation Générale',
    titleAr: 'استشارة عامة',
    descriptionFr: 'Examen complet de santé avec diagnostic précis et plan de traitement personnalisé par Dr. Asma GNAOUI.',
    descriptionAr: 'فحص صحي شامل مع تشخيص دقيق وخطة علاج مخصصة من قبل د. أسماء القناوي.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2c0f7ba-1767451838497.png",
    alt: 'Female veterinarian examining orange tabby cat with stethoscope in bright modern clinic',
    icon: 'HeartIcon',
    features: {
      fr: [
      'Examen physique complet',
      'Analyse des symptômes',
      'Recommandations nutritionnelles',
      'Suivi post-consultation gratuit'],

      ar: [
      'فحص بدني كامل',
      'تحليل الأعراض',
      'توصيات غذائية',
      'متابعة مجانية بعد الاستشارة']

    },
    priceRange: '50-80 TND',
    duration: '45 min'
  },
  {
    id: 'chirurgie',
    titleFr: 'Chirurgie',
    titleAr: 'الجراحة',
    descriptionFr: 'Interventions chirurgicales de routine et complexes avec équipement moderne et protocoles de sécurité stricts.',
    descriptionAr: 'عمليات جراحية روتينية ومعقدة مع معدات حديثة وبروتوكولات أمان صارمة.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1467c1197-1765088774224.png",
    alt: 'Surgical team in blue scrubs performing operation on anesthetized dog in sterile operating room',
    icon: 'ScissorsIcon',
    features: {
      fr: [
      'Anesthésie sécurisée',
      'Monitoring continu',
      'Soins post-opératoires inclus',
      'Suivi à domicile disponible'],

      ar: [
      'تخدير آمن',
      'مراقبة مستمرة',
      'رعاية ما بعد الجراحة مشمولة',
      'متابعة منزلية متاحة']

    },
    priceRange: '200-800 TND',
    duration: '1-3 heures'
  },
  {
    id: 'osteopathie',
    titleFr: 'Ostéopathie',
    titleAr: 'العلاج العظمي',
    descriptionFr: 'Thérapie manuelle douce pour soulager les douleurs musculo-squelettiques et améliorer la mobilité.',
    descriptionAr: 'علاج يدوي لطيف لتخفيف آلام العضلات والعظام وتحسين الحركة.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6cfca9d-1766734660604.png",
    alt: 'Veterinary physiotherapist performing gentle massage therapy on relaxed golden retriever dog',
    icon: 'HandRaisedIcon',
    features: {
      fr: [
      'Traitement non invasif',
      'Amélioration de la mobilité',
      'Soulagement de la douleur',
      'Séances personnalisées'],

      ar: [
      'علاج غير جراحي',
      'تحسين الحركة',
      'تخفيف الألم',
      'جلسات مخصصة']

    },
    priceRange: '60-100 TND',
    duration: '60 min'
  },
  {
    id: 'toilettage',
    titleFr: 'Toilettage & Pension',
    titleAr: 'العناية والإقامة',
    descriptionFr: 'Services de toilettage professionnel et hébergement confortable pour votre animal pendant vos absences.',
    descriptionAr: 'خدمات عناية احترافية وإقامة مريحة لحيوانك الأليف أثناء غيابك.',
    image: "https://images.unsplash.com/photo-1664837946343-3666ee0b008e",
    alt: 'Professional groomer bathing white fluffy dog in modern grooming salon with warm lighting',
    icon: 'SparklesIcon',
    features: {
      fr: [
      'Bain et séchage',
      'Coupe et styling',
      'Pension sécurisée',
      'Surveillance 24/7'],

      ar: [
      'استحمام وتجفيف',
      'قص وتصفيف',
      'إقامة آمنة',
      'مراقبة 24/7']

    },
    priceRange: '40-150 TND',
    duration: '1-2 heures'
  },
  {
    id: 'medicaments',
    titleFr: 'Médicaments Vétérinaires',
    titleAr: 'الأدوية البيطرية',
    descriptionFr: 'Large gamme de médicaments vétérinaires certifiés avec conseils d\'utilisation personnalisés.',
    descriptionAr: 'مجموعة واسعة من الأدوية البيطرية المعتمدة مع نصائح استخدام مخصصة.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ff13136-1766477270261.png",
    alt: 'Organized veterinary pharmacy shelves with various medications and supplements in modern clinic',
    icon: 'BeakerIcon',
    features: {
      fr: [
      'Médicaments certifiés',
      'Conseils d\'administration',
      'Livraison disponible',
      'Stock permanent'],

      ar: [
      'أدوية معتمدة',
      'نصائح الإدارة',
      'التوصيل متاح',
      'مخزون دائم']

    },
    priceRange: '15-200 TND',
    duration: '15 min'
  },
  {
    id: 'alimentation',
    titleFr: 'Alimentation Spécialisée',
    titleAr: 'تغذية متخصصة',
    descriptionFr: 'Aliments thérapeutiques et premium adaptés aux besoins spécifiques de chaque animal.',
    descriptionAr: 'أغذية علاجية ومتميزة تتكيف مع الاحتياجات الخاصة لكل حيوان.',
    image: "https://images.unsplash.com/photo-1598285385411-c5952310875e",
    alt: 'Display of premium pet food bags and nutritional supplements on wooden shelves in veterinary store',
    icon: 'CakeIcon',
    features: {
      fr: [
      'Aliments thérapeutiques',
      'Marques premium',
      'Conseils nutritionnels',
      'Plans alimentaires personnalisés'],

      ar: [
      'أغذية علاجية',
      'علامات تجارية متميزة',
      'نصائح غذائية',
      'خطط غذائية مخصصة']

    },
    priceRange: '25-120 TND',
    duration: '20 min'
  }];


  const handleBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingModalOpen(true);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-20 bg-card" />
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-card" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-card" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <>
      <ServiceHero currentLanguage={currentLanguage} />

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) =>
            <ServiceCard
              key={service.id}
              service={service}
              currentLanguage={currentLanguage}
              onBooking={handleBooking} />

            )}
          </div>
        </div>
      </section>

      {/*<ServiceComparison currentLanguage={currentLanguage} />*/}
      <CaseStudies currentLanguage={currentLanguage} />
      <ServiceFAQ currentLanguage={currentLanguage} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceId={selectedServiceId}
        currentLanguage={currentLanguage} />

    </>);

};

export default ServicesInteractive;
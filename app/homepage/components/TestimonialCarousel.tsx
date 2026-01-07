'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface TestimonialCarouselProps {
  currentLanguage: 'fr' | 'ar';
}

interface Testimonial {
  id: number;
  name: string;
  petName: string;
  petType: string;
  rating: number;
  textFr: string;
  textAr: string;
  image: string;
  imageAlt: string;
  service: string;
  date: string;
}

const TestimonialCarousel = ({ currentLanguage }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Souad Mellti',
    petName: 'Max',
    petType: 'rottweiler',
    rating: 5,
    textFr: 'I thank Doctor Asma for her magnificent effort to save my rottweiler poppy,  she brought her back to life after I lost hope ,I would never regret choosing to call her clinic at a time when no other docter picked up the phone and now my poppy is healthy and happy because of her sincere effort 🧡.',
    textAr: 'أنقذت د. أسماء حياة ماكس خلال حالة طوارئ ليلية. احترافيتها ورحمتها استثنائية. أوصي بشدة بهذه العيادة لجميع أصحاب الحيوانات في منوبة.',
    image: "https://images.unsplash.com/photo-1731153227312-e5d227ab4f77",
    imageAlt: 'Happy golden retriever dog with tongue out sitting in green grass on sunny day',
    service: 'Urgence',
    date: '2026-01-02'
  },
  {
    id: 2,
    name: 'Nadia Ktari',
    petName: 'Luna',
    petType: 'Chat Persan',
    rating: 5,
    textFr: 'Dr. Asma Gnaoui est une vétérinaire exceptionnelle! Elle est passionnée par son métier et le fait avec beaucoup de professionnalisme… J’ai essayé plusieurs vétérinaire avant elle pour mon chien, mais maintenant je ne la changerai plus. Merci docteur et bravo pour votre gentillesse et vos compétences. Je vous souhaite une bonne continuation 🥰😘💐',
    textAr: 'تلقت لونا رعاية استثنائية لعمليتها الجراحية. الفريق متفانٍ جداً والمرافق نظيفة للغاية. كانت التفسيرات واضحة ومطمئنة.',
    image: "https://images.unsplash.com/photo-1531227855995-f4707a6eb38e",
    imageAlt: 'Beautiful white Persian cat with blue eyes lying on soft blanket looking at camera',
    service: 'Chirurgie',
    date: '2025-12-28'
  },
  {
    id: 3,
    name: 'Abed Chahbi',
    petName: 'Rocky',
    petType: 'Berger Allemand',
    rating: 5,
    textFr: 'J’ai emmené mon chien dans cette clinique vétérinaire et j’ai été très impressionné par la qualité des soins et le professionnalisme de la vétérinaire. Elle est non seulement compétente, mais aussi très humaine et attentionnée, même avec les chiens errants. On sent qu’elle aime vraiment les animaux et qu’elle fait son travail avec passion et cœur. C’est rare de trouver des personnes aussi engagées. Je recommande vivement cette clinique !',
    textAr: 'خدمة التطعيم ممتازة. تأخذ د. أسماء الوقت لشرح كل خطوة ويشعر روكي دائماً بالأمان. المتابعة بعد التطعيم رائعة.',
    image: "https://images.unsplash.com/photo-1494870363241-b5225be3dada",
    imageAlt: 'Alert German Shepherd dog sitting outdoors with attentive expression and pointed ears',
    service: 'Vaccination',
    date: '2025-12-20'
  },
  {
    id: 4,
    name: 'Eyat Allah',
    petName: 'Mimi',
    petType: 'Chat Siamois',
    rating: 5,
    textFr: 'Un grand merci pour Dr Asma pour le professionnalisme et la gentillesse Chaque visite a été marquée par une écoute attentive et des conseils précieux Nous avons beaucoup de chance de vous avoir comme vétérinaire ❤',
    textAr: 'الاستشارات دائماً شاملة ومهنية. شخصت د. أسماء مشكلة ميمي بسرعة وكان العلاج فعالاً جداً. شكراً جزيلاً!',
    image: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28",
    imageAlt: 'Elegant Siamese cat with blue eyes and cream colored fur sitting gracefully on white surface',
    service: 'Consultation',
    date: '2025-12-15'
  },
  {
    id: 5,
    name: 'Houda Ben Dhiaf',
    petName: 'Bella',
    petType: 'Labrador',
    rating: 5,
    textFr: 'Un grand merci 🥰  Animaux d\'abord  cabinet vétérinaire  (Manouba ). Dr Asma  professionnelle💯, accueil chaleureux💫 et beaucoup de soin pour les animaux👌. Je suis très satisfaite du service et je recommande vivement cette clinique. Bravo et bonne continuation …',
    textAr: 'خدمة العناية رائعة! تخرج بيلا دائماً جميلة ومسترخية. الفريق لطيف وصبور مع الحيوانات. قيمة ممتازة مقابل المال.',
    image: "https://images.unsplash.com/photo-1559045585-4fad8bcbb115",
    imageAlt: 'Friendly yellow Labrador retriever with happy expression sitting in outdoor garden setting',
    service: 'Toilettage',
    date: '2025-12-10'
  }];


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-8 bg-muted rounded-button animate-pulse mb-6 w-48 mx-auto" />
            <div className="h-12 bg-muted rounded-button animate-pulse mb-4" />
            <div className="h-6 bg-muted rounded-button animate-pulse" />
          </div>
          <div className="h-96 bg-muted rounded-card animate-pulse" />
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 text-gold-foreground rounded-button mb-6">
            <Icon name="StarIcon" size={20} variant="solid" className="text-gold" />
            <span className="text-sm font-heading font-semibold">
              {currentLanguage === 'fr' ? 'Témoignages' : 'الشهادات'}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            {currentLanguage === 'fr' ? 'Ce Que Disent Nos Clients' : 'ماذا يقول عملاؤنا'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {currentLanguage === 'fr' ? 'Des centaines de propriétaires d\'animaux nous font confiance pour les soins de leurs compagnons' : 'مئات أصحاب الحيوانات يثقون بنا لرعاية رفاقهم'}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-background rounded-card shadow-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Image Column */}
              <div className="relative">
                <div className="relative rounded-card overflow-hidden h-80 lg:h-full">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.imageAlt}
                    className="w-full h-full object-cover" />

                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-button shadow-card">
                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) =>
                      <Icon key={i} name="StarIcon" size={16} className="text-gold" variant="solid" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-button gradient-primary flex items-center justify-center">
                  <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-white" variant="solid" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{currentLanguage === 'fr' ? currentTestimonial.textFr : currentTestimonial.textAr}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-heading font-bold text-xl text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {currentLanguage === 'fr' ?
                      `Propriétaire de ${currentTestimonial.petName} (${currentTestimonial.petType})` :
                      `مالك ${currentTestimonial.petName} (${currentTestimonial.petType})`}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckBadgeIcon" size={16} className="text-success" variant="solid" />
                      <span>{currentTestimonial.service}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CalendarIcon" size={16} />
                      <span>{currentTestimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-interactive hover:shadow-card transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeftIcon" size={24} className="text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white shadow-interactive hover:shadow-card transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Next testimonial">

            <Icon name="ChevronRightIcon" size={24} className="text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ?
              'w-8 bg-primary' : 'bg-border hover:bg-muted-foreground'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-12">
          <a
            href="/testimonials"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-heading font-semibold transition-colors">

            <span>{currentLanguage === 'fr' ? 'Voir Tous les Témoignages' : 'عرض جميع الشهادات'}</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;
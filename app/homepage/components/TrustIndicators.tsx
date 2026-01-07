import Icon from '@/components/ui/AppIcon';

interface TrustIndicatorsProps {
  currentLanguage: 'fr' | 'ar';
}

interface TrustItem {
  icon: string;
  titleFr: string;
  titleAr: string;
  descriptionFr: string;
  descriptionAr: string;
  color: string;
}

const TrustIndicators = ({ currentLanguage }: TrustIndicatorsProps) => {
  const trustItems: TrustItem[] = [
    {
      icon: 'AcademicCapIcon',
      titleFr: 'Formation Internationale',
      titleAr: 'تدريب دولي',
      descriptionFr: 'Diplômée des meilleures écoles vétérinaires avec formation continue en Europe',
      descriptionAr: 'خريجة من أفضل المدارس البيطرية مع تدريب مستمر في أوروبا',
      color: 'text-primary'
    },
    {
      icon: 'ShieldCheckIcon',
      titleFr: 'Certifications Officielles',
      titleAr: 'شهادات رسمية',
      descriptionFr: 'Membre de l\'Ordre National des Vétérinaires de Tunisie',
      descriptionAr: 'عضو في النقابة الوطنية للأطباء البيطريين في تونس',
      color: 'text-success'
    },
    {
      icon: 'BuildingOffice2Icon',
      titleFr: 'Équipements Modernes',
      titleAr: 'معدات حديثة',
      descriptionFr: 'Clinique équipée des dernières technologies médicales vétérinaires',
      descriptionAr: 'عيادة مجهزة بأحدث التقنيات الطبية البيطرية',
      color: 'text-accent'
    },
    {
      icon: 'HeartIcon',
      titleFr: 'Approche Compassionnelle',
      titleAr: 'نهج رحيم',
      descriptionFr: 'Soins personnalisés avec respect du bien-être animal',
      descriptionAr: 'رعاية شخصية مع احترام رفاهية الحيوان',
      color: 'text-error'
    },
    {
      icon: 'ClockIcon',
      titleFr: 'Disponibilité 24/7',
      titleAr: 'متاح 24/7',
      descriptionFr: 'Service d\'urgence disponible jour et nuit, tous les jours',
      descriptionAr: 'خدمة الطوارئ متاحة ليلاً ونهاراً، كل يوم',
      color: 'text-warning'
    },
    {
      icon: 'SparklesIcon',
      titleFr: 'Hygiène Irréprochable',
      titleAr: 'نظافة لا تشوبها شائبة',
      descriptionFr: 'Protocoles stricts de stérilisation et de désinfection',
      descriptionAr: 'بروتوكولات صارمة للتعقيم والتطهير',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-button mb-6">
            <Icon name="ShieldCheckIcon" size={20} variant="solid" />
            <span className="text-sm font-heading font-semibold">
              {currentLanguage === 'fr' ? 'Pourquoi Nous Choisir' : 'لماذا تختارنا'}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            {currentLanguage === 'fr' ?'Excellence et Confiance en Médecine Vétérinaire' :'التميز والثقة في الطب البيطري'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {currentLanguage === 'fr' ?'Des soins de qualité supérieure pour vos compagnons, soutenus par l\'expertise et la compassion' :'رعاية عالية الجودة لرفاقك، مدعومة بالخبرة والرحمة'}
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-card p-8 shadow-card hover:shadow-interactive transition-all hover:-translate-y-1 border border-border"
            >
              <div className={`w-14 h-14 rounded-button bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6`}>
                <Icon name={item.icon as any} size={28} className={item.color} variant="solid" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {currentLanguage === 'fr' ? item.titleFr : item.titleAr}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentLanguage === 'fr' ? item.descriptionFr : item.descriptionAr}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-card border border-primary/20">
            <div className="flex-1 text-left">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {currentLanguage === 'fr' ?'Besoin d\'une consultation ?' :'هل تحتاج إلى استشارة؟'}
              </h3>
              <p className="text-muted-foreground">
                {currentLanguage === 'fr' ?'Notre équipe est prête à accueillir votre compagnon' :'فريقنا جاهز لاستقبال رفيقك'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+21694273313"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-error text-error-foreground font-heading font-semibold rounded-button hover:bg-error/90 transition-all shadow-emergency"
              >
                <Icon name="PhoneIcon" size={20} />
                <span>{currentLanguage === 'fr' ? 'Appeler' : 'اتصل'}</span>
              </a>
              <a
                href="https://wa.me/21694273313"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-whatsapp text-whatsapp-foreground font-heading font-semibold rounded-button hover:bg-whatsapp/90 transition-all"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
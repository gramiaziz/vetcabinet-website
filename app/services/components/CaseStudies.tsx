import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudiesProps {
  currentLanguage: 'fr' | 'ar';
}

interface CaseStudy {
  id: string;
  titleFr: string;
  titleAr: string;
  animalType: string;
  animalName: string;
  conditionFr: string;
  conditionAr: string;
  treatmentFr: string;
  treatmentAr: string;
  outcomeFr: string;
  outcomeAr: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  duration: string;
  service: string;
}

const CaseStudies = ({ currentLanguage }: CaseStudiesProps) => {
  const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    titleFr: 'Récupération Chirurgicale Complète',
    titleAr: 'تعافي جراحي كامل',
    animalType: 'Chien',
    animalName: 'Max',
    conditionFr: 'Fracture complexe de la patte arrière suite à un accident',
    conditionAr: 'كسر معقد في الساق الخلفية بعد حادث',
    treatmentFr: 'Chirurgie orthopédique avec pose de plaques et vis, suivie de 6 semaines de physiothérapie',
    treatmentAr: 'جراحة العظام مع وضع صفائح ومسامير، تليها 6 أسابيع من العلاج الطبيعي',
    outcomeFr: 'Récupération complète de la mobilité, retour aux activités normales',
    outcomeAr: 'استعادة كاملة للحركة، العودة إلى الأنشطة العادية',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1037d03ae-1765102265303.png",
    beforeAlt: 'Golden retriever dog with injured leg lying on examination table before surgery',
    afterImage: "https://images.unsplash.com/photo-1662329043410-0b289ec14f14",
    afterAlt: 'Healthy golden retriever dog running happily in park after successful surgery recovery',
    duration: '8 semaines',
    service: 'Chirurgie'
  },
  {
    id: 'case-2',
    titleFr: 'Traitement Dermatologique Réussi',
    titleAr: 'علاج جلدي ناجح',
    animalType: 'Chat',
    animalName: 'Luna',
    conditionFr: 'Dermatite allergique sévère avec perte de poils et démangeaisons',
    conditionAr: 'التهاب جلدي تحسسي شديد مع فقدان الشعر والحكة',
    treatmentFr: 'Identification des allergènes, traitement médicamenteux et changement alimentaire',
    treatmentAr: 'تحديد مسببات الحساسية، العلاج الدوائي وتغيير النظام الغذائي',
    outcomeFr: 'Pelage complètement régénéré, disparition des symptômes',
    outcomeAr: 'تجديد كامل للفراء، اختفاء الأعراض',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1378b781e-1765696323178.png",
    beforeAlt: 'Persian cat with patchy fur and visible skin irritation before dermatological treatment',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_106fc4b15-1767380940181.png",
    afterAlt: 'Healthy Persian cat with full glossy coat sitting contentedly after successful treatment',
    duration: '12 semaines',
    service: 'Consultation'
  },
  {
    id: 'case-3',
    titleFr: 'Sauvetage d\'Urgence Réussi',
    titleAr: 'إنقاذ طارئ ناجح',
    animalType: 'Chien',
    animalName: 'Rocky',
    conditionFr: 'Intoxication alimentaire grave avec déshydratation sévère',
    conditionAr: 'تسمم غذائي خطير مع جفاف شديد',
    treatmentFr: 'Intervention d\'urgence 24/7, perfusion intraveineuse et surveillance intensive',
    treatmentAr: 'تدخل طارئ 24/7، تسريب وريدي ومراقبة مكثفة',
    outcomeFr: 'Rétablissement complet en 48 heures, retour à la maison en bonne santé',
    outcomeAr: 'تعافي كامل في 48 ساعة، العودة إلى المنزل بصحة جيدة',
    beforeImage: "https://images.unsplash.com/photo-1660663905009-a661df8ee55c",
    beforeAlt: 'Lethargic German shepherd dog lying weakly on veterinary bed during emergency treatment',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_199f09809-1765918365106.png",
    afterAlt: 'Energetic German shepherd dog standing alert and healthy after emergency care recovery',
    duration: '48 heures',
    service: 'Urgences'
  }];


  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              {currentLanguage === 'fr' ? 'Histoires de Réussite' : 'قصص النجاح'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLanguage === 'fr' ? 'Découvrez comment nous avons aidé nos patients à retrouver la santé' : 'اكتشف كيف ساعدنا مرضانا على استعادة صحتهم'}
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-12">
            {caseStudies.map((study, index) =>
            <div
              key={study.id}
              className={`bg-card rounded-card shadow-card overflow-hidden ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`
              }>

                {/* Before/After Images */}
                <div className="lg:w-1/2 grid grid-cols-2 gap-1">
                  <div className="relative h-64 lg:h-full overflow-hidden group">
                    <AppImage
                    src={study.beforeImage}
                    alt={study.beforeAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                      <span className="px-4 py-2 bg-error text-white font-heading font-semibold rounded-button text-sm">
                        {currentLanguage === 'fr' ? 'Avant' : 'قبل'}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-full overflow-hidden group">
                    <AppImage
                    src={study.afterImage}
                    alt={study.afterAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                      <span className="px-4 py-2 bg-success text-white font-heading font-semibold rounded-button text-sm">
                        {currentLanguage === 'fr' ? 'Après' : 'بعد'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Case Details */}
                <div className="lg:w-1/2 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                        {currentLanguage === 'fr' ? study.titleFr : study.titleAr}
                      </h3>
                      <p className="text-muted-foreground">
                        {study.animalType} - {study.animalName}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-button text-sm">
                      {study.service}
                    </span>
                  </div>

                  {/* Condition */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="ExclamationCircleIcon" size={20} className="text-error" />
                      <h4 className="font-heading font-semibold text-foreground">
                        {currentLanguage === 'fr' ? 'Condition' : 'الحالة'}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentLanguage === 'fr' ? study.conditionFr : study.conditionAr}
                    </p>
                  </div>

                  {/* Treatment */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="BeakerIcon" size={20} className="text-primary" />
                      <h4 className="font-heading font-semibold text-foreground">
                        {currentLanguage === 'fr' ? 'Traitement' : 'العلاج'}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentLanguage === 'fr' ? study.treatmentFr : study.treatmentAr}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-success" variant="solid" />
                      <h4 className="font-heading font-semibold text-foreground">
                        {currentLanguage === 'fr' ? 'Résultat' : 'النتيجة'}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentLanguage === 'fr' ? study.outcomeFr : study.outcomeAr}
                    </p>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-border">
                    <Icon name="ClockIcon" size={20} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {currentLanguage === 'fr' ? 'Durée du traitement :' : 'مدة العلاج:'} {study.duration}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted rounded-card">
            <p className="text-sm text-muted-foreground text-center">
              {currentLanguage === 'fr' ? '* Les résultats peuvent varier selon chaque cas. Toutes les images sont utilisées avec le consentement des propriétaires.' : '* قد تختلف النتائج حسب كل حالة. جميع الصور مستخدمة بموافقة الملاك.'}
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default CaseStudies;
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';



interface ServicesGridProps {
  currentLanguage: 'fr' | 'ar';
}

interface Service {
  id: string;
  icon: string;
  titleFr: string;
  titleAr: string;
  descriptionFr: string;
  descriptionAr: string;
  image: string;
  imageAlt: string;
  color: string;
  featured?: boolean;
}

const ServicesGrid = ({ currentLanguage }: ServicesGridProps) => {
  const services: Service[] = [
  {
    id: 'consultation',
    icon: 'HeartIcon',
    titleFr: 'Consultation Générale',
    titleAr: 'استشارة عامة',
    descriptionFr: 'Examen complet de santé, diagnostic et conseils personnalisés pour votre animal',
    descriptionAr: 'فحص صحي شامل وتشخيص ونصائح شخصية لحيوانك',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2c0f7ba-1767451838497.png",
    imageAlt: 'Veterinarian in white coat examining brown dog with stethoscope on examination table in bright clinic',
    color: 'from-primary to-secondary',
    featured: true
  },
  {
    id: 'vaccination',
    icon: 'ShieldCheckIcon',
    titleFr: 'Vaccination',
    titleAr: 'التطعيم',
    descriptionFr: 'Programme de vaccination complet pour protéger votre compagnon des maladies',
    descriptionAr: 'برنامج تطعيم شامل لحماية رفيقك من الأمراض',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2c0f7ba-1767451838497.png",
    imageAlt: 'Veterinarian administering vaccine injection to small white dog held by owner in modern clinic',
    color: 'from-success to-primary'
  },
  {
    id: 'chirurgie',
    icon: 'ScissorsIcon',
    titleFr: 'Chirurgie',
    titleAr: 'الجراحة',
    descriptionFr: 'Interventions chirurgicales avec équipement moderne et protocoles de sécurité stricts',
    descriptionAr: 'عمليات جراحية بمعدات حديثة وبروتوكولات أمان صارمة',
    image: "https://images.unsplash.com/photo-1664902276790-90624a60ff47",
    imageAlt: 'Surgical team in blue scrubs performing veterinary surgery with modern equipment in sterile operating room',
    color: 'from-accent to-error',
    featured: true
  },
  {
    id: 'osteopathie',
    icon: 'HandRaisedIcon',
    titleFr: 'Ostéopathie',
    titleAr: 'العلاج اليدوي',
    descriptionFr: 'Thérapie manuelle douce pour soulager les douleurs et améliorer la mobilité',
    descriptionAr: 'علاج يدوي لطيف لتخفيف الألم وتحسين الحركة',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_126154799-1767039245619.png",
    imageAlt: 'Veterinarian performing gentle manual therapy massage on golden retriever lying on treatment table',
    color: 'from-warning to-secondary'
  },
  {
    id: 'toilettage',
    icon: 'SparklesIcon',
    titleFr: 'Toilettage & Pension',
    titleAr: 'العناية والإقامة',
    descriptionFr: 'Services de toilettage professionnel et hébergement confortable pour votre animal',
    descriptionAr: 'خدمات عناية احترافية وإقامة مريحة لحيوانك',
    image: "https://images.unsplash.com/photo-1625277743460-43716b93507a",
    imageAlt: 'Professional groomer bathing fluffy white poodle in modern grooming salon with warm lighting',
    color: 'from-accent to-primary'
  },
  {
    id: 'medicaments',
    icon: 'BeakerIcon',
    titleFr: 'Médicaments Vétérinaires',
    titleAr: 'الأدوية البيطرية',
    descriptionFr: 'Large gamme de médicaments et produits de santé pour animaux',
    descriptionAr: 'مجموعة واسعة من الأدوية ومنتجات الصحة للحيوانات',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ff13136-1766477270261.png",
    imageAlt: 'Organized shelves of veterinary medications and supplements in modern pharmacy section of clinic',
    color: 'from-primary to-accent'
  },
  {
    id: 'alimentation',
    icon: 'CakeIcon',
    titleFr: 'Alimentation',
    titleAr: 'التغذية',
    descriptionFr: 'Conseils nutritionnels et aliments premium adaptés aux besoins de votre animal',
    descriptionAr: 'نصائح غذائية وأطعمة متميزة تناسب احتياجات حيوانك',
    image: "https://images.unsplash.com/photo-1598285385411-c5952310875e",
    imageAlt: 'Display of premium pet food bags and nutritional supplements arranged on wooden shelves in store',
    color: 'from-secondary to-warning'
  },
  {
    id: 'urgence',
    icon: 'ExclamationTriangleIcon',
    titleFr: 'Urgences 24/7',
    titleAr: 'طوارئ 24/7',
    descriptionFr: 'Service d\'urgence disponible jour et nuit pour les cas critiques',
    descriptionAr: 'خدمة طوارئ متاحة ليلاً ونهاراً للحالات الحرجة',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be344208-1766988302112.png",
    imageAlt: 'Emergency veterinary team in action treating injured dog on examination table with urgent care equipment',
    color: 'from-error to-warning',
    featured: true
  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-button mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" />
            <span className="text-sm font-heading font-semibold">
              {currentLanguage === 'fr' ? 'Nos Services' : 'خدماتنا'}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            {currentLanguage === 'fr' ? 'Des Soins Complets pour Vos Compagnons' : 'رعاية شاملة لرفاقك'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {currentLanguage === 'fr' ? 'De la prévention aux urgences, nous offrons une gamme complète de services vétérinaires' : 'من الوقاية إلى الطوارئ، نقدم مجموعة كاملة من الخدمات البيطرية'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) =>
          <Link
            key={service.id}
            href="/services"
            className={`group relative overflow-hidden rounded-card shadow-card hover:shadow-interactive transition-all hover:-translate-y-2 ${
            service.featured ? 'md:col-span-2 lg:col-span-2' : ''}`
            }>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Featured Badge */}
                {service.featured &&
              <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-gold-foreground text-xs font-heading font-bold rounded-button">
                    {currentLanguage === 'fr' ? 'POPULAIRE' : 'شائع'}
                  </div>
              }
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="w-12 h-12 rounded-button bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <Icon name={service.icon as any} size={24} variant="solid" />
                </div>
                <h3 className="font-heading font-bold text-xl lg:text-2xl mb-2">
                  {currentLanguage === 'fr' ? service.titleFr : service.titleAr}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  {currentLanguage === 'fr' ? service.descriptionFr : service.descriptionAr}
                </p>
                <div className="flex items-center space-x-2 text-sm font-semibold">
                  <span>{currentLanguage === 'fr' ? 'En savoir plus' : 'اعرف المزيد'}</span>
                  <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive hover:scale-105">

            <span>{currentLanguage === 'fr' ? 'Voir Tous les Services' : 'عرض جميع الخدمات'}</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default ServicesGrid;
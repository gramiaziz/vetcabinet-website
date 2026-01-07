import Icon from '@/components/ui/AppIcon';

interface ServiceHeroProps {
  currentLanguage: 'fr' | 'ar';
}

const ServiceHero = ({ currentLanguage }: ServiceHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 pt-32 pb-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
            <a href="/homepage" className="text-muted-foreground hover:text-primary transition-colors">
              {currentLanguage === 'fr' ? 'Accueil' : 'الرئيسية'}
            </a>
            <Icon name="ChevronRightIcon" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">
              {currentLanguage === 'fr' ? 'Services' : 'الخدمات'}
            </span>
          </nav>

          {/* Hero Title */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            {currentLanguage === 'fr' ?'Services Vétérinaires Complets' :'خدمات بيطرية شاملة'}
          </h1>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {currentLanguage === 'fr' ?'Des soins de qualité supérieure pour vos compagnons, de la prévention aux urgences, avec expertise et compassion.' :'رعاية عالية الجودة لحيواناتك الأليفة، من الوقاية إلى الطوارئ، بخبرة وتعاطف.'}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={20} className="text-success" variant="solid" />
              <span className="text-sm font-medium text-foreground">
                {currentLanguage === 'fr' ? 'Certifié & Agréé' : 'معتمد ومرخص'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                {currentLanguage === 'fr' ? 'Urgences 24/7' : 'طوارئ 24/7'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="StarIcon" size={20} className="text-gold" variant="solid" />
              <span className="text-sm font-medium text-foreground">
                {currentLanguage === 'fr' ? '5.0 (122 avis)' : '5.0 (122 تقييم)'}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive"
            >
              {currentLanguage === 'fr' ? 'Prendre Rendez-vous' : 'حجز موعد'}
            </a>
            <a
              href="tel:+21612345678"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-error text-error-foreground font-heading font-semibold rounded-button hover:bg-error/90 transition-all shadow-emergency"
            >
              <Icon name="PhoneIcon" size={20} />
              <span>{currentLanguage === 'fr' ? 'Urgence Immédiate' : 'طوارئ فورية'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
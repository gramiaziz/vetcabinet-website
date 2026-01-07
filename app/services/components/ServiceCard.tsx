import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  service: {
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
  };
  currentLanguage: 'fr' | 'ar';
  onBooking: (serviceId: string) => void;
}

const ServiceCard = ({ service, currentLanguage, onBooking }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-card overflow-hidden shadow-card hover:shadow-interactive transition-all duration-300 group">
      {/* Service Image */}
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-card">
          <Icon name={service.icon as any} size={24} className="text-primary" />
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
          {currentLanguage === 'fr' ? service.titleFr : service.titleAr}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {currentLanguage === 'fr' ? service.descriptionFr : service.descriptionAr}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {(currentLanguage === 'fr' ? service.features.fr : service.features.ar).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price & Duration */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">
              {currentLanguage === 'fr' ? 'À partir de' : 'ابتداءً من'}
            </p>
            <p className="font-heading font-bold text-xl text-primary">{service.priceRange}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-1">
              {currentLanguage === 'fr' ? 'Durée' : 'المدة'}
            </p>
            <p className="font-medium text-foreground">{service.duration}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onBooking(service.id)}
            className="flex-1 px-6 py-3 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-card"
          >
            {currentLanguage === 'fr' ? 'Réserver' : 'احجز'}
          </button>
          <a
            href={`#${service.id}-details`}
            className="flex-1 px-6 py-3 bg-muted text-foreground font-heading font-semibold rounded-button hover:bg-muted/80 transition-all text-center"
          >
            {currentLanguage === 'fr' ? 'En savoir plus' : 'اعرف المزيد'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
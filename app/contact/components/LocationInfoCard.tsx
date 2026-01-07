import Icon from '@/components/ui/AppIcon';

interface LocationInfoCardProps {
  currentLanguage: 'fr' | 'ar';
}

interface LocationDetail {
  icon: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
}

export default function LocationInfoCard({ currentLanguage }: LocationInfoCardProps) {
  const locationDetails: LocationDetail[] = [
    {
      icon: "MapPinIcon",
      title: "Adresse",
      titleAr: "العنوان",
      content: "Avenue Habib Bourguiba, Manouba 2010, Tunisie",
      contentAr: "شارع الحبيب بورقيبة، منوبة 2010، تونس"
    },
    {
      icon: "TruckIcon",
      title: "Parking",
      titleAr: "موقف السيارات",
      content: "Parking gratuit disponible devant la clinique",
      contentAr: "موقف مجاني متاح أمام العيادة"
    },
    {
      icon: "UserGroupIcon",
      title: "Accessibilité",
      titleAr: "إمكانية الوصول",
      content: "Accès PMR, ascenseur disponible",
      contentAr: "وصول لذوي الاحتياجات الخاصة، مصعد متاح"
    },
    {
      icon: "BusIcon",
      title: "Transport Public",
      titleAr: "النقل العام",
      content: "Arrêt de bus ligne 12 et 45 à 100m",
      contentAr: "محطة حافلات الخط 12 و 45 على بعد 100 متر"
    }
  ];

  return (
    <div className="bg-card rounded-card p-6 shadow-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary rounded-button flex items-center justify-center">
          <Icon name="BuildingOffice2Icon" size={24} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-foreground">
          {currentLanguage === 'fr' ? 'Informations Pratiques' : 'معلومات عملية'}
        </h3>
      </div>

      <div className="space-y-4">
        {locationDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-muted rounded-button flex items-center justify-center flex-shrink-0">
              <Icon name={detail.icon as any} size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                {currentLanguage === 'fr' ? detail.title : detail.titleAr}
              </h4>
              <p className="text-sm text-muted-foreground">
                {currentLanguage === 'fr' ? detail.content : detail.contentAr}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <a
          href="https://www.google.com/maps/place/ANIMAUX+D'ABORD+Cabinet+V%C3%A9t%C3%A9rinaire+Manouba+%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9+%D8%A8%D9%85%D9%86%D9%88%D8%A8%D8%A9%E2%80%AD/@36.8054382,10.1031233,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd330007604f6b:0xe07d665a602886a8!8m2!3d36.8054382!4d10.1056982!16s%2Fg%2F11m75dxc9s?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 w-full px-6 py-3 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive"
        >
          <Icon name="MapIcon" size={20} />
          <span className="text-sm">
            {currentLanguage === 'fr' ? 'Obtenir l\'itinéraire' : 'احصل على الاتجاهات'}
          </span>
        </a>
      </div>
    </div>
  );
}
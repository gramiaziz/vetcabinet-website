import Icon from '@/components/ui/AppIcon';

interface LocationSectionProps {
  currentLanguage: 'fr' | 'ar';
}

const LocationSection = ({ currentLanguage }: LocationSectionProps) => {
  const clinicInfo = {
    address: 'Rue de la Santé, Manouba 2010, Tunisie',
    addressAr: 'شارع الصحة، منوبة 2010، تونس',
    phone: '+216 94 273 313',
    email: 'contact@animauxdabord.tn',
    hours: {
      weekdays: '08:00 - 18:00',
      saturday: '09:00 - 14:00',
      emergency: '24/7'
    }
  };

  const contactMethods = [
    {
      icon: 'PhoneIcon',
      titleFr: 'Téléphone',
      titleAr: 'الهاتف',
      value: clinicInfo.phone,
      href: `tel:${clinicInfo.phone}`,
      color: 'text-primary'
    },
    {
      icon: 'EnvelopeIcon',
      titleFr: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: clinicInfo.email,
      href: `mailto:${clinicInfo.email}`,
      color: 'text-accent'
    },
    {
      icon: 'MapPinIcon',
      titleFr: 'Adresse',
      titleAr: 'العنوان',
      value: currentLanguage === 'fr' ? clinicInfo.address : clinicInfo.addressAr,
      href: 'https://maps.google.com/?q=36.8065,10.0965',
      color: 'text-success'
    }
  ];

  const openingHours = [
    {
      dayFr: 'Lundi - Vendredi',
      dayAr: 'الاثنين - الجمعة',
      hours: clinicInfo.hours.weekdays,
      icon: 'ClockIcon'
    },
    {
      dayFr: 'Samedi',
      dayAr: 'السبت',
      hours: clinicInfo.hours.saturday,
      icon: 'CalendarIcon'
    },
    {
      dayFr: 'Urgences',
      dayAr: 'الطوارئ',
      hours: clinicInfo.hours.emergency,
      icon: 'ExclamationTriangleIcon',
      highlight: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 text-success rounded-button mb-6">
            <Icon name="MapPinIcon" size={20} variant="solid" />
            <span className="text-sm font-heading font-semibold">
              {currentLanguage === 'fr' ? 'Nous Trouver' : 'اعثر علينا'}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            {currentLanguage === 'fr' ?'Visitez Notre Clinique à Manouba' :'قم بزيارة عيادتنا في منوبة'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {currentLanguage === 'fr' ?'Facilement accessible avec parking gratuit et accès pour personnes à mobilité réduite' :'سهل الوصول مع موقف سيارات مجاني ووصول لذوي الاحتياجات الخاصة'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Column */}
          <div className="space-y-6">
            <div className="relative rounded-card overflow-hidden shadow-card h-96 lg:h-full min-h-[400px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="ANIMAUX D'ABORD Veterinary Clinic Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=36.8065,10.0965&z=14&output=embed"
                className="border-0"
              />
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-button p-4 shadow-card">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-button gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPinIcon" size={20} className="text-white" variant="solid" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      ANIMAUX D&apos;ABORD
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentLanguage === 'fr' ? clinicInfo.address : clinicInfo.addressAr}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                {currentLanguage === 'fr' ? 'Contactez-Nous' : 'اتصل بنا'}
              </h3>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.icon === 'MapPinIcon' ? '_blank' : undefined}
                  rel={method.icon === 'MapPinIcon' ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-4 p-4 bg-card rounded-button hover:bg-muted transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-button bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon name={method.icon as any} size={24} className={method.color} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {currentLanguage === 'fr' ? method.titleFr : method.titleAr}
                    </h4>
                    <p className="text-muted-foreground">{method.value}</p>
                  </div>
                  <Icon name="ArrowRightIcon" size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="bg-card rounded-card p-6 border border-border">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center space-x-2">
                <Icon name="ClockIcon" size={24} className="text-primary" />
                <span>{currentLanguage === 'fr' ? 'Horaires d\'Ouverture' : 'ساعات العمل'}</span>
              </h3>
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-button ${
                      schedule.highlight 
                        ? 'bg-error/10 border border-error/20' :'bg-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={schedule.icon as any} 
                        size={20} 
                        className={schedule.highlight ? 'text-error' : 'text-muted-foreground'}
                        variant={schedule.highlight ? 'solid' : 'outline'}
                      />
                      <span className={`font-medium ${schedule.highlight ? 'text-error' : 'text-foreground'}`}>
                        {currentLanguage === 'fr' ? schedule.dayFr : schedule.dayAr}
                      </span>
                    </div>
                    <span className={`font-heading font-bold ${schedule.highlight ? 'text-error' : 'text-foreground'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex flex-col items-center justify-center p-6 bg-error text-error-foreground rounded-button hover:bg-error/90 transition-all shadow-emergency text-center"
              >
                <Icon name="PhoneIcon" size={28} variant="solid" className="mb-2" />
                <span className="font-heading font-semibold text-sm">
                  {currentLanguage === 'fr' ? 'Appeler' : 'اتصل'}
                </span>
              </a>
              <a
                href="https://wa.me/21612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-whatsapp text-whatsapp-foreground rounded-button hover:bg-whatsapp/90 transition-all text-center"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={28} variant="solid" className="mb-2" />
                <span className="font-heading font-semibold text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
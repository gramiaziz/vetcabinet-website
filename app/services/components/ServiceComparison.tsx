import Icon from '@/components/ui/AppIcon';

interface ServiceComparisonProps {
  currentLanguage: 'fr' | 'ar';
}

interface ComparisonFeature {
  nameFr: string;
  nameAr: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const ServiceComparison = ({ currentLanguage }: ServiceComparisonProps) => {
  const packages = [
    {
      nameFr: 'Basique',
      nameAr: 'أساسي',
      priceFr: '50 TND/mois',
      priceAr: '50 دينار/شهر',
      color: 'bg-muted',
      textColor: 'text-foreground',
    },
    {
      nameFr: 'Standard',
      nameAr: 'قياسي',
      priceFr: '120 TND/mois',
      priceAr: '120 دينار/شهر',
      color: 'gradient-primary',
      textColor: 'text-white',
      popular: true,
    },
    {
      nameFr: 'Premium',
      nameAr: 'مميز',
      priceFr: '200 TND/mois',
      priceAr: '200 دينار/شهر',
      color: 'bg-trust',
      textColor: 'text-white',
    },
  ];

  const features: ComparisonFeature[] = [
    {
      nameFr: 'Consultations mensuelles',
      nameAr: 'استشارات شهرية',
      basic: true,
      standard: true,
      premium: true,
    },
    {
      nameFr: 'Vaccinations incluses',
      nameAr: 'تطعيمات مشمولة',
      basic: false,
      standard: true,
      premium: true,
    },
    {
      nameFr: 'Urgences 24/7',
      nameAr: 'طوارئ 24/7',
      basic: false,
      standard: true,
      premium: true,
    },
    {
      nameFr: 'Toilettage gratuit',
      nameAr: 'عناية مجانية',
      basic: false,
      standard: false,
      premium: true,
    },
    {
      nameFr: 'Pension prioritaire',
      nameAr: 'إقامة ذات أولوية',
      basic: false,
      standard: false,
      premium: true,
    },
    {
      nameFr: 'Suivi nutritionnel',
      nameAr: 'متابعة غذائية',
      basic: false,
      standard: false,
      premium: true,
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              {currentLanguage === 'fr' ? 'Comparez Nos Forfaits' : 'قارن باقاتنا'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLanguage === 'fr' ?'Choisissez le forfait qui correspond le mieux aux besoins de votre animal' :'اختر الباقة التي تناسب احتياجات حيوانك الأليف'}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-card shadow-card overflow-hidden">
            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-6 text-left">
                      <span className="font-heading font-semibold text-lg text-foreground">
                        {currentLanguage === 'fr' ? 'Fonctionnalités' : 'المميزات'}
                      </span>
                    </th>
                    {packages.map((pkg, index) => (
                      <th key={index} className="p-6 text-center relative">
                        {pkg.popular && (
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                              {currentLanguage === 'fr' ? 'Populaire' : 'الأكثر شعبية'}
                            </span>
                          </div>
                        )}
                        <div className={`inline-block px-6 py-3 ${pkg.color} ${pkg.textColor} rounded-button mb-2`}>
                          <p className="font-heading font-bold text-lg">
                            {currentLanguage === 'fr' ? pkg.nameFr : pkg.nameAr}
                          </p>
                          <p className="text-sm opacity-90">
                            {currentLanguage === 'fr' ? pkg.priceFr : pkg.priceAr}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                      <td className="p-6">
                        <span className="text-foreground font-medium">
                          {currentLanguage === 'fr' ? feature.nameFr : feature.nameAr}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        {feature.basic ? (
                          <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" variant="solid" />
                        ) : (
                          <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto opacity-30" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {feature.standard ? (
                          <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" variant="solid" />
                        ) : (
                          <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto opacity-30" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {feature.premium ? (
                          <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" variant="solid" />
                        ) : (
                          <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto opacity-30" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-6 p-6">
              {packages.map((pkg, pkgIndex) => (
                <div key={pkgIndex} className="bg-background rounded-button p-6 relative">
                  {pkg.popular && (
                    <div className="absolute top-0 right-4 transform -translate-y-1/2">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                        {currentLanguage === 'fr' ? 'Populaire' : 'الأكثر شعبية'}
                      </span>
                    </div>
                  )}
                  <div className={`inline-block px-6 py-3 ${pkg.color} ${pkg.textColor} rounded-button mb-4`}>
                    <p className="font-heading font-bold text-lg">
                      {currentLanguage === 'fr' ? pkg.nameFr : pkg.nameAr}
                    </p>
                    <p className="text-sm opacity-90">
                      {currentLanguage === 'fr' ? pkg.priceFr : pkg.priceAr}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {features.map((feature, featureIndex) => {
                      const hasFeature = pkgIndex === 0 ? feature.basic : pkgIndex === 1 ? feature.standard : feature.premium;
                      return (
                        <li key={featureIndex} className="flex items-center gap-3">
                          {hasFeature ? (
                            <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" variant="solid" />
                          ) : (
                            <Icon name="XCircleIcon" size={20} className="text-muted-foreground opacity-30 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${hasFeature ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                            {currentLanguage === 'fr' ? feature.nameFr : feature.nameAr}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-4 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive"
            >
              {currentLanguage === 'fr' ? 'Choisir Mon Forfait' : 'اختر باقتي'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
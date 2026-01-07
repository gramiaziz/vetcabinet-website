interface GoogleMapSectionProps {
  currentLanguage: 'fr' | 'ar';
}

export default function GoogleMapSection({ currentLanguage }: GoogleMapSectionProps) {
  return (
    <div className="bg-card rounded-card overflow-hidden shadow-card">
      <div className="p-6 border-b border-border">
        <h2 className="font-heading font-bold text-2xl text-foreground">
          {currentLanguage === 'fr' ? 'Notre Localisation' : 'موقعنا'}
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          {currentLanguage === 'fr' ?'Avenue Habib Bourguiba, Manouba 2010, Tunisie' :'شارع الحبيب بورقيبة، منوبة 2010، تونس'}
        </p>
      </div>
      <div className="relative w-full h-96">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Animaux D'Abord Veterinary Clinic Location"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=36.8065,10.0955&z=15&output=embed"
          className="border-0"
        />
      </div>
    </div>
  );
}
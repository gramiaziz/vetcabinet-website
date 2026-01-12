import Icon from '@/components/ui/AppIcon';

interface ClinicHoursCardProps {
  currentLanguage: 'fr' | 'ar';
}

interface HoursSchedule {
  day: string;
  dayAr: string;
  hours: string;
  hoursAr: string;
  isEmergency?: boolean;
}

export default function ClinicHoursCard({ currentLanguage }: ClinicHoursCardProps) {
  const schedule: HoursSchedule[] = [
    { day: "Lundi - Vendredi", dayAr: "الاثنين - الجمعة", hours: "08:00 - 18:00", hoursAr: "08:00 - 18:00" },
    { day: "Samedi", dayAr: "السبت", hours: "09:00 - 14:00", hoursAr: "09:00 - 14:00" },
    { day: "Dimanche", dayAr: "الأحد", hours: "Fermé", hoursAr: "مغلق" },
    { day: "Urgences", dayAr: "الطوارئ", hours: "24/7 Disponible", hoursAr: "متاح 24/7", isEmergency: true }
  ];

  return (
    <div className="bg-card rounded-card p-6 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-button flex items-center justify-center">
          <Icon name="ClockIcon" size={24} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-foreground">
          {currentLanguage === 'fr' ? 'Horaires d\'Ouverture' : 'ساعات العمل'}
        </h3>
      </div>

      <div className="gap-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between py-3 border-b border-border last:border-0 ${
              item.isEmergency ? 'bg-error/10 -mx-6 px-6 rounded-button' : ''
            }`}
          >
            <span className={`font-medium ${item.isEmergency ? 'text-error' : 'text-foreground'}`}>
              {currentLanguage === 'fr' ? item.day : item.dayAr}
            </span>
            <span className={`font-semibold ${item.isEmergency ? 'text-error' : 'text-muted-foreground'}`}>
              {currentLanguage === 'fr' ? item.hours : item.hoursAr}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-muted rounded-button">
        <p className="text-sm text-muted-foreground text-center">
          {currentLanguage === 'fr' ?'Pour les urgences en dehors des heures d\'ouverture, appelez notre ligne d\'urgence 24/7' :'للطوارئ خارج ساعات العمل، اتصل بخط الطوارئ لدينا على مدار الساعة'}
        </p>
      </div>
    </div>
  );
}
import Icon from '@/components/ui/AppIcon';

interface EmergencyContactSectionProps {
  currentLanguage: 'fr' | 'ar';
}

interface EmergencyContact {
  type: string;
  icon: string;
  title: string;
  titleAr: string;
  number: string;
  description: string;
  descriptionAr: string;
  href: string;
  color: string;
}

export default function EmergencyContactSection({ currentLanguage }: EmergencyContactSectionProps) {
  const emergencyContacts: EmergencyContact[] = [
    {
      type: "phone",
      icon: "PhoneIcon",
      title: "Urgence Téléphone",
      titleAr: "هاتف الطوارئ",
      number: "+216 94 273 313",
      description: "Disponible 24h/24, 7j/7",
      descriptionAr: "متاح على مدار الساعة طوال أيام الأسبوع",
      href: "tel:+21612345678",
      color: "bg-error"
    },
    {
      type: "whatsapp",
      icon: "ChatBubbleLeftRightIcon",
      title: "WhatsApp Urgence",
      titleAr: "واتساب الطوارئ",
      number: "+216 94 273 313",
      description: "Réponse rapide garantie",
      descriptionAr: "استجابة سريعة مضمونة",
      href: "https://wa.me/21612345678?text=Urgence%20vétérinaire",
      color: "bg-whatsapp"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-error/10 to-error/5 rounded-card p-8 shadow-emergency border-2 border-error/20">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="w-16 h-16 bg-error rounded-full flex items-center justify-center animate-pulse-emergency">
          <Icon name="ExclamationTriangleIcon" size={32} className="text-white" variant="solid" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-2xl text-error">
            {currentLanguage === 'fr' ? 'Urgences 24/7' : 'طوارئ 24/7'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {currentLanguage === 'fr' ? 'Nous sommes là pour votre animal' : 'نحن هنا من أجل حيوانك'}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {emergencyContacts.map((contact) => (
          <a
            key={contact.type}
            href={contact.href}
            target={contact.type === 'whatsapp' ? '_blank' : undefined}
            rel={contact.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
            className={`${contact.color} text-white rounded-button p-6 hover:scale-105 transition-all shadow-interactive`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Icon name={contact.icon as any} size={24} variant="solid" />
              <h3 className="font-heading font-semibold text-lg">
                {currentLanguage === 'fr' ? contact.title : contact.titleAr}
              </h3>
            </div>
            <p className="text-2xl font-bold mb-2">{contact.number}</p>
            <p className="text-sm opacity-90">
              {currentLanguage === 'fr' ? contact.description : contact.descriptionAr}
            </p>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-button p-4">
        <div className="flex items-start space-x-3">
          <Icon name="InformationCircleIcon" size={20} className="text-error flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            {currentLanguage === 'fr' ? "En cas d'urgence vitale, contactez-nous immédiatement. Notre équipe vétérinaire est disponible 24h/24 pour prendre en charge votre animal dans les plus brefs délais." :"في حالة الطوارئ الحيوية، اتصل بنا على الفور. فريقنا البيطري متاح على مدار الساعة لرعاية حيوانك في أسرع وقت ممكن."}
          </p>
        </div>
      </div>
    </div>
  );
}
import Icon from '@/components/ui/AppIcon';

interface ContactMethodCardProps {
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  action: string;
  actionAr: string;
  href: string;
  color: string;
  currentLanguage: 'fr' | 'ar';
}

export default function ContactMethodCard({
  icon,
  title,
  titleAr,
  description,
  descriptionAr,
  action,
  actionAr,
  href,
  color,
  currentLanguage
}: ContactMethodCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group bg-card rounded-card p-6 shadow-card hover:shadow-interactive transition-all hover:scale-105"
    >
      <div className={`w-14 h-14 ${color} rounded-button flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon name={icon as any} size={28} className="text-white" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
        {currentLanguage === 'fr' ? title : titleAr}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {currentLanguage === 'fr' ? description : descriptionAr}
      </p>
      <span className={`inline-flex items-center space-x-2 font-medium text-sm ${color.replace('bg-', 'text-')} group-hover:underline`}>
        <span>{currentLanguage === 'fr' ? action : actionAr}</span>
        <Icon name="ArrowRightIcon" size={16} />
      </span>
    </a>
  );
}
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  currentLanguage: 'fr' | 'ar';
}

const Footer = ({ currentLanguage }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { labelFr: 'Consultation', labelAr: 'استشارة', href: '/services' },
      { labelFr: 'Vaccination', labelAr: 'التطعيم', href: '/services' },
      { labelFr: 'Chirurgie', labelAr: 'الجراحة', href: '/services' },
      { labelFr: 'Urgences 24/7', labelAr: 'طوارئ 24/7', href: '/contact' }
    ],
    company: [
      { labelFr: 'À Propos', labelAr: 'من نحن', href: '/about' },
      { labelFr: 'Témoignages', labelAr: 'الشهادات', href: '/testimonials' },
      { labelFr: 'Ressources', labelAr: 'الموارد', href: '/resources' },
      { labelFr: 'Contact', labelAr: 'اتصل', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
    { icon: 'whatsapp', href: 'https://wa.me/21612345678', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-trust text-trust-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="50%" stopColor="#F7931E" />
                      <stop offset="100%" stopColor="#FF69B4" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="22" fill="url(#footerLogoGradient)" opacity="0.2" />
                  <path d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8ZM24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12Z" fill="url(#footerLogoGradient)" />
                  <path d="M18 22C19.105 22 20 21.105 20 20C20 18.895 19.105 18 18 18C16.895 18 16 18.895 16 20C16 21.105 16.895 22 18 22Z" fill="url(#footerLogoGradient)" />
                  <path d="M30 22C31.105 22 32 21.105 32 20C32 18.895 31.105 18 30 18C28.895 18 28 18.895 28 20C28 21.105 28.895 22 30 22Z" fill="url(#footerLogoGradient)" />
                  <path d="M24 32C27.314 32 30 29.314 30 26H18C18 29.314 20.686 32 24 32Z" fill="url(#footerLogoGradient)" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  ANIMAUX D&apos;ABORD
                </span>
                <span className="text-xs opacity-80">
                  {currentLanguage === 'fr' ? 'Clinique Vétérinaire' : 'عيادة بيطرية'}
                </span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {currentLanguage === 'fr' ?'Votre partenaire de confiance pour la santé et le bien-être de vos animaux à Manouba.' :'شريكك الموثوق لصحة ورفاهية حيواناتك في منوبة.'}
            </p>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="StarIcon" size={16} className="text-gold" variant="solid" />
              ))}
              <span className="text-sm font-semibold ml-2">5.0 (122 {currentLanguage === 'fr' ? 'avis' : 'تقييم'})</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              {currentLanguage === 'fr' ? 'Services' : 'الخدمات'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all inline-flex items-center space-x-2 group"
                  >
                    <Icon name="ChevronRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{currentLanguage === 'fr' ? link.labelFr : link.labelAr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              {currentLanguage === 'fr' ? 'Entreprise' : 'الشركة'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all inline-flex items-center space-x-2 group"
                  >
                    <Icon name="ChevronRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{currentLanguage === 'fr' ? link.labelFr : link.labelAr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              {currentLanguage === 'fr' ? 'Contact' : 'اتصل'}
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+21612345678"
                className="flex items-start space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
              >
                <Icon name="PhoneIcon" size={18} className="text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+216 94 273 313</span>
              </a>
              <a
                href="mailto:contact@animauxdabord.tn"
                className="flex items-start space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
              >
                <Icon name="EnvelopeIcon" size={18} className="text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span>contact@animauxdabord.tn</span>
              </a>
              <div className="flex items-start space-x-3 text-sm opacity-80">
                <Icon name="MapPinIcon" size={18} className="text-primary mt-0.5" />
                <span>
                  {currentLanguage === 'fr' ?'Rue de la Santé, Manouba 2010, Tunisie' :'شارع الصحة، منوبة 2010، تونس'}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-heading font-semibold text-sm mb-3">
                {currentLanguage === 'fr' ? 'Suivez-nous' : 'تابعنا'}
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-button bg-white/10 hover:bg-primary transition-all flex items-center justify-center group"
                  aria-label="Facebook"
                >
                  <Icon name="ShareIcon" size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-button bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                  aria-label="Instagram"
                >
                  <Icon name="CameraIcon" size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/21694273313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-button bg-white/10 hover:bg-whatsapp transition-all flex items-center justify-center group"
                  aria-label="WhatsApp"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm opacity-80 text-center md:text-left">
              &copy; {currentYear} ANIMAUX D&apos;ABORD. {currentLanguage === 'fr' ? 'Tous droits réservés.' : 'جميع الحقوق محفوظة.'}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                {currentLanguage === 'fr' ? 'Confidentialité' : 'الخصوصية'}
              </Link>
              <Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
                {currentLanguage === 'fr' ? 'Conditions' : 'الشروط'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
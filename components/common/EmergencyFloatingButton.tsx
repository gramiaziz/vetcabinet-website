'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencyFloatingButtonProps {
  className?: string;
}

const EmergencyFloatingButton = ({ className = '' }: EmergencyFloatingButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const emergencyContacts = [
    {
      type: 'phone',
      label: 'Appeler',
      labelAr: 'اتصل',
      icon: 'PhoneIcon',
      href: 'tel:+21694273313',
      color: 'bg-error hover:bg-error/90',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      labelAr: 'واتساب',
      icon: 'ChatBubbleLeftRightIcon',
      href: 'https://wa.me/21694273313?text=Urgence%20vétérinaire',
      color: 'bg-whatsapp hover:bg-whatsapp/90',
    },
    {
      type: 'location',
      label: 'Directions',
      labelAr: 'الاتجاهات',
      icon: 'MapPinIcon',
      href: 'https://www.google.com/maps/place/ANIMAUX+D\'ABORD+Cabinet+V%C3%A9t%C3%A9rinaire+Manouba+%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9+%D8%A8%D9%85%D9%86%D9%88%D8%A8%D8%A9%E2%80%AD/@36.8054382,10.1031233,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd330007604f6b:0xe07d665a602886a8!8m2!3d36.8054382!4d10.1056982!16s%2Fg%2F11m75dxc9s?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D',
      color: 'bg-primary hover:bg-primary/90',
    },
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Expanded Contact Options */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 flex flex-col space-y-3 mb-2 animate-in slide-in-from-bottom-4 duration-300">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.href}
              target={contact.type === 'location' || contact.type === 'whatsapp' ? '_blank' : undefined}
              rel={contact.type === 'location' || contact.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className={`flex items-center space-x-3 px-4 py-3 ${contact.color} text-white rounded-button shadow-interactive transition-all hover:scale-105`}
            >
              <Icon name={contact.icon as any} size={20} />
              <span className="font-heading font-semibold text-sm whitespace-nowrap">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Main Emergency Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-error text-white rounded-full shadow-emergency hover:shadow-interactive transition-all hover:scale-110 animate-pulse-emergency flex items-center justify-center"
        aria-label="Emergency contact options"
      >
        <Icon 
          name={isExpanded ? 'XMarkIcon' : 'ExclamationTriangleIcon'} 
          size={28} 
          variant="solid"
        />
      </button>

      {/* Pulse Ring Effect */}
      <div className="absolute inset-0 rounded-full bg-error opacity-20 animate-ping pointer-events-none" />
    </div>
  );
};

export default EmergencyFloatingButton;
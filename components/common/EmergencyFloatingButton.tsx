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
      href: 'tel:+21612345678',
      color: 'bg-error hover:bg-error/90',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      labelAr: 'واتساب',
      icon: 'ChatBubbleLeftRightIcon',
      href: 'https://wa.me/21612345678?text=Urgence%20vétérinaire',
      color: 'bg-whatsapp hover:bg-whatsapp/90',
    },
    {
      type: 'location',
      label: 'Directions',
      labelAr: 'الاتجاهات',
      icon: 'MapPinIcon',
      href: 'https://maps.google.com/?q=Manouba,Tunisia',
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
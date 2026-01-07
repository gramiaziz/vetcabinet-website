'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  currentLanguage: 'fr' | 'ar';
}

const BookingModal = ({ isOpen, onClose, serviceId, currentLanguage }: BookingModalProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    animalType: '',
    animalName: '',
    date: '',
    time: '',
    message: '',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(currentLanguage === 'fr' ?'Rendez-vous confirmé ! Nous vous contacterons bientôt.' :'تم تأكيد الموعد! سنتصل بك قريبًا.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isHydrated) {
    return null;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card rounded-card shadow-interactive max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
        {/* Modal Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="font-heading font-bold text-2xl text-foreground">
            {currentLanguage === 'fr' ? 'Réserver un Rendez-vous' : 'حجز موعد'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-button transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-foreground" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              {currentLanguage === 'fr' ? 'Vos Informations' : 'معلوماتك'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Nom complet' : 'الاسم الكامل'} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder={currentLanguage === 'fr' ? 'Jean Dupont' : 'أحمد محمد'}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Téléphone' : 'الهاتف'} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+216 12 345 678"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>
          </div>

          {/* Animal Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              {currentLanguage === 'fr' ? 'Informations sur l\'Animal' : 'معلومات الحيوان'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="animalType" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Type d\'animal' : 'نوع الحيوان'} *
                </label>
                <select
                  id="animalType"
                  name="animalType"
                  required
                  value={formData.animalType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">
                    {currentLanguage === 'fr' ? 'Sélectionner' : 'اختر'}
                  </option>
                  <option value="chien">{currentLanguage === 'fr' ? 'Chien' : 'كلب'}</option>
                  <option value="chat">{currentLanguage === 'fr' ? 'Chat' : 'قطة'}</option>
                  <option value="oiseau">{currentLanguage === 'fr' ? 'Oiseau' : 'طائر'}</option>
                  <option value="lapin">{currentLanguage === 'fr' ? 'Lapin' : 'أرنب'}</option>
                  <option value="autre">{currentLanguage === 'fr' ? 'Autre' : 'آخر'}</option>
                </select>
              </div>
              <div>
                <label htmlFor="animalName" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Nom de l\'animal' : 'اسم الحيوان'} *
                </label>
                <input
                  type="text"
                  id="animalName"
                  name="animalName"
                  required
                  value={formData.animalName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder={currentLanguage === 'fr' ? 'Max' : 'ماكس'}
                />
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              {currentLanguage === 'fr' ? 'Date et Heure' : 'التاريخ والوقت'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Date' : 'التاريخ'} *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'fr' ? 'Heure' : 'الوقت'} *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">
                    {currentLanguage === 'fr' ? 'Sélectionner' : 'اختر'}
                  </option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Message (optionnel)' : 'رسالة (اختياري)'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder={currentLanguage === 'fr' ?'Décrivez brièvement la raison de votre visite...' :'صف بإيجاز سبب زيارتك...'}
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-4 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive"
            >
              {currentLanguage === 'fr' ? 'Confirmer le Rendez-vous' : 'تأكيد الموعد'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-muted text-foreground font-heading font-semibold rounded-button hover:bg-muted/80 transition-all"
            >
              {currentLanguage === 'fr' ? 'Annuler' : 'إلغاء'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
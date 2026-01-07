'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';





interface ContactFormSectionProps {
  currentLanguage: 'fr' | 'ar';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  petType: string;
  petName: string;
  appointmentDate: string;
  appointmentTime: string;
  message: string;
}

export default function ContactFormSection({ currentLanguage }: ContactFormSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    petType: '',
    petName: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-card p-8 shadow-card">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const petTypes = [
    { value: 'chien', label: 'Chien', labelAr: 'كلب' },
    { value: 'chat', label: 'Chat', labelAr: 'قطة' },
    { value: 'lapin', label: 'Lapin', labelAr: 'أرنب' },
    { value: 'oiseau', label: 'Oiseau', labelAr: 'طائر' },
    { value: 'autre', label: 'Autre', labelAr: 'آخر' }
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, currentLanguage }),
    });

    const json = await res.json();
    if (!json.ok) throw new Error(json.error || "Failed");

    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      petType: "",
      petName: "",
      appointmentDate: "",
      appointmentTime: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  }
};

  return (
    <div className="bg-card rounded-card p-8 shadow-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent rounded-button flex items-center justify-center">
          <Icon name="CalendarIcon" size={24} className="text-white" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-2xl text-foreground">
            {currentLanguage === 'fr' ? 'Prendre Rendez-vous' : 'حجز موعد'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {currentLanguage === 'fr' ? 'Remplissez le formulaire ci-dessous' : 'املأ النموذج أدناه'}
          </p>
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-button flex items-start space-x-3">
          <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0" variant="solid" />
          <div>
            <p className="font-semibold text-success mb-1">
              {currentLanguage === 'fr' ? 'Demande envoyée avec succès!' : 'تم إرسال الطلب بنجاح!'}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentLanguage === 'fr' ?'Nous vous contacterons dans les 24 heures pour confirmer votre rendez-vous.' :'سنتصل بك خلال 24 ساعة لتأكيد موعدك.'}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Nom complet *' : 'الاسم الكامل *'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder={currentLanguage === 'fr' ? 'Votre nom' : 'اسمك'}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Email *' : 'البريد الإلكتروني *'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder={currentLanguage === 'fr' ? 'votre@email.com' : 'your@email.com'}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Téléphone *' : 'الهاتف *'}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="+216 XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="petType" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Type d\'animal *' : 'نوع الحيوان *'}
            </label>
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            >
              <option value="">
                {currentLanguage === 'fr' ? 'Sélectionner' : 'اختر'}
              </option>
              {petTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {currentLanguage === 'fr' ? type.label : type.labelAr}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="petName" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Nom de l\'animal' : 'اسم الحيوان'}
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder={currentLanguage === 'fr' ? 'Nom de votre animal' : 'اسم حيوانك'}
            />
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Date souhaitée *' : 'التاريخ المطلوب *'}
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-foreground mb-2">
              {currentLanguage === 'fr' ? 'Heure souhaitée *' : 'الوقت المطلوب *'}
            </label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            >
              <option value="">
                {currentLanguage === 'fr' ? 'Sélectionner' : 'اختر'}
              </option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            {currentLanguage === 'fr' ? 'Message / Raison de la visite' : 'الرسالة / سبب الزيارة'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-input rounded-button focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
            placeholder={currentLanguage === 'fr' ?'Décrivez brièvement la raison de votre visite...' :'صف بإيجاز سبب زيارتك...'}
          />
        </div>

        <div className="flex items-start space-x-3 p-4 bg-muted rounded-button">
          <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            {currentLanguage === 'fr' ?'Votre demande sera traitée dans les 24 heures. Pour les urgences, veuillez nous contacter directement par téléphone.' :'سيتم معالجة طلبك خلال 24 ساعة. للطوارئ، يرجى الاتصال بنا مباشرة عبر الهاتف.'}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-interactive disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
              <span>{currentLanguage === 'fr' ? 'Envoi en cours...' : 'جاري الإرسال...'}</span>
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={20} />
              <span>{currentLanguage === 'fr' ? 'Envoyer la demande' : 'إرسال الطلب'}</span>
            </>
          )}
         

        </button>
        {submitStatus === "error" && (
  <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-button">
    <p className="font-semibold text-destructive">
      {currentLanguage === "fr"
        ? "Erreur d'envoi. Réessayez."
        : "حدث خطأ أثناء الإرسال. حاول مرة أخرى."}
    </p>
  </div>
)}

      </form>
    </div>
  );
}
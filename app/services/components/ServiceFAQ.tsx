'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceFAQProps {
  currentLanguage: 'fr' | 'ar';
}

interface FAQItem {
  questionFr: string;
  questionAr: string;
  answerFr: string;
  answerAr: string;
  category: string;
}

const ServiceFAQ = ({ currentLanguage }: ServiceFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', nameFr: 'Tout', nameAr: 'الكل' },
    { id: 'vaccination', nameFr: 'Vaccination', nameAr: 'التطعيم' },
    { id: 'consultation', nameFr: 'Consultation', nameAr: 'الاستشارة' },
    { id: 'chirurgie', nameFr: 'Chirurgie', nameAr: 'الجراحة' },
    { id: 'urgence', nameFr: 'Urgences', nameAr: 'الطوارئ' },
  ];

  const faqs: FAQItem[] = [
    {
      questionFr: 'Quand dois-je vacciner mon animal ?',
      questionAr: 'متى يجب أن أطعم حيواني الأليف؟',
      answerFr: 'Les chiots et chatons doivent recevoir leur première série de vaccins entre 6 et 8 semaines. Les rappels sont nécessaires tous les ans pour maintenir une protection optimale. Nous établissons un calendrier personnalisé selon l\'âge et les besoins de votre animal.',
      answerAr: 'يجب أن تتلقى الجراء والقطط الصغيرة أول سلسلة من اللقاحات بين 6 و 8 أسابيع. التعزيزات ضرورية كل عام للحفاظ على الحماية المثلى. نقوم بإنشاء جدول مخصص حسب عمر واحتياجات حيوانك الأليف.',
      category: 'vaccination',
    },
    {
      questionFr: 'Combien coûte une consultation ?',
      questionAr: 'كم تكلفة الاستشارة؟',
      answerFr: 'Une consultation standard coûte 50 TND. Les consultations spécialisées (dermatologie, cardiologie) sont à 80 TND. Les urgences hors horaires ont un supplément de 30 TND. Tous nos tarifs incluent un examen complet et des recommandations détaillées.',
      answerAr: 'تكلف الاستشارة القياسية 50 دينارًا. الاستشارات المتخصصة (الأمراض الجلدية، أمراض القلب) تكلف 80 دينارًا. الطوارئ خارج ساعات العمل لها رسوم إضافية قدرها 30 دينارًا. جميع أسعارنا تشمل فحصًا كاملاً وتوصيات مفصلة.',
      category: 'consultation',
    },
    {
      questionFr: 'Quels types de chirurgies proposez-vous ?',
      questionAr: 'ما أنواع الجراحات التي تقدمونها؟',
      answerFr: 'Nous réalisons des chirurgies de routine (stérilisation, castration) et des interventions plus complexes (chirurgie orthopédique, ablation de tumeurs). Toutes nos chirurgies sont effectuées sous anesthésie générale avec monitoring complet et suivi post-opératoire rigoureux.',
      answerAr: 'نقوم بإجراء عمليات جراحية روتينية (التعقيم، الإخصاء) وتدخلات أكثر تعقيدًا (جراحة العظام، إزالة الأورام). جميع عملياتنا الجراحية تتم تحت التخدير العام مع مراقبة كاملة ومتابعة صارمة بعد العملية.',
      category: 'chirurgie',
    },
    {
      questionFr: 'Que faire en cas d\'urgence ?',
      questionAr: 'ماذا أفعل في حالة الطوارئ؟',
      answerFr: 'Contactez-nous immédiatement au +216 12 345 678 (disponible 24/7). En attendant, gardez votre animal au calme, évitez de lui donner à manger ou à boire, et notez tous les symptômes observés. Notre équipe vous guidera sur les premiers gestes à effectuer.',
      answerAr: 'اتصل بنا فورًا على +216 12 345 678 (متاح 24/7). في انتظار ذلك، احتفظ بحيوانك الأليف هادئًا، تجنب إعطائه الطعام أو الشراب، ولاحظ جميع الأعراض الملاحظة. سيرشدك فريقنا بشأن الإجراءات الأولى التي يجب اتخاذها.',
      category: 'urgence',
    },
    {
      questionFr: 'Proposez-vous des forfaits de soins ?',
      questionAr: 'هل تقدمون باقات رعاية؟',
      answerFr: 'Oui, nous proposons trois forfaits : Basique (50 TND/mois), Standard (120 TND/mois) et Premium (200 TND/mois). Chaque forfait inclut des consultations régulières, des vaccinations et différents services selon le niveau choisi. Économisez jusqu\'à 30% par rapport aux tarifs individuels.',
      answerAr: 'نعم، نقدم ثلاث باقات: أساسي (50 دينار/شهر)، قياسي (120 دينار/شهر) ومميز (200 دينار/شهر). تتضمن كل باقة استشارات منتظمة وتطعيمات وخدمات مختلفة حسب المستوى المختار. وفر حتى 30٪ مقارنة بالأسعار الفردية.',
      category: 'consultation',
    },
    {
      questionFr: 'Comment préparer mon animal pour une chirurgie ?',
      questionAr: 'كيف أحضر حيواني الأليف للجراحة؟',
      answerFr: 'Votre animal doit être à jeun 12 heures avant l\'intervention (eau autorisée jusqu\'à 2 heures avant). Apportez son carnet de vaccination à jour. Nous vous fournirons des instructions détaillées lors de la consultation pré-opératoire, incluant les soins post-opératoires nécessaires.',
      answerAr: 'يجب أن يكون حيوانك الأليف صائمًا لمدة 12 ساعة قبل التدخل (الماء مسموح حتى ساعتين قبل). أحضر دفتر التطعيم المحدث. سنزودك بتعليمات مفصلة أثناء الاستشارة قبل العملية، بما في ذلك الرعاية اللازمة بعد العملية.',
      category: 'chirurgie',
    },
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              {currentLanguage === 'fr' ? 'Questions Fréquentes' : 'الأسئلة الشائعة'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {currentLanguage === 'fr' ?'Trouvez rapidement les réponses à vos questions' :'اعثر بسرعة على إجابات لأسئلتك'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-button font-medium transition-all ${
                  activeCategory === category.id
                    ? 'gradient-primary text-white shadow-card'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {currentLanguage === 'fr' ? category.nameFr : category.nameAr}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-card shadow-card overflow-hidden transition-all hover:shadow-interactive"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="font-heading font-semibold text-lg text-foreground pr-4">
                    {currentLanguage === 'fr' ? faq.questionFr : faq.questionAr}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground leading-relaxed">
                      {currentLanguage === 'fr' ? faq.answerFr : faq.answerAr}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-muted rounded-card">
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              {currentLanguage === 'fr' ?'Vous ne trouvez pas votre réponse ?' :'لم تجد إجابتك؟'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {currentLanguage === 'fr' ?'Notre équipe est disponible pour répondre à toutes vos questions' :'فريقنا متاح للإجابة على جميع أسئلتك'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+21612345678"
                className="flex items-center space-x-2 px-6 py-3 gradient-primary text-white font-heading font-semibold rounded-button hover:gradient-primary-hover transition-all shadow-card"
              >
                <Icon name="PhoneIcon" size={20} />
                <span>{currentLanguage === 'fr' ? 'Appelez-nous' : 'اتصل بنا'}</span>
              </a>
              <a
                href="https://wa.me/21612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-whatsapp text-white font-heading font-semibold rounded-button hover:bg-whatsapp/90 transition-all shadow-card"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
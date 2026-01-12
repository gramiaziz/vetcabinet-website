import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EmergencyFloatingButton from '@/components/common/EmergencyFloatingButton';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Animaux D\'Abord - Contact & Localisation',
  description: 'Contactez la clinique vétérinaire Animaux D\'Abord à Manouba. Urgences 24/7, prise de rendez-vous, directions et informations pratiques. Service bilingue français-arabe.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <ContactInteractive />
        </div>
      </main>

      <EmergencyFloatingButton />

   
    </div>
  );
}
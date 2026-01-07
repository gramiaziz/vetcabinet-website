import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EmergencyFloatingButton from '@/components/common/EmergencyFloatingButton';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services Vétérinaires - Animaux D\'Abord',
  description: 'Découvrez nos services vétérinaires complets à Manouba : vaccination, consultation, chirurgie, ostéopathie, toilettage, médicaments et alimentation spécialisée. Soins de qualité avec urgences 24/7.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesInteractive />
      <EmergencyFloatingButton />
    </main>
  );
}
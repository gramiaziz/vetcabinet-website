import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EmergencyFloatingButton from '@/components/common/EmergencyFloatingButton';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact & Localisation - Animaux D\'Abord',
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

      {/* Footer */}
      <footer className="bg-trust text-trust-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-heading font-bold text-xl mb-4">ANIMAUX D&apos;ABORD</h3>
              <p className="text-sm opacity-80 mb-4">
                Clinique vétérinaire de confiance à Manouba, offrant des soins de qualité pour tous vos animaux de compagnie.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gold">★★★★★</span>
                <span className="opacity-80">5.0 (122 avis)</span>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/homepage" className="hover:text-primary transition-colors">Accueil</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">À Propos</a></li>
                <li><a href="/testimonials" className="hover:text-primary transition-colors">Témoignages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+216 12 345 678</li>
                <li>contact@animauxdabord.tn</li>
                <li>Manouba 2010, Tunisie</li>
                <li className="text-error font-semibold">Urgences 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-trust-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Animaux D&apos;Abord. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
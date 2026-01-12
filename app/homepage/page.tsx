import type { Metadata } from 'next';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Animaux D\'Abord - Accueil',
  description: 'Clinique vétérinaire moderne à Manouba avec urgences 24/7. Dr. Asma GNAOUI offre des soins complets pour vos animaux : consultation, vaccination, chirurgie, ostéopathie et plus.',
};

export default function Homepage() {
  return <HomepageInteractive />;
}
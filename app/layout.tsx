import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Animaux D\'Abord - Cabinet Vétérinaire ',
  description: 'Bienvenue chez Animaux D\'Abord, votre cabinet vétérinaire de confiance à Manouba. Nous offrons des soins complets pour vos animaux de compagnie, y compris des consultations, des urgences 24/7, des chirurgies et des services de bien-être. Notre équipe bilingue français-arabe est dédiée à la santé et au bonheur de vos animaux.',
   keywords: [
    'vétérinaire Manouba',
    'cabinet vétérinaire Tunis',
    'vétérinaire chiens chats',
    'urgences vétérinaires Tunis',
    'Dr Asma GNAOUI',
    'clinique vétérinaire Manouba',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
<LanguageProvider>{children}</LanguageProvider>
        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fanimauxd7474back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.12" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}

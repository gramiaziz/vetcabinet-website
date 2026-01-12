'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type currentLanguage = 'fr' | 'ar';

interface LanguageContextType {
  currentLanguage: currentLanguage;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<currentLanguage>('fr');

  // load once
  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage') as currentLanguage | null;
    if (saved) setCurrentLanguage(saved);
  }, []);

// sync + persist + global RTL helpers
useEffect(() => {
  localStorage.setItem('preferredLanguage', currentLanguage);

  const isRtl = currentLanguage === 'ar';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  // ✅ global class hooks
  document.documentElement.classList.toggle('rtl', isRtl);
  document.documentElement.classList.toggle('ltr', !isRtl);
}, [currentLanguage]);


  const toggleLang = () => {
    setCurrentLanguage(prev => (prev === 'fr' ? 'ar' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};

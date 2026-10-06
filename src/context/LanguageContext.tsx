import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, TranslationKey } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'ar_designbd_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'bn') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'bn'; // Default language: বাংলা as requested
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'bn' ? 'en' : 'bn');
  };

  // Sync document language attribute and dynamic document title for SEO
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'bn') {
      document.title = 'AR DesignBD | গ্রাফিক ডিজাইনার ও ডিজিটাল ক্রিয়েটর';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'AR DesignBD — আব্দুর রহিমের প্রফেশনাল গ্রাফিক ডিজাইন, ব্র্যান্ডিং, সোশ্যাল মিডিয়া ডিজাইন, ফটো এডিটিং ও ভিডিও এডিটিং সেবা।'
        );
      }
    } else {
      document.title = 'AR DesignBD | Graphic Designer & Digital Creative';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'AR DesignBD by Abdur Rahim — Professional graphic design, branding, social media design, photo editing and video editing services.'
        );
      }
    }
  }, [lang]);

  const t = translations[lang] as unknown as TranslationKey;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

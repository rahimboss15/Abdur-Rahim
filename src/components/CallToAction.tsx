import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';

export const CallToAction: React.FC = () => {
  const { lang, t } = useLanguage();

  const handleStartProject = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      lang === 'bn'
        ? 'আসসালামু আলাইকুম আব্দুর রহিম ভাই, আমি AR DesignBD থেকে একটি নতুন ডিজাইন প্রজেক্ট শুরু করতে চাই।'
        : 'Hello Abdur Rahim, I would like to discuss a design project with AR DesignBD.'
    );
    window.open(`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#0d0d12] relative border-t border-white/5 overflow-hidden">
      {/* Dramatic ambient gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9e1b32]/20 via-transparent to-[#dfb86c]/10 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#9e1b32]/20 blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#dfb86c] mb-6">
          <span>AR DESIGNBD</span>
          <span>·</span>
          <span>{t.cta.subtitle}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {t.cta.heading}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {t.cta.text}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleStartProject}
            className="px-7 py-4 rounded-md text-sm font-bold text-white bg-gradient-to-r from-[#9e1b32] to-[#7f1325] hover:from-[#be1b3b] hover:to-[#9e1b32] border border-[#f43f5e]/30 shadow-xl shadow-[#9e1b32]/30 transition-all duration-200 flex items-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            <span>{t.cta.button}</span>
            <ArrowRight className="w-4 h-4 text-[#dfb86c] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={openWhatsApp}
            className="px-6 py-4 rounded-md text-sm font-semibold text-neutral-200 hover:text-white bg-[#14141e] hover:bg-[#1a1a26] border border-white/10 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t.cta.whatsappDirect} ({brandConfig.contact.whatsappDisplay})</span>
          </button>
        </div>

      </div>
    </section>
  );
};

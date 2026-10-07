import React from 'react';
import { ArrowUp, Heart, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';
import { servicesData } from '../data/servicesData';
import { ARLogo } from './ARLogo';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info with Official Medallion */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <ARLogo size="sm" showText={false} />
              <span className="font-extrabold text-xl text-white tracking-tight">
                {brandConfig.brandName}
              </span>
            </div>

            <p className="text-white font-medium text-sm">
              {t.footer.brandTagline}
            </p>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {t.footer.shortBio}
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141d] hover:bg-[#25D366]/20 hover:text-[#25D366] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp: 01923057893"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="w-8 h-8 rounded-lg bg-[#14141d] hover:bg-[#9e1b32]/20 hover:text-[#f43f5e] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
                title={`Email: ${brandConfig.contact.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={brandConfig.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141d] hover:bg-[#1877F2]/20 hover:text-[#1877F2] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                title="Facebook: Abrgaraphic"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={brandConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141d] hover:bg-[#0a66c2]/20 hover:text-[#0a66c2] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn: rubelboss2"
              >
                <span className="font-bold text-xs">in</span>
              </a>

              <a
                href={brandConfig.contact.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141d] hover:bg-[#0057ff]/20 hover:text-[#0057ff] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Behance"
              >
                <span className="font-bold text-xs">Bē</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold tracking-wider text-xs uppercase font-mono">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('#about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('#services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('#portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.portfolio}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('#skills')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.skills}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('#contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold tracking-wider text-xs uppercase font-mono">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2">
              {servicesData.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {lang === 'bn' ? s.title.bn : s.title.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-semibold tracking-wider text-xs uppercase font-mono">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2 text-neutral-400">
              <p className="text-white font-medium">
                {lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en}
              </p>
              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-300 hover:text-[#25D366] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-mono">{brandConfig.contact.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#dfb86c]" />
                <span className="font-mono">{brandConfig.contact.email}</span>
              </a>
              <p className="text-xs text-neutral-400">
                {lang === 'bn' ? brandConfig.contact.location.bn : brandConfig.contact.location.en}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-neutral-400">
              {t.footer.copyright}
            </p>
            <p className="text-[#dfb86c] font-medium text-[11px]">
              {t.footer.designedBy}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14141d] hover:bg-[#1a1a26] text-neutral-300 hover:text-white border border-white/5 transition-colors cursor-pointer text-xs"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

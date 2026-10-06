import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';
import { ARLogo } from './ARLogo';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-[#0a0a0c]/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* ZONE 1: Brand Wordmark with Official AR Designbd Medallion Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group select-none"
            aria-label="AR DesignBD Home"
          >
            <ARLogo size="sm" showText={false} />
            <span className="font-extrabold text-xl tracking-tight text-white transition-colors group-hover:text-[#dfb86c]">
              {brandConfig.brandName}
            </span>
          </a>

          {/* ZONE 2: Clean 4-6 Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#dfb86c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ZONE 3: Language Switcher & Primary Action */}
          <div className="flex items-center gap-3">
            {/* Bilingual Switcher (বাংলা | English) */}
            <div
              className="flex items-center bg-[#15151e] border border-white/10 rounded-md p-0.5 text-xs font-medium"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  lang === 'bn'
                    ? 'bg-[#9e1b32] text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="বাংলা ভাষায় দেখুন"
              >
                বাংলা
              </button>
              <span className="text-neutral-600 px-0.5 select-none">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-[#9e1b32] text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="View in English"
              >
                English
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold text-white bg-gradient-to-r from-[#9e1b32] to-[#7f1325] hover:from-[#b91c38] hover:to-[#9e1b32] border border-[#f43f5e]/30 shadow-md transition-all duration-200 whitespace-nowrap"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#dfb86c]" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#dfb86c]"
              aria-label={mobileMenuOpen ? t.nav.mobileMenuClose : t.nav.mobileMenuOpen}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0d0d12]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-neutral-200 hover:bg-white/5 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            {/* Mobile Language Selection */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#161622] rounded-lg border border-white/5">
              <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#dfb86c]" />
                <span>ভাষা / Language</span>
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setLang('bn')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    lang === 'bn' ? 'bg-[#9e1b32] text-white' : 'text-neutral-400'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    lang === 'en' ? 'bg-[#9e1b32] text-white' : 'text-neutral-400'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-white bg-[#9e1b32] hover:bg-[#b91c38] transition-colors shadow-lg"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4 text-[#dfb86c]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

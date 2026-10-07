import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2, ChevronRight, Palette, Layers, Award, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';
import { ArtworkVisual } from './ArtworkVisual';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroPhoto = (() => {
    try {
      const custom = localStorage.getItem('ar_designbd_custom_profile');
      if (custom && (custom.startsWith('data:image') || custom.startsWith('http'))) {
        return custom;
      }
    } catch {
      // ignore
    }
    return brandConfig.images.profileImage;
  })();

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#0a0a0c] overflow-hidden">
      {/* Ambient background glows with Burgundy & Gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#9e1b32]/15 via-[#dfb86c]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9e1b32]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#dfb86c]/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Editorial Small Kicker / Brand Label (Anti-slop: clean text with separator) */}
            <div className="flex items-center gap-3 text-xs tracking-wider">
              <span className="font-mono uppercase font-bold text-[#dfb86c]">
                {t.hero.smallLabel}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400 font-medium">
                {lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.hero.availableBadge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              {lang === 'bn' ? (
                <>
                  <span className="text-white">আব্দুর রহিম</span>{' '}
                  <span className="crimson-gradient-text">ডিজাইন ঘর</span>
                </>
              ) : (
                <>
                  <span className="text-white">Creative Design.</span>{' '}
                  <span className="crimson-gradient-text">Powerful Identity.</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Domain Badges: Clean unboxed text with typographic separators (Strict Anti-Pill rule) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-medium pt-1">
              <span className="text-neutral-200">Graphic Design</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-200">Brand Identity</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-200">Social Media Creatives</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-200">Video Editing</span>
            </div>

            {/* Interactive Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('#portfolio')}
                className="px-6 py-3.5 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#9e1b32] to-[#7f1325] hover:from-[#be1b3b] hover:to-[#9e1b32] border border-[#f43f5e]/30 shadow-lg shadow-[#9e1b32]/20 hover:shadow-xl hover:shadow-[#9e1b32]/30 transition-all duration-200 flex items-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.viewWorkBtn}</span>
                <ChevronRight className="w-4 h-4 text-[#dfb86c] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3.5 rounded-md text-sm font-semibold text-neutral-200 hover:text-white bg-[#14141c] hover:bg-[#1b1b26] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.contactBtn}</span>
              </button>

              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-md text-xs font-semibold text-[#25D366] bg-[#142319] hover:bg-[#1c3323] border border-[#25D366]/30 transition-colors flex items-center gap-2 whitespace-nowrap"
                title="WhatsApp: 01923057893"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-mono">01923057893</span>
              </a>
            </div>

            {/* Key Proof Metrics (Adjacent to Hero Claim) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {brandConfig.experienceYears}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {t.hero.metrics.experience}
                </p>
              </div>

              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-[#dfb86c] tracking-tight tabular-nums">
                  {brandConfig.projectsCompleted}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {t.hero.metrics.projects}
                </p>
              </div>

              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {brandConfig.satisfiedClients}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {t.hero.metrics.satisfaction}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Abdur Rahim's Photo with Red & Green Rotating Light Border */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Ambient Red & Green Glow Behind Card */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/25 via-red-500/20 to-emerald-500/25 blur-xl opacity-75 pointer-events-none" />

            {/* Photo Card with Animated Red & Green Rotating Light Border (চারপাশে লাল ও সবুজ রঙের ঘূর্ণায়মান লাইটিং) */}
            <div className="relative p-[4px] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 max-w-sm sm:max-w-md w-full">
              {/* Rotating Conic Gradient: Red & Green (লাল ও সবুজ রঙের ঘূর্ণায়মান দাগ) */}
              <div 
                className="absolute -inset-[200%] animate-spin-fast"
                style={{
                  background: 'conic-gradient(from 0deg, #10b981 0deg, #ef4444 60deg, #059669 120deg, #dc2626 180deg, #10b981 240deg, #ef4444 300deg, #10b981 360deg)',
                }}
              />

              {/* Inner Frame Container (ফ্রেমের ভিতরে ছবি ও সংক্ষিপ্ত ট্যাগলাইন) */}
              <div className="relative z-10 rounded-[12px] overflow-hidden bg-[#0d0f17] flex flex-col w-full">
                {/* Photo container: Scaled and cropped to cleanly eliminate any Gemini watermark */}
                <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-[#0a0a0e]">
                  <img
                    src={heroPhoto}
                    alt="Abdur Rahim - AR DesignBD"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top scale-[1.14] origin-top -translate-y-1 transition-transform duration-500 hover:scale-[1.17]"
                  />
                  {/* Bottom gradient fade */}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0e0e16] to-transparent pointer-events-none" />
                </div>

                {/* Captivating & Concise Tagline INSIDE the frame (ফ্রেমের ভিতরে সংক্ষিপ্ত মন কাড়ানো ট্যাগলাইন) */}
                <div className="py-3 px-4 bg-[#0e0e16] border-t border-white/10 text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#dfb86c] text-[11px] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#dfb86c]" />
                    <span>{lang === 'bn' ? 'সৃজনশীল ভাবনায় অনন্য শিল্প' : 'Artistry in Every Pixel'}</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                    {lang === 'bn' ? (
                      <>
                        "কল্পনা থেকে নান্দনিক সৃষ্টি —{' '}
                        <span className="gold-gradient-text">স্বপ্নের ব্র্যান্ডের রূপকার</span>"
                      </>
                    ) : (
                      <>
                        "Crafting Iconic Identities —{' '}
                        <span className="gold-gradient-text">From Vision to Reality</span>"
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

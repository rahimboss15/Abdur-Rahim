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

          {/* Right Column: Premium Visual Studio Showcase Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Showcase Artwork */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12121a] shadow-2xl group">
                <ArtworkVisual
                  type="hero"
                  title="AR DesignBD Studio"
                  subtitle="Creative Graphic Design & Video Suite"
                  imageUrl={brandConfig.images.heroMockupImage}
                  aspectRatio="4:3"
                />

                {/* Bottom Overlay Label */}
                <div className="p-4 bg-[#14141e]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#9e1b32]/20 border border-[#9e1b32]/40 flex items-center justify-center text-[#f43f5e]">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide">
                        AR DesignBD • {lang === 'bn' ? 'ক্রিয়েটিভ স্টুডিও' : 'Creative Studio'}
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {lang === 'bn' ? 'ব্র্যান্ডিং, প্রিন্ট ও ডিজিটাল মিডিয়া' : 'Branding, Print & Motion Media'}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#dfb86c] font-semibold bg-[#dfb86c]/10 px-2 py-1 rounded">
                    EST. 2021
                  </span>
                </div>
              </div>

              {/* Floating Accents */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-[#171724]/95 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl">
                <div className="w-8 h-8 rounded-lg bg-[#dfb86c]/20 border border-[#dfb86c]/30 flex items-center justify-center text-[#dfb86c]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">100% Custom Work</p>
                  <p className="text-[10px] text-neutral-400">
                    {lang === 'bn' ? 'কপিরাইট ফ্রি অরিজিনাল ফাইল' : 'Original Vector Assets'}
                  </p>
                </div>
              </div>

              {/* Animated Rotating Border Badge: "প্রফেশনাল কোয়ালিটি" with Green & Red lighting */}
              <div className="hidden sm:block absolute -top-4 -right-4 z-20">
                <div className="relative p-[2px] rounded-xl overflow-hidden shadow-2xl shadow-emerald-950/40">
                  {/* Rotating Conic Gradient: Green & Red */}
                  <div className="absolute -inset-[150%] animate-spin-fast bg-[conic-gradient(#10b981_0deg,#ef4444_90deg,#059669_180deg,#dc2626_270deg,#10b981_360deg)]" />
                  
                  {/* Badge Content */}
                  <div className="relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#0f1118]/95 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      {lang === 'bn' ? 'প্রফেশনাল কোয়ালিটি' : 'Professional Quality'}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

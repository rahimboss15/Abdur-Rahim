import React, { useState, useRef } from 'react';
import { CheckCircle2, MessageSquare, Sparkles, User, Mail, MessageCircle, MapPin, Camera, Upload } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';
import { ArtworkVisual } from './ArtworkVisual';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('ar_designbd_custom_profile');
      if (saved && (saved.startsWith('data:image') || saved.startsWith('http'))) {
        return saved;
      }
    } catch {
      // ignore
    }
    return brandConfig.images.profileImage;
  });

  const handleTalkClick = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        try {
          localStorage.setItem('ar_designbd_custom_profile', base64String);
        } catch {
          // localStorage might have quota limits on very huge files
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0d0d12] relative border-t border-white/5">
      {/* Subtle decorative lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#9e1b32]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>01</span>
            <span>·</span>
            <span>{t.about.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#13131c] shadow-2xl group">
              
              {/* Portrait Visual */}
              <div className="aspect-[4/5] w-full relative">
                <ArtworkVisual
                  type="portrait"
                  title={lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en}
                  subtitle={lang === 'bn' ? brandConfig.role.bn : brandConfig.role.en}
                  imageUrl={profileImage}
                  aspectRatio="4:3"
                  className="!h-full !aspect-auto"
                />

                {/* Instant Photo Upload Button */}
                <div className="absolute bottom-3 right-3 z-20">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0a0c]/85 hover:bg-[#1a1a26] text-white text-[11px] font-semibold border border-white/15 backdrop-blur-md shadow-lg transition-colors cursor-pointer"
                    title={lang === 'bn' ? 'ছবি পরিবর্তন বা আপলোড করুন' : 'Upload or change photo'}
                  >
                    <Camera className="w-3.5 h-3.5 text-[#dfb86c]" />
                    <span>{lang === 'bn' ? 'ছবি পরিবর্তন' : 'Change Photo'}</span>
                  </button>
                </div>
              </div>

              {/* Founder Information Overlay Card */}
              <div className="p-6 bg-[#161622] border-t border-white/10 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#dfb86c]">
                      {t.about.founderLabel}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {lang === 'bn' ? brandConfig.role.bn : brandConfig.role.en}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-[#9e1b32]/20 border border-[#9e1b32]/40 flex items-center justify-center text-[#f43f5e]">
                    <User className="w-5 h-5" />
                  </div>
                </div>

                {/* Direct Contact Pills on Founder Card */}
                <div className="pt-2 border-t border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="flex items-center gap-1.5 text-neutral-400">
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp:</span>
                    </span>
                    <a
                      href={brandConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[#25D366] hover:underline font-semibold"
                    >
                      {brandConfig.contact.whatsappDisplay}
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="flex items-center gap-1.5 text-neutral-400">
                      <Mail className="w-3.5 h-3.5 text-[#dfb86c]" />
                      <span>Email:</span>
                    </span>
                    <a
                      href={`mailto:${brandConfig.contact.email}`}
                      className="font-mono text-neutral-200 hover:text-white hover:underline text-[11px] truncate max-w-[200px]"
                    >
                      {brandConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#dfb86c]" />
                    <span>{lang === 'bn' ? brandConfig.contact.location.bn : brandConfig.contact.location.en}</span>
                  </span>
                  <span className="text-[#dfb86c] font-semibold">5+ Yrs</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Work Ethic */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-neutral-100 font-medium leading-relaxed">
                {t.about.leadText}
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            {/* Core Philosophy List */}
            <div className="pt-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-[#dfb86c]">
                {t.about.corePhilosophyTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.about.philosophyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#14141e] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#dfb86c] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-200 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Strength Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10">
              <div className="p-3 bg-[#13131c] rounded-lg border border-white/5 text-center">
                <span className="text-lg font-bold text-white block">100%</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">{t.about.quickStats.passion}</span>
              </div>
              <div className="p-3 bg-[#13131c] rounded-lg border border-white/5 text-center">
                <span className="text-lg font-bold text-[#dfb86c] block">300 DPI</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">{t.about.quickStats.precision}</span>
              </div>
              <div className="p-3 bg-[#13131c] rounded-lg border border-white/5 text-center">
                <span className="text-lg font-bold text-white block">24/7</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">{t.about.quickStats.support}</span>
              </div>
            </div>

            {/* Talk Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleTalkClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-white bg-[#9e1b32] hover:bg-[#b91c38] transition-colors shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#dfb86c]" />
                <span>{t.about.talkWithRahim}</span>
              </button>

              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md text-xs font-semibold text-white bg-[#16251b] hover:bg-[#1e3425] border border-[#25D366]/30 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {brandConfig.contact.whatsappDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

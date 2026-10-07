import React, { useState, useRef } from 'react';
import { CheckCircle2, MessageSquare, Sparkles, User, Mail, MessageCircle, MapPin, Camera, Award, ShieldCheck, ArrowRight, Navigation, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [aboutImage, setAboutImage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('ar_designbd_custom_about');
      if (saved && (saved.startsWith('data:image') || saved.startsWith('http'))) {
        return saved;
      }
    } catch {
      // ignore
    }
    return brandConfig.images.aboutImage;
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
        setAboutImage(base64String);
        try {
          localStorage.setItem('ar_designbd_custom_about', base64String);
        } catch {
          // localStorage might have quota limits
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0d0d12] relative border-t border-white/5">
      {/* Subtle decorative lighting */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-80 h-80 bg-[#9e1b32]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#dfb86c]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>01</span>
            <span>·</span>
            <span>{t.about.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Executive Founder Spotlight Card - Wide, Sleek & Compact (পাশে বাড়ানো, উচ্চতা কমিয়ে প্রফেশনাল লুক) */}
        <div className="mb-14">
          <div className="relative p-[2.5px] rounded-2xl overflow-hidden shadow-2xl shadow-black/70 group">
            {/* Rotating Conic Lighting Edge */}
            <div className="absolute -inset-[150%] animate-spin-slow bg-[conic-gradient(from_0deg,#dfb86c_0deg,#f43f5e_90deg,#9e1b32_180deg,#dfb86c_270deg,#dfb86c_360deg)] opacity-85" />

            {/* Inner Content Container */}
            <div className="relative z-10 rounded-[14px] overflow-hidden bg-[#12121b] border border-white/5">
              <div className="flex flex-col md:flex-row items-stretch">
                
                {/* Photo Side: Horizontal proportions, not overly tall */}
                <div className="md:w-[320px] lg:w-[360px] xl:w-[380px] shrink-0 relative min-h-[300px] sm:min-h-[340px] md:min-h-[360px] bg-[#0c0c14] overflow-hidden">
                  <img
                    src={aboutImage}
                    alt={lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#12121b]/80 pointer-events-none" />

                  {/* Photo Change Button */}
                  <div className="absolute bottom-3 left-3 z-20">
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
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0a0a0c]/85 hover:bg-[#1a1a26] text-white text-[11px] font-semibold border border-white/15 backdrop-blur-md shadow-lg transition-colors cursor-pointer"
                      title={lang === 'bn' ? 'ছবি পরিবর্তন বা আপলোড করুন' : 'Upload or change photo'}
                    >
                      <Camera className="w-3.5 h-3.5 text-[#dfb86c]" />
                      <span>{lang === 'bn' ? 'ছবি পরিবর্তন' : 'Change Photo'}</span>
                    </button>
                  </div>
                </div>

                {/* Details Side: Wide, organized & structured like a senior executive card */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  {/* Founder Badges & Header */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e1a26] text-[#dfb86c] text-xs font-mono font-semibold border border-[#dfb86c]/30">
                          <Sparkles className="w-3 h-3 text-[#dfb86c]" />
                          <span>{t.about.founderLabel}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{brandConfig.experienceYears} {lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Exp'}</span>
                        </span>
                      </div>

                      <a
                        href={brandConfig.contact.location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-300 hover:text-[#dfb86c] flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group/addr"
                        title={lang === 'bn' ? 'গুগল ম্যাপে লোকেশন দেখুন' : 'View on Google Maps'}
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#dfb86c] group-hover/addr:scale-110 transition-transform" />
                        <span>{lang === 'bn' ? brandConfig.contact.location.bn : brandConfig.contact.location.en}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400 group-hover/addr:text-[#dfb86c] transition-colors ml-0.5" />
                      </a>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#dfb86c] mt-0.5">
                        {lang === 'bn' ? brandConfig.role.bn : brandConfig.role.en}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                      {t.about.leadText}
                    </p>
                  </div>

                  {/* Interactive Location Map Box - Fills the gap with touchable live Google Map */}
                  <div className="rounded-xl overflow-hidden border border-[#dfb86c]/25 bg-[#0e0e17] shadow-xl group/map">
                    {/* Map Header Bar */}
                    <div className="px-3.5 py-2.5 bg-[#161625] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#dfb86c]" />
                          <span>{t.about.locationMap?.office || (lang === 'bn' ? 'অফিস লোকেশন (কোনাবাড়ী, গাজীপুর)' : 'Office Location (Konabari, Gazipur)')}</span>
                        </span>
                      </div>

                      <a
                        href={brandConfig.contact.location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#dfb86c] hover:bg-[#edd28d] text-[#121217] text-[11px] font-bold shadow transition-all cursor-pointer"
                        title={lang === 'bn' ? 'গুগল ম্যাপে পুরো ভিউ ও ন্যাভিগেশন দেখুন' : 'Open in Google Maps'}
                      >
                        <Navigation className="w-3 h-3" />
                        <span>{t.about.locationMap?.viewGoogleMaps || (lang === 'bn' ? 'গুগল ম্যাপে দেখুন' : 'View on Maps')}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>

                    {/* Interactive Google Map Embed */}
                    <div className="relative w-full h-44 sm:h-48 md:h-52 bg-[#0a0a0f]">
                      <iframe
                        title="AR DesignBD Konabari Gazipur Location Map"
                        src={brandConfig.contact.location.embedUrl}
                        className="w-full h-full border-0 filter contrast-105 brightness-95 hover:brightness-100 transition-all"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>

                    {/* Map Footer helper note with direct directions link */}
                    <div className="px-3 py-2 bg-[#12121c] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <span className="text-neutral-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#dfb86c]" />
                        <span>{t.about.locationMap?.touchNotice || (lang === 'bn' ? 'টাচ বা ক্লিক করে ম্যাপে সরাসরি অবস্থান দেখুন' : 'Touch or click to explore location and navigate')}</span>
                      </span>

                      <a
                        href={brandConfig.contact.location.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#dfb86c] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>{t.about.locationMap?.directions || (lang === 'bn' ? 'দিকনির্দেশনা (Directions)' : 'Get Directions')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Horizontal Contact & Social Row */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {/* WhatsApp */}
                    <a
                      href={brandConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#142419] hover:bg-[#1b3323] border border-[#25D366]/30 text-[#25D366] transition-colors font-medium"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <div className="truncate">
                        <span className="text-[10px] text-neutral-400 block leading-tight">WhatsApp</span>
                        <span className="font-mono text-xs">{brandConfig.contact.whatsappDisplay}</span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${brandConfig.contact.email}`}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#181824] hover:bg-[#202030] border border-white/10 text-neutral-200 transition-colors font-medium truncate"
                    >
                      <Mail className="w-4 h-4 text-[#dfb86c] shrink-0" />
                      <div className="truncate">
                        <span className="text-[10px] text-neutral-400 block leading-tight">Email</span>
                        <span className="font-mono text-xs truncate block">{brandConfig.contact.email}</span>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href={brandConfig.contact.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#101a2e] hover:bg-[#16233d] border border-[#1877F2]/30 text-[#1877F2] transition-colors font-medium"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <div className="truncate">
                        <span className="text-[10px] text-neutral-400 block leading-tight">Facebook</span>
                        <span className="text-xs truncate block">Abrgaraphic</span>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={brandConfig.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0c1c2a] hover:bg-[#11273b] border border-[#0a66c2]/30 text-[#0a66c2] transition-colors font-medium"
                    >
                      <span className="font-bold text-[11px] bg-[#0a66c2] text-white px-1.5 py-0.5 rounded shrink-0">in</span>
                      <div className="truncate">
                        <span className="text-[10px] text-neutral-400 block leading-tight">LinkedIn</span>
                        <span className="text-xs truncate block">rubelboss2</span>
                      </div>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Detail Grid: Brand Philosophy & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Brand Vision & Quick Strengths */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#12121a] border border-white/5 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-[#dfb86c] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#dfb86c]" />
                <span>{lang === 'bn' ? 'আমাদের দর্শন ও প্রতিশ্রুতি' : 'Our Vision & Commitment'}</span>
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t.about.paragraph2}
              </p>

              {/* Quick Strength Indicators */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 text-center">
                <div className="p-3 bg-[#171722] rounded-lg border border-white/5">
                  <span className="text-lg font-bold text-white block">100%</span>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">{t.about.quickStats.passion}</span>
                </div>
                <div className="p-3 bg-[#171722] rounded-lg border border-white/5">
                  <span className="text-lg font-bold text-[#dfb86c] block">300 DPI</span>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">{t.about.quickStats.precision}</span>
                </div>
                <div className="p-3 bg-[#171722] rounded-lg border border-white/5">
                  <span className="text-lg font-bold text-white block">24/7</span>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">{t.about.quickStats.support}</span>
                </div>
              </div>
            </div>

            {/* Talk Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleTalkClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-white bg-gradient-to-r from-[#9e1b32] to-[#7f1325] hover:from-[#be1b3b] hover:to-[#9e1b32] border border-[#f43f5e]/30 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#dfb86c]" />
                <span>{t.about.talkWithRahim}</span>
              </button>

              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md text-xs font-semibold text-white bg-[#142319] hover:bg-[#1c3323] border border-[#25D366]/30 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {brandConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Core Philosophy List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-8 rounded-xl bg-[#12121a] border border-white/5 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-[#dfb86c] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#dfb86c]" />
                <span>{t.about.corePhilosophyTitle}</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {t.about.philosophyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#171722] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#dfb86c]/15 text-[#dfb86c] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                      0{index + 1}
                    </div>
                    <span className="text-xs text-neutral-200 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

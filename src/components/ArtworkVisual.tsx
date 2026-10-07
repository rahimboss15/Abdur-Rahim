import React, { useState, useEffect } from 'react';
import { ARLogo } from './ARLogo';
import { brandConfig } from '../data/config';

interface ArtworkVisualProps {
  type: 'logo' | 'branding' | 'social' | 'poster' | 'banner' | 'thumbnail' | 'photo' | 'video' | 'portrait' | 'hero';
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1';
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({
  type,
  title = 'AR DesignBD',
  subtitle = 'Creative Design Studio',
  imageUrl,
  className = '',
  aspectRatio = '4:3',
}) => {
  const [imgError, setImgError] = useState(false);
  const [customStoredProfile, setCustomStoredProfile] = useState<string | null>(null);

  useEffect(() => {
    if (type === 'portrait') {
      try {
        const stored = localStorage.getItem('ar_designbd_custom_profile');
        if (stored && (stored.startsWith('data:image') || stored.startsWith('http'))) {
          setCustomStoredProfile(stored);
        }
      } catch {
        // ignore
      }
    }
  }, [type]);

  const effectiveImageUrl = customStoredProfile || imageUrl || (type === 'portrait' ? brandConfig.images.profileImage : undefined);

  const aspectClass = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:4': 'aspect-[3/4]',
    '1:1': 'aspect-square',
  }[aspectRatio];

  if (effectiveImageUrl && !imgError) {
    return (
      <div className={`relative overflow-hidden w-full ${aspectClass} ${className} bg-[#121217]`}>
        <img
          src={effectiveImageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Bespoke Vector Graphic Renderers matching Deep Black, Charcoal, White, Dark Red / Burgundy & Gold
  return (
    <div className={`relative overflow-hidden w-full ${aspectClass} ${className} bg-[#0e0e13] border border-white/5 flex items-center justify-center select-none`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#181822] via-[#0d0d12] to-[#08080a]" />

      {/* Subtle Grid texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(rgba(223, 184, 108, 0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Render Artwork Type */}
      {type === 'portrait' && (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
          {/* Studio Portrait composition with Abdur Rahim's Blue Suit & Beard */}
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full p-[3px] overflow-hidden shadow-2xl">
            {/* Rotating Conic Lighting Animation */}
            <div className="absolute -inset-[150%] animate-spin-slow bg-[conic-gradient(from_0deg,#dfb86c_0deg,#f43f5e_90deg,#9e1b32_180deg,#dfb86c_270deg,#dfb86c_360deg)] opacity-95" />
            <div className="w-full h-full rounded-full bg-[#0d1322] overflow-hidden flex items-center justify-center relative z-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="suitBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="40%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#0f2b66" />
                  </linearGradient>
                  <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4a373" />
                    <stop offset="50%" stopColor="#bc8a5f" />
                    <stop offset="100%" stopColor="#8c5836" />
                  </linearGradient>
                  <linearGradient id="tiePattern" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                {/* Studio backdrop gradient */}
                <rect width="200" height="200" fill="#0f172a" />

                {/* Blue Suit Shoulders */}
                <path d="M20 200 Q100 130 180 200 Z" fill="url(#suitBlue)" />
                <path d="M20 200 L68 150 L84 200 Z" fill="#1e40af" />
                <path d="M180 200 L132 150 L116 200 Z" fill="#1e40af" />

                {/* White Shirt Collar */}
                <polygon points="100,128 80,154 94,158 100,140 106,158 120,154" fill="#ffffff" />
                <polygon points="80,154 100,185 120,154 114,142 86,142" fill="#f8fafc" />

                {/* Navy Blue Dotted Tie */}
                <polygon points="96,140 104,140 106,195 94,195" fill="url(#tiePattern)" />
                <polygon points="94,140 106,140 102,150 98,150" fill="#0f172a" />
                {/* Tie pin dot */}
                <circle cx="100" cy="160" r="1.5" fill="#dfb86c" />

                {/* Neck */}
                <rect x="88" y="104" width="24" height="28" rx="4" fill="url(#skinTone)" />

                {/* Head / Face */}
                <ellipse cx="100" cy="80" rx="32" ry="38" fill="url(#skinTone)" />

                {/* Short Neat Black Hair */}
                <path d="M68 70 Q100 32 132 70 Q130 45 100 42 Q70 45 68 70 Z" fill="#09090b" />

                {/* Modern Rectangular Black Glasses */}
                {/* Left Frame */}
                <rect x="74" y="70" width="22" height="15" rx="3.5" fill="none" stroke="#09090b" strokeWidth="2.8" />
                {/* Right Frame */}
                <rect x="104" y="70" width="22" height="15" rx="3.5" fill="none" stroke="#09090b" strokeWidth="2.8" />
                {/* Glasses Bridge */}
                <line x1="96" y1="77" x2="104" y2="77" stroke="#09090b" strokeWidth="2.8" />
                {/* Lenses reflection */}
                <line x1="77" y1="73" x2="84" y2="80" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="107" y1="73" x2="114" y2="80" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />

                {/* Eyes */}
                <circle cx="85" cy="77" r="2.8" fill="#1c1917" />
                <circle cx="115" cy="77" r="2.8" fill="#1c1917" />

                {/* Eyebrows */}
                <path d="M74 65 Q85 62 94 65" stroke="#09090b" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M106 65 Q115 62 126 65" stroke="#09090b" strokeWidth="3" fill="none" strokeLinecap="round" />

                {/* Nose */}
                <path d="M100 78 L97 93 L103 93" stroke="#78350f" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Full Groomed Beard & Mustache (like photo) */}
                <path
                  d="M72 88 Q100 125 128 88 Q132 112 100 120 Q68 112 72 88 Z"
                  fill="#09090b"
                />
                {/* Mustache */}
                <path d="M86 98 Q100 95 114 98 Q100 102 86 98 Z" fill="#09090b" />

                {/* Warm smile */}
                <path d="M92 101 Q100 107 108 101" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-xs uppercase tracking-widest text-[#dfb86c] font-semibold">AR DesignBD</span>
            <p className="text-sm font-medium text-neutral-200 mt-0.5">Abdur Rahim / আব্দুর রহিম</p>
          </div>
        </div>
      )}

      {type === 'hero' && (
        <div className="relative w-full h-full p-6 md:p-8 flex items-center justify-center">
          {/* Creative Studio Showcase Mockup Composition */}
          <div className="relative w-full max-w-lg aspect-[16/10] bg-[#14141e] rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#9e1b32]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#dfb86c]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-2 text-[11px] font-mono tracking-wider text-neutral-400">AR_STUDIO_SUITE.ai</span>
              </div>
              <span className="text-[10px] uppercase font-semibold text-[#dfb86c] bg-[#dfb86c]/10 px-2 py-0.5 rounded">300 DPI • CMYK</span>
            </div>

            {/* Central Graphic Composition */}
            <div className="my-auto py-2 grid grid-cols-12 gap-3 items-center">
              <div className="col-span-7 space-y-2">
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-[#9e1b32]/20 text-[#f43f5e] border border-[#9e1b32]/30">
                  Brand Identity
                </div>
                <h4 className="text-base md:text-lg font-bold text-white tracking-tight leading-tight">
                  Creative Design. Powerful Identity.
                </h4>
                <div className="flex items-center gap-2 pt-1">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-[#9e1b32] to-[#dfb86c] rounded-full" />
                  <span className="text-[10px] text-neutral-400 font-mono">100% Vector Geometry</span>
                </div>
              </div>

              {/* Official AR Designbd Medallion Logo */}
              <div className="col-span-5 flex justify-center">
                <div className="p-1 rounded-full bg-gradient-to-br from-[#dfb86c]/30 to-transparent shadow-xl">
                  <ARLogo size="xl" showText={false} />
                </div>
              </div>
            </div>

            {/* Bottom palette swatches */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-[#0a0a0c] border border-white/20" title="#0A0A0C" />
                <span className="w-3.5 h-3.5 rounded bg-[#181822] border border-white/20" title="#181822" />
                <span className="w-3.5 h-3.5 rounded bg-[#9e1b32]" title="#9E1B32" />
                <span className="w-3.5 h-3.5 rounded bg-[#dfb86c]" title="#DFB86C" />
                <span className="w-3.5 h-3.5 rounded bg-white" title="#FFFFFF" />
              </div>
              <span className="font-mono text-neutral-500">Bangla & English Ready</span>
            </div>
          </div>
        </div>
      )}

      {type === 'branding' && (
        <div className="relative w-full h-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Visual Identity</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#dfb86c]" />
              <div className="w-2 h-2 rounded-full bg-[#9e1b32]" />
            </div>
          </div>

          {/* Luxury Packaging / Stationery Graphic */}
          <div className="my-auto flex flex-col items-center justify-center">
            <div className="relative w-28 h-20 bg-gradient-to-br from-[#1c1c28] to-[#101018] rounded-lg border border-[#dfb86c]/30 shadow-2xl p-3 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold tracking-widest text-[#dfb86c]">AR DESIGNS</span>
                <span className="text-[8px] text-neutral-500 font-mono">EST. 2026</span>
              </div>
              <div className="text-center my-auto">
                <span className="text-xs font-semibold text-white tracking-wide">BRAND SYSTEM</span>
              </div>
              <div className="h-0.5 w-full bg-gradient-to-r from-[#dfb86c] via-[#9e1b32] to-transparent" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-semibold text-neutral-200 truncate">{title}</p>
            <p className="text-[11px] text-neutral-500 truncate mt-0.5">{subtitle}</p>
          </div>
        </div>
      )}

      {type === 'logo' && (
        <div className="relative w-full h-full p-6 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 rounded-full bg-[#151520] border border-[#dfb86c]/20 flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(223, 184, 108, 0.2)" strokeWidth="1" />
              {/* Monogram AR */}
              <path d="M28 72 L50 24 L72 72 Z" fill="none" stroke="#dfb86c" strokeWidth="4.5" strokeLinejoin="round" />
              <line x1="38" y1="54" x2="62" y2="54" stroke="#dfb86c" strokeWidth="4" />
              <path d="M50 36 Q74 36 74 52 Q74 68 50 68" fill="none" stroke="#9e1b32" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs font-semibold text-white tracking-wide block">{title}</span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">{subtitle}</span>
          </div>
        </div>
      )}

      {type === 'social' && (
        <div className="relative w-full h-full p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-neutral-400">
            <span className="font-mono">INSTAGRAM // CAROUSEL</span>
            <span className="text-[#dfb86c] font-semibold">1:1 / 4:5</span>
          </div>

          <div className="my-auto mx-auto w-3/4 aspect-[4/3] bg-[#161622] rounded-lg border border-white/10 p-3 flex flex-col justify-between shadow-xl">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#9e1b32]" />
              <span className="text-[10px] font-semibold text-white">ardesignbd.official</span>
            </div>
            <div className="py-2 text-center">
              <div className="text-[11px] font-bold text-white tracking-wide">SUMMER DROP</div>
              <div className="text-[9px] text-[#dfb86c]">High Conversion Social Post</div>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-white/5 text-[9px] text-neutral-400">
              <span>Swipe Next &rarr;</span>
              <span>1/9</span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-white truncate block">{title}</span>
            <span className="text-[11px] text-neutral-500 truncate block">{subtitle}</span>
          </div>
        </div>
      )}

      {type === 'poster' && (
        <div className="relative w-full h-full p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span className="font-mono text-[#dfb86c]">SWISS GRID</span>
            <span className="font-mono">A1 PRINT</span>
          </div>

          <div className="my-auto mx-auto w-3/5 aspect-[3/4] bg-[#171724] border border-[#9e1b32]/40 rounded p-3 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#9e1b32]/30 blur-xl" />
            <div className="text-left">
              <span className="text-[8px] font-mono text-neutral-400 block">EXHIBITION 2026</span>
              <span className="text-xs font-extrabold text-white tracking-tighter uppercase leading-none mt-1 block">
                DHAKA DESIGN EXPO
              </span>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-[#9e1b32] leading-none">26</span>
              <span className="text-[8px] text-neutral-400 block font-mono">DHAKA • BD</span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-white truncate block">{title}</span>
            <span className="text-[11px] text-neutral-500 truncate block">{subtitle}</span>
          </div>
        </div>
      )}

      {type === 'banner' && (
        <div className="relative w-full h-full p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span className="font-mono">ROLLUP & BILLBOARD</span>
            <span className="text-[#dfb86c]">CMYK 300DPI</span>
          </div>

          <div className="my-auto w-5/6 mx-auto h-20 bg-gradient-to-r from-[#171724] via-[#24131d] to-[#171724] rounded-lg border border-white/10 p-3 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-[#dfb86c] block">GLOBAL TECH SUMMIT</span>
              <span className="text-xs font-bold text-white block mt-0.5">THE FUTURE OF DESIGN</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#9e1b32]/30 border border-[#9e1b32] flex items-center justify-center text-white font-mono text-[10px] font-bold">
              2026
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-white truncate block">{title}</span>
            <span className="text-[11px] text-neutral-500 truncate block">{subtitle}</span>
          </div>
        </div>
      )}

      {type === 'thumbnail' && (
        <div className="relative w-full h-full p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span className="font-mono text-[#f43f5e]">CTR OPTIMIZED</span>
            <span className="font-mono text-neutral-400">1280 × 720</span>
          </div>

          <div className="my-auto w-11/12 mx-auto aspect-[16/9] bg-[#151522] rounded-lg border border-white/15 p-3 flex flex-col justify-between relative shadow-2xl overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#9e1b32]/40 to-transparent" />
            <div className="relative z-10">
              <span className="inline-block bg-[#9e1b32] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                VIRAL SECRET
              </span>
              <h5 className="text-sm font-extrabold text-white tracking-tight uppercase mt-1 leading-tight drop-shadow">
                10X YOUR BRAND
              </h5>
            </div>
            <div className="relative z-10 flex justify-between items-center text-[9px] text-neutral-300">
              <span className="text-[#dfb86c] font-semibold">AR DesignBD</span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-mono">15:42</span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-white truncate block">{title}</span>
            <span className="text-[11px] text-neutral-500 truncate block">{subtitle}</span>
          </div>
        </div>
      )}

      {type === 'photo' && (
        <div className="relative w-full h-full p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span className="font-mono">COMMERCIAL RETOUCH</span>
            <span className="text-[#dfb86c]">RAW / TIFF</span>
          </div>

          <div className="my-auto mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#161622] via-[#2a2a3c] to-[#12121a] border-2 border-[#dfb86c]/40 flex items-center justify-center shadow-2xl relative">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dfb86c]" />
              <div className="absolute w-0.5 h-6 bg-[#dfb86c] top-5 left-1/2 -translate-x-1/2 origin-bottom" />
              <div className="absolute w-0.5 h-4 bg-white top-7 left-1/2 -translate-x-1/2 origin-bottom rotate-45" />
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-white truncate block">{title}</span>
            <span className="text-[11px] text-neutral-500 truncate block">{subtitle}</span>
          </div>
        </div>
      )}

      {type === 'video' && (
        <div className="relative w-full h-full p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span className="font-mono text-[#f43f5e]">4K MOTION MASTER</span>
            <span className="font-mono">60 FPS</span>
          </div>

          <div className="my-auto w-11/12 mx-auto aspect-[16/9] bg-[#12121c] rounded-lg border border-white/10 p-2 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between text-[8px] text-neutral-500">
              <span className="text-[#dfb86c] font-mono">00:01:24:18</span>
              <span className="bg-[#9e1b32]/30 text-[#f43f5e] px-1 rounded font-mono">CINEMATIC</span>
            </div>
            {/* Play Button */}
            <div className="mx-auto w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-white ml-0.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            {/* Audio Waveform mock */}
            <div className="flex items-center gap-0.5 h-2 w-full opacity-60">
              {[4, 8, 2, 6, 9, 3, 7, 5, 8, 3, 6, 9, 4, 7, 2, 5, 8, 4, 6, 9, 3, 7, 4, 8, 5].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-[#9e1b32] to-[#dfb86c] rounded-full" style={{ height: `${h * 10}%` }} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-white truncate block">{title}</span>
            <span className="text-[11px] text-neutral-500 truncate block">{subtitle}</span>
          </div>
        </div>
      )}

      {/* Decorative hairline corner markers */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />
    </div>
  );
};

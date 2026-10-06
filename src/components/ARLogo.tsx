import React, { useState } from 'react';
import { brandConfig } from '../data/config';

interface ARLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const ARLogo: React.FC<ARLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const dimension = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 md:w-32 md:h-32',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Medallion Logo */}
      <div className={`relative ${dimension} rounded-full shrink-0 select-none`}>
        {!imgError && brandConfig.images.logoImage ? (
          <img
            src={brandConfig.images.logoImage}
            alt="AR Designbd Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain rounded-full drop-shadow-md"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-Fidelity Vector Replica of the AR Designbd Medallion */
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
            <defs>
              {/* Outer Gold Gradient */}
              <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#efd28d" />
                <stop offset="30%" stopColor="#c5a059" />
                <stop offset="70%" stopColor="#f3e2ad" />
                <stop offset="100%" stopColor="#96752d" />
              </linearGradient>

              {/* Green Texture Fill */}
              <linearGradient id="greenFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e5c3e" />
                <stop offset="50%" stopColor="#103d27" />
                <stop offset="100%" stopColor="#0a2a1b" />
              </linearGradient>

              {/* Checkered / Carbon pattern */}
              <pattern id="carbonMesh" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="#141416" />
                <rect x="4" width="4" height="4" fill="#0d0d0f" />
                <rect y="4" width="4" height="4" fill="#0d0d0f" />
                <rect x="4" y="4" width="4" height="4" fill="#141416" />
              </pattern>
            </defs>

            {/* Dark Textured Disc */}
            <circle cx="100" cy="100" r="95" fill="url(#carbonMesh)" stroke="url(#goldRing)" strokeWidth="3" />
            <circle cx="100" cy="100" r="88" fill="none" stroke="url(#goldRing)" strokeWidth="1.5" strokeOpacity="0.8" />

            {/* Geometric Islamic Star Accent Flourishes at Cardinal Points */}
            {/* North Diamond */}
            <path d="M100 5 L106 12 L100 19 L94 12 Z" fill="url(#goldRing)" />
            {/* South Diamond */}
            <path d="M100 195 L106 188 L100 181 L94 188 Z" fill="url(#goldRing)" />
            {/* West Diamond */}
            <path d="M5 100 L12 94 L19 100 L12 106 Z" fill="url(#goldRing)" />
            {/* East Diamond */}
            <path d="M195 100 L188 94 L181 100 L188 106 Z" fill="url(#goldRing)" />

            {/* Inner Ring with Arch Indents */}
            <circle cx="100" cy="100" r="76" fill="none" stroke="url(#goldRing)" strokeWidth="2.5" />

            {/* Monogram 'A' */}
            <path
              d="M52 108 L78 44 L104 108 L88 108 L83 94 L68 94 L63 108 Z"
              fill="url(#greenFill)"
              stroke="url(#goldRing)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* A Inner Triangle */}
            <polygon points="76,64 71,83 80,83" fill="#0d0d0f" stroke="url(#goldRing)" strokeWidth="1.5" />

            {/* Monogram 'R' intertwining */}
            <path
              d="M96 44 L128 44 C142 44 148 54 148 68 C148 78 140 86 128 88 L148 108 L130 108 L114 90 L110 90 L110 108 L96 108 Z"
              fill="url(#greenFill)"
              stroke="url(#goldRing)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* R Inner Loop */}
            <path d="M110 56 L124 56 C130 56 134 60 134 67 C134 74 130 78 124 78 L110 78 Z" fill="#0d0d0f" stroke="url(#goldRing)" strokeWidth="1.5" />

            {/* "AR Designbd" Gold Text */}
            <text
              x="100"
              y="134"
              textAnchor="middle"
              fill="url(#goldRing)"
              fontSize="19"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              AR Designbd
            </text>

            {/* "GRAPHIC | MOTION | VIDEO | ISLAMIC BRANDING" */}
            <text
              x="100"
              y="149"
              textAnchor="middle"
              fill="#dfb86c"
              fontSize="6.8"
              fontWeight="700"
              fontFamily="sans-serif"
              letterSpacing="1"
            >
              GRAPHIC | MOTION | VIDEO | ISLAMIC BRANDING
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-tight">
            AR Designbd
          </span>
          <span className="text-[10px] text-[#dfb86c] font-semibold tracking-wider uppercase">
            Creative Portfolio
          </span>
        </div>
      )}
    </div>
  );
};

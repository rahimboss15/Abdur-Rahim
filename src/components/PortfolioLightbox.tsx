import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Calendar, User, Wrench, Tag } from 'lucide-react';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArtworkVisual } from './ArtworkVisual';

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
  onRequestProject?: (title: string) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onRequestProject,
}) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

  const navigatePrev = () => onSelect(prevItem);
  const navigateNext = () => onSelect(nextItem);

  const title = lang === 'bn' ? item.title.bn : item.title.en;
  const subtitle = lang === 'bn' ? item.subtitle.bn : item.subtitle.en;
  const desc = lang === 'bn' ? item.description.bn : item.description.en;
  const client = lang === 'bn' ? item.client.bn : item.client.en;
  const tags = lang === 'bn' ? item.tags.bn : item.tags.en;

  const handleOrderSimilar = () => {
    onClose();
    if (onRequestProject) {
      onRequestProject(title);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#101018] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14141f]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfb86c]" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {item.category.replace('_', ' ')} • {currentIndex + 1} / {items.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={navigatePrev}
              className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={t.portfolio.prevProject}
              title={t.portfolio.prevProject}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={navigateNext}
              className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={t.portfolio.nextProject}
              title={t.portfolio.nextProject}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label={t.portfolio.closeModal}
              title={t.portfolio.closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Visual Display */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#0a0a0c]">
            <ArtworkVisual
              type={item.imagePlaceholderType}
              title={title}
              subtitle={subtitle}
              imageUrl={item.customImageUrl}
              aspectRatio="16:9"
              className="!h-72 sm:!h-96"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            
            {/* Left Column: Title & Description */}
            <div className="md:col-span-7 space-y-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#dfb86c]">
                  {subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                  {title}
                </h3>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {desc}
              </p>

              {/* Tags (Anti-pill: clean text with dividers) */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                <span className="text-neutral-500 font-mono text-[11px]">TAGS:</span>
                {tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#181824] text-neutral-300 px-2 py-0.5 rounded text-[11px] border border-white/5">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Meta Specs & Action */}
            <div className="md:col-span-5 bg-[#14141f] rounded-xl p-5 border border-white/5 space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3 text-xs">
                {/* Client */}
                <div className="flex items-start justify-between pb-2 border-b border-white/5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#dfb86c]" />
                    <span>{t.portfolio.clientLabel}</span>
                  </span>
                  <span className="font-semibold text-white text-right">{client}</span>
                </div>

                {/* Year */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#dfb86c]" />
                    <span>{t.portfolio.yearLabel}</span>
                  </span>
                  <span className="font-mono text-white">{item.year}</span>
                </div>

                {/* Tools Used */}
                <div className="pb-2">
                  <span className="text-neutral-400 flex items-center gap-1.5 mb-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#dfb86c]" />
                    <span>{t.portfolio.toolsUsed}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-neutral-200 bg-[#1c1c2a] px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleOrderSimilar}
                className="w-full py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-[#9e1b32] hover:bg-[#b91c38] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.portfolio.discussThisProject}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#dfb86c]" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

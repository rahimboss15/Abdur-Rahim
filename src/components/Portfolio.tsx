import React, { useState } from 'react';
import { Maximize2, ExternalLink, ArrowRight } from 'lucide-react';
import { PortfolioCategory, PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { portfolioCategories, portfolioData } from '../data/portfolioData';
import { PortfolioLightbox } from './PortfolioLightbox';
import { ArtworkVisual } from './ArtworkVisual';

interface PortfolioProps {
  onRequestProject?: (title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestProject }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0d0d12] relative border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#dfb86c]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
              <span>03</span>
              <span>·</span>
              <span>{t.portfolio.subtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.portfolio.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              {t.portfolio.description}
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            <span className="text-[#dfb86c] font-bold">{filteredItems.length}</span>{' '}
            <span>{lang === 'bn' ? 'টি নির্বাচিত প্রজেক্ট' : 'Curated Works'}</span>
          </div>
        </div>

        {/* Category Filter Bar (Interactive segmented button control per section 1.A guidelines) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {portfolioCategories.map((cat) => {
            const label = lang === 'bn' ? cat.label.bn : cat.label.en;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#9e1b32] text-white shadow-md shadow-[#9e1b32]/25 border border-[#f43f5e]/30'
                    : 'bg-[#15151f] text-neutral-400 hover:text-white hover:bg-[#1a1a26] border border-white/5'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-[#13131c] rounded-2xl border border-white/5">
            <p className="text-neutral-400 text-sm">{t.portfolio.noProjectsFound}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const title = lang === 'bn' ? item.title.bn : item.title.en;
              const subtitle = lang === 'bn' ? item.subtitle.bn : item.subtitle.en;
              const client = lang === 'bn' ? item.client.bn : item.client.en;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveModalItem(item)}
                  className="group relative rounded-xl bg-[#121219] hover:bg-[#161622] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between cursor-pointer"
                >
                  {/* Media Visual Area */}
                  <div className="relative overflow-hidden w-full aspect-[4/3] bg-[#0d0d12]">
                    <ArtworkVisual
                      type={item.imagePlaceholderType}
                      title={title}
                      subtitle={subtitle}
                      imageUrl={item.customImageUrl}
                      aspectRatio="4:3"
                    />

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-[#0a0a0c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#0a0a0c]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase text-[#dfb86c] border border-white/10">
                      {item.category.replace('_', ' ')}
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                        <span className="font-mono text-[#dfb86c]">{item.year}</span>
                        <span className="truncate max-w-[150px]">{client}</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#dfb86c] transition-colors leading-snug line-clamp-2">
                        {title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                        {subtitle}
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                      <span className="text-[11px] font-mono text-neutral-500">
                        {item.tools[0]}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#dfb86c] font-medium group-hover:translate-x-0.5 transition-transform">
                        <span>{t.portfolio.viewDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <PortfolioLightbox
          item={activeModalItem}
          items={filteredItems}
          onClose={() => setActiveModalItem(null)}
          onSelect={(newItem) => setActiveModalItem(newItem)}
          onRequestProject={onRequestProject}
        />
      )}
    </section>
  );
};

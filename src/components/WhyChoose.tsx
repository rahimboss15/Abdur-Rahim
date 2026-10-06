import React from 'react';
import { Lightbulb, ShieldCheck, Crosshair, Brush, Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChoose: React.FC = () => {
  const { t } = useLanguage();

  const featureItems = [
    {
      key: 'creativeThinking',
      icon: <Lightbulb className="w-5 h-5 text-[#dfb86c]" />,
      title: t.whyChoose.features.creativeThinking.title,
      desc: t.whyChoose.features.creativeThinking.desc,
    },
    {
      key: 'professionalQuality',
      icon: <ShieldCheck className="w-5 h-5 text-[#f43f5e]" />,
      title: t.whyChoose.features.professionalQuality.title,
      desc: t.whyChoose.features.professionalQuality.desc,
    },
    {
      key: 'attentionToDetail',
      icon: <Crosshair className="w-5 h-5 text-[#dfb86c]" />,
      title: t.whyChoose.features.attentionToDetail.title,
      desc: t.whyChoose.features.attentionToDetail.desc,
    },
    {
      key: 'customDesign',
      icon: <Brush className="w-5 h-5 text-[#f43f5e]" />,
      title: t.whyChoose.features.customDesign.title,
      desc: t.whyChoose.features.customDesign.desc,
    },
    {
      key: 'modernStyle',
      icon: <Sparkles className="w-5 h-5 text-[#dfb86c]" />,
      title: t.whyChoose.features.modernStyle.title,
      desc: t.whyChoose.features.modernStyle.desc,
    },
    {
      key: 'reliableCommunication',
      icon: <MessageSquare className="w-5 h-5 text-[#f43f5e]" />,
      title: t.whyChoose.features.reliableCommunication.title,
      desc: t.whyChoose.features.reliableCommunication.desc,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0d0d12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>05</span>
            <span>·</span>
            <span>{t.whyChoose.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.whyChoose.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t.whyChoose.description}
          </p>
        </div>

        {/* 6 Features Grid (Clean 3-column on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((item, index) => (
            <div
              key={item.key}
              className="p-6 rounded-xl bg-[#121219] hover:bg-[#161622] border border-white/5 hover:border-white/15 transition-all duration-300 shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#181824] group-hover:bg-white/5 border border-white/10 flex items-center justify-center mb-5 transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-neutral-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                <span>PILLAR 0{index + 1}</span>
                <span className="text-[#dfb86c]">AR DESIGNBD</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

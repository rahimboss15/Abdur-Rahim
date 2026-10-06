import React from 'react';
import {
  Shapes,
  Sparkles,
  Share2,
  Image as ImageIcon,
  CreditCard,
  PlayCircle,
  Sliders,
  Video,
  Cpu,
  Target,
  ArrowRight,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { lang, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shapes':
        return <Shapes className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'PlayCircle':
        return <PlayCircle className="w-5 h-5" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleOrderService = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a0a0c] relative border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#9e1b32]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>02</span>
            <span>·</span>
            <span>{t.services.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t.services.description}
          </p>
        </div>

        {/* 10 Services Grid (Responsive 1/2/3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const title = lang === 'bn' ? service.title.bn : service.title.en;
            const desc = lang === 'bn' ? service.description.bn : service.description.en;
            const deliverables = lang === 'bn' ? service.deliverables.bn : service.deliverables.en;

            return (
              <div
                key={service.id}
                className="group relative rounded-xl bg-[#121219] hover:bg-[#161622] border border-white/5 hover:border-white/15 p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#9e1b32]/5"
              >
                {/* Header of Card */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#181824] group-hover:bg-[#9e1b32]/20 border border-white/10 group-hover:border-[#9e1b32]/40 flex items-center justify-center text-[#dfb86c] group-hover:text-[#f43f5e] transition-colors">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      {service.popular && (
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#dfb86c] bg-[#dfb86c]/10 px-2 py-0.5 rounded">
                          {lang === 'bn' ? 'জনপ্রিয়' : 'Popular'}
                        </span>
                      )}
                      <span className="text-xs font-mono text-neutral-600">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    {desc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      {t.services.deliverablesLabel}
                    </span>
                    <ul className="space-y-1.5">
                      {deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#dfb86c] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => handleOrderService(title)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-neutral-300 hover:text-white group-hover:text-[#dfb86c] transition-colors py-1 cursor-pointer"
                  >
                    <span>{t.services.orderServiceBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

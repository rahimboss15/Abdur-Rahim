import React from 'react';
import { Layers, PenTool, Film, Sparkles, Palette, Smartphone, Cpu, Compass, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skillsData';

export const Skills: React.FC = () => {
  const { lang, t } = useLanguage();

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <PenTool className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0a0a0c] relative border-t border-white/5">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#9e1b32]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>04</span>
            <span>·</span>
            <span>{t.skills.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t.skills.description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((skill, index) => {
            const category = lang === 'bn' ? skill.category.bn : skill.category.en;
            const exp = lang === 'bn' ? skill.experience.bn : skill.experience.en;
            const badge = lang === 'bn' ? skill.badge.bn : skill.badge.en;
            const desc = lang === 'bn' ? skill.description.bn : skill.description.en;

            return (
              <div
                key={skill.id}
                className="group rounded-xl bg-[#121219] hover:bg-[#161622] border border-white/5 hover:border-white/15 p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#181824] group-hover:bg-[#dfb86c]/20 border border-white/10 group-hover:border-[#dfb86c]/30 flex items-center justify-center text-[#dfb86c] transition-colors">
                      {getSkillIcon(skill.icon)}
                    </div>

                    <span className="text-[10px] font-mono uppercase text-[#dfb86c] bg-[#dfb86c]/10 px-2 py-0.5 rounded border border-[#dfb86c]/20">
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs font-medium text-[#dfb86c] mt-0.5">
                    {category}
                  </p>

                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                  <span className="text-neutral-500 font-mono text-[11px]">{t.skills.experienceBadge}</span>
                  <span className="font-semibold text-neutral-300">{exp}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

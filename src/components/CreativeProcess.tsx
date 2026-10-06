import React from 'react';
import { MessageSquareText, Compass, PenTool, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CreativeProcess: React.FC = () => {
  const { lang, t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.process.steps.discuss.title,
      desc: t.process.steps.discuss.desc,
      deliverable: t.process.steps.discuss.deliverable,
      icon: <MessageSquareText className="w-5 h-5 text-[#dfb86c]" />,
    },
    {
      num: '02',
      title: t.process.steps.plan.title,
      desc: t.process.steps.plan.desc,
      deliverable: t.process.steps.plan.deliverable,
      icon: <Compass className="w-5 h-5 text-[#f43f5e]" />,
    },
    {
      num: '03',
      title: t.process.steps.design.title,
      desc: t.process.steps.design.desc,
      deliverable: t.process.steps.design.deliverable,
      icon: <PenTool className="w-5 h-5 text-[#dfb86c]" />,
    },
    {
      num: '04',
      title: t.process.steps.deliver.title,
      desc: t.process.steps.deliver.desc,
      deliverable: t.process.steps.deliver.deliverable,
      icon: <CheckCircle2 className="w-5 h-5 text-[#f43f5e]" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>06</span>
            <span>·</span>
            <span>{t.process.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t.process.description}
          </p>
        </div>

        {/* Responsive Timeline / Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connecting line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-8 pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative rounded-xl bg-[#121219] hover:bg-[#161622] border border-white/5 hover:border-white/15 p-6 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#181824] group-hover:bg-white/5 border border-white/10 flex items-center justify-center transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-neutral-600 group-hover:text-[#dfb86c] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable tag */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                  {lang === 'bn' ? 'ফলাফল / আউটপুট:' : 'Key Deliverable:'}
                </span>
                <span className="text-xs font-medium text-[#dfb86c] block mt-0.5">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

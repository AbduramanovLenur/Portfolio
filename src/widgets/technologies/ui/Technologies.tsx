import { useTranslation } from 'react-i18next';

import { TechCard, technologies } from '@entities/technology';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@shared/ui';

export function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t('technologies.label')}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('technologies.title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('technologies.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {technologies.map((tech) => (
            <StaggerItem key={tech.key}>
              <TechCard tech={tech} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.6} className="mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5 border border-indigo-500/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t('technologies.more_tech')}
                </h3>
                <p className="text-slate-400">{t('technologies.more_tech_desc')}</p>
              </div>
              <div className="flex items-center gap-3 text-indigo-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t('technologies.ready')}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
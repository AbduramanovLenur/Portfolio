import { useTranslation } from 'react-i18next';

import { SocialCard, socialLinks } from '@entities/social-link';
import { GradientText, ScrollReveal, StaggerContainer, StaggerItem } from '@shared/ui';
import { splitAccent } from '@shared/lib';

export function Social() {
  const { t } = useTranslation();

  const { before, after } = splitAccent(t('social.title'), t('social.title_accent'));

  return (
    <section id="social" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {before}
              <GradientText>{t('social.title_accent')}</GradientText>
              {after}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg">{t('social.subtitle')}</p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
          {socialLinks.map((link) => (
            <StaggerItem key={link.key}>
              <SocialCard link={link} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-medium">{t('social.available')}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
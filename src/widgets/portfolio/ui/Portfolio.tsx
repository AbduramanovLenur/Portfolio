import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { ProjectCard, projects } from '@entities/project';
import { Button, GradientText, ScrollReveal, StaggerContainer, StaggerItem } from '@shared/ui';
import { scrollToId, splitAccent } from '@shared/lib';

export function Portfolio() {
  const { t } = useTranslation();

  const { before, after } = splitAccent(t('portfolio.title'), t('portfolio.title_accent'));

  return (
    <section id="portfolio" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t('portfolio.label')}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {before}
              <GradientText>{t('portfolio.title_accent')}</GradientText>
              {after}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.6} className="mt-16 text-center">
          <p className="text-slate-400 mb-6">{t('portfolio.cta')}</p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-300 hover:text-white font-medium px-8 py-6"
              onClick={() => scrollToId('contact')}
            >
              {t('portfolio.cta_button')}
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
import { useTranslation } from 'react-i18next';

import { ContactForm } from '@features/contact-form';
import { GradientText, ScrollReveal } from '@shared/ui';
import { splitAccent } from '@shared/lib';

import { ContactInfo } from './ContactInfo';

export function Contact() {
  const { t } = useTranslation();

  const { before, after } = splitAccent(t('contact.title'), t('contact.title_accent'));

  return (
    <section id="contact" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t('contact.label')}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {before}
              <GradientText>{t('contact.title_accent')}</GradientText>
              {after}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <ScrollReveal delay={0.3} className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="lg:col-span-2">
            <ContactInfo />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
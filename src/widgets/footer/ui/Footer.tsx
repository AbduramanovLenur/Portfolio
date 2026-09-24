import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2 } from 'lucide-react';

import { socialLinks } from '@entities/social-link';
import { scrollToTop } from '@shared/lib';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold">{t('footer.title')}</div>
              <div className="text-slate-500 text-sm">{t('footer.subtitle')}</div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.key}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-slate-500 text-sm flex items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>{t('footer.copyright', { year: currentYear })}</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="text-slate-600 hover:text-indigo-400 text-sm font-medium transition-colors"
            whileHover={{ y: -2 }}
          >
            {t('footer.back_to_top')}
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
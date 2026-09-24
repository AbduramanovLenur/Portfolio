import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { LanguageSwitcher } from '@features/language-switcher';
import { Button } from '@shared/ui';
import { scrollToSelector, scrollToTop } from '@shared/lib';

import { navLinks } from '../model/config';

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    scrollToSelector(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={scrollToTop}
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold hidden sm:block">
                  {t('hero.name')}
                </span>
              </Link>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-white/5"
                  onClick={() => scrollToSection(link.href)}
                >
                  {t(`nav.${link.key}`)}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <div className="hidden lg:block">
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-medium px-6"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('nav.discuss')}
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-slate-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              className="absolute top-16 left-0 right-0 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {t(`nav.${link.key}`)}
                  </motion.button>
                ))}
                <motion.div
                  className="pt-2 border-t border-slate-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-medium"
                    onClick={() => scrollToSection('#contact')}
                  >
                    {t('nav.discuss')}
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
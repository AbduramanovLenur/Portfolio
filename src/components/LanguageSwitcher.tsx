import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { languages } from '@/i18n/config';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <span className="text-sm sm:hidden">{currentLanguage.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute right-0 top-full mt-2 z-50 min-w-[160px] p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-xl"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    i18n.language === lang.code
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                  </div>
                  {i18n.language === lang.code && (
                    <Check className="w-4 h-4" />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

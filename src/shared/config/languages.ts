import en from './locales/en.json';
import ru from './locales/ru.json';
import uz from './locales/uz.json';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'uz', label: 'O\'zbek', flag: '🇺🇿' },
];

export const i18nResources = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
} as const;
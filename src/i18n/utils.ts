import en from "./locales/en.json";
import es from "./locales/es.json";

const translations = { en, es } as const;

const defaultLocale = "en";

export type Locale = keyof typeof translations;

type TranslationKeys = keyof typeof en;

export function useTranslations(locale: Locale) {
  return function t(key: TranslationKeys): string {
    return translations[locale][key] ?? translations[defaultLocale][key] ?? key;
  };
}

import type { Locale } from '../data/content';

export function resolveLocale(systemLanguage: string, preference: string | null = null): Locale {
  if (preference === 'pt' || preference === 'en') return preference;
  return systemLanguage.toLowerCase().split('-')[0] === 'pt' ? 'pt' : 'en';
}

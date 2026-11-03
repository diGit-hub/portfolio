import { useLayoutEffect, useState, useSyncExternalStore } from 'react';
import { resolveLocale } from '../utils/locale';

// The old key was saved automatically, so it cannot identify a manual choice.
const storageKey = 'portfolio-language-preference';

function readPreference() {
  try { return localStorage.getItem(storageKey); }
  catch { return null; }
}

function readSystemLanguage() {
  return navigator.language;
}

function subscribeToSystemLanguage(onChange: () => void) {
  window.addEventListener('languagechange', onChange);
  return () => window.removeEventListener('languagechange', onChange);
}

export default function useLocale() {
  const [preference, setPreference] = useState(readPreference);
  const systemLanguage = useSyncExternalStore(subscribeToSystemLanguage, readSystemLanguage);
  const locale = resolveLocale(systemLanguage, preference);

  useLayoutEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  function toggleLocale() {
    const next = locale === 'pt' ? 'en' : 'pt';
    setPreference(next);
    try { localStorage.setItem(storageKey, next); }
    catch { /* Manual selection still works when browser storage is unavailable. */ }
  }

  return { locale, toggleLocale };
}

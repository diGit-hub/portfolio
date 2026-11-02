import { useLayoutEffect, useState, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';
const storageKey = 'portfolio-theme';
const systemQuery = '(prefers-color-scheme: dark)';

function readPreference(): Theme | null {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

function subscribeToSystemTheme(onChange: () => void) {
  const query = window.matchMedia(systemQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function isSystemDark() {
  return window.matchMedia(systemQuery).matches;
}

export default function useTheme() {
  const [preference, setPreference] = useState(readPreference);
  const systemDark = useSyncExternalStore(subscribeToSystemTheme, isSystemDark);
  const theme: Theme = preference ?? (systemDark ? 'dark' : 'light');

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setPreference(next);
    try { localStorage.setItem(storageKey, next); }
    catch { /* The theme still changes when browser storage is unavailable. */ }
  }

  return { isDark: theme === 'dark', toggleTheme };
}

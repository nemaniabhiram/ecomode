import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'default' | 'eco';

interface EcoModeContextType {
  theme: Theme;
  isEcoMode: boolean;
  toggleEcoMode: () => void;
}

const EcoModeContext = createContext<EcoModeContextType | undefined>(undefined);

export const useEcoMode = () => {
  const context = useContext(EcoModeContext);
  if (context === undefined) {
    throw new Error('useEcoMode must be used within an EcoModeProvider');
  }
  return context;
};

interface EcoModeProviderProps {
  children: ReactNode;
}

export const EcoModeProvider: React.FC<EcoModeProviderProps> = ({ children }) => {
  // initialise theme from localStorage if available
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'default';
    const stored = window.localStorage.getItem('theme');
    return stored === 'eco' ? 'eco' : 'default';
  });
  const isEcoMode = theme === 'eco';
  

  /*
   * Whenever the eco-mode flag changes, add or remove the `eco` class on the
   * <html> element so that Tailwind can apply the dark-mode styles that we have
   * aliased to `.eco` in the Tailwind configuration.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    if (theme === 'eco') {
      root.classList.add('eco');
    } else {
      root.classList.remove('eco');
    }
      // persist choice
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  /**
   * Toggle between the `default` and `eco` themes.
   *
   * We synchronously update:
   * 1. React state (`theme`)
   * 2. <html> class list – this ensures Tailwind `dark` utilities that we
   *    aliased to `.eco` take effect immediately, instead of waiting for the
   *    next `useEffect` tick.
   * 3. `localStorage` – keeps the setting between page reloads.
   */
  const toggleEcoMode = () => {
    setTheme(prev => (prev === 'eco' ? 'default' : 'eco'));
  };

  return (
    <EcoModeContext.Provider value={{ theme, isEcoMode, toggleEcoMode }}>
      {children}
    </EcoModeContext.Provider>
  );
};
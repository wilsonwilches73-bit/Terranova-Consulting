import React from 'react';
import type { Language } from '../types';
import { LanguageIcon } from './icons/ui';
import { Logo } from './icons/Logo';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  languages: Language[];
}

export const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, languages }) => {
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = languages.find(lang => lang.code === e.target.value);
    if (selectedLang) {
      onLanguageChange(selectedLang);
    }
  };

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Logo className="h-8 text-content" />
        <div className="relative flex items-center">
           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-subtle">
            <LanguageIcon />
          </div>
          <select
            value={currentLanguage.code}
            onChange={handleSelectChange}
            className="appearance-none bg-muted hover:bg-border transition-colors duration-200 text-content font-medium py-2 pl-10 pr-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Select language"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code} className="text-content bg-surface">
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};
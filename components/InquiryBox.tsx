import React, { useState } from 'react';
import { SendIcon } from './icons/ui';
import type { Translations } from '../types';

interface InquiryBoxProps {
  onSubmit: (inquiry: string) => void;
  isLoading: boolean;
  translations: Translations;
}

export const InquiryBox: React.FC<InquiryBoxProps> = ({ onSubmit, isLoading, translations }) => {
  const [inquiry, setInquiry] = useState('');
  const T = translations.inquiryBox;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiry.trim() && !isLoading) {
      onSubmit(inquiry.trim());
      setInquiry('');
    }
  };

  return (
    <div className="mb-8 border-t border-border pt-8 mt-8">
      <form onSubmit={handleSubmit}>
        <label htmlFor="inquiry-input" className="block text-lg font-semibold text-content mb-3">
          {T.label}
        </label>
        <div className="relative">
          <textarea
            id="inquiry-input"
            rows={3}
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            className="block w-full p-4 pr-28 bg-background border border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none transition"
            placeholder={T.placeholder}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inquiry.trim()}
            className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed group"
            aria-label={T.label}
          >
            <span className="hidden sm:inline">{isLoading ? T.buttonLoading : T.button}</span>
            <SendIcon className="sm:ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
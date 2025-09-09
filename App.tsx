import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { CountrySelector } from './components/CountrySelector';
import { CategoryTabs } from './components/CategoryTabs';
import { InfoCard } from './components/InfoCard';
import { InquiryBox } from './components/InquiryBox';
import { CurrencyCalculator } from './components/CurrencyCalculator';
import { ImageBanner } from './components/ImageBanner';
import type { Category, Language, Source } from './types';
import { getCategories, LANGUAGES, COUNTRIES } from './constants';
import { getRelocationInfo, getInquiryResponse } from './services/geminiService';

const App: React.FC = () => {
  const [origin, setOrigin] = useState<string>('United States');
  const [destination, setDestination] = useState<string>('');
  const [language, setLanguage] = useState<Language>(LANGUAGES[0]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [relocationData, setRelocationData] = useState<{ text: string; sources: Source[] } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedInquiry, setSubmittedInquiry] = useState<string>('');

  const T = language.translations;
  const memoizedCategories = useMemo(() => getCategories(T.categories), [T.categories]);

  const fetchCategoryInfo = useCallback(async (category: Category, dest: string, lang: Language) => {
    if (!category || !dest) return;
    setIsLoading(true);
    setError(null);
    setRelocationData(null);
    try {
      const info = await getRelocationInfo(category.title, dest, origin, lang.name);
      setRelocationData(info);
    } catch (e) {
      console.error(e);
      setError(T.infoCard.errorSub);
    } finally {
      setIsLoading(false);
    }
  }, [origin, T.infoCard.errorSub]);

  useEffect(() => {
    if (destination && activeCategory) {
      fetchCategoryInfo(activeCategory, destination, language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, language]);


  useEffect(() => {
    if (destination && !activeCategory && !submittedInquiry) {
        setActiveCategory(memoizedCategories[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination, submittedInquiry, memoizedCategories]);


  const handleDestinationChange = (newDestination: string) => {
    setDestination(newDestination);
    setRelocationData(null);
    setError(null);
    setSubmittedInquiry('');
    if (!newDestination) {
      setActiveCategory(null);
    } else {
      setActiveCategory(memoizedCategories[0]);
    }
  };

  const handleCategorySelect = (category: Category) => {
    if (activeCategory?.id === category.id) return;
    setSubmittedInquiry('');
    setActiveCategory(category);
  };
  
  const handleInquirySubmit = useCallback(async (inquiry: string) => {
    if (!destination) return;
    
    setActiveCategory(null);
    setSubmittedInquiry(inquiry);
    setIsLoading(true);
    setError(null);
    setRelocationData(null);
    
    try {
      const info = await getInquiryResponse(inquiry, destination, origin, language.name);
      setRelocationData(info);
    } catch (e) {
      console.error(e);
      setError(T.infoCard.errorSub);
    } finally {
      setIsLoading(false);
    }
  }, [destination, origin, language, T.infoCard.errorSub]);


  return (
    <div className="min-h-screen bg-background text-content font-sans">
      <Header
        currentLanguage={language}
        onLanguageChange={setLanguage}
        languages={LANGUAGES}
      />
      <main className="container mx-auto p-4 md:p-8">
        <ImageBanner 
            destination={destination}
            generatingVisionText={T.imageBanner.generatingVision}
        />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-content mb-2">{T.appTitle}</h1>
            <p className="text-subtle text-lg">{T.appSubtitle}</p>
          </div>

          <div className="bg-surface rounded-3xl shadow-modern-lg overflow-hidden">
            <div className="p-6 md:p-10">
              <CountrySelector
                origin={origin}
                onOriginChange={setOrigin}
                destination={destination}
                onDestinationChange={handleDestinationChange}
                countries={COUNTRIES}
                translations={T}
              />
            </div>

            {destination && (
              <div>
                <div className="px-6 md:px-10">
                    <InquiryBox onSubmit={handleInquirySubmit} isLoading={isLoading} translations={T} />
                    <CategoryTabs
                      categories={memoizedCategories}
                      activeCategory={activeCategory}
                      onSelectCategory={handleCategorySelect}
                    />
                </div>
                <div className="bg-muted rounded-b-lg">
                  {activeCategory?.id === 'finances' && (
                    <CurrencyCalculator
                      origin={origin}
                      destination={destination}
                      translations={T}
                    />
                  )}
                  <InfoCard
                    title={activeCategory?.title || submittedInquiry}
                    destination={destination}
                    content={relocationData?.text ?? ''}
                    sources={relocationData?.sources}
                    isLoading={isLoading}
                    error={error}
                    isEnquiryResult={!activeCategory && !!submittedInquiry}
                    translations={T}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="text-center p-6 text-subtle text-sm">
        <p>{T.footerText(new Date().getFullYear())}</p>
      </footer>
    </div>
  );
};

export default App;

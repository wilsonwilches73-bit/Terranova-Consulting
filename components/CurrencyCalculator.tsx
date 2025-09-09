import React, { useState, useEffect, useMemo } from 'react';
import { getExchangeRate } from '../services/geminiService';
import type { ExchangeRateInfo, Translations } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface CurrencyCalculatorProps {
  origin: string;
  destination: string;
  translations: Translations;
}

export const CurrencyCalculator: React.FC<CurrencyCalculatorProps> = ({ origin, destination, translations }) => {
  const [amount, setAmount] = useState<string>('100');
  const [rateInfo, setRateInfo] = useState<ExchangeRateInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const T = translations.currencyCalculator;

  useEffect(() => {
    const fetchRate = async () => {
      setIsLoading(true);
      setError(null);
      setRateInfo(null);
      try {
        const data = await getExchangeRate(origin, destination);
        setRateInfo(data);
      } catch (e) {
        setError("Could not fetch exchange rate.");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRate();
  }, [origin, destination]);

  const convertedAmount = useMemo(() => {
    if (!rateInfo || !amount) return 0;
    return parseFloat(amount) * rateInfo.rate;
  }, [amount, rateInfo]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 md:p-8 border-b border-border flex items-center justify-center min-h-[150px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !rateInfo) {
    // Render nothing on error to avoid cluttering the UI.
    // The main guide content will still be fetched and displayed.
    return null; 
  }

  return (
    <div className="p-6 md:p-8 border-b border-border">
      <h3 className="text-xl font-bold text-content mb-4">{T.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <div>
          <label htmlFor="amount-to-convert" className="block text-sm font-medium text-subtle mb-1">
            {T.amountLabel}
          </label>
          <div className="relative">
             <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-subtle font-semibold">
              {rateInfo.originCurrencyCode}
            </span>
            <input
              type="text"
              id="amount-to-convert"
              value={amount}
              onChange={handleAmountChange}
              className="block w-full pl-16 pr-3 py-2.5 bg-surface border border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              inputMode="decimal"
            />
          </div>
        </div>
        <div className="relative p-4 bg-background rounded-lg text-center md:text-left">
          <p className="text-2xl font-bold text-primary">
            {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-sm font-medium text-subtle">{rateInfo.destinationCurrencyName} ({rateInfo.destinationCurrencyCode})</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-content">{T.rateLabel}: <span className="text-primary">{T.rateValue(rateInfo.rate, rateInfo.originCurrencyCode, rateInfo.destinationCurrencyCode)}</span></p>
        <p className="text-xs text-subtle mt-1">{T.disclaimer}</p>
      </div>
    </div>
  );
};
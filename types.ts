import { type Translations as TranslationStrings } from './translations';

export interface Category {
  id: string;
  title: string;
  icon: JSX.Element;
}

export interface Language {
  code: string;
  name: string;
  translations: TranslationStrings;
}

export interface Country {
  name: string;
  code: string;
}

export type Translations = TranslationStrings;

export interface ExchangeRateInfo {
  originCurrencyCode: string;
  originCurrencyName: string;
  destinationCurrencyCode: string;
  destinationCurrencyName: string;
  rate: number;
}

export interface Source {
  uri: string;
  title: string;
}
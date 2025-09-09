import React from 'react';
import type { Category, Language, Translations, Country } from './types';
import { VisaIcon, CostOfLivingIcon, HousingIcon, HealthcareIcon, EducationIcon, SafetyIcon, CultureIcon, AttractionsIcon, FinanceIcon, EntertainmentIcon, ClimateIcon, LegalIcon } from './components/icons';
import { translations } from './translations';

export const getCategories = (categoryTranslations: Translations['categories']): Category[] => [
  // Immigration & Core Needs
  { id: 'visa', title: categoryTranslations.visa, icon: <VisaIcon /> },
  { id: 'housing', title: categoryTranslations.housing, icon: <HousingIcon /> },
  { id: 'cost', title: categoryTranslations.cost, icon: <CostOfLivingIcon /> },
  
  // Money & Law
  { id: 'finances', title: categoryTranslations.finances, icon: <FinanceIcon /> },
  { id: 'legal', title: categoryTranslations.legal, icon: <LegalIcon /> },

  // Well-being
  { id: 'health', title: categoryTranslations.health, icon: <HealthcareIcon /> },
  { id: 'safety', title: categoryTranslations.safety, icon: <SafetyIcon /> },
  { id: 'climate', title: categoryTranslations.climate, icon: <ClimateIcon /> },
  
  // Development & Culture
  { id: 'education', title: categoryTranslations.education, icon: <EducationIcon /> },
  { id: 'culture', title: categoryTranslations.culture, icon: <CultureIcon /> },

  // Leisure
  { id: 'attractions', title: categoryTranslations.attractions, icon: <AttractionsIcon /> },
  { id: 'entertainment', title: categoryTranslations.entertainment, icon: <EntertainmentIcon /> },
];

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', translations: translations.en },
  { code: 'es', name: 'Español', translations: translations.es },
  { code: 'fr', name: 'Français', translations: translations.fr },
  { code: 'de', name: 'Deutsch', translations: translations.de },
  { code: 'zh', name: '中文', translations: translations.zh },
  { code: 'ja', name: '日本語', translations: translations.ja },
  { code: 'hi', name: 'हिन्दी', translations: translations.hi },
  { code: 'pt', name: 'Português', translations: translations.pt },
];

export const COUNTRIES: Country[] = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "Australia", code: "AU" },
  { name: "Germany", code: "DE" },
  { name: "France", code: "FR" },
  { name: "Japan", code: "JP" },
  { name: "China", code: "CN" },
  { name: "India", code: "IN" },
  { name: "Brazil", code: "BR" },
  { name: "South Africa", code: "ZA" },
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Argentina", code: "AR" },
  { name: "Austria", code: "AT" },
  { name: "Bangladesh", code: "BD" },
  { name: "Belgium", code: "BE" },
  { name: "Bolivia", code: "BO" },
  { name: "Bulgaria", code: "BG" },
  { name: "Chile", code: "CL" },
  { name: "Colombia", code: "CO" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "Finland", code: "FI" },
  { name: "Greece", code: "GR" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Kenya", code: "KE" },
  { name: "Malaysia", code: "MY" },
  { name: "Mexico", code: "MX" },
  { name: "Morocco", code: "MA" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nigeria", code: "NG" },
  { name: "North Korea", code: "KP" },
  { name: "Norway", code: "NO" },
  { name: "Pakistan", code: "PK" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Singapore", code: "SG" },
  { name: "South Korea", code: "KR" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Thailand", code: "TH" },
  { name: "Turkey", code: "TR" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "Uruguay", code: "UY" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Zimbabwe", code: "ZW" }
];
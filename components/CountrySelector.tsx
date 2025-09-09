import React from 'react';
import { GlobeIcon } from './icons/ui';
import type { Translations, Country } from '../types';

interface CountrySelectorProps {
  origin: string;
  onOriginChange: (country: string) => void;
  destination: string;
  onDestinationChange: (country: string) => void;
  countries: Country[];
  translations: Translations;
}

const SelectInput: React.FC<{
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Country[];
  placeholder?: string;
}> = ({ id, label, value, onChange, options, placeholder }) => {
  const selectedCountry = options.find(c => c.name === value);

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-subtle mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {selectedCountry ? (
            <img 
              src={`https://flagcdn.com/${selectedCountry.code.toLowerCase()}.svg`} 
              alt={`${selectedCountry.name} flag`}
              className="w-6 h-auto rounded-sm object-cover"
            />
          ) : (
            <GlobeIcon />
          )}
        </div>
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="block w-full pl-12 pr-3 py-2.5 bg-background border border-border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all duration-200"
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};


export const CountrySelector: React.FC<CountrySelectorProps> = ({
  origin,
  onOriginChange,
  destination,
  onDestinationChange,
  countries,
  translations
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <SelectInput
        id="origin"
        label={translations.countrySelector.from}
        value={origin}
        onChange={(e) => onOriginChange(e.target.value)}
        options={countries}
      />
      <SelectInput
        id="destination"
        label={translations.countrySelector.to}
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
        options={countries}
        placeholder={translations.countrySelector.placeholder}
      />
    </div>
  );
};
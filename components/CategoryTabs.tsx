import React from 'react';
import type { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: Category | null;
  onSelectCategory: (category: Category) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1" aria-label="Tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={`
              flex items-center whitespace-nowrap py-4 px-1 border-b-2
              font-medium text-sm transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-t-lg
              ${
                activeCategory?.id === category.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-subtle hover:text-content hover:border-slate-300'
              }
            `}
            aria-current={activeCategory?.id === category.id ? 'page' : undefined}
          >
            <span className="mr-2 h-5 w-5">{category.icon}</span>
            <span className="hidden sm:inline">{category.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
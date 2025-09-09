import React, { useState, useRef, useEffect } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import type { Translations, Source } from '../types';
import { DownloadIcon } from './icons/ui';
import { exportToPdf } from '../utils/pdfExporter';

interface InfoCardProps {
  title: string;
  destination: string;
  content: string;
  sources?: Source[];
  isLoading: boolean;
  error: string | null;
  isEnquiryResult?: boolean;
  translations: Translations;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, destination, content, sources, isLoading, error, isEnquiryResult, translations }) => {
  const T = translations.infoCard;
  const [isExporting, setIsExporting] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && content) {
      // Use a short timeout to allow the element to be rendered before starting the transition
      const timer = setTimeout(() => setIsContentLoaded(true), 50);
      return () => clearTimeout(timer);
    } else {
      // Reset when loading new content or if there's no content
      setIsContentLoaded(false);
    }
  }, [isLoading, content]);

  const handleExport = async () => {
    if (!contentRef.current || !content) return;

    setIsExporting(true);
    try {
        const topic = (title || 'guide').replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const dest = destination.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const fileName = `terranova_relocation_guide_to_${dest}_on_${topic}.pdf`;
        await exportToPdf(contentRef.current, fileName);
    } catch (err) {
        console.error("Failed to export PDF:", err);
    } finally {
        setIsExporting(false);
    }
  };

  return (
    <div className="p-6 md:p-8 min-h-[400px]">
      {content && !isLoading && !error && (
        <div className={`flex justify-end items-center mb-4 -mt-2 transition-opacity duration-500 ease-in-out ${isContentLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button
                onClick={handleExport}
                disabled={isExporting}
                className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
                <DownloadIcon className="h-5 w-5 mr-2" />
                {isExporting ? T.exportingButton : T.exportButton}
            </button>
        </div>
      )}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-full text-subtle">
          <LoadingSpinner />
          <p className="mt-4 text-lg font-medium">{T.loading}</p>
          <p className="text-sm">{T.loadingSub}</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-full text-red-600">
          <p className="text-lg font-semibold">{T.error}</p>
          <p>{error}</p>
        </div>
      ) : content ? (
        <div 
            ref={contentRef}
            className={`transition-all duration-500 ease-in-out ${isContentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <article className="prose prose-lg max-w-none prose-headings:text-content prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-content">
            {isEnquiryResult ? (
              <h2 className="!text-3xl !mb-6">
                {T.regarding} <span className="font-normal italic">"{title}"</span>
              </h2>
            ) : (
              <h2 className="!text-3xl !mb-6">{title}</h2>
            )}
            <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
          </article>
          {sources && sources.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold text-content mb-4">{T.sourcesTitle}</h3>
                  <ol className="list-decimal list-inside space-y-2 prose prose-lg max-w-none">
                      {sources.map((source, index) => (
                          <li key={index} className="text-subtle">
                              <a 
                                  href={source.uri} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary-dark hover:underline"
                              >
                                  {source.title}
                              </a>
                          </li>
                      ))}
                  </ol>
              </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
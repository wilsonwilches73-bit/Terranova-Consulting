import React, { useState, useEffect } from 'react';
import { generateDestinationImage } from '../services/geminiService';
import { LoadingSpinner } from './LoadingSpinner';

interface ImageBannerProps {
  destination: string;
  generatingVisionText: string;
}

const staticBannerImageUrl = 'https://images.unsplash.com/photo-1604328698692-f02ea28ab35d?q=80&w=2942&auto=format&fit=crop';

export const ImageBanner: React.FC<ImageBannerProps> = ({ destination, generatingVisionText }) => {
  const [imageUrl, setImageUrl] = useState<string>(staticBannerImageUrl);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // If no destination, reset to the default static image.
    if (!destination) {
      if (imageUrl !== staticBannerImageUrl) {
        setImageUrl(staticBannerImageUrl);
      }
      setIsLoading(false);
      setError(false);
      return;
    }

    let isCancelled = false;
    const generateImage = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const generatedUrl = await generateDestinationImage(destination);
        if (!isCancelled) {
          setImageUrl(generatedUrl);
        }
      } catch (e) {
        console.error("Failed to generate banner image:", e);
        if (!isCancelled) {
          setError(true);
          setImageUrl(staticBannerImageUrl); // Fallback to static image on error
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    // Debounce the call to avoid rapid requests while user is changing selection
    const timer = setTimeout(() => generateImage(), 300);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [destination]);

  return (
    <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-8 max-w-4xl mx-auto shadow-modern-lg bg-slate-200">
      <img 
        src={imageUrl} 
        alt={`Inspiring vista of ${destination || 'relocation'}`} 
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isLoading ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`} 
        key={imageUrl} // Re-trigger CSS transition on src change
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white backdrop-blur-sm">
          <LoadingSpinner />
          <p className="mt-3 font-semibold tracking-wide">{generatingVisionText}</p>
        </div>
      )}
    </div>
  );
};

import { GoogleGenAI, Type } from "@google/genai";
import type { ExchangeRateInfo, Source } from '../types';

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

const extractSources = (response: any): Source[] => {
  try {
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (!chunks || !Array.isArray(chunks)) return [];
    
    return chunks
      .map((chunk: any) => chunk.web)
      .filter((web: any) => web && typeof web.uri === 'string' && typeof web.title === 'string');
  } catch (e) {
    console.error("Error extracting sources:", e);
    return [];
  }
};


export const getRelocationInfo = async (
  category: string,
  destination: string,
  origin: string,
  language: string
): Promise<{ text: string; sources: Source[] }> => {
  const prompt = `
    You are an expert relocation assistant. Your goal is to provide a comprehensive, clear, and encouraging guide for a client using up-to-date information from the web.

    Client's Origin: ${origin}
    Client's Destination: ${destination}
    Topic of Interest: ${category}
    Response Language: ${language}

    Please generate a detailed guide on the topic. The tone should be helpful, professional, and reassuring.
    Structure the information logically with headings, subheadings, bullet points, and bold text for key terms.
    The content must be practical, actionable, and current.
    Start with a brief, encouraging introduction to the topic.
    End with a summary of key takeaways and a word of encouragement.

    Use Markdown for formatting.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return {
        text: response.text,
        sources: extractSources(response),
    };
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    throw new Error("Failed to generate content from Gemini API. The model may have returned an empty or invalid response.");
  }
};

export const getInquiryResponse = async (
  inquiry: string,
  destination: string,
  origin: string,
  language: string
): Promise<{ text: string; sources: Source[] }> => {
  const prompt = `
    You are an expert relocation assistant. Your goal is to provide a comprehensive, clear, and encouraging answer to a client's specific question using up-to-date information from the web.

    Client's Origin: ${origin}
    Client's Destination: ${destination}
    Client's Inquiry: "${inquiry}"
    Response Language: ${language}

    Please provide a detailed and helpful answer to the inquiry. The tone should be helpful, professional, and reassuring.
    If the question is broad, provide a structured overview. If it's specific, answer it directly and thoroughly.
    Use Markdown for formatting (headings, lists, bold text) to ensure clarity and readability.
    Start with a direct acknowledgement of the question.
    End with a helpful summary or a concluding encouraging remark.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return {
        text: response.text,
        sources: extractSources(response),
    };
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    throw new Error("Failed to generate content from Gemini API. The model may have returned an empty or invalid response.");
  }
};

const exchangeRateSchema = {
    type: Type.OBJECT,
    properties: {
        originCurrencyCode: { type: Type.STRING },
        originCurrencyName: { type: Type.STRING },
        destinationCurrencyCode: { type: Type.STRING },
        destinationCurrencyName: { type: Type.STRING },
        rate: { type: Type.NUMBER },
    },
    required: ["originCurrencyCode", "originCurrencyName", "destinationCurrencyCode", "destinationCurrencyName", "rate"],
};


export const getExchangeRate = async (
  origin: string,
  destination: string
): Promise<ExchangeRateInfo> => {
  const prompt = `
    You are a financial data API. For a person moving from "${origin}" to "${destination}", provide the currency exchange information.
    The rate should represent how many units of the destination currency are equal to 1 unit of the origin currency.
    Return only a single, valid JSON object matching the provided schema. Do not include any other text or markdown formatting.
  `;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: exchangeRateSchema,
      },
    });

    const jsonString = response.text.trim();
    const data = JSON.parse(jsonString);

    if (typeof data.rate !== 'number') {
        throw new Error("Invalid exchange rate received from API.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching exchange rate from Gemini API:", error);
    throw new Error("Failed to fetch exchange rate.");
  }
};

export const generateDestinationImage = async (destination: string): Promise<string> => {
  const prompt = `A breathtaking, photorealistic vista of ${destination}, capturing its iconic landscapes and architectural style. A scene that inspires a feeling of new beginnings and adventure. Cinematic lighting, wide-angle shot.`;

  try {
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '16:9',
        },
    });

    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    return `data:image/jpeg;base64,${base64ImageBytes}`;
  } catch (error) {
    console.error("Error generating destination image:", error);
    throw new Error("Failed to generate destination image.");
  }
};

import { useState } from 'react';
import { translateText } from '../services/api';
import { useTranslationHistory } from './useTranslationHistory';

export function useTranslation() {
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addToHistory } = useTranslationHistory();

  const translate = async (text, sourceLang, targetLang, style) => {
    try {
      setIsLoading(true);
      const result = await translateText(text, sourceLang, targetLang, style);
      setTranslation(result);
      addToHistory({
        sourceText: text,
        translation: result,
        sourceLang,
        targetLang,
        style,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { translate, translation, setTranslation, isLoading };
} 
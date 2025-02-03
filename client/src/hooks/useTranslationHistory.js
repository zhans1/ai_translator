import { useState, useEffect } from 'react';

const HISTORY_KEY = 'translation_history';
const MAX_HISTORY_ITEMS = 100;

export function useTranslationHistory() {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (translation) => {
    setHistory(prev => {
      const newHistory = [translation, ...prev].slice(0, MAX_HISTORY_ITEMS);
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    clearHistory
  };
} 
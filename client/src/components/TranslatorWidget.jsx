import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSelect from './LanguageSelect';
import StyleSelect from './StyleSelect';
import TranslationInput from './TranslationInput';

function TranslatorWidget() {
  const [sourceText, setSourceText] = useState('');
  const [sourceLang, setSourceLang] = useState('ru');
  const [targetLang, setTargetLang] = useState('en');
  const [style, setStyle] = useState('formal');
  
  const { translate, translation, setTranslation, isLoading } = useTranslation();

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    await translate(sourceText, sourceLang, targetLang, style);
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translation);
    setTranslation(sourceText);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-7 gap-4 mb-6 items-end">
        <div className="col-span-3">
          <LanguageSelect
            value={sourceLang}
            onChange={setSourceLang}
            label="From"
          />
        </div>
        <button
          onClick={handleSwapLanguages}
          className="col-span-1 p-2 rounded-full hover:bg-gray-100 
                    dark:hover:bg-gray-700 transition-colors"
        >
          🔄
        </button>
        <div className="col-span-3">
          <LanguageSelect
            value={targetLang}
            onChange={setTargetLang}
            label="To"
          />
        </div>
      </div>
      
      <StyleSelect value={style} onChange={setStyle} />
      
      <div className="grid grid-cols-2 gap-6 mt-6">
        <TranslationInput
          value={sourceText}
          onChange={setSourceText}
          placeholder="Enter text to translate..."
        />
        <TranslationInput
          value={translation}
          readOnly
          placeholder="Translation will appear here..."
        />
      </div>
      
      <button
        onClick={handleTranslate}
        disabled={isLoading}
        className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 
                  dark:bg-yellow-500 dark:hover:bg-yellow-600 
                  text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        {isLoading ? 'Translating...' : 'Translate'}
      </button>
    </div>
  );
}

export default TranslatorWidget; 
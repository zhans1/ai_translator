import React from 'react';

function TranslationInput({ value, onChange, placeholder, readOnly = false }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange?.(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full h-40 p-3 border rounded-lg resize-none
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-white
                 placeholder-gray-500 dark:placeholder-gray-400
                 focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                 ${readOnly ? 'cursor-default' : ''}`}
    />
  );
}

export default TranslationInput; 
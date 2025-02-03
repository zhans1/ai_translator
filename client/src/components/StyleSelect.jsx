import React from 'react';

const TRANSLATION_STYLES = [
  { value: 'formal', label: 'Formal' },
  { value: 'informal', label: 'Informal' },
  { value: 'business', label: 'Business Letter' },
  { value: 'flirty', label: 'Flirty' }
];

function StyleSelect({ value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Style
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded-lg bg-white dark:bg-gray-800 
                  dark:border-gray-600 dark:text-white"
      >
        {TRANSLATION_STYLES.map(style => (
          <option key={style.value} value={style.value}>
            {style.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StyleSelect; 
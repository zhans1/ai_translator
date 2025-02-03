import React from 'react';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full min-h-[200px] p-3 border rounded-lg resize-none
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-white
                 placeholder-gray-500 dark:placeholder-gray-400
                 focus:ring-2 focus:ring-amber-500 focus:border-transparent
                 ${className}`}
      {...props}
    />
  );
} 
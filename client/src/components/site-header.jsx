import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="text-amber-600 dark:text-amber-400 font-bold hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
        >
          AI Translator
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
} 
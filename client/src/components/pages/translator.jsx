import React, { useState } from 'react';
import { ArrowRight, Languages } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { useTranslation } from '../../hooks/useTranslation';

export function TranslatorPage() {
  const [sourceText, setSourceText] = useState('');
  const [sourceLang, setSourceLang] = useState('russian');
  const [targetLang, setTargetLang] = useState('english');
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950 dark:to-background p-4 flex flex-col items-center justify-center">
        <Card className="w-full max-w-4xl">
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Languages className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              <h1 className="text-3xl font-bold text-center text-amber-600 dark:text-amber-400">
                AI Translator
              </h1>
            </div>

            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-start">
              <div className="space-y-4">
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="russian">Russian</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                </select>
                <Textarea
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Enter text to translate..."
                />
              </div>

              <div className="flex md:flex-col justify-center pt-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleSwapLanguages}
                  className="rounded-full"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="russian">Russian</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                </select>
                <Textarea
                  value={translation}
                  placeholder="Translation will appear here..."
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-4">
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="business">Business</option>
              </select>

              <Button
                onClick={handleTranslate}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Translating...' : 'Translate'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
} 
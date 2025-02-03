import React from 'react';
import { Card, CardContent } from '../ui/card';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';

export function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6 space-y-6">
            <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400">Privacy Policy</h1>
            
            <section>
              <h2 className="text-2xl font-semibold mt-8">Introduction</h2>
              <p>
                This Privacy Policy explains how AI Translator ("we", "our", or "us") collects, uses, and protects your personal information when you use our translation service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6">
                <li>Text content you submit for translation</li>
                <li>Language preferences</li>
                <li>Translation history (stored locally in your browser)</li>
                <li>Theme preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6">
                <li>Provide translation services</li>
                <li>Improve our translation quality</li>
                <li>Maintain your preferences</li>
                <li>Enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Data Storage</h2>
              <p>
                All translation history is stored locally in your browser using localStorage. 
                We do not store your translations on our servers. Your data remains on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Third-Party Services</h2>
              <p>
                We use Alibaba Cloud's Qwen-Max API for translations. Your text submissions are processed 
                according to Alibaba Cloud's privacy policy and data handling practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Clear your translation history</li>
                <li>Opt out of local storage</li>
                <li>Request information about your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:contact@aitranslator.com" className="text-amber-600 dark:text-amber-400 hover:underline">
                  contact@aitranslator.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be 
                available on this page.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
} 
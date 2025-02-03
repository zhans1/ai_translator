import React from 'react';
import { Card, CardContent } from '../ui/card';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';

export function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6 space-y-6">
            <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400">Terms of Service</h1>
            
            <section>
              <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing and using AI Translator, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">2. Service Description</h2>
              <p>
                AI Translator provides machine translation services using artificial intelligence. While we strive for accuracy, 
                translations may not be perfect and should be used as a reference only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">3. User Responsibilities</h2>
              <ul className="list-disc pl-6">
                <li>You are responsible for the content you submit for translation</li>
                <li>Do not submit sensitive or confidential information</li>
                <li>Do not use the service for illegal purposes</li>
                <li>Do not attempt to reverse engineer the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">4. Service Limitations</h2>
              <p>
                The service is provided "as is" without warranties of any kind. We may impose usage limits 
                or modify the service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">5. Intellectual Property</h2>
              <p>
                All content and technology used in the service remain our property or that of our licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service 
                constitutes acceptance of modified terms.
              </p>
            </section>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
} 
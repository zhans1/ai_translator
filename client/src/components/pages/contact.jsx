import React from 'react';
import { Card, CardContent } from '../ui/card';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { Mail, Github, Linkedin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6 space-y-6">
            <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400">Contact Us</h1>
            
            <section>
              <h2 className="text-2xl font-semibold mt-8">Get in Touch</h2>
              <p>
                Have questions, suggestions, or found a bug? We'd love to hear from you! 
                Here are the ways you can reach us:
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <a 
                  href="mailto:zhansultan18@gmail.com" 
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  zhansultan18@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <a 
                  href="https://github.com/zhansultan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <a 
                  href="https://linkedin.com/in/zhansultan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Response Time</h2>
              <p>
                We typically respond within 24 hours during business days. For urgent matters, 
                please send an email with "URGENT" in the subject line.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">Support Hours</h2>
              <p>
                Our support team is available Monday through Friday, 9:00 AM to 6:00 PM (GMT+6).
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
} 
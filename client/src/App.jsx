import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TranslatorPage } from './components/pages/translator';
import { PrivacyPage } from './components/pages/privacy';
import { TermsPage } from './components/pages/terms';
import { ContactPage } from './components/pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TranslatorPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App; 
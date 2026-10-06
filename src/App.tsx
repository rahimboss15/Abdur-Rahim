import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { WhyChoose } from './components/WhyChoose';
import { CreativeProcess } from './components/CreativeProcess';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-[#9e1b32] selection:text-white">
      {/* Schema.org JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'AR DesignBD',
            alternateName: 'এআর ডিজাইন বিডি',
            founder: {
              '@type': 'Person',
              name: 'Abdur Rahim',
              alternateName: 'আব্দুর রহিম',
              jobTitle: 'Graphic Designer & Digital Creator',
            },
            description:
              'Professional Graphic Design, Branding, Social Media Design, Photo Editing, and Video Editing Services.',
            url: window?.location?.href || 'https://ardesignbd.com',
            priceRange: '$$',
            knowsAbout: [
              'Graphic Design',
              'Logo Design',
              'Brand Identity',
              'Social Media Design',
              'Poster Design',
              'Video Editing',
              'Photo Retouching',
            ],
          }),
        }}
      />

      {/* Sticky Responsive Header with 3-Zone Contract and Language Switcher */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Portfolio onRequestProject={handleSelectService} />
        <Skills />
        <WhyChoose />
        <CreativeProcess />
        <CallToAction />
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}

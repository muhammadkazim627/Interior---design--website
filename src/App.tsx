/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import type { User } from 'firebase/auth';
import { initAuth } from './services/driveAuth';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { FullscreenFeature } from './components/FullscreenFeature';
import { ProcessTimeline } from './components/ProcessTimeline';
import { MaterialitySection } from './components/MaterialitySection';
import { TrustStats } from './components/TrustStats';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CallToAction } from './components/CallToAction';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedProject, setSelectedProject] = useState<string | undefined>();

  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        setCurrentUser(user);
      },
      () => {
        setCurrentUser(null);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectProject = (projectTitle: string) => {
    setSelectedProject(projectTitle);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F0E8] selection:bg-[#D9A85F] selection:text-[#08090B] font-sans antialiased overflow-x-hidden">
      {/* Fixed Sticky Header Navigation */}
      <Navbar currentUser={currentUser} />

      {/* Main Page Flow */}
      <main id="main-content" className="relative">
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. Editorial Brand Statement / The Atelier */}
        <BrandStatement />

        {/* 3. Services & Disciplines Grid */}
        <ServicesSection onSelectServiceForConsultation={handleSelectService} />

        {/* 4. Selected Spaces / Architectural Portfolio */}
        <FeaturedProjects onSelectProject={handleSelectProject} />

        {/* 5. Fullscreen Showcase Feature (The Noir Residence) */}
        <FullscreenFeature onSelectProject={handleSelectProject} />

        {/* 6. Process & Methodology Timeline */}
        <ProcessTimeline />

        {/* 7. Design Philosophy & Materiality Deep-Dive */}
        <MaterialitySection />

        {/* 8. Trust & Quantitative Metrics Strip */}
        <TrustStats />

        {/* 9. Client Testimonials & Endorsements */}
        <TestimonialsSection />

        {/* 10. Powerful Closing Call to Action */}
        <CallToAction />

        {/* 11. High-Conversion Consultation Brief & Google Drive Integration */}
        <ConsultationSection
          currentUser={currentUser}
          selectedPreselectService={selectedService}
          selectedPreselectProject={selectedProject}
        />
      </main>

      {/* 12. Minimalist Architectural Studio Footer */}
      <Footer />
    </div>
  );
}

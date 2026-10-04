/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IdentityAbout } from './components/IdentityAbout';
import { Disciplines } from './components/Disciplines';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TheStack } from './components/TheStack';
import { LabExperiments } from './components/LabExperiments';
import { OpenSourceLog } from './components/OpenSourceLog';
import { Obsessions } from './components/Obsessions';
import { ResumeSection } from './components/ResumeSection';
import { ContactFinal } from './components/ContactFinal';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { SystemInspectorModal } from './components/SystemInspectorModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PROJECTS, PERSONAL_INFO } from './data/portfolioData';
import { ProjectCaseStudy } from './types/portfolio';
import { sound } from './utils/audio';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [directProjectModal, setDirectProjectModal] = useState<ProjectCaseStudy | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Easter egg: Developer console message
  useEffect(() => {
    console.log(
      `%c RISHABH MAHTO — BUILD LOG %c\n` +
      `System initialized: 2026 Edition.\n` +
      `AI Systems × Low-Latency Software × High-Fidelity Design.\n` +
      `GitHub: https://github.com/Rishto07\n` +
      `Transmission: itzrishto@gmail.com\n\n` +
      `Tip: Press Cmd+K or Ctrl+K anywhere to launch the interactive system console.`,
      'background: #FF4B26; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
      'color: #8E8B82;'
    );
  }, []);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K / Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playClick(900);
        setIsTerminalOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsTerminalOpen(false);
        setIsResumeModalOpen(false);
        setDirectProjectModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
  };

  const handleSelectProjectFromTerminal = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setDirectProjectModal(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F2EC] selection:bg-[#FF4B26] selection:text-white relative">
      {/* Adaptive Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Identity & Manifesto */}
        <IdentityAbout />

        {/* Disciplines / What I Build */}
        <Disciplines />

        {/* Projects Centerpiece */}
        <ProjectsShowcase />

        {/* Technical Substrate / The Stack */}
        <TheStack />

        {/* Experiments Lab */}
        <LabExperiments />

        {/* Open Source / Build Log */}
        <OpenSourceLog />

        {/* Curiosities & Obsessions */}
        <Obsessions />

        {/* Resume & Trajectory */}
        <ResumeSection
          isModalOpen={isResumeModalOpen}
          onCloseModal={() => setIsResumeModalOpen(false)}
          onOpenModal={() => setIsResumeModalOpen(true)}
        />

        {/* Contact Finale */}
        <ContactFinal />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* System Intelligence Terminal (WOW Moment) */}
      <SystemInspectorModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onSelectProject={handleSelectProjectFromTerminal}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Direct Project Modal (triggered from Terminal or external selector) */}
      <CaseStudyModal
        project={directProjectModal}
        onClose={() => setDirectProjectModal(null)}
      />
    </div>
  );
}

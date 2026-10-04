import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToProjects = () => {
    sound.playClick(500);
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-grid-subtle"
    >
      {/* Subtle radial ambient spotlight centered on cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(800px circle at ${((mousePos.x + 1) / 2) * 100}% ${((mousePos.y + 1) / 2) * 100}%, rgba(255, 75, 38, 0.045), transparent 70%)`
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full relative z-10">
        {/* Top Metadata Line - Zero-Pill Discipline */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-tech text-[#8E8B82] pb-10 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4B26] animate-pulse" />
            <span className="tracking-widest uppercase font-medium text-[#F4F2EC]">
              SYSTEM READY
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>AUTONOMOUS SYSTEMS & INTERACTION DESIGN</span>
          </div>
          <div className="flex items-center gap-3 text-right">
            <span>2026 EDITION</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="text-[#F4F2EC]">RISHABH MAHTO / DEV LOG</span>
          </div>
        </div>

        {/* Central Typographic Composition */}
        <div className="mt-14 md:mt-20">
          {/* Subtle editorial kicker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold">
              Software Architect & Creative Technologist
            </span>
            <span className="h-px w-12 bg-[#FF4B26]/40" />
            <span className="font-hand text-lg text-white/60 -rotate-2 hidden sm:inline">
              crafting software with teeth & curiosity
            </span>
          </div>

          {/* Massive Name */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[116px] leading-[0.9] font-bold tracking-tight text-[#F4F2EC] select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="block transform transition-transform duration-300 hover:translate-x-1">
              RISHABH
            </span>
            <span className="block italic text-[#8E8B82] hover:text-[#F4F2EC] transition-colors duration-300">
              MAHTO<span className="text-[#FF4B26] not-italic">.</span>
            </span>
          </h1>

          {/* Editorial manifesto statement */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p
                className="text-2xl sm:text-3xl md:text-4xl text-[#F4F2EC] font-light leading-snug tracking-tight"
                style={{ fontFamily: 'var(--font-interface)' }}
              >
                {PERSONAL_INFO.tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#8E8B82] max-w-2xl leading-relaxed">
                Operating across the collision point of distributed backend engines, autonomous agentic loops,
                and hyper-polished kinetic interfaces. Building products that refuse to look like everything else.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={handleScrollToProjects}
                className="group flex items-center justify-between px-6 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#FF4B26] hover:text-white transition-all shadow-md"
                data-cursor="EXPLORE"
              >
                <span>Selected Works (05)</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <button
                onClick={() => {
                  sound.playClick(800);
                  onOpenTerminal();
                }}
                className="flex items-center justify-between px-6 py-4 bg-white/[0.04] text-[#F4F2EC] hover:bg-white/[0.09] border border-white/[0.1] font-mono text-xs rounded-lg transition-all"
                data-cursor="INSPECT"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF4B26]" />
                  <span>Launch System Console</span>
                </div>
                <span className="text-white/40 text-[10px]">⌘K</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full relative z-10 mt-16 pt-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="block text-[#8E8B82] text-[11px] uppercase tracking-wider mb-1">CURRENT STATUS</span>
            <span className="text-[#F4F2EC] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Building & Researching
            </span>
          </div>

          <div>
            <span className="block text-[#8E8B82] text-[11px] uppercase tracking-wider mb-1">CORE AXIS</span>
            <span className="text-[#F4F2EC] font-medium">AI Systems × Desktop × Web</span>
          </div>

          <div>
            <span className="block text-[#8E8B82] text-[11px] uppercase tracking-wider mb-1">ARCHITECTURE</span>
            <span className="text-[#F4F2EC] font-medium">Local-First · Low Latency</span>
          </div>

          <div>
            <span className="block text-[#8E8B82] text-[11px] uppercase tracking-wider mb-1">DIRECT CONTACT</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#F4F2EC] hover:text-[#FF4B26] transition-colors truncate block font-mono"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/portfolioData';
import { TechnologyItem } from '../types/portfolio';
import { Terminal, Check, Layers, Cpu, Database, Globe } from 'lucide-react';
import { sound } from '../utils/audio';

export const TheStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<TechnologyItem>(TECHNOLOGIES[0]);

  const categories = ['All', 'Core', 'AI & Agents', 'Runtimes', 'Data & Cloud'];

  const filtered = activeCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(t => t.category === activeCategory);

  return (
    <section id="stack" className="py-28 md:py-36 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
              04 — ENGINEERING SUBSTRATE
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Stack
            </h2>
          </div>
          <div className="text-sm font-tech text-[#8E8B82] max-w-sm">
            Only technologies proven in production and R&D systems. No theoretical checklist items.
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick(650);
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-[#8E8B82] hover:text-[#F4F2EC] bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
              }`}
              data-cursor="FILTER"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Split: Interactive Technology Grid + Architectural Detail Viewer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => {
                    sound.playClick(750);
                    setSelectedTech(tech);
                  }}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.06] border-[#FF4B26] shadow-md'
                      : 'bg-white/[0.015] border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.03]'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#F4F2EC]">
                      {tech.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#FF4B26]">
                      {tech.level}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[#8E8B82] font-mono">
                    {tech.role}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Detail Pane (5 cols) */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-[#0C0C0F] border border-white/[0.08] rounded-xl space-y-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-[11px] font-mono text-[#FF4B26] uppercase">
                  ACTIVE SPECIFICATION
                </span>
                <h3
                  className="text-2xl font-bold text-[#F4F2EC] mt-0.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {selectedTech.name}
                </h3>
              </div>
              <span className="text-xs font-mono px-2 py-1 bg-white/[0.05] text-[#8E8B82] rounded">
                {selectedTech.category}
              </span>
            </div>

            <div>
              <span className="block text-[11px] font-mono uppercase text-[#8E8B82] mb-1">
                SYSTEM ROLE
              </span>
              <p className="text-sm font-medium text-[#F4F2EC]">
                {selectedTech.role}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-mono uppercase text-[#8E8B82] mb-1">
                ARCHITECTURAL IMPLEMENTATION
              </span>
              <p className="text-sm text-[#9A9890] leading-relaxed font-body">
                {selectedTech.experienceHighlight}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-tech text-[#8E8B82]">
              <span>MASTERY RATING: {selectedTech.level.toUpperCase()}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                VERIFIED IN CODEBASE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

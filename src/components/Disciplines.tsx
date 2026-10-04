import React, { useState } from 'react';
import { DISCIPLINES } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

export const Disciplines: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<number>(0);

  return (
    <section id="disciplines" className="py-28 md:py-36 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
              02 — CAPABILITY MATRIX
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What I Build & Master
            </h2>
          </div>
          <div className="text-sm font-tech text-[#8E8B82] max-w-sm">
            Organized not as a buzzword checklist, but as four deep, interconnected disciplines of modern software construction.
          </div>
        </div>

        {/* 4 Discipline Tabs / Switcher - Interactive Buttons */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 bg-white/[0.02] border border-white/[0.08] rounded-xl">
          {DISCIPLINES.map((item, idx) => {
            const isSelected = activeDiscipline === idx;
            return (
              <button
                key={item.discipline}
                onClick={() => {
                  sound.playClick(700 + idx * 50);
                  setActiveDiscipline(idx);
                }}
                className={`py-3.5 px-4 text-left rounded-lg transition-all ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-[#8E8B82] hover:text-[#F4F2EC] hover:bg-white/[0.03]'
                }`}
                data-cursor="SWITCH"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-wider">0{idx + 1}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B26]" />}
                </div>
                <div className="mt-1 text-xs md:text-sm tracking-wide uppercase font-semibold">
                  {item.discipline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Editorial Showcase */}
        <div className="mt-12 p-8 md:p-12 rounded-xl bg-white/[0.015] border border-white/[0.08] relative overflow-hidden">
          {/* Header of Active Discipline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF4B26] font-semibold">
                DISCIPLINE PROFILE
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F2EC] mt-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {DISCIPLINES[activeDiscipline].discipline}
              </h3>
            </div>
            <p className="text-sm text-[#8E8B82] max-w-md font-body">
              {DISCIPLINES[activeDiscipline].subtitle}
            </p>
          </div>

          {/* Clean Unboxed Skills List - NO PILLS, STRICT EDITORIAL LIST */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DISCIPLINES[activeDiscipline].skills.map((skill, sIdx) => (
              <div
                key={skill.name}
                className="group p-5 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-semibold text-[#F4F2EC] group-hover:text-[#FF4B26] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-xs font-mono text-white/30">
                    {sIdx + 1 < 10 ? `0${sIdx + 1}` : sIdx + 1}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#8E8B82] leading-relaxed">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>

          {/* Architectural Footer Note */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs text-[#8E8B82] font-tech gap-4">
            <span>METHODOLOGY: FIRST PRINCIPLES · DETERMINISTIC VERIFICATION</span>
            <span className="text-[#F4F2EC]">PROVEN ACROSS 5+ PRODUCTION ARCHITECTURES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

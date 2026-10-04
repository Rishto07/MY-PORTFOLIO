import React from 'react';
import { OBSESSIONS } from '../data/portfolioData';
import { Flame, Compass, Sparkles } from 'lucide-react';

export const Obsessions: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold">
            07 — CURIOSITY INDEX
          </span>
          <span className="h-px w-10 bg-[#FF4B26]/40" />
          <span className="font-hand text-xl text-white/50 -rotate-1 hidden sm:inline">
            the rabbit holes currently eating my sleep
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2EC] max-w-2xl mb-12"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Currently Obsessed With
        </h2>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OBSESSIONS.map((obs, idx) => (
            <div
              key={obs.topic}
              className="group p-6 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-[#FF4B26]/50 hover:bg-white/[0.03] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#FF4B26] block mb-2">
                  FOCUS // 0{idx + 1}
                </span>
                <h3
                  className="text-lg font-bold text-[#F4F2EC] group-hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-interface)' }}
                >
                  {obs.topic}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#8E8B82] leading-relaxed font-body">
                  {obs.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-white/30">
                <span>R&D STATUS: ACTIVE</span>
                <span className="group-hover:text-[#FF4B26] transition-colors">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

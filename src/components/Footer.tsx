import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const [clickEasterEggCount, setClickEasterEggCount] = useState(0);

  const scrollToTop = () => {
    sound.playClick(600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSecretClick = () => {
    sound.playClick(900 + clickEasterEggCount * 100);
    const next = clickEasterEggCount + 1;
    setClickEasterEggCount(next);
    if (next === 5) {
      sound.playChime();
      onOpenTerminal();
      setClickEasterEggCount(0);
    }
  };

  return (
    <footer className="py-16 md:py-24 border-t border-white/[0.08] bg-[#050507] relative text-xs">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand Identity & Manifesto */}
        <div className="space-y-1">
          <div
            className="text-lg font-bold text-[#F4F2EC] tracking-tight cursor-pointer select-none flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
            onClick={handleSecretClick}
            title={clickEasterEggCount > 0 ? `${5 - clickEasterEggCount} clicks to secret terminal` : "Built with curiosity"}
          >
            <span>RISHABH MAHTO</span>
            {clickEasterEggCount > 0 && (
              <span className="text-[10px] font-mono text-[#FF4B26]">
                [{clickEasterEggCount}/5]
              </span>
            )}
          </div>
          <p className="text-[#8E8B82] font-mono text-[11px]">
            BUILT WITH CURIOSITY · PROTOTYPED & SHIPPED · © 2026
          </p>
        </div>

        {/* Center: Real Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[#8E8B82]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F4F2EC] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#F4F2EC] transition-colors"
          >
            EMAIL
          </a>
          <button
            onClick={() => {
              sound.playClick(800);
              onOpenTerminal();
            }}
            className="hover:text-[#FF4B26] transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CONSOLE</span>
          </button>
        </div>

        {/* Right: Scroll to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-[#F4F2EC] font-mono transition-all"
            data-cursor="BACK TO TOP"
          >
            <span>TOP OF SYSTEM</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

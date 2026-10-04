import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavigationProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenTerminal,
  onOpenResume,
  soundEnabled,
  onToggleSound
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    sound.playClick(600);
    setMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="group text-lg md:text-xl font-bold tracking-tight text-[#F4F2EC] hover:text-[#FF4B26] transition-colors whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
          data-cursor="TOP"
        >
          RM<span className="text-[#FF4B26] transition-transform inline-block group-hover:translate-x-0.5">.</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-[#9A9890]">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="hover:text-[#F4F2EC] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FF4B26] decoration-2"
            data-cursor="WORK"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-[#F4F2EC] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FF4B26] decoration-2"
            data-cursor="ABOUT"
          >
            About
          </a>
          <a
            href="#disciplines"
            onClick={(e) => handleNavClick(e, 'disciplines')}
            className="hover:text-[#F4F2EC] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FF4B26] decoration-2"
            data-cursor="SKILLS"
          >
            Capabilities
          </a>
          <a
            href="#stack"
            onClick={(e) => handleNavClick(e, 'stack')}
            className="hover:text-[#F4F2EC] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FF4B26] decoration-2"
            data-cursor="STACK"
          >
            The Stack
          </a>
          <a
            href="#lab"
            onClick={(e) => handleNavClick(e, 'lab')}
            className="hover:text-[#F4F2EC] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FF4B26] decoration-2"
            data-cursor="EXPERIMENTS"
          >
            Lab
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-[#F4F2EC] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FF4B26] decoration-2"
            data-cursor="CONTACT"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Sound haptics toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            aria-label={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            className="p-2 text-[#9A9890] hover:text-[#F4F2EC] hover:bg-white/5 rounded-md transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#FF4B26]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal / Inspector trigger */}
          <button
            onClick={() => {
              sound.playClick(900);
              onOpenTerminal();
            }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-tight text-[#9A9890] hover:text-[#F4F2EC] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all"
            data-cursor="CONSOLE"
            title="Open Interactive Console (Cmd+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-[#FF4B26]" />
            <span>Inspector</span>
            <kbd className="text-[10px] text-white/40 bg-black/40 px-1 py-0.5 rounded border border-white/10 ml-0.5">⌘K</kbd>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => {
              sound.playClick(750);
              onOpenResume();
            }}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white bg-[#FF4B26] hover:bg-[#ff6544] rounded-md transition-all shadow-sm hover:shadow-[#FF4B26]/20 whitespace-nowrap flex items-center gap-1.5"
            data-cursor="RESUME"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9A9890] hover:text-white rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/98 border-b border-white/[0.08] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium text-[#9A9890]">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="py-1 text-white hover:text-[#FF4B26]"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="py-1 text-white hover:text-[#FF4B26]"
            >
              About
            </a>
            <a
              href="#disciplines"
              onClick={(e) => handleNavClick(e, 'disciplines')}
              className="py-1 text-white hover:text-[#FF4B26]"
            >
              Capabilities
            </a>
            <a
              href="#stack"
              onClick={(e) => handleNavClick(e, 'stack')}
              className="py-1 text-white hover:text-[#FF4B26]"
            >
              The Stack
            </a>
            <a
              href="#lab"
              onClick={(e) => handleNavClick(e, 'lab')}
              className="py-1 text-white hover:text-[#FF4B26]"
            >
              Lab
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="py-1 text-white hover:text-[#FF4B26]"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-2 text-xs font-mono text-white/70 py-1"
            >
              <Terminal className="w-4 h-4 text-[#FF4B26]" />
              <span>Open System Inspector</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

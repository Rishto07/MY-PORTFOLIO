import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Layers, Cpu, Compass, Flame } from 'lucide-react';
import { sound } from '../utils/audio';

export const IdentityAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: "CODE",
      icon: Cpu,
      tagline: "Low latency, clean contracts, zero excuses.",
      description: "Writing asynchronous Python backends, high-throughput microservices, and type-safe frontend architectures. Software that doesn't just run—it holds up under stress."
    },
    {
      title: "AI",
      icon: Layers,
      tagline: "Beyond conversational prompts to autonomous daemons.",
      description: "Architecting multi-agent loops, localized model pipelines, vision document intelligence, and real-time acoustic streaming. Designing systems where AI is the engine, not a gimmick."
    },
    {
      title: "DESIGN",
      icon: Compass,
      tagline: "Editorial typography and tactile interface physics.",
      description: "Obsessing over whitespace, visual tension, micro-interactions under 200ms, and custom typography hierarchies that command respect from senior creative directors."
    },
    {
      title: "PRODUCTS",
      icon: Flame,
      tagline: "First-principles utility that solves real human friction.",
      description: "Taking ambiguous zero-to-one problems, stripping away unnecessary complexity, and delivering cohesive software products that feel effortless to touch."
    }
  ];

  return (
    <section id="about" className="py-28 md:py-36 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
              01 — IDENTITY & MANIFESTO
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              I don’t really fit into one box.
            </h2>
          </div>
          <div className="text-sm font-tech text-[#8E8B82] max-w-xs">
            Refusing the artificial divide between engineering rigor and creative aesthetic taste.
          </div>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Editorial Manifesto Text */}
          <div className="lg:col-span-7 space-y-6 text-[#9A9890] text-base sm:text-lg leading-relaxed font-body">
            {PERSONAL_INFO.bioManifesto.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-xl sm:text-2xl font-normal text-[#F4F2EC] leading-relaxed" : ""}>
                {paragraph}
              </p>
            ))}

            {/* Handwritten callout */}
            <div className="pt-6 flex items-center gap-4">
              <span className="w-12 h-px bg-[#FF4B26]" />
              <span className="font-hand text-2xl text-[#FF4B26] transform -rotate-1">
                "Code is the instrument; the experience is the composition."
              </span>
            </div>
          </div>

          {/* Right Column: 4 Core Axes Interactive Cards */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8E8B82] block mb-4">
              OPERATIONAL SPECTRUM
            </span>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => {
                    sound.playClick(600 + idx * 80);
                    setActiveTab(idx);
                  }}
                  className={`p-5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.05] border-[#FF4B26]/60 shadow-lg'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.03]'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${isSelected ? 'text-[#FF4B26] bg-[#FF4B26]/10' : 'text-[#8E8B82]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        className="text-lg font-bold tracking-tight text-[#F4F2EC]"
                        style={{ fontFamily: 'var(--font-interface)' }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="text-xs font-tech text-[#8E8B82]">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-medium text-[#FF4B26]">
                    {pillar.tagline}
                  </p>

                  <p className="mt-2 text-xs text-[#8E8B82] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

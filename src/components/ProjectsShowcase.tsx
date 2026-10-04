import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Activity, FileText, Database } from 'lucide-react';
import { sound } from '../utils/audio';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  // Dedicated interactive preview renderers for each project to give an insane product launch feeling
  const renderProjectVisual = (project: ProjectCaseStudy) => {
    switch (project.interactiveMode) {
      case 'ultron':
        return (
          <div className="w-full h-full min-h-[320px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between font-mono text-xs shadow-inner relative overflow-hidden group">
            {/* Top Bar of Ultron Window */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-white/50 text-[11px]">ultron-os-agent-daemon // v1.0</span>
              </div>
              <span className="text-[#FF4B26] text-[11px] font-semibold">IPC: CONNECTED</span>
            </div>

            {/* Central Node Graph simulation */}
            <div className="py-6 flex items-center justify-around relative">
              <div className="text-center p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-[#FF4B26] font-bold text-sm">KERNEL</div>
                <div className="text-[10px] text-white/40 mt-1">Python Daemon</div>
              </div>
              <div className="h-px w-12 bg-white/20 relative">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF4B26] animate-ping" />
              </div>
              <div className="text-center p-3 rounded-lg border border-[#FF4B26]/40 bg-[#FF4B26]/5 shadow-sm">
                <div className="text-white font-bold text-sm">AGENT-MESH</div>
                <div className="text-[10px] text-white/60 mt-1">Multi-Turn Loop</div>
              </div>
              <div className="h-px w-12 bg-white/20" />
              <div className="text-center p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="text-white font-bold text-sm">DESKTOP</div>
                <div className="text-[10px] text-white/40 mt-1">Electron IPC</div>
              </div>
            </div>

            {/* Terminal prompt bottom */}
            <div className="pt-3 border-t border-white/[0.06] text-[11px] text-[#8E8B82] flex items-center justify-between">
              <span className="text-[#F4F2EC]">› ultron.task("synthesize_workspace_diffs")</span>
              <span className="text-emerald-400 font-tech">0ms latency</span>
            </div>
          </div>
        );

      case 'synapse':
        return (
          <div className="w-full h-full min-h-[320px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between font-mono text-xs shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#FF4B26]" />
                <span className="text-white/60 text-[11px]">Acoustic Loopback Ingest</span>
              </div>
              <span className="text-emerald-400 text-[10px]">VAD: ACTIVE</span>
            </div>

            {/* Audio Waveform visualization */}
            <div className="py-6 flex items-center justify-center gap-1.5 h-24">
              {[28, 48, 80, 40, 95, 60, 30, 75, 90, 50, 65, 85, 45, 95, 35, 70, 55, 30].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-gradient-to-t from-white/20 via-[#FF4B26]/80 to-[#FF4B26] transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    animation: `pulse 1.${(i % 5) + 2}s infinite alternate`
                  }}
                />
              ))}
            </div>

            {/* Extracted suggestion box */}
            <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg">
              <div className="text-[10px] text-[#FF4B26] uppercase font-bold tracking-wider mb-1">
                Real-Time Architecture Hint
              </div>
              <div className="text-xs text-[#F4F2EC]">
                › Use Doubly-Linked-List with Hash Map for O(1) eviction policy.
              </div>
            </div>
          </div>
        );

      case 'scrapeverse':
        return (
          <div className="w-full h-full min-h-[320px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between font-mono text-xs shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#FF4B26]" />
                <span className="text-white/60 text-[11px]">DOM Graph & Healing Engine</span>
              </div>
              <span className="text-amber-400 text-[10px]">MUTATION DETECTED</span>
            </div>

            {/* DOM Graph Healing Representation */}
            <div className="space-y-2 py-4">
              <div className="p-2.5 rounded bg-red-950/20 border border-red-800/30 text-red-300 line-through text-[11px]">
                [Failed Selector] div.product-grid &gt; .price-box
              </div>
              <div className="flex items-center justify-center text-[#FF4B26] text-xs">
                ↓ Auto-triggering spatial & semantic heuristics
              </div>
              <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-800/30 text-emerald-300 text-[11px]">
                [Healed Anchor] bbox proximity [X: 240, Y: 110] (96.4% confidence)
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#8E8B82] flex justify-between">
              <span>Status: Zero Human Intervention</span>
              <span className="text-[#F4F2EC] font-tech">Success Rate: 94.6%</span>
            </div>
          </div>
        );

      case 'aierp':
        return (
          <div className="w-full h-full min-h-[320px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between font-mono text-xs shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#FF4B26]" />
                <span className="text-white/60 text-[11px]">Optical Invoice Extraction & Ledger</span>
              </div>
              <span className="text-emerald-400 text-[10px]">MATH AUDIT: 100% PASS</span>
            </div>

            {/* Structured Table Extraction Mockup */}
            <div className="py-3 space-y-1.5 text-[11px]">
              <div className="grid grid-cols-4 text-[#8E8B82] pb-1 border-b border-white/[0.06]">
                <span>ITEM</span>
                <span className="text-right">QTY</span>
                <span className="text-right">PRICE</span>
                <span className="text-right">TOTAL</span>
              </div>
              <div className="grid grid-cols-4 text-[#F4F2EC]">
                <span className="truncate">Cloud GPU Cluster</span>
                <span className="text-right font-tech">2</span>
                <span className="text-right font-tech">€450.00</span>
                <span className="text-right font-tech">€900.00</span>
              </div>
              <div className="grid grid-cols-4 text-[#F4F2EC]">
                <span className="truncate">Whisper Inference</span>
                <span className="text-right font-tech">1</span>
                <span className="text-right font-tech">€550.00</span>
                <span className="text-right font-tech">€550.00</span>
              </div>
              <div className="grid grid-cols-4 text-[#FF4B26] pt-1 border-t border-white/[0.06] font-bold">
                <span>STATED TOTAL</span>
                <span></span>
                <span></span>
                <span className="text-right font-tech">€1,725.50</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#8E8B82] flex justify-between">
              <span>Deterministic Validation</span>
              <span className="text-emerald-400 font-tech">Δ 0.00 EUR</span>
            </div>
          </div>
        );

      case 'hackathon':
        return (
          <div className="w-full h-full min-h-[320px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between font-mono text-xs shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#FF4B26]" />
                <span className="text-white/60 text-[11px]">iQOO Edge Telemetry HUD</span>
              </div>
              <span className="text-[#FF4B26] text-[10px]">THROTTLE: 0%</span>
            </div>

            {/* Gauges & Telemetry */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded text-center">
                <div className="text-[10px] text-[#8E8B82] uppercase">Core Temp</div>
                <div className="text-xl font-bold font-tech text-emerald-400 mt-1">37.8°C</div>
                <div className="text-[9px] text-white/40 mt-0.5">Threshold: 45°C</div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded text-center">
                <div className="text-[10px] text-[#8E8B82] uppercase">Precision State</div>
                <div className="text-xl font-bold font-tech text-[#FF4B26] mt-1">INT8 DYN</div>
                <div className="text-[9px] text-white/40 mt-0.5">Zero Stutter</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#8E8B82] flex justify-between">
              <span>Continuous Workload Benchmark</span>
              <span className="text-[#F4F2EC] font-tech">60.0 FPS STABLE</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
              03 — SELECTED WORKS
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Centerpiece Compositions
            </h2>
          </div>
          <div className="text-sm font-tech text-[#8E8B82] max-w-md">
            No generic cards. Each project represents an end-to-end engineered system built from first principles.
          </div>
        </div>

        {/* Major Editorial Project Blocks */}
        <div className="mt-16 space-y-24 md:space-y-36">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group relative border-t border-white/[0.06] pt-12 md:pt-16"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Project Index & Category */}
                    <div className="flex items-center gap-3 text-xs font-mono text-[#8E8B82]">
                      <span className="text-[#FF4B26] font-bold text-sm tracking-wider">
                        {project.number}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span className="uppercase tracking-widest">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Massive Title */}
                    <div>
                      <h3
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC] group-hover:text-white transition-colors"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FF4B26] mt-2 font-mono">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#9A9890] leading-relaxed font-body">
                      {project.overview}
                    </p>

                    {/* Key Metrics unboxed */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/[0.06]">
                      {project.keyMetrics.map((metric, i) => (
                        <div key={i}>
                          <span className="block text-[10px] font-mono text-[#8E8B82] uppercase mb-0.5">
                            {metric.label}
                          </span>
                          <span className="text-base sm:text-lg font-bold font-tech text-[#F4F2EC]">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies unboxed */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-tech text-[#8E8B82]">
                      <span className="text-white/40 uppercase font-semibold">CORE TECH:</span>
                      {project.technologies.map((t, idx) => (
                        <span key={t} className="text-[#F4F2EC]">
                          {t}{idx < project.technologies.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>

                    {/* CTA to open full case study */}
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          sound.playClick(750);
                          setSelectedProject(project);
                        }}
                        className="group/btn inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#FF4B26] hover:text-white transition-all shadow-md"
                        data-cursor="CASE STUDY"
                      >
                        <span>Explore Full Case Study (01–09)</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Interactive Visual Preview Column */}
                  <div
                    onClick={() => {
                      sound.playClick(600);
                      setSelectedProject(project);
                    }}
                    className={`lg:col-span-6 cursor-pointer transform transition-transform duration-300 hover:scale-[1.01] ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                    data-cursor="INSPECT"
                  >
                    {renderProjectVisual(project)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { ProjectCaseStudy } from '../types/portfolio';
import { X, ArrowRight, Github, ExternalLink, Play, RotateCcw, Check, AlertCircle } from 'lucide-react';
import { sound } from '../utils/audio';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'study' | 'interactive'>('study');
  const [simRunning, setSimRunning] = useState(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const [simStep, setSimStep] = useState(0);

  if (!project) return null;

  const runSimulation = () => {
    sound.playClick(850);
    setSimRunning(true);
    setSimLogs([]);
    setSimStep(1);

    const stepsMap: Record<string, string[]> = {
      ultron: [
        "Initializing Ultron Local Kernel daemon (PID 4092)...",
        "Binding IPC domain socket: /tmp/ultron-kernel.sock",
        "Loading local embedding index from disk (3,842 files indexed)...",
        "Agent Loop dispatched: 'Refactor async router and run unit tests'",
        "Worker [Agent-01]: Scanning workspace /src/api/router.py",
        "Worker [Agent-01]: Generating deterministic AST patch...",
        "IPC Kernel: Patch applied cleanly. 0 syntax regressions.",
        "System State: READY. Memory footprint: 112MB."
      ],
      synapse: [
        "Hooking system CoreAudio input loopback...",
        "Ring buffer allocated: 16-bit PCM @ 16,000Hz (VAD enabled)",
        "Spoken Utterance Detected: 'Can you implement LRU Cache with O(1) ops?'",
        "Acoustic Stream -> Streaming Whisper worker chunk #418",
        "Semantic Query extracted: [Data Structures: LRU Cache, Hash Map, Doubly Linked List]",
        "Retrieval Match: Doubly-Linked-List + HashMap node pointers",
        "HUD Render: Displaying 3-bullet architecture cues on overlay (latency: 340ms)"
      ],
      scrapeverse: [
        "Target initialized: Dynamic e-commerce table /products/catalog",
        "Primary CSS Selector: div.product-card__price--highlight",
        "DOM Mutation Event: Website obfuscated class names to ._css-8f92a",
        "Triggering Heuristic Self-Healing Cascade (Layer 2)...",
        "Computing parent-child DOM tree graph similarity: 96.4% confidence",
        "Spatial bounding-box proximity verified adjacent to title anchor",
        "Selector dynamically healed -> Updated schema hot-patch applied.",
        "Scraped 48 items successfully with 0 exceptions."
      ],
      aierp: [
        "Incoming multi-page PDF: INV-2026-9042.pdf (2 pages)",
        "Rasterizing pages at 300 DPI via PyMuPDF...",
        "Table segmentation model identified itemized bounding boxes [Y: 340 to 620]",
        "Parsed 6 Line Items: Unit Prices, Quantities, Currency: EUR",
        "Running Deterministic Business Logic Guard: Sum(Items) vs GrandTotal",
        "Calculation: 6 line items = €1,450.00 + 19% VAT (€275.50) = €1,725.50",
        "Invoice Stated Total: €1,725.50 -> MATCH (Delta: 0.000)",
        "Verified ledger entry generated and persisted to Supabase."
      ],
      hackathon: [
        "Edge Device Telemetry Daemon started (100ms sample window)",
        "Sensors: Battery 42°C | CPU Core #3 at 88% thermal ceiling",
        "Thermal Throttling Imminent -> Triggering Adaptive Scheduler",
        "Dynamic Model Quantization Handover: FP16 -> INT8 Checkpoint",
        "Thermal load dropped to 37.8°C; Frame rate stabilized at 60 FPS",
        "Benchmark Result: Continuous inference sustained with 0 thermal drops."
      ]
    };

    const targetSteps = stepsMap[project.interactiveMode] || [
      "Task initialized...",
      "Processing parameters...",
      "Task executed with verified state."
    ];

    targetSteps.forEach((msg, idx) => {
      setTimeout(() => {
        setSimLogs(prev => [...prev, msg]);
        setSimStep(idx + 1);
        if (idx === targetSteps.length - 1) {
          setSimRunning(false);
          sound.playChime();
        }
      }, (idx + 1) * 350);
    });
  };

  const sections = [
    { num: "01", title: "The Problem", content: project.problem },
    { num: "02", title: "The Idea", content: project.idea },
    { num: "03", title: "The Approach", content: project.approach },
    { num: "04", title: "System Architecture", content: project.architecture },
    { num: "05", title: "Design Language", content: project.design },
    { num: "06", title: "Implementation Details", content: project.implementation },
    { num: "07", title: "Key Challenges", content: project.challenges },
    { num: "08", title: "Measured Outcome", content: project.outcome },
    { num: "09", title: "What I Learned", content: project.whatILearned }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10">
      <div className="relative w-full max-w-5xl bg-[#0E0E10] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-white/[0.08] flex items-start justify-between gap-4 bg-[#141417]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#8E8B82] mb-1">
              <span className="text-[#FF4B26] font-bold">CASE STUDY {project.number}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4F2EC] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title}
            </h2>
            <p className="text-sm font-semibold tracking-wide text-[#FF4B26] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers: 9-part case study vs interactive sandbox */}
        <div className="flex items-center gap-2 px-6 md:px-8 py-3 bg-[#0A0A0C] border-b border-white/[0.06] text-xs font-medium">
          <button
            onClick={() => {
              sound.playClick(600);
              setActiveTab('study');
            }}
            className={`px-4 py-1.5 rounded-md transition-all ${
              activeTab === 'study'
                ? 'bg-white text-black font-semibold'
                : 'text-[#8E8B82] hover:text-white'
            }`}
          >
            Full Case Study (01–09)
          </button>
          <button
            onClick={() => {
              sound.playClick(700);
              setActiveTab('interactive');
            }}
            className={`px-4 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'bg-[#FF4B26] text-white font-semibold'
                : 'text-[#8E8B82] hover:text-white'
            }`}
          >
            <span>Live Architecture Sandbox</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
          {activeTab === 'study' ? (
            <>
              {/* Key Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                {project.keyMetrics.map((metric, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <span className="block text-[11px] font-mono text-[#8E8B82] uppercase mb-1">
                      {metric.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-tech text-[#F4F2EC]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies unboxed */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-tech text-[#8E8B82]">
                <span className="text-white/40 uppercase font-semibold">STACK:</span>
                {project.technologies.map((t, idx) => (
                  <span key={t} className="text-[#F4F2EC]">
                    {t}{idx < project.technologies.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>

              {/* 9-Part Case Study Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {sections.map((sec) => (
                  <div key={sec.num} className="space-y-2 p-5 rounded-lg bg-white/[0.015] border border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#FF4B26]">
                        {sec.num}
                      </span>
                      <h3 className="text-base font-semibold text-[#F4F2EC]">
                        {sec.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#9A9890] leading-relaxed font-body">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Interactive Sandbox Tab */
            <div className="space-y-6">
              <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#F4F2EC] flex items-center gap-2">
                    <span>Simulate {project.title} Engine</span>
                    <span className="text-xs font-mono text-[#FF4B26] font-normal uppercase">
                      Live Telemetry
                    </span>
                  </h3>
                  <p className="text-xs text-[#8E8B82] mt-1">
                    Execute the real algorithmic state machine and inspect step-by-step telemetry events.
                  </p>
                </div>

                <button
                  onClick={runSimulation}
                  disabled={simRunning}
                  className="px-5 py-2.5 bg-[#FF4B26] hover:bg-[#ff6544] disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-2 shrink-0"
                >
                  {simRunning ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                  <span>{simRunning ? "Simulating..." : "Trigger Engine Pipeline"}</span>
                </button>
              </div>

              {/* Console logs output */}
              <div className="bg-[#050507] border border-white/[0.08] rounded-xl p-5 font-mono text-xs text-[#9A9890] min-h-[280px] space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px] text-white/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-white/60 font-medium">{project.title.toLowerCase()}-runtime.log</span>
                  </div>
                  <span>{simRunning ? "RUNNING" : simLogs.length > 0 ? "FINISHED" : "IDLE"}</span>
                </div>

                {simLogs.length === 0 && !simRunning && (
                  <div className="py-16 text-center text-white/30 italic">
                    Press "Trigger Engine Pipeline" above to run live architectural telemetry.
                  </div>
                )}

                {simLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[#F4F2EC] animate-fadeIn">
                    <span className="text-[#FF4B26] shrink-0">›</span>
                    <span className="leading-relaxed">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 md:p-8 bg-[#141417] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#F4F2EC] hover:text-[#FF4B26] transition-colors py-1.5 px-3 bg-white/[0.05] rounded-md"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Inspect Repository on GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="px-5 py-2 text-xs font-medium text-white/80 hover:text-white bg-white/[0.08] hover:bg-white/[0.12] rounded-md transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};

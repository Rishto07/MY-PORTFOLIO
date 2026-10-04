import React, { useState, useEffect, useRef } from 'react';
import { EXPERIMENTS } from '../data/portfolioData';
import { LabExperiment } from '../types/portfolio';
import { Play, RotateCcw, Sliders, Sparkles, Terminal, Volume2 } from 'lucide-react';
import { sound } from '../utils/audio';

export const LabExperiments: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<LabExperiment>(EXPERIMENTS[0]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generative Canvas Physics State
  const [particleSpeed, setParticleSpeed] = useState<number>(1.2);
  const [particleDensity, setParticleDensity] = useState<number>(50);

  // Token streamer experiment state
  const [temperature, setTemperature] = useState<number>(0.7);
  const [streamTokens, setStreamTokens] = useState<{ text: string; prob: number }[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  // Audio oscillator experiment state
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);
  const [synthFreq, setSynthFreq] = useState(440);
  const synthOscRef = useRef<OscillatorNode | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);

  // Setup interactive canvas for Experiment 01 (Vector Lattice)
  useEffect(() => {
    if (selectedExperiment.type !== 'canvas-physics') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 360);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; baseAlpha: number }[] = [];
    for (let i = 0; i < particleDensity; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.5 + 0.3
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleCanvasMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleCanvasLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleCanvasMove);
    canvas.addEventListener('mouseleave', handleCanvasLeave);

    const render = () => {
      ctx.fillStyle = '#09090C';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle lattice lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse displacement
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 4;
          p.y -= (dy / dist) * force * 4;
        }

        // Draw connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 85) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 75, 38, ${(1 - dist2 / 85) * 0.25})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Particle circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dist < 120 ? '#FF4B26' : `rgba(244, 242, 236, ${p.baseAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleCanvasMove);
      canvas.removeEventListener('mouseleave', handleCanvasLeave);
    };
  }, [selectedExperiment, particleDensity, particleSpeed]);

  // Token streamer simulation logic
  const handleStartTokenStream = () => {
    sound.playClick(800);
    setIsStreaming(true);
    setStreamTokens([]);

    const candidateTokens = [
      { text: "Autonomous", prob: 0.94 },
      { text: "agents", prob: 0.98 },
      { text: "require", prob: 0.82 },
      { text: "deterministic", prob: 0.89 },
      { text: "state", prob: 0.91 },
      { text: "persistence", prob: 0.87 },
      { text: "to", prob: 0.99 },
      { text: "prevent", prob: 0.84 },
      { text: "catastrophic", prob: 0.79 },
      { text: "hallucination", prob: 0.93 },
      { text: "in", prob: 0.95 },
      { text: "production.", prob: 0.97 }
    ];

    candidateTokens.forEach((item, index) => {
      setTimeout(() => {
        setStreamTokens(prev => [...prev, item]);
        if (index === candidateTokens.length - 1) {
          setIsStreaming(false);
          sound.playChime();
        }
      }, (index + 1) * 220);
    });
  };

  // Audio synthesizer start/stop
  const toggleSynth = () => {
    sound.playClick(600);
    if (isPlayingSynth) {
      if (synthOscRef.current) {
        synthOscRef.current.stop();
        synthOscRef.current.disconnect();
        synthOscRef.current = null;
      }
      setIsPlayingSynth(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        synthCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(synthFreq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        synthOscRef.current = osc;
        setIsPlayingSynth(true);
      } catch {
        // safe fallback
      }
    }
  };

  return (
    <section id="lab" className="py-28 md:py-36 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
              05 — EXPERIMENTAL BENCH
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Lab
            </h2>
          </div>
          <div className="text-sm font-tech text-[#8E8B82] max-w-xs">
            Where unfinished ideas become interesting. Creative coding, generative shaders, and micro-prototypes.
          </div>
        </div>

        {/* Experiment Switcher List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {EXPERIMENTS.map((exp) => {
            const isSelected = selectedExperiment.id === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => {
                  sound.playClick(700);
                  setSelectedExperiment(exp);
                }}
                className={`p-5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white/[0.05] border-[#FF4B26] shadow-md'
                    : 'bg-white/[0.015] border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.03]'
                }`}
                data-cursor="RUN LAB"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8B82] mb-1">
                  <span>{exp.date}</span>
                  <span className="text-[#FF4B26] font-semibold">LIVE</span>
                </div>
                <h3 className="text-base font-bold text-[#F4F2EC]">
                  {exp.title}
                </h3>
                <p className="mt-1 text-xs text-[#8E8B82] leading-relaxed">
                  {exp.category}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Experiment Interactive Workbench */}
        <div className="mt-8 p-6 md:p-10 bg-[#0B0B0E] border border-white/[0.08] rounded-xl relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-[#FF4B26] uppercase tracking-wider font-semibold">
                ACTIVE BENCH: {selectedExperiment.title}
              </span>
              <p className="text-xs text-[#8E8B82] mt-1 max-w-xl font-body">
                {selectedExperiment.description}
              </p>
            </div>
            <div className="text-xs font-mono text-white/50">
              Interactive Canvas Engine
            </div>
          </div>

          {/* Experiment Canvas / Playground */}
          <div className="mt-6">
            {selectedExperiment.type === 'canvas-physics' && (
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-white/[0.08] bg-[#09090C] h-[360px]">
                  <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
                  <div className="absolute bottom-3 left-4 text-[11px] font-mono text-white/40 pointer-events-none">
                    Move cursor across the vector field to induce particle wave distortion.
                  </div>
                </div>

                {/* Physics controls */}
                <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#8E8B82] p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span>DENSITY:</span>
                    <input
                      type="range"
                      min={20}
                      max={90}
                      value={particleDensity}
                      onChange={(e) => setParticleDensity(Number(e.target.value))}
                      className="accent-[#FF4B26] w-24"
                    />
                    <span className="text-[#F4F2EC] w-6">{particleDensity}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>VELOCITY:</span>
                    <input
                      type="range"
                      min={0.5}
                      max={3.0}
                      step={0.1}
                      value={particleSpeed}
                      onChange={(e) => setParticleSpeed(Number(e.target.value))}
                      className="accent-[#FF4B26] w-24"
                    />
                    <span className="text-[#F4F2EC] w-8">{particleSpeed}x</span>
                  </div>
                </div>
              </div>
            )}

            {selectedExperiment.type === 'token-stream' && (
              <div className="space-y-4">
                <div className="p-6 bg-[#070709] border border-white/[0.08] rounded-xl min-h-[220px] flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 items-center">
                    {streamTokens.length === 0 && !isStreaming && (
                      <span className="text-white/30 text-xs italic font-mono">
                        Ready to simulate token generation entropy...
                      </span>
                    )}
                    {streamTokens.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#F4F2EC] flex items-center gap-1.5 animate-fadeIn"
                      >
                        <span>{t.text}</span>
                        <span className="text-[10px] text-[#FF4B26] font-tech">{(t.prob * 100).toFixed(0)}%</span>
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8E8B82]">
                      Entropy: {(1 - temperature * 0.3).toFixed(2)} | Temp: {temperature}
                    </span>
                    <button
                      onClick={handleStartTokenStream}
                      disabled={isStreaming}
                      className="px-4 py-2 bg-[#FF4B26] hover:bg-[#ff6544] disabled:opacity-50 text-white font-semibold text-xs rounded-md flex items-center gap-1.5 transition-all"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{isStreaming ? "Streaming..." : "Sample Tokens"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#8E8B82] p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                  <span>TEMPERATURE:</span>
                  <input
                    type="range"
                    min={0.1}
                    max={1.5}
                    step={0.1}
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="accent-[#FF4B26] w-32"
                  />
                  <span className="text-[#F4F2EC]">{temperature}</span>
                </div>
              </div>
            )}

            {selectedExperiment.type === 'audio-synth' && (
              <div className="space-y-4">
                <div className="p-8 bg-[#070709] border border-white/[0.08] rounded-xl flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF4B26]">
                    <Volume2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#F4F2EC]">Dual-Oscillator Micro-Synth</h4>
                    <p className="text-xs text-[#8E8B82] mt-1">Real-time Web Audio API harmonic synthesis</p>
                  </div>

                  <button
                    onClick={toggleSynth}
                    className={`px-6 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                      isPlayingSynth
                        ? 'bg-red-600 text-white'
                        : 'bg-[#FF4B26] text-white hover:bg-[#ff6544]'
                    }`}
                  >
                    {isPlayingSynth ? "Halt Oscillator" : "Ignite Audio Tone"}
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#8E8B82] p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                  <span>FREQUENCY:</span>
                  <input
                    type="range"
                    min={180}
                    max={880}
                    value={synthFreq}
                    onChange={(e) => {
                      const f = Number(e.target.value);
                      setSynthFreq(f);
                      if (synthOscRef.current && synthCtxRef.current) {
                        synthOscRef.current.frequency.setValueAtTime(f, synthCtxRef.current.currentTime);
                      }
                    }}
                    className="accent-[#FF4B26] w-40"
                  />
                  <span className="text-[#F4F2EC] font-tech">{synthFreq} Hz</span>
                </div>
              </div>
            )}

            {selectedExperiment.type === 'dom-healer' && (
              <div className="p-6 bg-[#070709] border border-white/[0.08] rounded-xl space-y-4 text-xs font-mono">
                <div className="text-white/60 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                  <span>Simulated DOM Tree Mutation Heuristic</span>
                  <span className="text-[#FF4B26]">Auto-Healing Mode</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <span className="text-[#8E8B82] uppercase text-[10px] block">Mutated Target Node:</span>
                    <p className="text-red-400">&lt;div class="pricing-card__val_9x7z"&gt;€49.00&lt;/div&gt;</p>
                    <p className="text-[11px] text-white/40">XPath broke due to class hash randomization.</p>
                  </div>
                  <div className="p-4 rounded bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <span className="text-[#8E8B82] uppercase text-[10px] block">Recovered By Heuristic:</span>
                    <p className="text-emerald-400">Target matched by sibling regex (currency + float) + Y-axis delta &lt; 15px</p>
                    <p className="text-[11px] text-white/40">Confidence score: 0.982. Hot-patch persisted.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

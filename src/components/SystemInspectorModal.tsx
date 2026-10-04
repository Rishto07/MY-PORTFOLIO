import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface SystemInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export const SystemInspectorModal: React.FC<SystemInspectorModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
  soundEnabled,
  onToggleSound
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'sys.init',
      output: (
        <div className="space-y-1 text-white/80">
          <div>RISHABH MAHTO // SYSTEM INTELLIGENCE CONSOLE v2026.4</div>
          <div className="text-white/40">Type <span className="text-[#FF4B26] font-bold">help</span> to list available interactive directives. Press <span className="text-white">Esc</span> to close.</div>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick(750);
    setInputVal('');

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-[#9A9890]">
            <div>Available Directives:</div>
            <div><span className="text-[#FF4B26] font-bold">run &lt;project&gt;</span> — Launch live sandbox (ultron, synapse, scrapeverse, aierp, hackathon)</div>
            <div><span className="text-[#FF4B26] font-bold">projects</span> — List all 5 major architectures</div>
            <div><span className="text-[#FF4B26] font-bold">stack</span> — Print active language & engine substrate</div>
            <div><span className="text-[#FF4B26] font-bold">resume</span> — Open full credentials document</div>
            <div><span className="text-[#FF4B26] font-bold">contact</span> — Transmit direct signal to {PERSONAL_INFO.email}</div>
            <div><span className="text-[#FF4B26] font-bold">sound</span> — Toggle Web Audio synthesized micro-haptics</div>
            <div><span className="text-[#FF4B26] font-bold">clear</span> — Purge console buffer</div>
            <div><span className="text-[#FF4B26] font-bold">exit</span> — Return to visual canvas</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1.5 text-xs text-white/90">
            {PROJECTS.map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <span className="text-[#FF4B26] font-bold">{p.number} // {p.title}</span>
                <span className="text-white/50">{p.category}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'run ultron':
      case 'ultron':
        onSelectProject('ultron');
        onClose();
        return;

      case 'run synapse':
      case 'synapse':
        onSelectProject('synapse');
        onClose();
        return;

      case 'run scrapeverse':
      case 'scrapeverse':
        onSelectProject('scrapeverse');
        onClose();
        return;

      case 'run aierp':
      case 'aierp':
        onSelectProject('aierp');
        onClose();
        return;

      case 'run hackathon':
      case 'hackathon':
        onSelectProject('hackathon');
        onClose();
        return;

      case 'stack':
        output = (
          <div className="text-xs text-white/80 space-y-1">
            <div>Core Languages: Python · TypeScript · JavaScript</div>
            <div>AI & Agents: Autonomous Loops · Whisper Streaming · Vision Bounding</div>
            <div>Runtimes: Electron Desktop · FastAPI · React 19 · Node.js</div>
            <div>Databases: Supabase · PostgreSQL · Redis Queues</div>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        onClose();
        return;

      case 'contact':
        output = (
          <div className="text-xs text-white/90 space-y-1">
            <div>Direct transmission channel: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#FF4B26] underline">{PERSONAL_INFO.email}</a></div>
            <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#FF4B26] underline">{PERSONAL_INFO.github}</a></div>
          </div>
        );
        break;

      case 'sound':
        onToggleSound();
        output = (
          <div className="text-xs text-[#FF4B26]">
            Interactive Web Audio toggled: {soundEnabled ? "MUTED" : "ACTIVE"}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <div className="text-xs text-red-400">
            Unknown command '{cmd}'. Type <span className="text-[#FF4B26] font-bold">help</span> for available commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10">
      <div className="relative w-full max-w-3xl bg-[#08080A] border border-white/[0.15] rounded-xl shadow-2xl flex flex-col h-[520px] overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="px-5 py-3.5 bg-[#121215] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-xs text-white/70 font-bold">
              rishabh@kernel ~ system-inspector (interactive)
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="p-1 rounded text-white/50 hover:text-white"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal History */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#FF4B26]">
                <span>›</span>
                <span className="text-[#F4F2EC]">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0E0E12] border-t border-white/[0.08] flex items-center gap-2">
          <span className="text-[#FF4B26] text-sm pl-2 font-bold">›</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'run ultron', 'stack', 'contact'..."
            className="flex-1 bg-transparent text-xs text-[#F4F2EC] placeholder:text-white/30 focus:outline-none"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-white/[0.08] hover:bg-[#FF4B26] text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};

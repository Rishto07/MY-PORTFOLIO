import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Mail, Github, Send } from 'lucide-react';
import { sound } from '../utils/audio';

export const ContactFinal: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    sound.playClick(900);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendTransmission = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Collaboration with Rishabh Mahto'
    )}&body=${encodeURIComponent(message || 'Hi Rishabh,\n\nI saw your portfolio and would love to discuss a project together.')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-32 md:py-48 border-t border-white/[0.08] relative overflow-hidden bg-grid-subtle">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Cinematic Final Statement */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold">
              09 — TRANSMISSION TERMINAL
            </span>
            <span className="h-px w-12 bg-[#FF4B26]/40" />
            <span className="font-hand text-2xl text-white/50 -rotate-1 hidden sm:inline">
              no bureaucracy, straight to engineering
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#8E8B82] font-light tracking-tight"
            style={{ fontFamily: 'var(--font-interface)' }}
          >
            Have an idea worth building?
          </h2>

          <h3
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[112px] font-bold tracking-tight text-[#F4F2EC] leading-[0.95]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            LET’S MAKE IT REAL<span className="text-[#FF4B26]">.</span>
          </h3>

          <p className="max-w-2xl text-base sm:text-lg text-[#9A9890] leading-relaxed pt-2 font-body">
            Whether you’re architecting an ambitious AI system, looking for someone who builds at the frontier of technology and design, or wanting to turn a radical concept into production code.
          </p>
        </div>

        {/* Direct Channels & Interactive Transmission Box */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Affordance */}
            <div className="p-6 md:p-8 bg-[#0C0C0F] border border-white/[0.08] rounded-xl space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8B82]">
                DIRECT TRANSMISSION
              </span>

              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => sound.playClick(600)}
                  className="text-lg sm:text-xl font-bold font-mono text-[#F4F2EC] hover:text-[#FF4B26] transition-colors truncate"
                  data-cursor="EMAIL"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-400 font-mono">
                  Copied email address to clipboard.
                </p>
              )}
            </div>

            {/* GitHub & External Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick(700)}
                className="p-5 bg-white/[0.015] border border-white/[0.06] hover:border-[#FF4B26]/60 rounded-xl transition-all flex items-center justify-between"
                data-cursor="OPEN"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#FF4B26]" />
                  <span className="text-sm font-semibold text-[#F4F2EC]">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8B82]" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20via%20Portfolio`}
                onClick={() => sound.playClick(700)}
                className="p-5 bg-white/[0.015] border border-white/[0.06] hover:border-[#FF4B26]/60 rounded-xl transition-all flex items-center justify-between"
                data-cursor="MESSAGE"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF4B26]" />
                  <span className="text-sm font-semibold text-[#F4F2EC]">Direct Mail</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8B82]" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Interactive Dispatch Box */}
          <div className="lg:col-span-7 p-6 md:p-8 bg-[#0C0C0F] border border-white/[0.08] rounded-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-xs font-mono text-[#FF4B26] uppercase font-bold">
                INSTANT DISPATCH FORM
              </span>
              <span className="text-[11px] font-mono text-white/40">Direct to Inbox</span>
            </div>

            <form onSubmit={handleSendTransmission} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#8E8B82] uppercase mb-1">
                  PROJECT / INQUIRY TOPIC
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Next-Gen AI System / Ambitious Product Build"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-[#F4F2EC] placeholder:text-white/20 focus:outline-none focus:border-[#FF4B26] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#8E8B82] uppercase mb-1">
                  MESSAGE BRIEF
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about what you are building, the constraints, or how we might collaborate..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-[#F4F2EC] placeholder:text-white/20 focus:outline-none focus:border-[#FF4B26] transition-colors resize-none font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF4B26] hover:bg-[#ff6544] text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                data-cursor="DISPATCH"
              >
                <span>Dispatch Transmission to Rishabh</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

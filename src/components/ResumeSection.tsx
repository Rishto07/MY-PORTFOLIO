import React, { useState } from 'react';
import { RESUME_TIMELINE, PERSONAL_INFO, TECHNOLOGIES, PROJECTS } from '../data/portfolioData';
import { Download, FileText, Printer, Check, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface ResumeSectionProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  isModalOpen,
  onCloseModal,
  onOpenModal
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    sound.playClick(800);
    window.print();
  };

  const handleDownload = () => {
    sound.playClick(900);
    // Generate clean text/markdown export of resume
    const content = `
RISHABH MAHTO
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}
Location: ${PERSONAL_INFO.location}

SUMMARY
${PERSONAL_INFO.tagline}
Specializing in autonomous AI systems, low-latency desktop runtimes, resilient web crawlers, and high-fidelity interaction design.

EXPERIENCE & R&D
${RESUME_TIMELINE.map(e => `
[${e.period}] ${e.role} — ${e.organization}
${e.highlights.map(h => `  • ${h}`).join('\n')}
`).join('\n')}

SELECTED PROJECTS
${PROJECTS.map(p => `
• ${p.title} (${p.year}) - ${p.category}
  Overview: ${p.overview}
  Technologies: ${p.technologies.join(', ')}
`).join('\n')}

KEY TECHNOLOGIES
${TECHNOLOGIES.map(t => `• ${t.name} (${t.category}): ${t.role} - ${t.level}`).join('\n')}
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rishabh_Mahto_Resume_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <>
      {/* On-Page Compact Section */}
      <section id="resume" className="py-24 md:py-32 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
                08 — CREDENTIALS & TRAJECTORY
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F2EC]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Experience & Track Record
              </h2>
            </div>
            <button
              onClick={() => {
                sound.playClick(700);
                onOpenModal();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] font-semibold text-xs tracking-wider uppercase rounded-lg transition-all"
              data-cursor="RESUME"
            >
              <FileText className="w-4 h-4 text-[#FF4B26]" />
              <span>Inspect Full Document</span>
            </button>
          </div>

          {/* Timeline list */}
          <div className="mt-12 space-y-8">
            {RESUME_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.12] transition-all grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                <div className="md:col-span-4 space-y-1">
                  <span className="text-xs font-mono text-[#FF4B26] font-bold">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-[#F4F2EC]">
                    {item.role}
                  </h3>
                  <p className="text-xs text-[#8E8B82] font-mono">
                    {item.organization}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <ul className="space-y-2.5">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-[#9A9890] flex items-start gap-2.5 leading-relaxed">
                        <span className="text-[#FF4B26] font-bold mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Modal Viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10">
          <div className="relative w-full max-w-4xl bg-[#0E0E11] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
            {/* Modal Actions Header */}
            <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#141418]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#FF4B26]" />
                <span className="text-sm font-bold text-[#F4F2EC]">
                  Rishabh_Mahto_CV_2026.pdf
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 bg-[#FF4B26] hover:bg-[#ff6544] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all"
                  title="Download Resume"
                >
                  {downloadSuccess ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                  <span>{downloadSuccess ? "Downloaded" : "Download"}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-medium rounded-md flex items-center gap-1.5 transition-all"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick(400);
                    onCloseModal();
                  }}
                  className="p-1.5 rounded-md text-white/60 hover:text-white bg-white/[0.05]"
                  aria-label="Close resume modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Body */}
            <div className="overflow-y-auto p-6 md:p-12 space-y-8 text-[#9A9890] font-body text-sm bg-[#0A0A0C]">
              {/* Document Header */}
              <div className="pb-6 border-b border-white/[0.1] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-[#F4F2EC]" style={{ fontFamily: 'var(--font-display)' }}>
                    RISHABH MAHTO
                  </h1>
                  <p className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold mt-1">
                    Software Architect · AI Systems Builder · Creative Technologist
                  </p>
                </div>
                <div className="text-xs font-mono text-right text-[#8E8B82] space-y-0.5">
                  <div>{PERSONAL_INFO.email}</div>
                  <div>github.com/Rishto07</div>
                  <div>{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF4B26] font-bold mb-2">
                  PROFILE & FOCUS
                </h2>
                <p className="text-xs sm:text-sm text-[#F4F2EC] leading-relaxed">
                  Builder and software engineer operating across autonomous agent loops, local model runtimes, and high-performance user interfaces. Experienced in designing robust distributed scrapers, optical document parsing pipelines, and desktop copilot systems.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF4B26] font-bold mb-4">
                  EXPERIENCE & R&D INITIATIVES
                </h2>
                <div className="space-y-6">
                  {RESUME_TIMELINE.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between text-xs">
                        <span className="font-bold text-[#F4F2EC] text-sm">{item.role}</span>
                        <span className="font-mono text-[#8E8B82]">{item.period}</span>
                      </div>
                      <div className="text-xs text-[#FF4B26] font-medium">{item.organization}</div>
                      <ul className="mt-2 space-y-1.5 text-xs text-[#9A9890]">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-white/40">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Systems */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF4B26] font-bold mb-3">
                  PRIMARY ARCHITECTURES
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {PROJECTS.slice(0, 4).map(p => (
                    <div key={p.id} className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                      <div className="font-bold text-[#F4F2EC]">{p.title} — {p.tagline}</div>
                      <p className="text-[#8E8B82] mt-1 line-clamp-2">{p.overview}</p>
                      <div className="text-[11px] font-mono text-[#FF4B26] mt-2">
                        {p.technologies.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

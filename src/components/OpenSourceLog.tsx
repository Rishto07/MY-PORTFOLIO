import React from 'react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';
import { Github, ArrowUpRight, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';
import { sound } from '../utils/audio';

export const OpenSourceLog: React.FC = () => {
  return (
    <section id="opensource" className="py-28 md:py-36 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF4B26] font-semibold block mb-2">
              06 — OPEN SOURCE & ARCHIVE
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2EC]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Open Source / Build Log
            </h2>
          </div>
          <div className="text-sm font-tech text-[#8E8B82] max-w-xs">
            Directly from repository architectures. Public codebases, open experiments, and software primitives.
          </div>
        </div>

        {/* GitHub Identity Card */}
        <div className="mt-12 p-6 md:p-8 bg-[#0C0C0F] border border-white/[0.08] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#F4F2EC]">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#F4F2EC]">
                  github.com/Rishto07
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs text-[#8E8B82] font-mono mt-0.5">
                Rishabh Mahto · Active Public Repositories & Experimental Systems
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick(800)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#FF4B26] hover:text-white transition-all shadow-sm shrink-0"
            data-cursor="GITHUB"
          >
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {GITHUB_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick(700)}
              className="group p-6 bg-white/[0.015] border border-white/[0.06] hover:border-[#FF4B26]/60 hover:bg-white/[0.03] rounded-xl transition-all flex flex-col justify-between"
              data-cursor="REPO"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8B82] mb-3">
                  <span className="flex items-center gap-1.5 text-white/80 font-medium">
                    <GitBranch className="w-3.5 h-3.5 text-[#FF4B26]" />
                    {repo.name}
                  </span>
                  <span className="text-[11px] text-white/40">{repo.tag}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#9A9890] leading-relaxed font-body">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#8E8B82]">
                <span className="text-[#F4F2EC] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4B26]" />
                  {repo.language}
                </span>
                <span className="group-hover:text-[#FF4B26] transition-colors flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Build Log Philosophy */}
        <div className="mt-12 p-6 rounded-xl border border-white/[0.06] bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8E8B82]">
          <div className="flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-[#FF4B26]" />
            <span className="text-[#F4F2EC]">PHILOSOPHY:</span>
            <span>Deterministic commits, continuous testing, zero bloated dependencies.</span>
          </div>
          <span className="text-white/40">UPDATED REGULARLY ON GITHUB</span>
        </div>
      </div>
    </section>
  );
};

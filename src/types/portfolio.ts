export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  overview: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  idea: string;
  approach: string;
  architecture: string;
  design: string;
  implementation: string;
  challenges: string;
  outcome: string;
  whatILearned: string;
  keyMetrics: { label: string; value: string }[];
  interactiveMode: 'ultron' | 'synapse' | 'scrapeverse' | 'aierp' | 'hackathon';
}

export interface SkillCategory {
  discipline: string;
  subtitle: string;
  skills: { name: string; context: string }[];
}

export interface TechnologyItem {
  name: string;
  category: 'Core' | 'AI & Agents' | 'Runtimes' | 'Data & Cloud';
  role: string;
  level: string;
  experienceHighlight: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  type: 'canvas-physics' | 'token-stream' | 'audio-synth' | 'dom-healer';
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  highlights: string[];
}

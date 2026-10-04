import { ProjectCaseStudy, SkillCategory, TechnologyItem, LabExperiment, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Rishabh Mahto",
  role: "Builder, Engineer & Creative Technologist",
  location: "India · Global Remote",
  email: "itzrishto@gmail.com",
  github: "https://github.com/Rishto07",
  tagline: "I build strange ideas until they become real products.",
  metaTitle: "Rishabh Mahto — Builder, Engineer & Creative Technologist",
  status: "Available for ambitious builds & collaborations",
  focusAreas: "AI Systems × High-Performance Software × Interaction Design",
  bioManifesto: [
    "I don't really fit into one box.",
    "Most people treat engineering and design as two separate planets. One side cares about latency, memory leaks, and IPC buffers; the other cares about typography, rhythm, and how an interaction feels in your fingertips. I refuse to pick a side.",
    "I believe the most dangerous builders are those who can architect a distributed Python backend, design an unhinged editorial layout, tune a local LLM agent to execute autonomous tasks, and obsess over whether a button transition takes 140 or 180 milliseconds.",
    "When I'm not writing code, I'm taking apart complex systems, testing the boundaries of agentic intelligence, and prototyping interfaces that make people stop and question why software looked so boring for the last decade."
  ]
};

export const DISCIPLINES: SkillCategory[] = [
  {
    discipline: "ENGINEERING",
    subtitle: "Robust foundations, low-latency runtimes, and resilient backends",
    skills: [
      { name: "Python", context: "Primary weapon for AI agents, asynchronous daemons, and data pipelines" },
      { name: "TypeScript & JavaScript", context: "Full-stack application logic, type-safe IPC, and frontend architectures" },
      { name: "FastAPI & REST APIs", context: "High-throughput asynchronous microservices with pydantic contract validation" },
      { name: "Electron Desktop", context: "Cross-platform desktop runtimes bridging low-level hardware & web canvas" },
      { name: "Systems & Inter-Process", context: "Event-driven message routing, local sockets, and streaming buffers" },
      { name: "Git Architecture", context: "Granular branching, deterministic build discipline, and open source collaboration" }
    ]
  },
  {
    discipline: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Agentic orchestration, local models, and real-time inference",
    skills: [
      { name: "Autonomous AI Agents", context: "Multi-agent task orchestration, loop execution, and state persistence" },
      { name: "LLM Orchestration", context: "Structured tool-calling, token budgeting, prompt heuristics, and context caching" },
      { name: "Vision & Document Intelligence", context: "Multimodal extraction, bounding-box geometry, and optical parsing" },
      { name: "Acoustic AI & Whisper", context: "Chunked real-time speech transcription pipelines with low latency" },
      { name: "Self-Healing Heuristics", context: "Embedding-driven DOM reconciliation and layout drift correction" }
    ]
  },
  {
    discipline: "PRODUCT ARCHITECTURE",
    subtitle: "From raw ambiguous concepts to tactile, production software",
    skills: [
      { name: "First-Principles Product Thinking", context: "Questioning default paradigms to discover radical UX efficiencies" },
      { name: "Rapid Prototyping", context: "Going from mental concept to working tactile software in 48-hour sprints" },
      { name: "Ergonomic Interaction UX", context: "Zero-friction keyboard flows, low mental overhead, and high velocity" },
      { name: "Deterministic Boundary Rules", context: "Surrounding probabilistic AI models with strict validation checks" }
    ]
  },
  {
    discipline: "CREATIVE COMPUTING",
    subtitle: "Kinetic typography, canvas physics, and digital experiences",
    skills: [
      { name: "Creative Coding & Canvas", context: "Algorithmic visual physics, vector fields, and procedural particles" },
      { name: "Editorial Typography", context: "Art-directed editorial compositions, typographic hierarchy, and rhythm" },
      { name: "Micro-Interaction Choreography", context: "Sub-200ms motion physics, magnetic affordances, and haptic cues" },
      { name: "Audio-Visual Feedback", context: "Synthesized Web Audio clicks and acoustic responsiveness" }
    ]
  }
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "ultron",
    number: "01",
    title: "ULTRON",
    tagline: "AI OPERATING SYSTEM CONCEPT",
    category: "AI Operating System & Agentic Computing",
    year: "2025–2026",
    overview: "A concept for an AI-native operating environment where background autonomous agents, persistent memory, and operating system events merge into a singular fluid canvas.",
    technologies: ["Python", "Electron", "Local LLMs", "React", "TypeScript", "WebSockets"],
    githubUrl: "https://github.com/Rishto07",
    interactiveMode: "ultron",
    problem: "Current operating systems are still anchored in the 1970s Xerox PARC file-and-window hierarchy. AI is treated as an afterthought—an isolated sidebar chatbot in the corner of a web browser rather than an intelligent substrate embedded in the computing environment.",
    idea: "What if the operating system itself was an agentic canvas? What if your terminal, active workspace files, clipboard, and file system were natively observable and actionable by cooperative autonomous agents without leaving your focus flow?",
    approach: "Designed a dual-layer architecture: a native desktop window manager layer built with Electron and React, bridged via high-speed Unix sockets to an asynchronous Python engine running agent task loops and local model inference.",
    architecture: "Event-driven daemon that intercepts workspace file changes, maintains a vector memory buffer of recent developer actions, and orchestrates localized sub-agents for file manipulation, code analysis, and workflow automation.",
    design: "Brutalist dark editorial interface with strict typography, command HUD (invoked via hotkeys), spatial node graphs for active background agents, and distraction-free visual density.",
    implementation: "Engineered a low-latency IPC socket bridge streaming token diffs and file modifications directly into the rendering pipeline in under 45ms, eliminating perceptible UI lag.",
    challenges: "Handling concurrent background agent tasks without race conditions or memory thrashing, and keeping token usage strictly governed by local heuristic boundaries.",
    outcome: "Created a working conceptual prototype demonstrating autonomous multi-step software build tasks and contextual file reasoning without external cloud dependencies.",
    whatILearned: "The next generation of computing will not be conversational text bubbles; it will be contextual, spatial ambient intelligence that acts on your behalf.",
    keyMetrics: [
      { label: "IPC Message Latency", value: "<45ms" },
      { label: "Agentic Loop Autonomy", value: "Multi-Turn" },
      { label: "Cloud Dependency", value: "0% (Local First)" }
    ]
  },
  {
    id: "synapse",
    number: "02",
    title: "SYNAPSE",
    tagline: "AI INTERVIEW COPILOT DESKTOP SUITE",
    category: "Real-Time Acoustic Intelligence & Desktop Systems",
    year: "2025",
    overview: "A discreet, ultra-low latency desktop application providing subtle real-time conversational analysis, technical architecture prompts, and cognitive assistance.",
    technologies: ["Electron", "React", "TypeScript", "WebAudio API", "Whisper Streaming", "FastAPI"],
    githubUrl: "https://github.com/Rishto07",
    interactiveMode: "synapse",
    problem: "High-pressure technical evaluations and design discussions require synthesizing complex algorithms, system constraints, and edge cases under intense cognitive stress, where a single memory lapse can derail hours of preparation.",
    idea: "A stealth, transparent desktop HUD that captures incoming audio streams, transcribes question prompts in real-time, and surfaces concise algorithmic architecture cues without distracting the candidate's natural speech flow.",
    approach: "Built a native acoustic capture pipeline that loops system audio directly into a streaming Whisper worker, immediately extracting core technical constraints and querying a local retrieval store.",
    architecture: "Multi-process desktop system: Audio Capture Daemon -> Ring Buffer Chunking -> Asynchronous Speech-to-Text Token Streamer -> High-Speed Semantic Retrieval & Hint Formatter -> Translucent HUD Overlay.",
    design: "Minimalist stealth overlay with automatic opacity dimming, keyboard hotkey toggles, high-contrast typography, and bulleted architecture hints limited to 3 key bullet points.",
    implementation: "Implemented a rolling audio buffer with voice activity detection (VAD) that delivers continuous speech transcription with sub-400ms turnaround from question utterance to screen display.",
    challenges: "Acoustic echo cancellation across mixed audio outputs and preventing hallucinated hint outputs when technical problem statements are phrased colloquially.",
    outcome: "Benchmarked end-to-end latency from spoken interviewer prompt to bulleted architectural hint on-screen in less than 780 milliseconds.",
    whatILearned: "In high-stakes real-time systems, UI density is the enemy. Giving the user 3 precise, high-signal words is 10x more valuable than 3 paragraphs of verbose AI text.",
    keyMetrics: [
      { label: "Utterance to Hint Latency", value: "<780ms" },
      { label: "HUD Memory Footprint", value: "58MB" },
      { label: "Transcription Turnaround", value: "~350ms" }
    ]
  },
  {
    id: "scrapeverse",
    number: "03",
    title: "SCRAPE-VERSE",
    tagline: "SELF-HEALING WEB SCRAPING PLATFORM",
    category: "Distributed Crawlers & Resilient Data Infrastructure",
    year: "2025",
    overview: "An adaptive web scraping engine that combines computer vision heuristics and semantic DOM graph diffing to heal broken selectors and bypass layout drift.",
    technologies: ["Python", "Playwright", "FastAPI", "Computer Vision", "Redis", "Celery"],
    githubUrl: "https://github.com/Rishto07",
    interactiveMode: "scrapeverse",
    problem: "Traditional web scraping workflows are fundamentally brittle: websites frequently deploy obfuscated CSS class names, dynamic DOM reorganizations, and layout shifts that break static CSS/XPath selectors and require manual developer fixes.",
    idea: "An autonomous scraping engine that doesn't rely solely on static element paths. If a selector fails, the engine analyzes surrounding DOM structure, text semantic similarity, and visual bounding box coordinates to dynamically heal itself.",
    approach: "Designed a multi-stage fallback heuristic cascade: exact selector -> semantic text match -> structural DOM tree parent-child similarity -> spatial bounding box proximity.",
    architecture: "Distributed crawler architecture using Celery worker nodes, Redis state queues, Playwright headless browsers, and an automated selector confidence matrix.",
    design: "Engineering dashboard displaying real-time crawl pipeline health, visual DOM tree snapshots, self-healing event logs, and confidence scoring across scraped target fields.",
    implementation: "Engineered automatic selector mutation logging and hot-patching, enabling the engine to update its internal extraction schema without restarting active batch crawling jobs.",
    challenges: "Managing headless Chromium browser resource spikes during concurrent crawls of complex single-page applications with aggressive hydration cycles.",
    outcome: "Reduced crawler maintenance downtime by over 85% across dynamic e-commerce and regulatory portal data feeds.",
    whatILearned: "Never anchor critical data extraction to volatile CSS classes. True resilience comes from understanding semantic page structure and visual hierarchy.",
    keyMetrics: [
      { label: "Maintenance Downtime Reduction", value: "85%+" },
      { label: "Heuristic Fallback Stages", value: "4 Layers" },
      { label: "Dynamic DOM Recovery Rate", value: "94.6%" }
    ]
  },
  {
    id: "aierp",
    number: "04",
    title: "AI ERP",
    tagline: "INVOICE EXTRACTION & WORKFLOW PIPELINE",
    category: "Enterprise Document Intelligence & Financial Automation",
    year: "2024–2025",
    overview: "Automated optical invoice extraction and reconciliation system turning complex multilingual PDFs into validated, mathematically verified ledger entries.",
    technologies: ["Python", "FastAPI", "Vision LLMs", "PyMuPDF", "PostgreSQL", "Supabase", "React"],
    githubUrl: "https://github.com/Rishto07",
    interactiveMode: "aierp",
    problem: "Enterprise finance and operations teams waste hundreds of hours manually keying invoice numbers, line-item quantities, tax IDs, and bank details from heterogeneous document formats, causing frequent accounting discrepancies.",
    idea: "A zero-shot intelligent document parsing pipeline that couples computer vision extraction with deterministic arithmetic verification and automated ledger generation.",
    approach: "Built a two-stage pipeline: optical table detection and visual text bounding paired with a Vision LLM parser, followed by an immutable arithmetic verification layer.",
    architecture: "FastAPI backend receiving raw PDFs, rasterizing pages with PyMuPDF, extracting hierarchical line items with structured JSON schemas, and verifying line items against grand totals before persisting to PostgreSQL.",
    design: "Side-by-side interactive split verification UI: raw PDF viewer on the left with interactive highlighted bounding boxes, and editable verified accounting ledger on the right.",
    implementation: "Implemented deterministic mathematical guards: an invoice is rejected or flagged for manual review if itemized sums do not match the parsed invoice total within 0.01 currency units.",
    challenges: "Handling multi-page tables with split totals, varied international date formats, and faded or skewed scanned receipts.",
    outcome: "Extracted line-item data across 15+ diverse vendor invoice formats with 99.2% line item field accuracy, eliminating manual entry for verified documents.",
    whatILearned: "In financial and enterprise software, probabilistic AI models must always be bound by strict, deterministic business logic guards.",
    keyMetrics: [
      { label: "Line Item Accuracy", value: "99.2%" },
      { label: "Zero-Shot Formats Handled", value: "15+ Styles" },
      { label: "Math Discrepancy Detection", value: "100%" }
    ]
  },
  {
    id: "hackathon",
    number: "05",
    title: "IQOO HACKATHON",
    tagline: "OPEN INNOVATION & HARDWARE EDGE COMPUTE",
    category: "Performance Engineering & Edge Systems",
    year: "2024",
    overview: "An experimental high-throughput mobile computing solution built during the iQOO Hackathon exploring on-device thermal & compute balancing.",
    technologies: ["Python", "Edge Computing", "Hardware Profiling", "React Native", "TypeScript"],
    githubUrl: "https://github.com/Rishto07",
    interactiveMode: "hackathon",
    problem: "Edge mobile devices undergo rapid thermal throttling and severe frame drops when executing heavy concurrent AI workloads alongside demanding foreground applications.",
    idea: "An adaptive hardware orchestration protocol that dynamically scales model precision and task frequency based on real-time thermal curves and battery discharge telemetry.",
    approach: "Engineered a dynamic scheduler that monitors hardware sensor readings and switches between FP16, INT8, and quantized lightweight model checkpoints on the fly.",
    architecture: "Edge telemetry daemon polling hardware thermal states at 100ms intervals, executing seamless compute handover to maintain steady FPS and zero device thermal shutdown.",
    design: "Technical performance HUD showing real-time temperature heatmaps, compute throughput curves, and active precision states.",
    implementation: "Rapidly built, tested, and validated the complete working prototype within the 48-hour competitive hackathon timeframe.",
    challenges: "Calibrating switching thresholds to prevent thrashing between precision modes during fluctuating ambient temperatures.",
    outcome: "Successfully demonstrated zero-thermal-throttling continuous operation under simulated sustained agent workloads during final hackathon jury evaluation.",
    whatILearned: "Software engineering reaches its pinnacle when you push hardware to the absolute edge under real-time constraints and unforgiving deadlines.",
    keyMetrics: [
      { label: "Hackathon Timeframe", value: "48 Hours" },
      { label: "Thermal Throttling Events", value: "0 Recorded" },
      { label: "Telemetry Polling Rate", value: "100ms" }
    ]
  }
];

export const TECHNOLOGIES: TechnologyItem[] = [
  { name: "Python", category: "Core", role: "Primary Language", level: "Expert", experienceHighlight: "Asynchronous daemons, AI agent loops, Playwright automation, and high-performance microservices" },
  { name: "TypeScript", category: "Core", role: "Full-Stack Language", level: "Advanced", experienceHighlight: "Strictly typed applications, desktop IPC schemas, React component state architectures" },
  { name: "JavaScript (ESNext)", category: "Core", role: "Web Engine", level: "Expert", experienceHighlight: "Event loop dynamics, Web Audio API, Canvas rendering, and modern browser internals" },
  { name: "FastAPI", category: "Runtimes", role: "Backend Framework", level: "Advanced", experienceHighlight: "Asynchronous REST endpoints, pydantic request validation, streaming SSE responses" },
  { name: "React 19", category: "Runtimes", role: "Frontend UI Engine", level: "Advanced", experienceHighlight: "Custom hooks, performance-tuned rendering, server components, and responsive state" },
  { name: "Node.js", category: "Runtimes", role: "Server Runtime", level: "Advanced", experienceHighlight: "Server-side workers, build tooling, stream manipulation, and CLI tools" },
  { name: "Electron", category: "Runtimes", role: "Desktop Platform", level: "Advanced", experienceHighlight: "Native OS integrations, window transparency, acoustic loopback, and multi-process architecture" },
  { name: "LLM APIs & Local Models", category: "AI & Agents", role: "Cognitive Engine", level: "Advanced", experienceHighlight: "Structured outputs, tool calling protocols, latency optimization, and prompt engineering" },
  { name: "Autonomous Agent Loops", category: "AI & Agents", role: "Agentic Systems", level: "Advanced", experienceHighlight: "Multi-turn task execution, state machines, self-reflection, and error recovery" },
  { name: "Computer Vision & OCR", category: "AI & Agents", role: "Document Intelligence", level: "Proficient", experienceHighlight: "Hierarchical table extraction, bounding box normalization, and layout segmentation" },
  { name: "Supabase & PostgreSQL", category: "Data & Cloud", role: "Database Layer", level: "Advanced", experienceHighlight: "Relational modeling, realtime subscriptions, row-level security, and audit trails" },
  { name: "Git & GitHub", category: "Data & Cloud", role: "Version Control", level: "Advanced", experienceHighlight: "Semantic commits, CI/CD automation, open source maintenance, and repository stewardship" }
];

export const EXPERIMENTS: LabExperiment[] = [
  {
    id: "exp-01",
    title: "Vector Lattice Physics",
    category: "Canvas & Generative Physics",
    date: "2026.03",
    description: "Interactive real-time particle grid influenced by pointer velocity, simulating fluid surface tension and kinetic spring equilibrium.",
    type: "canvas-physics"
  },
  {
    id: "exp-02",
    title: "Latency Token Streamer",
    category: "AI Inference Simulation",
    date: "2026.01",
    description: "Visualizer simulating generative token sampling probabilities, temperature distortion, and top-p entropy in real-time.",
    type: "token-stream"
  },
  {
    id: "exp-03",
    title: "Acoustic Waveform Synthesizer",
    category: "Web Audio & Sound Design",
    date: "2025.11",
    description: "Interactive dual-oscillator sound synthesizer rendering harmonic waveforms on HTML5 canvas with real-time frequency modulation.",
    type: "audio-synth"
  },
  {
    id: "exp-04",
    title: "Self-Healing Selector Heuristic",
    category: "DOM Algorithms & Recovery",
    date: "2025.09",
    description: "Interactive simulator demonstrating how DOM tree mutation triggers automatic parent-child semantic recovery without hard failing.",
    type: "dom-healer"
  }
];

export const GITHUB_REPOS = [
  {
    name: "Ultron-Core",
    description: "Agentic execution runtime and event-driven daemon for next-generation desktop computing concepts.",
    language: "Python",
    url: "https://github.com/Rishto07",
    tag: "Concept & Runtime"
  },
  {
    name: "Synapse-Copilot",
    description: "Low-latency desktop copilot providing acoustic speech analysis and architecture hints in real-time.",
    language: "TypeScript / Electron",
    url: "https://github.com/Rishto07",
    tag: "Desktop App"
  },
  {
    name: "ScrapeVerse-Engine",
    description: "Self-healing web crawler utilizing visual bounding boxes and DOM tree heuristics to survive layout drift.",
    language: "Python",
    url: "https://github.com/Rishto07",
    tag: "Data Infrastructure"
  },
  {
    name: "AI-ERP-Extractor",
    description: "Zero-shot optical invoice extraction with deterministic mathematical validation rules and JSON outputs.",
    language: "Python / FastAPI",
    url: "https://github.com/Rishto07",
    tag: "Document Intelligence"
  }
];

export const OBSESSIONS = [
  { topic: "Autonomous AI Agents", detail: "Moving past toy chatbots to robust, self-healing software daemons that execute real multi-step tasks." },
  { topic: "Kinetic & Tactile Interfaces", detail: "Building software that feels weighted, physical, responsive, and alive under the user's cursor." },
  { topic: "Building Weird & Ambitious Products", detail: "Rejecting cookie-cutter templates in favor of novel computing concepts and bold visual statements." },
  { topic: "Local-First Architectures", detail: "Software that runs directly on user hardware with zero cloud latency and total privacy sovereignty." },
  { topic: "Zero Friction Between Thought & Execution", detail: "Creating developer and thinking environments where mental intention translates to code instantly." }
];

export const RESUME_TIMELINE: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "AI Systems Builder & Software Engineer",
    organization: "Independent R&D / Open Source Projects",
    highlights: [
      "Architected Ultron, an experimental AI operating environment combining native Electron desktop canvases with Python agent orchestration.",
      "Developed Synapse, a real-time desktop interview copilot delivering sub-800ms question-to-hint latency using streaming Whisper transcription.",
      "Built Scrape-Verse, an adaptive web crawling platform reducing maintenance downtime by 85% via heuristic DOM recovery.",
      "Engineered AI ERP, an optical invoice extraction system processing multi-vendor invoices with deterministic arithmetic auditing."
    ]
  },
  {
    period: "2024",
    role: "Hackathon Finalist & Innovator",
    organization: "iQOO Open Innovation Hackathon",
    highlights: [
      "Engineered an adaptive edge compute scheduling engine dynamically balancing thermal states and model precision under continuous workload.",
      "Presented working end-to-end prototype to jury, demonstrating zero thermal throttling under sustained agent benchmarks."
    ]
  },
  {
    period: "2022 — 2026",
    role: "Computer Science & Engineering",
    organization: "Engineering Studies & Systems Focus",
    highlights: [
      "Focus on distributed systems, artificial intelligence, algorithms, human-computer interaction, and low-latency software engineering.",
      "Active open source contributor and creator across Python, TypeScript, and modern web architectures."
    ]
  }
];

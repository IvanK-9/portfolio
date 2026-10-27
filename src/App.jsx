import React, { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Mail,
  Check,
  Copy,
  Terminal,
  Layers,
  Database,
  Server,
  Cpu,
  GitBranch,
  ShieldCheck,
  Camera,
  Music,
  Sprout,
  Film,
  MapPin,
  Calendar,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "ivan.kozyrev.dev@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden">
      {/* Background Engineering Hairline Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Top Engineering App Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0c0d0e]/85 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-200">
              IK // DEV
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              sys.status: nominal
            </span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <a
              href="#experience"
              className="px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-150 rounded hover:bg-zinc-850"
            >
              /experience
            </a>
            <a
              href="#projects"
              className="px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-150 rounded hover:bg-zinc-850"
            >
              /projects
            </a>
            <a
              href="#vibe"
              className="px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-150 rounded hover:bg-zinc-850"
            >
              /vibe
            </a>
            <div className="w-px h-4 bg-zinc-800 mx-1 hidden sm:block" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-850 rounded transition-colors duration-150"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-850 rounded transition-colors duration-150"
              aria-label="Email Ivan"
            >
              <Mail className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Bento Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* =========================================================================
            BENTO ROW 1: HERO & CORE ARCHITECTURAL SPEC
           ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Hero Card (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Subtle ambient gradient */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>☀️ Available for LIA / Internship 2027 (Stockholm / Hybrid)</span>
              </div>

              {/* Title & Name */}
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                Ivan Kozyrev
              </h1>
              
              <p className="font-mono text-sm sm:text-base text-zinc-400 font-medium tracking-wide flex items-center gap-2 mb-6">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Backend & Enterprise Software Developer</span>
              </p>

              {/* Description */}
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                I transition my background in industrial automation and complex systems into building reliable backend applications. Focus on clean architecture, object-oriented design, C#, ASP.NET Core, and relational databases.
              </p>
            </div>

            {/* Action Buttons & Links */}
            <div className="mt-8 pt-6 border-t border-zinc-800/70 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-all duration-150 shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 text-sm font-medium transition-colors duration-150"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover/btn:text-white" />
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors duration-150"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Side Spec Card: Core Architecture & Mindset (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                  ENGINEERING_SPECS.CFG
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>

              <div className="space-y-4">
                <div className="group/item">
                  <div className="text-xs font-mono text-emerald-400/90 mb-0.5">01 // PARADIGM</div>
                  <div className="text-sm font-semibold text-white">Clean Architecture & OOP</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Strict layer boundaries, high cohesion, domain-driven modeling.</p>
                </div>

                <div className="group/item">
                  <div className="text-xs font-mono text-emerald-400/90 mb-0.5">02 // RUNTIMES & LANGUAGES</div>
                  <div className="text-sm font-semibold text-white">C# (.NET / ASP.NET) & Java</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Strongly typed enterprise runtimes, concurrent pipelines.</p>
                </div>

                <div className="group/item">
                  <div className="text-xs font-mono text-emerald-400/90 mb-0.5">03 // DATA INTEGRITY</div>
                  <div className="text-sm font-semibold text-white">Relational DBs & EF Core</div>
                  <p className="text-xs text-zinc-400 mt-0.5">ACID compliance, schema migrations, structured queries.</p>
                </div>

                <div className="group/item">
                  <div className="text-xs font-mono text-emerald-400/90 mb-0.5">04 // SYSTEMS CULTURE</div>
                  <div className="text-sm font-semibold text-white">Industrial Reliability Mindset</div>
                  <p className="text-xs text-zinc-400 mt-0.5">Fault isolation, deterministic workflows, zero guesswork.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>LOC: STOCKHOLM / HYBRID</span>
              <span>LIA: 2027</span>
            </div>
          </div>

        </section>


        {/* =========================================================================
            BENTO ROW 2: EXPERIENCE SECTION
           ========================================================================= */}
        <section id="experience" className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">01 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
              EXPERIENCE & INDUSTRIAL BACKGROUND
            </h2>
            <div className="flex-1 h-px bg-zinc-800/70 ml-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Experience Card 1: Utbildning Nord */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-xs bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                    <Calendar className="w-3 h-3" />
                    2025 — PRESENT
                  </span>
                  <span className="font-mono text-xs text-zinc-500">TRAINEESHIP</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-150">
                  Backend Development Trainee
                </h3>
                
                <div className="text-xs font-mono text-zinc-400 mt-0.5 mb-3 flex items-center gap-1.5">
                  <span className="text-zinc-300">Utbildning Nord</span>
                  <span>•</span>
                  <span>Övertorneå / Sweden</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/70 mb-4 font-mono text-xs text-emerald-400/90">
                  Focus: C#, ASP.NET Core, SQL, Java
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Building full-cycle apps, Git workflows, database migrations. Developing end-to-end enterprise solutions with structured validation, clean architecture layers, and relational schema management.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/70 flex flex-wrap gap-1.5">
                {['C#', 'ASP.NET Core', 'SQL', 'Java', 'Database Migrations', 'Git Workflows', 'Clean Architecture'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Card 2: Industrial Automation */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-xs bg-zinc-900 text-zinc-400 border border-zinc-800">
                    <ShieldCheck className="w-3 h-3 text-zinc-400" />
                    PREVIOUS
                  </span>
                  <span className="font-mono text-xs text-zinc-500">INDUSTRIAL SYSTEMS</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors duration-150">
                  Industrial Automation & Technical Media
                </h3>

                <div className="text-xs font-mono text-zinc-400 mt-0.5 mb-3 flex items-center gap-1.5">
                  <span className="text-zinc-300">Beloyarsk NPP • Northvolt</span>
                  <span>•</span>
                  <span>Nuclear & Gigafactory Environments</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/70 mb-4 font-mono text-xs text-zinc-400">
                  Focus: High-consequence systems & physical infrastructure
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Maintained automation systems, strong culture of reliability, strict protocols, and troubleshooting complex physical setups. Cultivated a disciplined engineering mindset where safety, validation, and zero unplanned downtime are standard requirements.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/70 flex flex-wrap gap-1.5">
                {['Automation Systems', 'Reliability Culture', 'Strict Protocols', 'Root Cause Analysis', 'Complex Physical Setups'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            BENTO ROW 3: PROJECTS SECTION
           ========================================================================= */}
        <section id="projects" className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">02 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
              FEATURED BACKEND PROJECTS
            </h2>
            <div className="flex-1 h-px bg-zinc-800/70 ml-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Project 1: Enterprise CRUD System */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs text-emerald-400 font-medium">
                      Fullstack / ASP.NET Core
                    </span>
                  </div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white p-1 rounded transition-colors duration-150 inline-flex items-center gap-1 text-xs font-mono"
                    aria-label="View Enterprise CRUD System repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-150">
                  Enterprise CRUD System
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  A structured web application leveraging ASP.NET Core for robust enterprise data lifecycle management. Implements strict data validation pipelines, decoupled controller actions, and database synchronization via Entity Framework Core.
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    System Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>MVC Pattern</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>EF Core + SQLite</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Model Validation</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Clean Schema</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/70 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['ASP.NET Core', 'EF Core', 'SQLite', 'MVC'].map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-150"
                >
                  <span>Source</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project 2: PhotoManager (Gear & Shoot Manager) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs text-emerald-400 font-medium">
                      Backend / Java
                    </span>
                  </div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white p-1 rounded transition-colors duration-150 inline-flex items-center gap-1 text-xs font-mono"
                    aria-label="View PhotoManager repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-150">
                  PhotoManager (Gear & Shoot Manager)
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  An inventory and session management backend engineered in pure Java. Designed with a strong emphasis on Object-Oriented Design principles, decoupling core domain models and business services from the underlying file I/O persistence.
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    System Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>OO Design</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Business Logic Layer</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>File I/O Streams</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Inventory Domain</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/70 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'OO Architecture', 'File I/O', 'Inventory System'].map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-150"
                >
                  <span>Source</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            BENTO ROW 4: VIBE / HOBBIES & DIRECT CONTACT
           ========================================================================= */}
        <section id="vibe" className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Hobbies / Vibe Card (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">03 //</span>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-medium">
                  OFF-DUTY INTERESTS & VIBE
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500">HUMAN_CONTEXT</span>
            </div>

            <p className="text-sm text-zinc-400 mb-5">
              Disciplined focus in software development balanced with creative and grounding offline pursuits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Hobby 1: Photography */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex items-start gap-3.5 group/hobby">
                <div className="p-2.5 rounded-lg bg-zinc-850 border border-zinc-800 text-zinc-300 group-hover/hobby:text-emerald-400 transition-colors duration-150">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Photography</h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">Concerts / Stage</p>
                  <p className="text-xs text-zinc-500 mt-1">High-energy live lighting, dynamic compositions, timing.</p>
                </div>
              </div>

              {/* Hobby 2: Music */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex items-start gap-3.5 group/hobby">
                <div className="p-2.5 rounded-lg bg-zinc-850 border border-zinc-800 text-zinc-300 group-hover/hobby:text-emerald-400 transition-colors duration-150">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Music</h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">Guitar / 90s Metal</p>
                  <p className="text-xs text-zinc-500 mt-1">Precision riffs, timing, technical tone crafting.</p>
                </div>
              </div>

              {/* Hobby 3: Botany */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex items-start gap-3.5 group/hobby">
                <div className="p-2.5 rounded-lg bg-zinc-850 border border-zinc-800 text-zinc-300 group-hover/hobby:text-emerald-400 transition-colors duration-150">
                  <Sprout className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Botany</h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">Houseplants</p>
                  <p className="text-xs text-zinc-500 mt-1">Systematic care routines, humidity and growth tracking.</p>
                </div>
              </div>

              {/* Hobby 4: Cinema */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex items-start gap-3.5 group/hobby">
                <div className="p-2.5 rounded-lg bg-zinc-850 border border-zinc-800 text-zinc-300 group-hover/hobby:text-emerald-400 transition-colors duration-150">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Cinema</h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">Cinematography & Directing</p>
                  <p className="text-xs text-zinc-500 mt-1">Visual pacing, color theory, classic & modern narratives.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Contact & Dispatch Card (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#121417]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  DISPATCH / CONTACT
                </span>
                <span className="font-mono text-xs text-emerald-400">ONLINE</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Open for 2027 LIA / Internships
              </h3>
              
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Available for software engineering roles in Stockholm or hybrid arrangements. Always interested in talking clean architecture, backend scaling, and dependable systems.
              </p>

              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-zinc-300 break-all mb-4">
                {emailAddress}
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 font-mono text-xs transition-colors duration-150"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-mono text-xs transition-colors duration-150"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Launch Mail Client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* Swiss Minimalist Engineering Footer */}
      <footer className="relative z-10 border-t border-zinc-800/80 mt-12 bg-[#0c0d0e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-medium">Ivan Kozyrev</span>
            <span>—</span>
            <span>Backend & Enterprise Developer</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-600">Stockholm, SE</span>
            <span>•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={`mailto:${emailAddress}`}
              className="text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

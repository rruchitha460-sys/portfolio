import React, { useState, useEffect, useRef } from "react";
import {
  Terminal, Shield, Cpu, Search, Mail,
  ChevronRight, Radar, Lock, Database, FileCode2, ExternalLink, MapPin
} from "lucide-react";

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.94 3.19 9.13 7.62 10.6.56.1.76-.24.76-.54v-2.02c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.7-1.49-2.47-.28-5.08-1.24-5.08-5.5 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.6 10.6 0 0 1 5.6 0c2.14-1.44 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.27-2.62 5.21-5.11 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.03 11.03 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
    </svg>
  );
}

/* ---------------------------------------------------------
   TOKENS
   bg-ink   #0B0F14   deep navy-black
   surface  #121820   panel
   line     #1F2A35   hairline borders
   text     #E7EDF2   primary text
   muted    #7C8AA0   secondary text
   scan     #4FE3C1   cyan-teal — "scan / verified" accent
   pulse    #8A7CFF   violet — "AI / model" accent
   alert    #FF6B5E   warm red — used sparingly for emphasis dots
--------------------------------------------------------- */

const skillGroups = [
  {
    label: "Languages",
    icon: FileCode2,
    items: ["Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    label: "AI / ML Stack",
    icon: Cpu,
    items: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "RAG Pipelines"],
  },
  {
    label: "Security & Testing",
    icon: Shield,
    items: ["Nmap", "Wireshark", "Metasploit", "Kali Linux", "Selenium", "Gatling"],
  },
  {
    label: "Tools & Platforms",
    icon: Database,
    items: ["Postman", "GitHub", "VS Code", "Power BI", "Excel"],
  },
];

const projects = [
  {
    id: "Veriscope",
    tag: "FINAL YEAR PROJECT",
    title: "Veriscope",
    subtitle: "AI-powered research & verification platform",
    demo: "https://veriscope.streamlit.app/",
    stack: ["Python", "Streamlit", "LangChain", "HuggingFace", "FAISS"],
    desc:
      "A document Q&A system built on RAG — retrieves context from PDFs and URLs, ranks it through a HuggingFace + FAISS vector pipeline, and answers through an LLM. Six tools live under one Streamlit interface: Document Q&A, Fake News Detector, Plagiarism Checker, AI Content Detector, Language Translator, and URL Trust Checker.",
    points: [
      "Tuned chunking strategy to improve retrieval accuracy",
      "Built the embedding + vector search pipeline from scratch",
      "Designed the interface for real-time interaction",
    ],
  },
  {
    id: "job-searcher",
    tag: "AGENTIC AI",
    title: "AI Job Searcher Agent",
    subtitle: "Autonomous job discovery & matching agent",
    demo: "https://rruchitha460-sys-ai-job-search-agent-app-6himkr.streamlit.app/",
    stack: ["Python", "LangChain", "FAISS", "SQLite", "Streamlit", "OpenRouter", "APScheduler"],
    desc:
      "An end-to-end AI agent that autonomously fetches job postings from Adzuna, Greenhouse, and Lever, then semantically matches them against a resume using sentence embeddings and FAISS vector search, with an LLM layer explaining each match and suggesting resume improvements.",
    points: [
      "Filters out seniority-mismatched roles through NLP pattern matching before they reach the results",
      "Built the matching pipeline end-to-end — sentence embeddings, FAISS indexing, and LLM-generated explanations",
      "Runs daily on APScheduler with zero manual input, deployed live via Streamlit Cloud + GitHub CI/CD",
    ],
  },
  {
    id: "spotify",
    tag: "DATA ANALYTICS",
    title: "Spotify Streaming Dashboard",
    subtitle: "Interactive Power BI dashboard",
    stack: ["Power BI", "Power Query"],
    desc:
      "Dashboard analyzing songs, artists, and streaming trends, with dynamic filters and slicers for exploring the data live.",
    points: [
      "Transformed and cleaned raw streaming data with Power Query",
      "Built slicers for genre, artist, and trend-based filtering",
    ],
  },
];

const experience = [
  {
    role: "Cyber Security Intern",
    org: "IBM",
    date: "Mar 2026 – May 2026",
    points: [
      "Worked with Kali Linux for command-line operations, file management, and system navigation",
      "Ran network scanning and information gathering with Nmap, WHOIS, and Wireshark to identify hosts and vulnerabilities",
      "Applied cryptography, hashing, and encryption concepts to secure data",
      "Conducted vulnerability scanning and basic exploitation using Nmap and Metasploit; explored bug bounty methodology",
    ],
  },
  {
    role: "Software Testing Intern",
    org: "CODTECH IT Solutions",
    date: "Feb 2026 – Mar 2026",
    points: [
      "Automated test scripts with Selenium WebDriver (Python) to validate login and navigation flows",
      "Performed REST API testing in Postman — GET/POST requests, status codes, auth, JSON validation",
      "Ran security tests for XSS by injecting payloads and analyzing app behaviour",
      "Load-tested with Gatling to measure response time and throughput under simulated traffic",
    ],
  },
];

const certifications = [
  { name: "Microsoft Azure Fundamentals (AZ-900)", org: "Microsoft", year: "2025" },
  { name: "Cyber Security & Ethical Hacking Workshop", org: "NCIIPC, Govt. of India", year: "2024" },
  { name: "Claude API Course — Prompt Engineering, MCP, RAG", org: "Anthropic", year: "2026" },
];

/* ---------------------------------------------------------
   Terminal typing hero
--------------------------------------------------------- */
function TerminalHero() {
  const lines = [
    { cmd: "I'm", out: "Ruchitha R BCA Graduate, St. Paul's College" },
    { cmd: "Field", out: "AI/ML systems, cybersecurity, Testing " },
    { cmd: "status", out: "open to full-time roles · Bengaluru" },
  ];
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState("cmd"); // cmd -> out -> done
  const [history, setHistory] = useState([]);
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduced.current) {
      setHistory(lines);
      setPhase("done");
      return;
    }
    if (lineIdx >= lines.length) {
      setPhase("done");
      return;
    }
    const current = lines[lineIdx];
    const target = phase === "cmd" ? current.cmd : current.out;

    if (charIdx <= target.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), phase === "cmd" ? 38 : 14);
      return () => clearTimeout(t);
    } else {
      if (phase === "cmd") {
        const t = setTimeout(() => {
          setPhase("out");
          setCharIdx(0);
        }, 260);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setHistory((h) => [...h, current]);
          setLineIdx((i) => i + 1);
          setPhase("cmd");
          setCharIdx(0);
        }, 420);
        return () => clearTimeout(t);
      }
    }
  }, [charIdx, phase, lineIdx]);

  const current = lines[lineIdx];

  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#FF6B5E" }} />
        <span className="term-dot" style={{ background: "#FFC15E" }} />
        <span className="term-dot" style={{ background: "#4FE3C1" }} />
        <span className="term-path">ruchitha@career:~</span>
      </div>
      <div className="term-body">
        {history.map((l, i) => (
          <div key={i} className="term-line">
            <div className="term-row">
              <span className="term-prompt">$</span>
              <span className="term-cmd">{l.cmd}</span>
            </div>
            <div className="term-out">{l.out}</div>
          </div>
        ))}
        {current && phase !== "done" && (
          <div className="term-line">
            <div className="term-row">
              <span className="term-prompt">$</span>
              <span className="term-cmd">
                {phase === "cmd" ? current.cmd.slice(0, charIdx) : current.cmd}
              </span>
              {phase === "cmd" && <span className="term-caret" />}
            </div>
            {phase === "out" && (
              <div className="term-out">
                {current.out.slice(0, charIdx)}
                <span className="term-caret" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Radar sweep decoration (signature element)
--------------------------------------------------------- */
function RadarMark() {
  return (
    <svg className="radar-svg" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="90" className="radar-ring" />
      <circle cx="100" cy="100" r="62" className="radar-ring" />
      <circle cx="100" cy="100" r="34" className="radar-ring" />
      <line x1="100" y1="10" x2="100" y2="190" className="radar-ring" />
      <line x1="10" y1="100" x2="190" y2="100" className="radar-ring" />
      <g className="radar-sweep">
        <path d="M100,100 L100,10 A90,90 0 0,1 163.6,36.4 Z" fill="url(#sweepGrad)" />
      </g>
      <defs>
        <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4FE3C1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4FE3C1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="3.5" fill="#4FE3C1" />
    </svg>
  );
}

/* ---------------------------------------------------------
   Section shell
--------------------------------------------------------- */
function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section reveal ${className}`}>
      <div className="section-head">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const ids = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  const nav = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Experience", label: "Experience" },
    { id: "Certifications", label: "Certs" },
    { id: "Contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <style>{`
        :root {
          --ink: #0B0F14;
          --surface: #121820;
          --surface-2: #161E27;
          --line: #202B36;
          --text: #E7EDF2;
          --muted: #7C8AA0;
          --scan: #4FE3C1;
          --pulse: #8A7CFF;
          --alert: #FF6B5E;
        }
        * { box-sizing: border-box; }
        .page {
          background: var(--ink);
          color: var(--text);
          font-family: 'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .page::before {
          content: "";
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(79,227,193,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,227,193,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          pointer-events: none;
          z-index: 0;
        }
        a { color: inherit; }
        .mono { font-family: 'JetBrains Mono', 'Fira Code', monospace; }

        .reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }

        /* NAV */
        .navbar {
          position: sticky; top: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px clamp(20px, 6vw, 64px);
          background: rgba(11,15,20,0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .brand { display: flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; font-size: 15px; letter-spacing: 0.02em; }
        .brand-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--scan); box-shadow: 0 0 8px var(--scan); }
        .navlinks { display: flex; gap: 28px; }
        .navlinks button {
          background: none; border: none; color: var(--muted); font-family: 'JetBrains Mono', monospace;
          font-size: 13px; cursor: pointer; padding: 4px 0; position: relative; transition: color 0.2s;
        }
        .navlinks button:hover, .navlinks button.active { color: var(--scan); }
        .navlinks button.active::after {
          content: ""; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px; background: var(--scan);
        }
        .navlinks button:focus-visible, button:focus-visible, a:focus-visible {
          outline: 2px solid var(--scan); outline-offset: 3px; border-radius: 3px;
        }
        @media (max-width: 720px) { .navlinks { display: none; } }

        /* HERO */
        .hero {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px;
          align-items: center;
          padding: clamp(48px, 8vw, 96px) clamp(20px, 6vw, 64px) 72px;
          max-width: 1280px; margin: 0 auto;
        }
        @media (max-width: 900px) { .hero { grid-template-columns: 1fr; } }
        .hero-v2 { align-items: center; }
        .pill-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(79,227,193,0.4); border-radius: 999px;
          padding: 7px 16px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--scan);
          margin-bottom: 22px; background: rgba(79,227,193,0.06);
        }
        .pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--scan); box-shadow: 0 0 6px var(--scan); }
        .name-block { display: inline-block; }
        .name-block .role-line { text-align: center; justify-content: center; }
        .big-name {
          font-size: clamp(38px, 7vw, 74px); line-height: 1.05; font-weight: 800;
          letter-spacing: -0.02em; margin: 0 0 22px; text-transform: uppercase;
          white-space: nowrap;
        }
        @media (max-width: 500px) { .big-name { white-space: normal; } }
        .big-name .accent { color: var(--scan); }
        .role-line {
          display: flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace;
          font-size: 14px; letter-spacing: 0.08em; color: var(--text); margin: 0 auto 20px;
          width: fit-content;
        }
        .role-arrow { color: var(--scan); }
        .avatar-wrap { display: flex; flex-direction: column; align-items: center; gap: 18px; }
        .avatar-ring {
          width: min(260px, 70%); aspect-ratio: 1; border-radius: 50%;
          border: 3px solid var(--scan); display: flex; align-items: center; justify-content: center;
          position: relative; box-shadow: 0 0 40px rgba(79,227,193,0.25), inset 0 0 30px rgba(79,227,193,0.1);
          background: radial-gradient(circle at 50% 40%, rgba(79,227,193,0.12), transparent 70%);
        }
        .avatar-ring::after {
          content: ""; position: absolute; inset: -10px; border-radius: 50%;
          border: 1px dashed rgba(79,227,193,0.35); animation: spin 18s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .avatar-ring::after { animation: none; } }
        .avatar-initials {
          font-family: 'JetBrains Mono', monospace; font-size: clamp(40px, 6vw, 64px);
          font-weight: 700; color: var(--scan); letter-spacing: 0.02em;
        }
        .avatar-img {
          width: calc(100% - 16px); height: calc(100% - 16px); border-radius: 50%;
          object-fit: cover; position: relative; z-index: 1;
        }
        .avatar-caption { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .avatar-name { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--text); letter-spacing: 0.08em; }
        .avatar-role { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }

        .hero-intro {
          font-size: 13.5px; color: var(--muted); margin-bottom: 14px; letter-spacing: 0.01em;
        }
        .hero-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--scan);
          letter-spacing: 0.12em; text-transform: uppercase; display: flex; align-items: center; gap: 8px; margin-bottom: 18px;
        }
        .hero h1 {
          font-size: clamp(34px, 5.2vw, 58px); line-height: 1.05; margin: 0 0 18px;
          font-weight: 700; letter-spacing: -0.01em;
        }
        .hero h1 .accent { color: var(--scan); }
        .hero p.lede { color: var(--muted); font-size: 17px; line-height: 1.6; max-width: 520px; margin: 0 0 30px; }
        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 6px; font-size: 14px; font-weight: 600;
          text-decoration: none; cursor: pointer; border: 1px solid transparent;
          font-family: 'JetBrains Mono', monospace; transition: transform 0.15s, box-shadow 0.15s;
        }
        .btn-primary { background: var(--scan); color: #06110D; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,227,193,0.25); }
        .btn-ghost { border-color: var(--line); color: var(--text); background: transparent; }
        .btn-ghost:hover { border-color: var(--scan); color: var(--scan); }

        .hero-visual { position: relative; display: flex; justify-content: center; align-items: center; }
        .radar-svg { width: min(320px, 80%); opacity: 0.9; }
        .radar-ring { fill: none; stroke: rgba(79,227,193,0.22); stroke-width: 1; }
        .radar-sweep { transform-origin: 100px 100px; animation: sweep 4s linear infinite; }
        @keyframes sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .radar-sweep { animation: none; } }

        /* TERMINAL */
        .term {
          background: var(--surface); border: 1px solid var(--line); border-radius: 10px;
          overflow: hidden; box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
          max-width: 560px; margin-top: 8px;
        }
        .term-bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: var(--surface-2); border-bottom: 1px solid var(--line); }
        .term-dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.9; }
        .term-path { margin-left: 10px; color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 12px; }
        .term-body { padding: 18px 18px 22px; min-height: 150px; font-family: 'JetBrains Mono', monospace; font-size: 13.5px; }
        .term-line { margin-bottom: 12px; }
        .term-row { display: flex; gap: 8px; }
        .term-prompt { color: var(--scan); }
        .term-cmd { color: var(--text); }
        .term-out { color: var(--muted); margin-top: 4px; padding-left: 18px; }
        .term-caret { display: inline-block; width: 7px; height: 14px; background: var(--scan); margin-left: 2px; animation: blink 1s step-end infinite; vertical-align: text-bottom; }
        @keyframes blink { 50% { opacity: 0; } }

        /* SECTIONS */
        .section { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 64px clamp(20px, 6vw, 64px); }
        .section-head { margin-bottom: 36px; }
        .eyebrow { display: flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--scan); letter-spacing: 0.12em; text-transform: uppercase; }
        .eyebrow-dot { width: 6px; height: 6px; background: var(--scan); border-radius: 50%; }
        .section-title { font-size: clamp(24px, 3vw, 32px); margin: 10px 0 0; font-weight: 700; }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 800px) { .about-grid { grid-template-columns: 1fr; } }
        .about-text { color: var(--muted); font-size: 15.5px; line-height: 1.75; }
        .about-text strong { color: var(--text); }
        .stat-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
        .stat { border: 1px solid var(--line); border-radius: 8px; padding: 16px; background: var(--surface); }
        .stat b { display: block; font-size: 22px; color: var(--scan); font-family: 'JetBrains Mono', monospace; }
        .stat span { color: var(--muted); font-size: 12.5px; }

        /* SKILLS */
        .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-card { border: 1px solid var(--line); background: var(--surface); border-radius: 10px; padding: 20px; transition: border-color 0.2s, transform 0.2s; }
        .skill-card:hover { border-color: var(--scan); transform: translateY(-3px); }
        .skill-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; color: var(--scan); }
        .skill-head span { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--text); text-transform: uppercase; letter-spacing: 0.05em; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag { font-size: 12px; color: var(--muted); border: 1px solid var(--line); border-radius: 4px; padding: 3px 8px; font-family: 'JetBrains Mono', monospace; }

        /* PROJECTS */
        .project-card {
          border: 1px solid var(--line); background: var(--surface); border-radius: 12px;
          padding: 28px; margin-bottom: 20px; position: relative; overflow: hidden;
        }
        .project-card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--scan); opacity: 0.6;
        }
        .project-tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--pulse); letter-spacing: 0.1em; }
        .project-card h3 { font-size: 22px; margin: 8px 0 2px; }
        .project-card .subtitle { color: var(--muted); font-size: 14px; margin-bottom: 14px; }
        .project-card p.desc { color: var(--muted); line-height: 1.65; font-size: 14.5px; margin-bottom: 14px; max-width: 720px; }
        .project-points { list-style: none; padding: 0; margin: 0 0 16px; display: grid; gap: 8px; }
        .project-points li { display: flex; gap: 8px; color: var(--text); font-size: 13.5px; }
        .project-points svg { flex-shrink: 0; margin-top: 2px; color: var(--scan); }
        .stack-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .stack-chip { font-size: 12px; font-family: 'JetBrains Mono', monospace; color: var(--scan); border: 1px solid rgba(79,227,193,0.3); background: rgba(79,227,193,0.06); border-radius: 4px; padding: 3px 9px; }
        .demo-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700;
          color: #06110D; background: var(--scan); border-radius: 6px;
          padding: 10px 20px; text-decoration: none; white-space: nowrap;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .demo-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,227,193,0.3); }

        /* EXPERIENCE — case-file timeline */
        .exp-item { display: grid; grid-template-columns: 160px 1fr; gap: 24px; padding: 24px 0; border-top: 1px solid var(--line); }
        .exp-item:first-child { border-top: none; }
        @media (max-width: 700px) { .exp-item { grid-template-columns: 1fr; gap: 8px; } }
        .exp-date { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--pulse); }
        .exp-role { font-size: 18px; font-weight: 700; margin: 0; }
        .exp-org { color: var(--scan); font-family: 'JetBrains Mono', monospace; font-size: 13px; margin-bottom: 10px; }
        .exp-points { list-style: none; padding: 0; margin: 0; display: grid; gap: 7px; }
        .exp-points li { color: var(--muted); font-size: 14px; line-height: 1.6; display: flex; gap: 8px; }
        .exp-points li::before { content: "›"; color: var(--scan); font-weight: 700; }

        /* CERTIFICATIONS */
        .cert-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 800px) { .cert-grid { grid-template-columns: 1fr; } }
        .cert-card { border: 1px solid var(--line); background: var(--surface); border-radius: 10px; padding: 18px; display: flex; gap: 12px; align-items: flex-start; }
        .cert-card svg { color: var(--scan); flex-shrink: 0; margin-top: 2px; }
        .cert-card h4 { margin: 0 0 4px; font-size: 14.5px; line-height: 1.35; }
        .cert-card p { margin: 0; color: var(--muted); font-size: 12.5px; font-family: 'JetBrains Mono', monospace; }

        /* CONTACT */
        .contact-wrap { text-align: center; padding-bottom: 100px; }
        .contact-wrap .section-head { margin-bottom: 16px; display: flex; flex-direction: column; align-items: center; }
        .contact-wrap p.lede { color: var(--muted); max-width: 480px; margin: 0 auto 32px; }
        .contact-links { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .contact-chip {
          display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 8px;
          padding: 12px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px; text-decoration: none;
          color: var(--text); transition: border-color 0.2s, color 0.2s;
        }
        .contact-chip:hover { border-color: var(--scan); color: var(--scan); }

        footer { text-align: center; padding: 24px; color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 12px; border-top: 1px solid var(--line); position: relative; z-index: 1; }
      `}</style>

      {/* NAV */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-dot" />
          RUCHITHA R
        </div>
        <div className="navlinks">
          {nav.map((n) => (
            <button
              key={n.id}
              className={active === n.id ? "active" : ""}
              onClick={() => scrollTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div id="home" className="hero hero-v2 reveal">
        <div>
          <span className="pill-badge">
            <span className="pill-dot" /> open to opportunities
          </span>
          <div className="name-block">
            <h1 className="big-name">
              RUCHITHA R<span className="accent">.</span>
            </h1>
            <div className="role-line">
              <ChevronRight size={16} className="role-arrow" /> AI/ML &nbsp;/&nbsp; CYBERSECURITY
            </div>
          </div>
          <p className="lede">
            I build RAG-based AI tools and test systems for the gaps attackers
            look for — BCA Graduate student.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View projects <ChevronRight size={16} />
            </button>
            <a className="btn btn-ghost" href="/Ruchitha_Resume.pdf" target="_blank" rel="noreferrer" download>
              <FileCode2 size={15} /> Download resume
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </div>
        </div>
        <div className="avatar-wrap">
          <div className="avatar-ring">
            <img src="/avatar.png" alt="Ruchitha R" className="avatar-img" />
          </div>
          <div className="avatar-caption">
            <span className="avatar-name">RUCHITHA R</span>
            <span className="avatar-role">BCA · AI/ML &amp; CYBERSECURITY</span>
          </div>
        </div>
      </div>

      <div className="section reveal" style={{ paddingTop: 0 }}>
        <TerminalHero />
      </div>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 · about" title="Who's on the other end of this scan">
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Ruchitha</strong> — a BCA graduate student who ended up
              splitting time between two fields that don't usually share a
              portfolio: <strong>AI/ML development</strong> and{" "}
              <strong>cybersecurity</strong>.
            </p>
            <p>
              My flagship project, <strong>Veriscope</strong>, is a RAG-based
              research platform I built to fact-check and analyze documents in
              real time. Alongside that, I've spent internships inside both
              worlds — scanning networks and hunting vulnerabilities at IBM,
              then stress-testing applications at CODTECH.
            </p>
            <p>
              I like the overlap: a good RAG pipeline and a good penetration
              test both come down to knowing exactly where the trust boundary
              is, and checking it anyway.
            </p>
          </div>
          <div className="stat-row">
            <div className="stat"><b>7.9</b><span>CGPA · BCA</span></div>
            <div className="stat"><b>2</b><span>Internships completed</span></div>
            <div className="stat"><b>6</b><span>Tools shipped in Veriscope</span></div>
            <div className="stat"><b>3</b><span>Certifications earned</span></div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="02 · scan results" title="Stack, categorized like a recon report">
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-card" key={g.label}>
              <div className="skill-head">
                <g.icon size={18} />
                <span>{g.label}</span>
              </div>
              <div className="skill-tags">
                {g.items.map((i) => (
                  <span className="skill-tag" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="03 · case files" title="Projects worth opening">
        {projects.map((p) => (
          <div className="project-card reveal" key={p.id}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span className="project-tag">{p.tag}</span>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  <ExternalLink size={16} /> View Live Demo
                </a>
              )}
            </div>
            <h3>{p.title}</h3>
            <div className="subtitle">{p.subtitle}</div>
            <p className="desc">{p.desc}</p>
            <ul className="project-points">
              {p.points.map((pt) => (
                <li key={pt}>
                  <Search size={14} />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="stack-row">
              {p.stack.map((s) => (
                <span className="stack-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="04 · timeline" title="Where I've worked">
        {experience.map((e) => (
          <div className="exp-item reveal" key={e.role}>
            <div className="exp-date mono">{e.date}</div>
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <div className="exp-org">{e.org}</div>
              <ul className="exp-points">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" eyebrow="05 · verified" title="Certifications">
        <div className="cert-grid">
          {certifications.map((c) => (
            <div className="cert-card" key={c.name}>
              <Lock size={18} />
              <div>
                <h4>{c.name}</h4>
                <p>{c.org} · {c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 · connect" title="" className="contact-wrap">
        <h2 className="section-title" style={{ marginBottom: 8 }}>Open to full-time roles in Bengaluru</h2>
        <p className="lede">
          Looking for AI/ML or cybersecurity-aligned roles where I can keep
          building at the intersection of both. Reach out — I reply fast.
        </p>
        <div className="contact-links">
          <a className="contact-chip" href="/Ruchitha_Resume.pdf" target="_blank" rel="noreferrer" download>
            <FileCode2 size={15} /> Download resume
          </a>
          <a className="contact-chip" href="mailto:ruchitharuc@gmail.com">
            <Mail size={15} /> ruchitharuc@gmail.com
          </a>
          <a className="contact-chip" href="https://www.linkedin.com/in/ruchitharr" target="_blank" rel="noreferrer">
            <LinkedinIcon size={15} /> linkedin.com/in/ruchitharr
          </a>
          <a className="contact-chip" href="https://github.com/rruchitha460-sys" target="_blank" rel="noreferrer">
            <GithubIcon size={15} /> github.com/rruchitha460-sys
          </a>
          <span className="contact-chip" style={{ cursor: "default" }}>
            <MapPin size={15} /> Bengaluru, KA
          </span>
        </div>
      </Section>

      <footer>
        <span className="mono">$ end_of_scan — thanks for reading, Ruchitha R © 2026</span>
      </footer>
    </div>
  );
}

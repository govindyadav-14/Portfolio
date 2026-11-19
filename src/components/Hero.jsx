import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "./SocialIcons";

const roles = ["Full-Stack Developer", "AI Enthusiast", "Problem Solver"];

const codeSnippet = `// Govind Yadav — Developer
const skills = {
  languages: ["JS", "Python", "C++"],
  frontend: ["React", "Tailwind", "Next.js"],
  backend:  ["Node", "Express", "FastAPI"],
  ai:       ["LangChain", "OpenAI", "PyTorch"],
};

async function buildSomething(idea) {
  const solution = await solve(idea);
  return deploy(solution); // 🚀
}`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const orbVariants = (delay = 0) => ({
  initial: { scale: 1, opacity: 0.18 },
  animate: {
    scale: [1, 1.18, 1],
    opacity: [0.18, 0.28, 0.18],
    transition: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay },
  },
});

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="inline-flex items-center gap-1">
      <span style={{ color: "#22d3ee" }}>{displayed}</span>
      <span
        className="inline-block w-0.5 h-6 ml-0.5 align-middle"
        style={{
          background: "#22d3ee",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

function Particles() {
  const dots = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 1,
    duration: 4 + Math.random() * 5,
    delay: Math.random() * 3,
    color: i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#8b5cf6" : "#22d3ee",
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: d.color,
            opacity: 0.5,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function TerminalCard() {
  const lines = codeSnippet.split("\n");
  const colors = {
    comment: "#94a3b8",
    keyword: "#8b5cf6",
    string: "#22d3ee",
    variable: "#f1f5f9",
    function: "#6366f1",
    bracket: "#f1f5f9",
    emoji: "#f1f5f9",
  };

  function colorLine(line) {
    if (line.trim().startsWith("//")) return <span style={{ color: colors.comment }}>{line}</span>;
    // Simple syntax highlight
    return line.split(/(".*?"|'.*?'|\b(const|async|function|return|await)\b|[{}[\]])/g).map((part, i) => {
      if (!part) return null;
      if (/^["']/.test(part)) return <span key={i} style={{ color: colors.string }}>{part}</span>;
      if (/^(const|async|function|return|await)$/.test(part)) return <span key={i} style={{ color: colors.keyword }}>{part}</span>;
      if (/^[{}[\]]$/.test(part)) return <span key={i} style={{ color: colors.bracket }}>{part}</span>;
      return <span key={i} style={{ color: colors.variable }}>{part}</span>;
    });
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(99,102,241,0.25)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 8px 48px rgba(99,102,241,0.15), 0 2px 8px rgba(0,0,0,0.5)",
        minWidth: 320,
        maxWidth: 460,
      }}
    >
      {/* Terminal header */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(99,102,241,0.15)" }}
      >
        <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="ml-3 text-xs" style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
          portfolio.js
        </span>
      </div>
      {/* Code area */}
      <div className="p-5 overflow-x-auto">
        <pre
          className="text-sm leading-relaxed"
          style={{ fontFamily: "'JetBrains Mono', monospace", margin: 0 }}
        >
          {lines.map((line, i) => (
            <div key={i}>
              <span className="select-none mr-4 text-xs" style={{ color: "rgba(148,163,184,0.35)" }}>
                {String(i + 1).padStart(2, " ")}
              </span>
              {colorLine(line)}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

const stats = [
  { label: "Problems Solved", value: "1000+", color: "#6366f1" },
  { label: "Projects Built", value: "3", color: "#8b5cf6" },
  { label: "University", value: "DTU '27", color: "#22d3ee" },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Blinking cursor keyframes */}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* Animated orb blobs */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-120px",
          left: "-120px",
        }}
        variants={orbVariants(0)}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-100px",
          right: "10%",
        }}
        variants={orbVariants(2)}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          filter: "blur(70px)",
          top: "30%",
          right: "5%",
        }}
        variants={orbVariants(4)}
        initial="initial"
        animate="animate"
      />

      {/* Particles */}
      <Particles />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT COLUMN */}
        <motion.div
          className="flex-1 flex flex-col gap-6 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.3)",
                backdropFilter: "blur(10px)",
                color: "#a5b4fc",
              }}
            >
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Govind Yadav
          </motion.h1>

          {/* Typing headline */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold"
            style={{ color: "#f1f5f9", minHeight: "2rem" }}
          >
            <TypingRole />
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: "#94a3b8" }}
          >
            I am a Mathematics and Computing undergraduate at Delhi Technological University,
            passionate about building scalable web applications and exploring AI-powered solutions.
            I enjoy solving complex problems, learning new technologies and turning ideas into
            practical products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-2"
          >
            {/* View My Projects */}
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              }}
            >
              View My Projects
              <ArrowRight size={18} />
            </button>

            {/* Download Resume */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(99,102,241,0.4)",
                backdropFilter: "blur(10px)",
                color: "#f1f5f9",
              }}
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* Contact Me */}
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(34,211,238,0.4)",
                color: "#22d3ee",
              }}
            >
              <Mail size={18} />
              Contact Me
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/govindyadav-14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#94a3b8",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f1f5f9"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)"; }}
              title="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yadav-govind-9b4b22337/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#94a3b8",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f1f5f9"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)"; }}
              title="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="https://leetcode.com/u/rao_govindydv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#94a3b8",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f1f5f9"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)"; }}
              title="LeetCode"
            >
              <LeetCodeIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — visual element */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center gap-5 relative hidden lg:flex"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Floating terminal card */}
          <motion.div
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="relative z-10 w-full"
            style={{ maxWidth: 460 }}
          >
            <TerminalCard />

            {/* Glow behind card */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)",
                filter: "blur(16px)",
                zIndex: -1,
              }}
            />
          </motion.div>

          {/* Floating stats badges */}
          <div className="flex flex-wrap gap-3 justify-center mt-2 w-full" style={{ maxWidth: 460 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.45, ease: "easeOut" }}
                className="flex flex-col items-center px-5 py-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${s.color}40`,
                  backdropFilter: "blur(12px)",
                  minWidth: 110,
                }}
              >
                <span
                  className="text-2xl font-extrabold"
                  style={{ color: s.color }}
                >
                  {s.value}
                </span>
                <span className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

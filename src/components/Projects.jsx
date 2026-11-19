import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  FileSearch,
  Palette,
  CheckCircle2,
  Star,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

// Custom Vote icon (lucide doesn't have Vote, using a ballot-box SVG)
const VoteIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <line x1="12" y1="15" x2="12" y2="17" />
    <circle cx="12" cy="14" r="1" fill={color} stroke="none" />
  </svg>
);

const projects = [
  {
    id: "01",
    title: "OneVote",
    tagline: "Secure Digital Voting Platform",
    icon: VoteIcon,
    accent: "#6366f1",
    accentRgb: "99,102,241",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    bullets: [
      "Built a secure MERN-based digital voting platform with 12+ REST APIs",
      "Supports voter registration, candidate management and live vote counting",
      "Implemented JWT authentication, bcrypt password hashing and role-based authorization",
      "Enforced a one-vote-per-user policy with real-time election result sync via Socket.IO",
    ],
    github: "https://github.com/govindyadav-14",
    demo: "#",
  },
  {
    id: "02",
    title: "Contract Risk Analyzer",
    tagline: "AI-Powered RAG Contract Analysis",
    icon: FileSearch,
    accent: "#8b5cf6",
    accentRgb: "139,92,246",
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "Groq LLM",
      "Gemini Embeddings",
      "Zod",
    ],
    bullets: [
      "Developed a RAG-based contract analyzer extracting clauses from PDF, DOCX and TXT files",
      "Retrieves company policies using pgvector and flags conflicts with severity ratings and suggested revisions",
      "Benchmarked 4 retrieval strategies across 5 datasets — 96.6–100% Recall@5 with vector search",
      "Achieved 94–97% citation accuracy and 98% F1-score on 50-clause test set",
    ],
    github: "https://github.com/govindyadav-14",
    demo: "#",
  },
  {
    id: "03",
    title: "Color Palette Creator",
    tagline: "Smart Image Color Extraction Tool",
    icon: Palette,
    accent: "#22d3ee",
    accentRgb: "34,211,238",
    tech: ["HTML5", "CSS3", "JavaScript", "HTML Canvas"],
    bullets: [
      "Developed a web app to extract dominant color palettes from uploaded images",
      "Implemented the Median Cut algorithm to generate 5–10 dominant colors",
      "Added complementary color generation and one-click palette copying",
    ],
    github: "https://github.com/govindyadav-14",
    demo: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function ProjectCard({ project, index }) {
  const IconComponent = project.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: `0 20px 60px rgba(${project.accentRgb}, 0.25), 0 0 40px rgba(${project.accentRgb}, 0.12)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{
        background: "rgba(13,17,23,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid rgba(${project.accentRgb}, 0.18)`,
        borderTop: `2px solid ${project.accent}`,
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Subtle glow overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: `linear-gradient(180deg, rgba(${project.accentRgb}, 0.07) 0%, transparent 100%)`,
          pointerEvents: "none",
          borderRadius: "16px 16px 0 0",
        }}
      />

      <div className="p-6 flex flex-col h-full" style={{ gap: "16px" }}>
        {/* Card Header */}
        <div className="flex items-start justify-between">
          {/* Icon + Featured */}
          <div className="flex items-center gap-3">
            <div
              style={{
                background: `rgba(${project.accentRgb}, 0.12)`,
                border: `1px solid rgba(${project.accentRgb}, 0.3)`,
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconComponent size={22} color={project.accent} />
            </div>
            {/* Featured badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: `rgba(${project.accentRgb}, 0.1)`,
                border: `1px solid rgba(${project.accentRgb}, 0.25)`,
                borderRadius: "20px",
                padding: "3px 10px",
              }}
            >
              <Star size={11} color={project.accent} fill={project.accent} />
              <span
                style={{
                  color: project.accent,
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                Featured
              </span>
            </div>
          </div>

          {/* Number badge */}
          <div
            style={{
              background: `rgba(${project.accentRgb}, 0.08)`,
              border: `1px solid rgba(${project.accentRgb}, 0.2)`,
              borderRadius: "8px",
              padding: "4px 10px",
              color: project.accent,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            {project.id}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3
            style={{
              color: "#f1f5f9",
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "4px",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: project.accent, fontSize: "13px", fontWeight: 500 }}>
            {project.tagline}
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, rgba(${project.accentRgb}, 0.3), transparent)`,
          }}
        />

        {/* Bullets */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
          }}
        >
          {project.bullets.map((bullet, i) => (
            <li key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <CheckCircle2
                size={15}
                color={project.accent}
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <span style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.55" }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                background: `rgba(${project.accentRgb}, 0.1)`,
                border: `1px solid rgba(${project.accentRgb}, 0.22)`,
                color: project.accent,
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(99,102,241,0.1)",
          }}
        />

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href={project.github}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(241,245,249,0.05)",
              border: "1px solid rgba(241,245,249,0.1)",
              color: "#f1f5f9",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              flex: 1,
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(241,245,249,0.1)";
              e.currentTarget.style.borderColor = "rgba(241,245,249,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(241,245,249,0.05)";
              e.currentTarget.style.borderColor = "rgba(241,245,249,0.1)";
            }}
          >
            <GitHubIcon size={15} />
            GitHub
          </a>
          <a
            href={project.demo}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}99)`,
              border: `1px solid rgba(${project.accentRgb}, 0.4)`,
              color: "#fff",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              flex: 1,
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          {/* Pill badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "20px",
              padding: "6px 18px",
              marginBottom: "20px",
            }}
          >
            <Star size={13} color="#6366f1" fill="#6366f1" />
            <span
              style={{
                color: "#6366f1",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Projects
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #f1f5f9 0%, #6366f1 40%, #8b5cf6 70%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            Featured Projects
          </h2>

          {/* Subheading */}
          <p
            style={{
              color: "#94a3b8",
              fontSize: "17px",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Things I&apos;ve built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

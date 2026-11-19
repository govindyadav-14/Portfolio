import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Monitor, Server, Database, Brain, BookOpen } from "lucide-react";

const categories = [
  {
    id: "languages",
    label: "Programming Languages",
    icon: Code2,
    accent: "#6366f1",
    skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    accent: "#8b5cf6",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "React Router"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    accent: "#22d3ee",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "bcrypt"],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    accent: "#6366f1",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "pgvector", "Redis"],
  },
  {
    id: "ai-tools",
    label: "AI & Tools",
    icon: Brain,
    accent: "#8b5cf6",
    skills: ["RAG", "Groq LLM", "Gemini Embeddings", "Zod", "Docker", "Git", "GitHub", "Postman"],
  },
  {
    id: "core-cs",
    label: "Core CS",
    icon: BookOpen,
    accent: "#22d3ee",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle background glow blobs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-width-6xl mx-auto max-w-6xl" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-medium border"
              style={{
                background: "rgba(99,102,241,0.1)",
                borderColor: "rgba(99,102,241,0.3)",
                color: "#a5b4fc",
              }}
            >
              ✦ Skills
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technical Expertise
          </h2>

          {/* Subheading */}
          <p className="text-lg" style={{ color: "#94a3b8" }}>
            Technologies I work with
          </p>
        </motion.div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                custom={catIndex}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="rounded-2xl p-6 relative overflow-hidden group"
                style={{
                  background: "rgba(13,17,23,0.7)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderTopColor: cat.accent,
                  borderTopWidth: "2px",
                }}
              >
                {/* Subtle inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${cat.accent}18 0%, transparent 60%)`,
                  }}
                />

                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${cat.accent}22`,
                      border: `1px solid ${cat.accent}44`,
                    }}
                  >
                    <Icon size={18} style={{ color: cat.accent }} />
                  </div>
                  <h3 className="font-semibold text-base" style={{ color: "#f1f5f9" }}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      custom={skillIndex}
                      variants={pillVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.15 },
                      }}
                      className="px-3 py-1 rounded-full text-sm font-medium cursor-default select-none transition-colors duration-200"
                      style={{
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.18)",
                        color: "#cbd5e1",
                        "--hover-color": cat.accent,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${cat.accent}22`;
                        e.currentTarget.style.borderColor = `${cat.accent}66`;
                        e.currentTarget.style.color = cat.accent;
                        e.currentTarget.style.boxShadow = `0 0 12px ${cat.accent}44`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                        e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)";
                        e.currentTarget.style.color = "#cbd5e1";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

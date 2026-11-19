import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Lightbulb, Trophy, MapPin, Code2 } from "lucide-react";

const bentoCards = [
  {
    icon: GraduationCap,
    emoji: "🎓",
    title: "Education",
    value: "B.Tech Mathematics & Computing",
    sub: "Delhi Technological University · 2023–2027",
    accent: "#6366f1",
  },
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "Interests",
    value: "Full-Stack Dev · AI/ML · RAG · LLM",
    sub: "Competitive Programming",
    accent: "#8b5cf6",
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Achievements",
    value: "1000+ DSA Problems · Peak LeetCode 1690",
    sub: "60+ Contests",
    accent: "#22d3ee",
  },
  {
    icon: MapPin,
    emoji: "📍",
    title: "Location",
    value: "New Delhi, India",
    sub: "Open to Remote",
    accent: "#6366f1",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 sm:px-8 overflow-hidden">
      {/* Ambient glows */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#a5b4fc",
            }}
          >
            <Code2 size={13} />
            About Me
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-14"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Who I Am
        </motion.h2>

        {/* Bento grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left — 60% */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 lg:w-3/5"
          >
            {/* About card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-7 sm:p-9 h-full"
              style={{
                background: "rgba(13,17,23,0.7)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(99,102,241,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              {/* Avatar / identifier row */}
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#f1f5f9",
                    boxShadow: "0 0 24px rgba(99,102,241,0.35)",
                  }}
                >
                  GY
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: "#f1f5f9" }}>
                    Govind Yadav
                  </p>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    Full-Stack Developer · AI Enthusiast
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  height: 1,
                  background: "linear-gradient(90deg, rgba(99,102,241,0.3), transparent)",
                }}
              />

              {/* Paragraphs */}
              <motion.p variants={itemVariants} className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                I'm Govind Yadav, a final-year B.Tech student in Mathematics and Computing at Delhi Technological
                University (DTU). I specialize in building full-stack web applications — from designing clean user
                interfaces to architecting robust backends and RESTful APIs.
              </motion.p>

              <motion.p variants={itemVariants} className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                My current focus lies at the intersection of software engineering and AI — particularly RAG-based
                applications, LLM integration, and vector search pipelines. I believe in building real,
                production-ready software rather than toy projects.
              </motion.p>

              <motion.p variants={itemVariants} className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                Beyond coding, I'm an avid competitive programmer who has solved 1000+ DSA problems on LeetCode,
                GeeksforGeeks, and Codeforces, and regularly participate in coding contests and hackathons. I'm also
                a core organizer of AAVAHAN — DTU's annual sports fest.
              </motion.p>

              {/* Tag strip */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-8">
                {["React", "Node.js", "Python", "LangChain", "PostgreSQL", "LeetCode"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "#a5b4fc",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — 40%: bento stat cards */}
          <div className="flex flex-col gap-4 lg:w-2/5">
            {bentoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 0 28px ${card.accent}30, 0 8px 32px rgba(0,0,0,0.5)`,
                    borderColor: `${card.accent}40`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-2xl p-5 cursor-default"
                  style={{
                    background: "rgba(13,17,23,0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon circle */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${card.accent}18`,
                        border: `1px solid ${card.accent}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: card.accent }} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: card.accent }}
                      >
                        {card.title}
                      </p>
                      <p className="text-sm font-medium leading-snug" style={{ color: "#f1f5f9" }}>
                        {card.value}
                      </p>
                      {card.sub && (
                        <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
                          {card.sub}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

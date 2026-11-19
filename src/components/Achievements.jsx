import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Trophy, Medal, Star, Code2, Users } from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: 1000, suffix: '+', label: 'DSA Problems Solved', icon: Code2, color: '#6366f1' },
  { value: 1690, suffix: '', label: 'Peak LeetCode Rating', icon: Star, color: '#8b5cf6' },
  { value: 60, suffix: '+', label: 'Coding Contests', icon: Trophy, color: '#22d3ee' },
  { value: 3, suffix: '', label: 'Open Source Projects', icon: Users, color: '#6366f1' },
];

const achievements = [
  {
    emoji: '🥇',
    title: 'Gold Medal – SPREE\'25',
    org: 'BITS Pilani, Goa Campus',
    desc: 'Competed and won gold in the competitive programming event at SPREE\'25.',
    tag: 'Competitive Programming',
    tagColor: '#6366f1',
    glow: 'rgba(99,102,241,0.25)',
  },
  {
    emoji: '🥇',
    title: 'Gold Medal – AAVAHAN\'25',
    org: 'DTU — Annual Sports & Technical Fest',
    desc: 'Clinched gold at DTU\'s flagship annual fest, AAVAHAN\'25.',
    tag: 'Sports & Tech Fest',
    tagColor: '#8b5cf6',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    emoji: '🥉',
    title: 'Bronze Medal – Spardha\'24',
    org: 'IIT BHU — Inter-IIT Cultural & Sports Meet',
    desc: 'Represented DTU and secured bronze at the prestigious inter-IIT meet.',
    tag: 'Cultural & Sports',
    tagColor: '#22d3ee',
    glow: 'rgba(34,211,238,0.2)',
  },
  {
    emoji: '🥉',
    title: 'Bronze Medal – AAVAHAN\'24',
    org: 'DTU — Annual Sports & Technical Fest',
    desc: 'Earned bronze at DTU\'s AAVAHAN\'24 annual fest.',
    tag: 'Sports & Tech Fest',
    tagColor: '#8b5cf6',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    emoji: '🏆',
    title: '1000+ DSA Problems',
    org: 'LeetCode · GeeksforGeeks · Codeforces',
    desc: 'Solved 1000+ data structures & algorithms problems. Peak LeetCode Rating: 1690.',
    tag: 'Competitive Programming',
    tagColor: '#6366f1',
    glow: 'rgba(99,102,241,0.25)',
  },
  {
    emoji: '⚽',
    title: 'Core Organizer – Kabaddi',
    org: 'DTU — AAVAHAN\'24 & AAVAHAN\'25',
    desc: 'Led organisation of the Kabaddi tournaments at two consecutive editions of AAVAHAN.',
    tag: 'Leadership & Organizing',
    tagColor: '#22d3ee',
    glow: 'rgba(34,211,238,0.2)',
  },
];

// ── Count-up hook ─────────────────────────────────────────────────────────────

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return count;
}

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ stat, inView }) {
  const count = useCountUp(stat.value, 1800, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.04, boxShadow: `0 0 32px ${stat.color}44` }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'rgba(13,17,23,0.7)',
        border: `1px solid rgba(99,102,241,0.15)`,
        boxShadow: `0 0 0px ${stat.color}00`,
      }}
      className="relative flex flex-col items-center justify-center gap-2 rounded-2xl p-6 backdrop-blur-xl cursor-default select-none"
    >
      {/* accent dot */}
      <span
        className="absolute top-3 right-3 w-2 h-2 rounded-full"
        style={{ background: stat.color, boxShadow: `0 0 6px ${stat.color}` }}
      />

      <div
        className="mb-1 p-2 rounded-xl"
        style={{ background: `${stat.color}18` }}
      >
        <Icon size={22} style={{ color: stat.color }} />
      </div>

      <span
        className="text-4xl font-extrabold tracking-tight"
        style={{
          background: `linear-gradient(135deg, ${stat.color}, #f1f5f9)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count}{stat.suffix}
      </span>

      <span className="text-sm font-medium text-center" style={{ color: '#94a3b8' }}>
        {stat.label}
      </span>
    </motion.div>
  );
}

// ── Achievement Card ──────────────────────────────────────────────────────────

function AchievementCard({ item }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 36px ${item.glow}`,
        borderColor: item.tagColor + '55',
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'rgba(13,17,23,0.7)',
        border: '1px solid rgba(99,102,241,0.15)',
      }}
      className="flex flex-col gap-3 rounded-2xl p-6 backdrop-blur-xl cursor-default"
    >
      {/* emoji */}
      <span className="text-4xl leading-none">{item.emoji}</span>

      {/* title */}
      <h3 className="text-base font-bold leading-snug" style={{ color: '#f1f5f9' }}>
        {item.title}
      </h3>

      {/* org */}
      <p className="text-xs font-medium" style={{ color: '#94a3b8' }}>
        {item.org}
      </p>

      {/* desc */}
      <p className="text-xs leading-relaxed flex-1" style={{ color: '#94a3b8' }}>
        {item.desc}
      </p>

      {/* tag */}
      <span
        className="self-start text-xs font-semibold px-3 py-1 rounded-full"
        style={{
          background: `${item.tagColor}18`,
          color: item.tagColor,
          border: `1px solid ${item.tagColor}33`,
        }}
      >
        {item.tag}
      </span>
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* ambient blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* pill badge */}
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
            style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#6366f1',
            }}
          >
            <Trophy size={12} />
            Achievements
          </span>

          {/* heading */}
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Milestones &amp; Recognition
          </h2>

          {/* sub-heading */}
          <p className="text-base" style={{ color: '#94a3b8' }}>
            What I&#39;ve accomplished
          </p>
        </motion.div>

        {/* ── Stat cards (4-col) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </motion.div>

        {/* ── Achievement cards (3-col) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((item) => (
            <AchievementCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

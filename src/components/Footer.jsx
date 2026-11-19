import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './SocialIcons';

const socials = [
  {
    icon: <GitHubIcon size={18} />,
    href: 'https://github.com/govindyadav-14',
    label: 'GitHub',
  },
  {
    icon: <LinkedInIcon size={18} />,
    href: 'https://www.linkedin.com/in/yadav-govind-9b4b22337/',
    label: 'LinkedIn',
  },
  {
    icon: <LeetCodeIcon size={18} />,
    href: 'https://leetcode.com/u/rao_govindydv/',
    label: 'LeetCode',
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(6,8,16,0.95)',
        borderTop: '1px solid transparent',
        borderImage: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.4), transparent) 1',
        padding: '1.5rem 1rem',
      }}
    >
      <div
        className="max-w-6xl mx-auto"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          style={{
            fontWeight: 800,
            fontSize: '1.4rem',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
            cursor: 'default',
          }}
        >
          GY
        </motion.div>

        {/* Center text */}
        <div style={{ textAlign: 'center', flex: '1 1 240px' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
            Govind Yadav — Building the future, one commit at a time.
          </p>
          <p style={{ color: '#475569', fontSize: '0.78rem' }}>
            © 2025 Govind Yadav. Built with React &amp; Tailwind CSS.
          </p>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.18, color: '#6366f1' }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: '0.6rem',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.18)',
                color: '#94a3b8',
                transition: 'color 0.2s, background 0.2s',
                textDecoration: 'none',
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}

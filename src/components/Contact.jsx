import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Send, CheckCircle, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './SocialIcons';

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'govindyadav11115@gmail.com',
    href: 'mailto:govindyadav11115@gmail.com',
    color: '#6366f1',
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yadav-govind-9b4b22337',
    href: 'https://www.linkedin.com/in/yadav-govind-9b4b22337/',
    color: '#8b5cf6',
  },
  {
    icon: <GitHubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/govindyadav-14',
    href: 'https://github.com/govindyadav-14',
    color: '#22d3ee',
  },
  {
    icon: <LeetCodeIcon size={20} />,
    label: 'LeetCode',
    value: 'leetcode.com/u/rao_govindydv',
    href: 'https://leetcode.com/u/rao_govindydv/',
    color: '#6366f1',
  },
];

const inputStyle = {
  background: 'rgba(13,17,23,0.8)',
  border: '1px solid rgba(99,102,241,0.25)',
  color: '#f1f5f9',
  borderRadius: '0.75rem',
  outline: 'none',
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.95rem',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const FocusInput = ({ as: Tag = 'input', ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Tag
      {...props}
      style={{
        ...inputStyle,
        ...(Tag === 'textarea' ? { resize: 'none', minHeight: '120px' } : {}),
        borderColor: focused ? '#6366f1' : 'rgba(99,102,241,0.25)',
        boxShadow: focused ? '0 0 0 2px rgba(99,102,241,0.25)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="placeholder-slate-500"
    />
  );
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.12 } },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute', top: '10%', left: '5%',
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '5%', right: '5%',
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={childVariants} className="text-center mb-14">
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#6366f1',
              borderRadius: '999px',
              padding: '0.3rem 1.1rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}
          >
            Contact
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have an idea or opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT — Contact Info */}
          <motion.div variants={childVariants} className="flex flex-col gap-5">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${item.color}33` }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(13,17,23,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  borderRadius: '1rem',
                  padding: '1rem 1.3rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                className="group"
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: '0.75rem',
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color, flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.1rem', fontWeight: 500 }}>
                    {item.label}
                  </div>
                  <div style={{ color: '#f1f5f9', fontWeight: 500, fontSize: '0.95rem' }}>
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability note */}
            <motion.div
              variants={childVariants}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: 'rgba(34,211,238,0.07)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '0.9rem',
                padding: '0.85rem 1.2rem',
                marginTop: '0.5rem',
              }}
            >
              <MapPin size={16} style={{ color: '#22d3ee', flexShrink: 0 }} />
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Open to{' '}
                <span style={{ color: '#22d3ee', fontWeight: 600 }}>
                  full-time roles, internships
                </span>{' '}
                and collaborations
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            variants={childVariants}
            style={{
              background: 'rgba(13,17,23,0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '1.5rem',
              padding: '2rem 2rem',
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    minHeight: 300, gap: '1.2rem', textAlign: 'center',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  >
                    <CheckCircle size={64} style={{ color: '#22d3ee' }} />
                  </motion.div>
                  <h3 style={{ color: '#f1f5f9', fontSize: '1.4rem', fontWeight: 700 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#94a3b8' }}>
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    style={{
                      marginTop: '0.5rem',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: '#fff', border: 'none', borderRadius: '999px',
                      padding: '0.6rem 1.6rem', cursor: 'pointer', fontWeight: 600,
                    }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
                >
                  {[
                    { name: 'name', label: 'Name', placeholder: 'Your full name', type: 'text' },
                    { name: 'email', label: 'Email', placeholder: 'you@example.com', type: 'email' },
                    { name: 'subject', label: 'Subject', placeholder: 'What is this about?', type: 'text' },
                  ].map((field, i) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '0.03em' }}>
                        {field.label}
                      </label>
                      <FocusInput
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name]}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24 }}
                  >
                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '0.03em' }}>
                      Message
                    </label>
                    <FocusInput
                      as="textarea"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(99,102,241,0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      marginTop: '0.4rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: '#fff', border: 'none', borderRadius: '999px',
                      padding: '0.85rem 2rem', cursor: loading ? 'not-allowed' : 'pointer',
                      fontWeight: 700, fontSize: '1rem',
                      opacity: loading ? 0.75 : 1,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {loading ? (
                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        style={{ animation: 'spin 0.8s linear infinite' }}
                      >
                        <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="3" strokeDasharray="40 20" />
                      </svg>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

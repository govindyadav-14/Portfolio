import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(`#${id}`);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const navbarStyle = scrolled
    ? {
        background: "rgba(6,8,16,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(99,102,241,0.25)",
        transition: "all 0.3s ease",
      }
    : {
        background: "transparent",
        transition: "all 0.3s ease",
      };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={navbarStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            className="flex items-center select-none"
          >
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Inter, sans-serif",
              }}
            >
              GY
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = activeLink === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{
                    color: isActive ? "#6366f1" : "#94a3b8",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#f1f5f9";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            style={{ color: "#f1f5f9", background: "rgba(99,102,241,0.08)" }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden w-full"
            style={{
              background: "rgba(6,8,16,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <div className="flex flex-col items-center gap-1 py-6 px-4">
              {navLinks.map(({ label, href }, i) => {
                const isActive = activeLink === href;
                return (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.22 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(href);
                    }}
                    className="w-full text-center px-6 py-3 text-base font-medium rounded-xl transition-colors duration-150"
                    style={{
                      color: isActive ? "#6366f1" : "#94a3b8",
                      background: isActive
                        ? "rgba(99,102,241,0.1)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(99,102,241,0.25)"
                        : "1px solid transparent",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

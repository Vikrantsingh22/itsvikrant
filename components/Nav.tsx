"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#profile", label: "Profile" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 border-b"
        style={{
          backgroundColor: "rgba(10,11,13,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "var(--color-border-hairline)",
        }}
      >
        <div className="section-pad flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="font-bold tracking-tighter uppercase text-sm"
            style={{
              fontFamily: "var(--font-geist-sans)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              fontSize: "18px",
            }}
          >
            VS.
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="uppercase tracking-wider text-[12px] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      letterSpacing: "0.05em",
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA — desktop */}
          <Link
            href="#"
            className="hidden md:inline-block uppercase tracking-wider text-[12px] border px-4 py-2 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
              color: "var(--color-primary)",
              borderColor: "var(--color-primary)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--color-accent-dim)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent")
            }
          >
            RESUME
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            style={{ color: "var(--color-text-primary)" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {/* Animated 3-line → X */}
            <span
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                backgroundColor: "var(--color-text-primary)",
                transform: menuOpen
                  ? "translateY(6px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--color-text-primary)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                backgroundColor: "var(--color-text-primary)",
                transform: menuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <div
        className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col py-24 px-8"
        style={{
          width: "min(320px, 85vw)",
          backgroundColor: "var(--color-surface)",
          borderLeft: "1px solid var(--color-border-hairline)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center"
          style={{ color: "var(--color-text-secondary)" }}
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* VS. logo inside drawer */}
        <div
          className="mb-12 uppercase font-bold"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "20px",
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          VS.
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-6 flex-grow">
          {navLinks.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="uppercase text-2xl font-bold tracking-tight transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    letterSpacing: "-0.02em",
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Resume CTA inside drawer */}
        <Link
          href="#"
          onClick={closeMenu}
          className="uppercase tracking-wider text-[13px] border text-center py-4 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-geist-mono)",
            letterSpacing: "0.05em",
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
          }}
        >
          RESUME ↓
        </Link>
      </div>
    </>
  );
}

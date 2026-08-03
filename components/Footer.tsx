"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Email" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "Source" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-pad w-full py-24 border-t flex flex-col items-center justify-center gap-12 text-center"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border-hairline)",
      }}
    >
      {/* CTA headline */}
      <div
        className="uppercase tracking-tighter"
        style={{
          fontFamily: "var(--font-geist-sans)",
          fontSize: "clamp(28px, 5vw, 64px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          color: "var(--color-text-primary)",
        }}
      >
        LET&apos;S BUILD SOMETHING SCALABLE.
      </div>

      {/* Get in touch CTA */}
      <Link
        href="#"
        className="inline-flex items-center justify-center uppercase tracking-wider text-lg transition-colors duration-200 px-8 py-5"
        style={{
          fontFamily: "var(--font-geist-mono)",
          letterSpacing: "0.05em",
          backgroundColor: "var(--color-primary)",
          color: "var(--color-on-primary)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--color-primary-fixed-dim)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--color-primary)")
        }
      >
        Get in touch{" "}
        <span className="material-symbols-outlined ml-2">mail</span>
      </Link>

      {/* Bottom bar */}
      <div
        className="w-full flex flex-col md:flex-row justify-between items-center mt-12 pt-12 border-t gap-8"
        style={{ borderColor: "var(--color-border-hairline)" }}
      >
        {/* Logo */}
        <div
          className="uppercase tracking-tighter"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          VS.
        </div>

        {/* Nav links */}
        <ul className="flex gap-8">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="uppercase text-[12px] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "var(--color-text-tertiary)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-text-tertiary)")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div
          className="uppercase text-[12px]"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--color-text-tertiary)",
          }}
        >
          © 2024 VIKRANT SINGH. ENGINEERED FOR PERFORMANCE.
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROFILE_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLtoNcNMFN0v_vZshe6JS-lxTnkK1MoG7ZisrKPSNmRd3IZpyR_mpXgdG8q_3wh4mWG6JtHFCOVVv2DlPc_ICsz0hyLRut2fLe3NgrgxKau9nmIjYEjRmoDYrv3bzhfvCKDWoUyr2zK5Vgbc9pTdtwiePls3fAZ61bb-vwPZSugFMeTxqfPvJhk2LIbgYKtRY0l11JUplEC5dE0yg9CBlXUYscF6U5uPbMAUbwTVC50SGfo3b1BPQQU2uRSn";

const socialLinks = [
  { href: "#", label: "Email",    icon: "mail" },
  { href: "#", label: "LinkedIn", icon: "link" },
  { href: "#", label: "GitHub",   icon: "code" },
];

export default function Profile() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="profile"
      className="section-pad mb-32 border-t pt-24"
      style={{ borderColor: "var(--color-border-hairline)" }}
    >
      {/* Section heading */}
      <h2
        className="uppercase tracking-widest mb-12 flex items-center gap-4 text-[12px]"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 500,
          letterSpacing: "0.05em",
          color: "var(--color-primary)",
        }}
      >
        <span
          className="w-8 h-px"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        Profile
      </h2>

      {/* Profile card */}
      <div
        className="border rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-12 items-start"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border-hairline)",
        }}
      >
        {/* Avatar + social links */}
        <div className="w-full md:w-[180px] flex flex-col gap-6 shrink-0 items-center md:items-start">
          <div
            className="w-[180px] h-[180px] border rounded-lg overflow-hidden"
            style={{ borderColor: "var(--color-border-hairline)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROFILE_IMG}
              alt="Vikrant Singh"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 uppercase text-[12px] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-text-secondary)")
                }
              >
                <span className="material-symbols-outlined text-[16px]">
                  {s.icon}
                </span>
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 md:pl-8">
          <p
            className="leading-relaxed max-w-[600px]"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
            }}
          >
            Computer Engineering student and backend developer specializing in
            scalable, low-latency systems. Passionate about building robust
            infrastructure that powers seamless user experiences at scale.
          </p>
        </div>
      </div>

      {/* Education */}
      <div
        className="mt-12 pt-8 border-t"
        style={{ borderColor: "var(--color-border-hairline)" }}
      >
        <div
          className="uppercase mb-2 text-[12px] tracking-widest"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--color-text-tertiary)",
          }}
        >
          Education
        </div>
        <div
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
          }}
        >
          B.E. Computer Engineering, University of Mumbai · 2022–2026 · CGPA 9.67
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socialLinks = [
  { href: "mailto:vikrantsingh202004@gmail.com", label: "Email",    icon: "mail" },
  { href: "https://linkedin.com/in/vikrant-singh-196301210", label: "LinkedIn", icon: "link" },
  { href: "https://github.com/Vikrantsingh22", label: "GitHub",   icon: "code" },
  { href: "https://itsvikrant.tech",            label: "Website",  icon: "language" },
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
      <SectionHeading sectionId="profile" label="Profile" />

      {/* Profile card */}
      <div
        className="border rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-12 items-start"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border-hairline)",
        }}
      >
        {/* Avatar */}
        <div className="shrink-0">
          <div
            className="border rounded-lg overflow-hidden"
            style={{
              width: "220px",
              height: "220px",
              borderColor: "var(--color-border-hairline)",
            }}
          >
            <Image
              src="/images/profile.png"
              alt="Vikrant Singh"
              width={220}
              height={220}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Bio + socials */}
        <div className="flex-1 flex flex-col gap-6">
          <p
            className="leading-relaxed max-w-[600px]"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
            }}
          >
            Backend engineer specializing in high-throughput, real-time systems
            — from migrating 30M+ domain records to building fraud-detection
            and Web3 settlement pipelines processing tens of thousands of
            requests a day.
          </p>

          {/* Social links — horizontal row */}
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
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
      </div>

      {/* Education */}
      <div
        className="mt-12 pt-8 border-t"
        style={{ borderColor: "var(--color-border-hairline)" }}
      >
        <div
          className="uppercase mb-5 text-[12px] tracking-widest"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--color-text-tertiary)",
          }}
        >
          Education
        </div>

        {/* Education card */}
        <div
          className="border rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start transition-colors duration-200"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border-hairline)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor =
              "var(--color-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor =
              "var(--color-border-hairline)")
          }
        >
          {/* Institute logo */}
          <div
            className="shrink-0 border rounded-lg flex items-center justify-center overflow-hidden"
            style={{
              width: "64px",
              height: "64px",
              borderColor: "var(--color-border-hairline)",
              backgroundColor: "var(--color-background)",
            }}
          >
            <Image
              src="/images/experience/tectopensource.png"
              alt="Thakur College of Engineering & Technology"
              width={64}
              height={64}
              className="object-contain p-1"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-1">
            <span
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "17px",
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "var(--color-text-primary)",
              }}
            >
              B.E. Computer Engineering
            </span>
            <span
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "14px",
                lineHeight: 1.5,
                color: "var(--color-text-secondary)",
              }}
            >
              Thakur College of Engineering &amp; Technology, Mumbai
            </span>
            <div
              className="flex flex-wrap gap-3 mt-1 uppercase text-[11px]"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ color: "var(--color-primary)" }}>CGPA 9.67 / 10</span>
              <span style={{ color: "var(--color-text-tertiary)" }}>·</span>
              <span style={{ color: "var(--color-text-tertiary)" }}>Graduated 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

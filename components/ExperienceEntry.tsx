"use client";

import Image from "next/image";

export interface ExperienceEntryProps {
  title: string;
  company: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  dateRange: string;
  bullets: string[];
  moreDetails?: string[];
  note?: string;
  isActive?: boolean;
}

export default function ExperienceEntry({
  title,
  company,
  companyLogo,
  companyLogoAlt,
  dateRange,
  bullets,
  moreDetails,
  note,
  isActive = false,
}: ExperienceEntryProps) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <span
        className="absolute top-1 w-3 h-3 rounded-full border-2"
        style={{
          left: "-29px",
          backgroundColor: "var(--color-background)",
          borderColor: isActive
            ? "var(--color-primary)"
            : "var(--color-border-hairline)",
        }}
      />

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
          >
            {title}
          </h3>
          <div
            className="mt-1 flex items-center gap-2"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "14px",
              lineHeight: 1.5,
              color: isActive
                ? "var(--color-primary)"
                : "var(--color-text-secondary)",
            }}
          >
            {companyLogo && (
              <Image
                src={companyLogo}
                alt={companyLogoAlt ?? company}
                width={24}
                height={24}
                className="object-contain shrink-0"
              />
            )}
            {company}
          </div>
        </div>

        <div
          className="uppercase text-[12px] tracking-widest shrink-0"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--color-text-tertiary)",
          }}
        >
          {dateRange}
        </div>
      </div>

      {/* Main bullets */}
      <ul
        className="list-disc list-outside ml-4 space-y-2 mb-4"
        style={{
          fontFamily: "var(--font-geist-sans)",
          fontSize: "15px",
          lineHeight: 1.7,
          color: "var(--color-text-secondary)",
        }}
      >
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {/* Promotion / note */}
      {note && (
        <p
          className="mb-4 italic"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--color-text-tertiary)",
          }}
        >
          {note}
        </p>
      )}

      {/* Expandable more details */}
      {moreDetails && moreDetails.length > 0 && (
        <details className="group cursor-pointer">
          <summary
            className="list-none uppercase flex items-center gap-2 outline-none text-[12px] tracking-widest transition-colors duration-200"
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
            <span>Show more details</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div
            className="mt-4 pl-4 border-l"
            style={{ borderColor: "var(--color-border-hairline)" }}
          >
            <ul
              className="list-disc list-outside ml-4 space-y-2"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
              }}
            >
              {moreDetails.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </details>
      )}
    </div>
  );
}

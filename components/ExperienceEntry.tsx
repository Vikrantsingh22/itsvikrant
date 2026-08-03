"use client";

export interface ExperienceEntryProps {
  title: string;
  company: string;
  companyLogo: string;
  companyLogoAlt: string;
  dateRange: string;
  bullets: string[];
  moreDetails?: string[];
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
            className="mt-1"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "14px",
              lineHeight: 1.5,
              color: isActive
                ? "var(--color-primary)"
                : "var(--color-text-secondary)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={companyLogo}
              alt={companyLogoAlt}
              className="inline-block w-6 h-6 mr-2 object-contain align-middle"
            />
            {company}
          </div>
        </div>

        <div
          className="uppercase text-[12px] tracking-widest"
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
        className="list-disc list-inside space-y-2 mb-4"
        style={{
          fontFamily: "var(--font-geist-sans)",
          fontSize: "16px",
          lineHeight: 1.6,
          color: "var(--color-text-secondary)",
        }}
      >
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

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
              className="list-disc list-inside space-y-2"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "16px",
                lineHeight: 1.6,
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

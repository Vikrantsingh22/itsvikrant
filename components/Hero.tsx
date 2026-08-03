"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-pad relative py-20 overflow-hidden"
    >
      {/* Animated dot-matrix background */}
      <div
        className="absolute inset-0 dot-matrix-bg pointer-events-none -z-10 animate-drift"
        aria-hidden="true"
      />

      <div className="max-w-3xl">
        {/* Available badge */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className="w-2 h-2 rounded-full animate-pulse-dot"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <span
            className="uppercase tracking-widest text-[12px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
              color: "var(--color-text-secondary)",
            }}
          >
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "var(--color-text-primary)",
          }}
        >
          Vikrant{" "}
          <span style={{ borderBottom: "2px solid var(--color-primary)", paddingBottom: "2px" }}>
            Singh
          </span>
        </h1>

        {/* Subtitle + blinking cursor */}
        <div
          className="mb-10"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "var(--color-text-secondary)",
          }}
        >
          <p className="inline">
            Backend engineer building low-latency, high-throughput systems —
            from real-time trading infra to fintech APIs handling 50,000+
            requests a day.
          </p>
          <span
            className="inline-block align-middle ml-1 animate-cursor-blink"
            style={{
              width: "0.4em",
              height: "1em",
              backgroundColor: "var(--color-primary)",
            }}
          />
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center gap-4 mb-12"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "14px",
            color: "var(--color-text-tertiary)",
          }}
        >
          <span>2+ yrs experience</span>
          <span
            className="w-px h-4"
            style={{ backgroundColor: "var(--color-border-hairline)" }}
          />
          <span>50K+ req/day systems shipped</span>
          <span
            className="w-px h-4"
            style={{ backgroundColor: "var(--color-border-hairline)" }}
          />
          <span>7 hackathon podiums</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#work"
            className="inline-flex items-center justify-center uppercase tracking-wider text-[12px] px-6 py-4 transition-colors duration-200"
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
            View Selected Work
          </Link>
          <Link
            href="#"
            className="hover-border-accent inline-flex items-center justify-center border uppercase tracking-wider text-[12px] px-6 py-4 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
              color: "var(--color-primary)",
              borderColor: "var(--color-border-hairline)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--color-accent-dim)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent")
            }
          >
            Resume{" "}
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_downward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

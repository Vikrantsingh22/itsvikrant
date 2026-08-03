"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  // One-time draw-in: starts false, sets to true after first mount
  const [underlineReady, setUnderlineReady] = useState(false);

  useEffect(() => {
    // Tiny delay so the transition actually plays (won't run during SSR)
    const t = setTimeout(() => setUnderlineReady(true), 100);
    return () => clearTimeout(t);
  }, []);

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

        {/* Headline with full-width animated underline */}
        <h1
          className="mb-6 inline-block"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "var(--color-text-primary)",
          }}
        >
          <span className="block relative pb-2">
            Vikrant Singh
            {/* Draw-in underline: width 0 → 100% on first load */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px]"
              style={{
                backgroundColor: "var(--color-primary)",
                width: underlineReady ? "100%" : "0%",
                transition: "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </span>
        </h1>

        {/* Subtitle + blinking cursor */}
        <div
          className="mb-10"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "var(--color-text-secondary)",
          }}
        >
          <p className="inline">
            Backend engineer building real-time systems at scale — from
            migrating 30M+ domain records to engineering fraud-detection
            pipelines that flag threats in under 30 seconds.
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
          <span>30M+ records migrated</span>
          <span
            className="w-px h-4"
            style={{ backgroundColor: "var(--color-border-hairline)" }}
          />
          <span>5 hackathon podiums</span>
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

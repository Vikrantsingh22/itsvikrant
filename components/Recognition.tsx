"use client";

import { useState } from "react";
import RecognitionItem from "./RecognitionItem";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const recognitions = [
  {
    name: "SuperTeam Bounty",
    placement: "2nd Place",
    year: "2024",
    note: "AI-driven Valorant analytics engine for predictive stats-based betting",
  },
  {
    name: "BNB Chain Hackathon",
    placement: "2nd Place",
    year: "2025",
    note: "Built BNBBrawl — real-time esports wagering with on-chain payouts",
  },
  {
    name: "DSCVR Hackathon",
    placement: "2nd Place",
    year: "2024",
    note: "Single-click auction platform with Redis and WebSocket connectors",
  },
];

const moreRecognitions = [
  {
    name: "Hackanova 3.0",
    placement: "2nd Runner-Up",
    year: "2024",
  },
  {
    name: "HackX Hackathon",
    placement: "1st Place",
    year: "2023",
    note: "Blockchain-based academic record verification using Ethereum smart contracts",
  },
];

export default function Recognition() {
  const ref = useScrollReveal<HTMLElement>();
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      ref={ref}
      id="recognition"
      className="section-pad mb-32"
    >
      <SectionHeading sectionId="recognition" label="Recognition" />

      <div className="max-w-3xl">
        {/* Main items */}
        <div
          className="flex flex-col border-t"
          style={{ borderColor: "var(--color-border-hairline)" }}
        >
          {recognitions.map((item) => (
            <RecognitionItem key={item.name} {...item} />
          ))}

          {/* Expandable additional items */}
          {showMore &&
            moreRecognitions.map((item) => (
              <RecognitionItem key={item.name} {...item} />
            ))}
        </div>

        {/* Toggle button — React state, single icon at a time */}
        <div className="mt-6">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="inline-flex items-center gap-2 uppercase text-[12px] transition-colors duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "var(--color-text-tertiary)",
              background: "none",
              border: "none",
              padding: 0,
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
            {showMore ? (
              <>
                <span className="material-symbols-outlined text-[16px]">remove</span>
                Show less
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[16px]">add</span>
                {moreRecognitions.length} more
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

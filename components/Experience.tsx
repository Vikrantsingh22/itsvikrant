"use client";

import { useState } from "react";
import ExperienceEntry from "./ExperienceEntry";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const mainExperiences = [
  {
    title: "SDE Intern → Senior Associate SDE",
    company: "Radix, Mumbai",
    companyLogo: "/images/experience/radix.png",
    dateRange: "Jan 2026 – Present",
    bullets: [
      "Reduced operational costs 3x across 11 TLDs (.online, .tech, .store, .fun, .host, .space, .press, .pw, .site, .uno, .website) by architecting internal automation in Python and Node.js that replaced 3 external third-party services covering domain governance, abuse-handling, and registrar operations.",
      "Eliminated the Business Intelligence team's dependency on external SERP tooling by building an in-house analysis platform with multi-step retrieval workflows, automating registrar data extraction across all 11 TLDs.",
      "Cut manual intervention time 60% by engineering scalable concurrent job-processing pipelines for trust & safety workflows across 11 production TLDs.",
      "Enhanced monitoring with Prometheus and Grafana across registry platforms serving 11 TLDs, enabling anomaly detection before customer impact.",
      "Contributed to migrating 30M+ domain records between registry backends — the largest such migration in company history.",
    ],
    note: "Promoted from Intern to Senior Associate SDE in Jul 2026.",
    isActive: true,
  },
  {
    title: "Backend Developer Intern",
    company: "PayRam — Self-Hosted Stablecoin Payments, Remote",
    companyLogo: "/images/experience/payram.jpg",
    dateRange: "Oct 2025 – Feb 2026",
    bullets: [
      "Shipped 2 core production features for a multi-chain payment server, owning the full lifecycle from system design through deployment and debugging.",
      "Cut manual QA effort 90% and improved bug-detection speed 5x by engineering 26 automated end-to-end test cases covering payment workflows and smart contract deployments via GitHub Actions CI/CD.",
      "Contributed to automated settlement workflows and wallet infrastructure spanning 4 blockchain networks (Ethereum, Base, Bitcoin, Tron) with sub-second settlement targets.",
    ],
    isActive: false,
  },
];

const moreExperiences = [
  {
    title: "Backend Developer Intern",
    company: "CATOFF Gaming LLC, Bangalore",
    companyLogo: "/images/experience/catoff.jpg",
    dateRange: "Jun 2024 – Oct 2025",
    bullets: [
      "Drove real-time game-state sync for 3,000+ concurrent users via REST and webhook connectors in NestJS, integrating the Riot Games SDK and social media APIs.",
      "Improved data ingestion throughput 45% by engineering async job queues with BullMQ and Redis, processing 50,000+ daily requests without queue saturation.",
      "Designed a RAG pipeline (LangChain, PGVector, OpenAI GPT) cutting game-stats analysis time 80%, delivering predictive pre-match insights from unstructured game data.",
      "Achieved sub-200ms API latency at 50,000+ daily requests via containerized NestJS microservices on GCP Kubernetes with horizontal pod autoscaling; cut downtime incidents 40% with Prometheus/Grafana observability.",
    ],
    isActive: false,
  },
];

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      ref={ref}
      id="experience"
      className="section-pad mb-32"
    >
      <SectionHeading sectionId="experience" label="Experience" />

      {/* Timeline */}
      {/*
        The line is a dedicated absolutely-positioned element so it starts
        exactly at the center of the first dot (6px = half of 12px dot),
        rather than at the container top (which border-l would do).
      */}
      <div className="relative pl-6 md:pl-8">
        {/* Vertical connector line — starts at first-dot center */}
        <div
          className="absolute left-0 bottom-0 w-px"
          style={{
            top: "6px",
            backgroundColor: "var(--color-border-hairline)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-16">
          {mainExperiences.map((exp) => (
            <ExperienceEntry key={exp.title} {...exp} />
          ))}

          {/* Expandable older experience */}
          {showMore &&
            moreExperiences.map((exp) => (
              <ExperienceEntry key={exp.title} {...exp} />
            ))}
        </div>
      </div>

      {/* Toggle button */}
      <div className="mt-12">
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
              More Experience
            </>
          )}
        </button>
      </div>
    </section>
  );
}

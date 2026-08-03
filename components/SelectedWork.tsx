"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredProject = {
  title: "CertWatch",
  subtitle: "Real-Time Domain Threat Intelligence Platform",
  description:
    "A live system that ingests every SSL certificate issued anywhere on the internet in real time via Certificate Transparency logs, flags domains impersonating known brands, and scores each one through an explainable risk engine. A tiered similarity-matching engine replaces naive string comparison, cutting false positives to near-zero across 30+ monitored brands including Indian banks and fintechs. Parallel enrichment workers pull DNS, WHOIS, ASN, and content signals without stalling the pipeline — flagging malicious domains in under 30 seconds, the same threat intel registrar trust & safety teams rely on.",
  image: "https://opengraph.githubassets.com/1/Vikrantsingh22/CertWatch",
  imageAlt: "CertWatch — Real-Time Domain Threat Intelligence",
  tags: [
    "Node.js", "NestJS", "TypeScript", "BullMQ", "Redis",
    "PostgreSQL", "Kubernetes", "GCP", "Prometheus/Grafana", "Playwright",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Vikrantsingh22/CertWatch" },
    { label: "Build thread", href: "https://x.com/Vikrant2287/status/2068043949172998262" },
  ],
};

const secondaryProjects = [
  {
    title: "BNBBrawl",
    subtitle: "Real-Time Esports Wagering on BNB Chain",
    description:
      "Built in 16 hours during the BNB Chain Hackathon: a live wagering platform for Valorant Champions Tour matches. Connect a wallet, place on-chain bets against real-time odds, and receive instant payouts through a Solidity escrow contract the moment a match ends. Placed 2nd.",
    image: "https://opengraph.githubassets.com/1/Vikrantsingh22/BNBBrawl",
    imageAlt: "BNBBrawl — Esports wagering on BNB Chain",
    tags: ["React.js", "Express.js", "TypeScript", "Solidity", "BNB Smart Chain", "Ethers.js", "Supabase"],
    links: [
      { label: "GitHub", href: "https://github.com/Vikrantsingh22/BNBBrawl" },
      { label: "Demo", href: "https://youtu.be/jvT85thNhts" },
    ],
  },
  {
    title: "Solana Security Dashboard",
    subtitle: "On-Chain Exploit & Threat Tracker",
    description:
      "A live dashboard tracking Solana exploits and failed transactions in real time, combining Dune Analytics queries with a Puppeteer-scraped historical exploit database. Surfaces fund-loss analytics, exploit timelines, high-frequency-signer detection, and a filterable resource library for security researchers.",
    image: "https://opengraph.githubassets.com/1/Vikrantsingh22/solisburning",
    imageAlt: "Solana Security Dashboard",
    tags: ["Next.js", "TypeScript", "Puppeteer", "Docker", "Dune Analytics API", "Supabase/PostgreSQL"],
    links: [
      { label: "GitHub", href: "https://github.com/Vikrantsingh22/solisburning" },
      { label: "Live dashboard", href: "https://solanasecurity-dashboard-by-vikrant.vercel.app/dashboard" },
      { label: "Demo", href: "https://youtu.be/bmHkz2OOkTo" },
    ],
  },
];

export default function SelectedWork() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="work"
      className="section-pad mb-32"
    >
      <SectionHeading sectionId="work" label="Selected Work" />

      <div className="flex flex-col gap-8">
        {/* Featured project */}
        <ProjectCard {...featuredProject} featured />

        {/* 2-up grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-4 text-center md:text-left">
          <Link
            href="https://github.com/Vikrantsingh22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 uppercase text-[12px] transition-colors duration-200"
            style={{
              fontFamily: "var(--font-geist-mono)",
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
            View more on GitHub{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

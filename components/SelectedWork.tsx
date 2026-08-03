"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredProject = {
  title: "ERP Backend System",
  description:
    "Architected and deployed a highly scalable Enterprise Resource Planning backend. Engineered a resilient microservices architecture that reduced data retrieval times by 40% and improved concurrent user handling. Integrated real-time synchronization across multiple client nodes.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtIfOkk417tN1gk589FdohsQRP9RAPmwd5GiU7u64ynRRersGR5E0Fpqn522idaybbXRMCDXWk7e2GaJuWrMxqqfpvE9U38gzeN3IFJqeIcDW5OX6nzzeym1MFjOaRmH6_Q5JjYriInyOF0kjjILourFveH3SDMMC1hh5UIoog-QXsef9FzGoS_xkbzY5NAdH9yKjXgKddbflON4sF6LFD3zfAI6pWxLo89JMxdPPOHYHvmlgVwh4V-Q",
  imageAlt: "ERP Architecture",
  tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
  link: "#",
};

const secondaryProjects = [
  {
    title: "Crypto-Opinion-Trading-Web3.0",
    description:
      "Built a low-latency trading engine simulator handling high-frequency mock order matching. Implemented WebSockets for real-time order book updates and achieved sub-millisecond execution times.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgSPRt9bAw4CGQzMndbJkGqFDdX9ROZn4-gAtAYpxjU3Iar_sb1DXjSprUimHTDkG6A6Omez2HxfbpvKY6H69DpDTsdYv7i0FuE6Bda7X-H96gGjOeUKEckFnvBo1M7zk7rW0TCrDzMJjfWfbMrwKjkz338H91TDoZ1rBYDcPiH92c7ZkxdOYxTCi5_hJ-HodGIh9dSrejUQvEq-L4uiX3boX91JKuwCFsgptVbfqOgVgJOlzzwiQRgw",
    imageAlt: "Web3 Code Snippet",
    tags: ["React.js", "Express.js", "web3.js", "Solidity", "Ethereum"],
    link: "#",
  },
  {
    title: "Dashify",
    description:
      "Data analytics dashboard handling dynamic filtering across large datasets with internet-scale filters including country, region, topics, PESTLE factors, and vector selection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC22WCx8Ciur9LgdawoVhK8L2I2-rRQUqqHymKqISD9e2XeKqFEB9wg_yQMgbSwn9I_g2mjDaJepkWieeH8Tetujt9b7aRs00mLftaIT_cqxY_9YJeCRNf48fMvA3AHd_-77ttxkZEgFj8KHznAqqCo0YmO964eXVYv32nqxuhLytoZbGs_jyQphpecLiRGagPdJlITd3NsmOGogWidzxvPlAI2MO2gkfCEI4Q1eVvcjegv7yq9LSjCVQ",
    imageAlt: "Dashify UI",
    tags: ["Node.js", "Express.js", "React.js", "Chart.js", "MongoDB", "shadcn"],
    link: "#",
  },
  {
    title: "Custom Data-Based Chatbot",
    description:
      "AI-powered chatbot implementing secure database operations and transactions, with vector embeddings for intelligent chat responses.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Bhrr190ES0C6gnfkmXmNp-sc20H-SOpql0t0q-t9TuJ_ZRhBe_3cahoxTykQsdr2uvCYzU08anBTfKHLL7qhiwmXqWXmOZRevTqaJ1UL1_hv4EYpUpQKJxBUXYF0q5t4QPqQobVvrq_PN5_7M_bbHXcvGsWAKc-E_gg-5KDiDpWX9Dsmo3W5US0oImhv3AjKChiwxo4CwlIBdL3kyLauq-X9O7GIm5Mph5G9oJoD5TUOxa99iJZqbQ",
    imageAlt: "AI Chatbot",
    tags: ["Next.js", "MongoDB", "Prisma", "OpenAI", "Clerk Auth"],
    link: "#",
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
        Selected Work
      </h2>

      <div className="flex flex-col gap-8">
        {/* Featured project */}
        <ProjectCard {...featuredProject} featured />

        {/* Secondary projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-8 text-center md:text-left">
          <Link
            href="#"
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

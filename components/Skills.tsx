"use client";

import SkillCategory from "./SkillCategory";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    label: "LANGUAGES",
    skills: ["Python", "Java", "C", "C++", "Solidity", "JavaScript"],
    overflow: ["TypeScript"],
    overflowLabel: "+1 more",
  },
  {
    label: "FRAMEWORKS & INFRA",
    skills: ["React.js", "Node.js", "Express.js", "mongoose", "Prisma", "GCP"],
    overflow: [
      "Next.js",
      "GraphQL",
      "REST APIs",
      "NestJS",
      "RabbitMQ",
      "Docker",
      "Smart Contracts",
    ],
    overflowLabel: "+7 more",
  },
  {
    label: "DATA",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="skills"
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
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((cat) => (
          <SkillCategory key={cat.label} {...cat} />
        ))}
      </div>
    </section>
  );
}

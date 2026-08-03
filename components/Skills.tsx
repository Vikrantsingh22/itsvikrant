"use client";

import SkillCategory from "./SkillCategory";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    label: "LANGUAGES",
    skills: ["Java", "TypeScript", "JavaScript", "Go", "Python"],
    overflow: ["C", "C++", "SQL", "Solidity"],
    overflowLabel: "+4 more",
  },
  {
    label: "BACKEND & APIS",
    skills: ["Spring Boot", "Node.js", "NestJS", "Express.js", "REST APIs"],
    overflow: ["GraphQL", "WebSockets", "Microservices"],
    overflowLabel: "+3 more",
  },
  {
    label: "CLOUD & DEVOPS",
    skills: ["GCP", "Kubernetes", "Docker", "Helm"],
    overflow: ["Argo", "GitHub Actions", "GitLab CI"],
    overflowLabel: "+3 more",
  },
  {
    label: "DATABASES & MESSAGING",
    skills: ["PostgreSQL", "MongoDB", "Redis", "BullMQ", "Kafka"],
    overflow: ["MySQL", "PineconeDB", "Firebase", "PGVector", "RabbitMQ"],
    overflowLabel: "+5 more",
  },
  {
    label: "GENAI & ML",
    skills: ["LangChain", "RAG Pipelines", "OpenAI GPT APIs"],
    overflow: ["Vector Embeddings", "Prompt Engineering", "LLM Fine-tuning"],
    overflowLabel: "+3 more",
  },
  {
    label: "OBSERVABILITY & TESTING",
    skills: ["Prometheus", "Grafana", "Jest", "JUnit"],
    overflow: ["End-to-End Testing", "Automated Test Pipelines"],
    overflowLabel: "+2 more",
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
      <SectionHeading sectionId="skills" label="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((cat) => (
          <SkillCategory key={cat.label} {...cat} />
        ))}
      </div>
    </section>
  );
}

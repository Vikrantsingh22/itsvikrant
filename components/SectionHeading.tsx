"use client";

import { useActiveSection } from "@/context/ActiveSectionContext";

interface SectionHeadingProps {
  /** The section id this heading belongs to (e.g. "work", "experience") */
  sectionId: string;
  label: string;
}

/**
 * Reusable section heading with a decorative teal line that expands
 * smoothly when this section becomes the active nav section.
 */
export default function SectionHeading({ sectionId, label }: SectionHeadingProps) {
  const activeSection = useActiveSection();
  const isActive = activeSection === sectionId;

  return (
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
        className={`h-px transition-[width] duration-500 ease-out ${
          isActive ? "w-[48px] md:w-[68px]" : "w-8"
        }`}
        style={{ backgroundColor: "var(--color-primary)" }}
      />
      {label}
    </h2>
  );
}

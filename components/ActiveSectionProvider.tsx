"use client";

import { useEffect, useState, ReactNode } from "react";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

const SECTION_IDS = [
  "home",
  "work",
  "experience",
  "profile",
  "skills",
  "recognition",
  "contact",
];

/**
 * Page-level provider that tracks the active section via IntersectionObserver
 * and broadcasts it through ActiveSectionContext to all descendants —
 * including Nav (for link highlight) and SectionHeading (for underline animation).
 */
export default function ActiveSectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

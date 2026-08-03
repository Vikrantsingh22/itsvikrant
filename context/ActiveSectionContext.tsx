"use client";

import { createContext, useContext } from "react";

/**
 * Shared context for broadcasting the active nav section ID.
 * Produced by Nav (via IntersectionObserver) and consumed by section headings
 * to expand their decorative line span when active.
 */
export const ActiveSectionContext = createContext<string>("home");

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

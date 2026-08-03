"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport (100px threshold from the bottom),
 * the `active` class is added, triggering the `.reveal.active` CSS transition.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add reveal class initially
    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once revealed, unobserve to avoid re-hiding
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

const metrics = [
  { value: "30M+",    label: "Domain records migrated — highest in company history" },
  { value: "3x",      label: "Operational cost reduction across 11 TLDs" },
  { value: "50,000+", label: "Daily requests at sub-200ms latency" },
  { value: "90%",     label: "Manual QA effort eliminated via automated testing" },
];

export default function ImpactStrip() {
  return (
    /**
     * Fix 3: The coloured background + border-y now live on the INNER div
     * (which is constrained by .section-pad's max-width), not on the full-width
     * <section>. This makes the strip visually match the content width of other
     * sections instead of spanning edge-to-edge on wide screens.
     */
    <section className="mb-24">
      <div className="section-pad">
        <div
          className="border-y py-12"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border-hairline)",
          }}
        >
          {/**
           * Fix 1: Border-left is now a Tailwind responsive class (md:border-l)
           * so it is absent on mobile (grid-cols-2) and present only on md+
           * (grid-cols-4). The border color is set via a CSS custom property
           * using Tailwind's arbitrary-value syntax.
           */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col gap-2 px-0 md:px-6${
                  i > 0 ? " md:border-l [border-color:var(--color-border-hairline)]" : ""
                }`}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "32px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "var(--color-primary)",
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

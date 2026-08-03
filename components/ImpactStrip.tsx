const metrics = [
  { value: "50,000+", label: "Requests/mo handled" },
  { value: "37%",     label: "Engagement lift" },
  { value: "$300",    label: "Saved/month API costs" },
  { value: "99.999%", label: "Uptime achieved" },
];

export default function ImpactStrip() {
  return (
    <section
      className="border-y py-12 mb-24"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border-hairline)",
      }}
    >
      <div className="section-pad">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex flex-col gap-2 px-0 md:px-6"
              style={{
                borderLeft: i > 0 ? `1px solid var(--color-border-hairline)` : undefined,
              }}
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
    </section>
  );
}

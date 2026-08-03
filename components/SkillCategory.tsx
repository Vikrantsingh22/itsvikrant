"use client";

export interface SkillCategoryProps {
  label: string;
  skills: string[];
  overflow?: string[];
  overflowLabel?: string;
}

export default function SkillCategory({
  label,
  skills,
  overflow,
  overflowLabel,
}: SkillCategoryProps) {
  return (
    <div>
      <div
        className="uppercase mb-4 tracking-widest text-[12px]"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 500,
          letterSpacing: "0.05em",
          color: "var(--color-text-tertiary)",
        }}
      >
        {label}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 border rounded-full text-[13px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              borderColor: "var(--color-border-hairline)",
              color: "var(--color-text-secondary)",
            }}
          >
            {skill}
          </span>
        ))}

        {overflow && overflow.length > 0 && (
          <details className="w-full mt-2 group cursor-pointer outline-none">
            <summary
              className="list-none uppercase flex items-center gap-1 text-[12px] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
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
              <span className="group-open:hidden">
                {overflowLabel ?? `+${overflow.length} more`}
              </span>
              <span className="hidden group-open:inline-block">- Show less</span>
            </summary>
            <div className="flex flex-wrap gap-2 mt-2">
              {overflow.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border rounded-full text-[13px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    borderColor: "var(--color-border-hairline)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}

"use client";

export interface RecognitionItemProps {
  name: string;
  placement: string;
  year: string;
  note?: string;
}

export default function RecognitionItem({
  name,
  placement,
  year,
  note,
}: RecognitionItemProps) {
  return (
    <div
      className="py-6 border-b flex flex-col md:flex-row justify-between md:items-center gap-2 px-2 transition-colors duration-200"
      style={{ borderColor: "var(--color-border-hairline)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(18,19,21,0.5)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")
      }
    >
      <div className="flex flex-col gap-1">
        <span
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          {name}
        </span>
        {note && (
          <span
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "13px",
              lineHeight: 1.5,
              color: "var(--color-text-tertiary)",
            }}
          >
            {note}
          </span>
        )}
      </div>

      <div
        className="flex items-center gap-4 uppercase text-[12px]"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        <span style={{ color: "var(--color-primary)" }}>{placement}</span>
        <span
          className="w-1 h-1 rounded-full"
          style={{ backgroundColor: "var(--color-border-hairline)" }}
        />
        <span style={{ color: "var(--color-text-tertiary)" }}>{year}</span>
      </div>
    </div>
  );
}

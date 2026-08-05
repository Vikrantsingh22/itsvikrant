"use client";

import Image from "next/image";

export interface RecognitionItemProps {
  name: string;
  placement: string;
  year: string;
  note?: string;
  image?: string;
}

export default function RecognitionItem({
  name,
  placement,
  year,
  note,
  image,
}: RecognitionItemProps) {
  return (
    <div
      className="py-6 border-b flex flex-row items-center gap-5 px-2 transition-colors duration-200"
      style={{ borderColor: "var(--color-border-hairline)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(18,19,21,0.5)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")
      }
    >
      {/* Recognition image / trophy icon */}
      <div
        className="shrink-0 border rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          width: "56px",
          height: "56px",
          borderColor: "var(--color-border-hairline)",
          backgroundColor: "var(--color-background)",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="object-contain p-1 w-full h-full"
          />
        ) : (
          <span
            className="material-symbols-outlined"
            style={{ color: "var(--color-primary)", fontSize: "28px" }}
          >
            emoji_events
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
        <div className="flex flex-col gap-0.5">
          <span
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "18px",
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
          className="flex items-center gap-3 shrink-0 uppercase text-[12px]"
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
    </div>
  );
}

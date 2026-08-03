"use client";

import Link from "next/link";

export interface ProjectCardProps {
  featured?: boolean;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  featured = false,
  title,
  description,
  image,
  imageAlt,
  tags,
  link = "#",
}: ProjectCardProps) {
  const cardBase = {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-border-hairline)",
  };

  if (featured) {
    return (
      <div
        className="border p-8 md:p-12 group transition-colors duration-300 hover-featured-card"
        style={cardBase}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor =
            "var(--color-primary)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor =
            "var(--color-border-hairline)")
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <div
              className="uppercase mb-4 text-[12px] tracking-widest"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: "var(--color-text-secondary)",
              }}
            >
              Featured Project
            </div>

            {/* Project image */}
            <div
              className="mb-8 border overflow-hidden mx-auto"
              style={{ borderColor: "var(--color-border-hairline)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto block"
              />
            </div>

            <h3
              className="mb-6 transition-colors duration-300"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--color-text-primary)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-text-primary)")
              }
            >
              {title}
            </h3>

            <p
              className="mb-8 leading-relaxed max-w-2xl"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "var(--color-text-secondary)",
              }}
            >
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border uppercase rounded-full text-[10px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    borderColor: "var(--color-border-hairline)",
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* View Source link */}
          <Link
            href={link}
            className="flex items-center gap-2 uppercase text-[12px] transition-colors duration-200"
            style={{
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
              color: "var(--color-primary)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--color-primary-fixed-dim)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--color-primary)")
            }
          >
            View Source{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </Link>
        </div>
      </div>
    );
  }

  // Secondary (grid) card
  return (
    <div
      className="border p-8 flex flex-col justify-between transition-colors duration-300"
      style={cardBase}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor =
          "var(--color-primary)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor =
          "var(--color-border-hairline)")
      }
    >
      <div>
        {/* Image */}
        <div
          className="mb-6 border overflow-hidden"
          style={{ borderColor: "var(--color-border-hairline)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto block"
          />
        </div>

        <h4
          className="mb-4"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h4>

        <p
          className="mb-6 text-sm"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
          }}
        >
          {description}
        </p>
      </div>

      <div className="flex justify-between items-end mt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border uppercase rounded-full text-[10px]"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                letterSpacing: "0.05em",
                borderColor: "var(--color-border-hairline)",
                color: "var(--color-text-tertiary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          className="transition-colors duration-200"
          style={{ color: "var(--color-text-secondary)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color =
              "var(--color-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color =
              "var(--color-text-secondary)")
          }
        >
          <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
      </div>
    </div>
  );
}

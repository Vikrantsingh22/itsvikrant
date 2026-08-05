"use client";

import Link from "next/link";
import Image from "next/image";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectCardProps {
  featured?: boolean;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  links?: ProjectLink[];
  /** @deprecated use links[] instead */
  link?: string;
}

export default function ProjectCard({
  featured = false,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  tags,
  links,
  link,
}: ProjectCardProps) {
  // Normalize: support old single `link` prop or new `links[]`
  const resolvedLinks: ProjectLink[] =
    links && links.length > 0
      ? links
      : link && link !== "#"
      ? [{ label: "View Source", href: link }]
      : [];

  const cardBase = {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-border-hairline)",
  };

  if (featured) {
    return (
      <div
        className="border p-8 md:p-12 group transition-colors duration-300"
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
        <div className="flex flex-col gap-8">
          <div
            className="uppercase text-[12px] tracking-widest"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: "var(--color-text-secondary)",
            }}
          >
            Featured Project
          </div>

          {/* Project image */}
          <div
            className="border overflow-hidden"
            style={{ borderColor: "var(--color-border-hairline)" }}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-primary)",
                }}
              >
                {title}
              </h3>

              {subtitle && (
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "13px",
                    letterSpacing: "0.03em",
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  {subtitle}
                </p>
              )}

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

            {/* Action links */}
            {resolvedLinks.length > 0 && (
              <div className="flex flex-col gap-3 shrink-0">
                {resolvedLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    {l.label}{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <h4
          className="mb-2"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h4>

        {subtitle && (
          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "11px",
              letterSpacing: "0.03em",
              color: "var(--color-text-tertiary)",
            }}
          >
            {subtitle}
          </p>
        )}

        <p
          className="mb-6"
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

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
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

      {/* Links — full-width row below tags, label + arrow */}
      {resolvedLinks.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t" style={{ borderColor: "var(--color-border-hairline)" }}>
          {resolvedLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 uppercase text-[11px] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
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
              {l.label}
              <span className="material-symbols-outlined text-[14px]">
                arrow_outward
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

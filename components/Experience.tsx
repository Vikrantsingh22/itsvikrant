"use client";

import ExperienceEntry from "./ExperienceEntry";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LOGO_CATOFF =
  "https://lh3.googleusercontent.com/aida/AP1WRLsRNaTEbFp0Xwyyhj_-9_uemskYcdn1NDcmNrROi_OPIX_wKRK43ib-QOJgj2-hhxnpYhD1CvnEARFK1QhyMpZnf6jZq_NV95QMBu-lrvWWPfImfhGZEN5IJ8eknIpxo9t9uCHa3bn79Szttt30d-aPaCR9B6ZFn14uKos1-pIR31Kh5w0b4Zd2UEZ5VMEDlA3U4_kFF56s3ZLUNW2udijmSOb1CC8TNeEM1_hWWC8kk1cssk_81qyrG0U";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "@ CatOff Gaming",
    companyLogo: LOGO_CATOFF,
    companyLogoAlt: "CatOff Logo",
    dateRange: "Jun 2023 - Present",
    bullets: [
      "Saved $300/week in API costs by optimizing external service calls and implementing caching layers.",
      "Engineered core backend services reliably handling 50k+ requests daily with 99.99% uptime.",
      "Led the migration of legacy monolithic endpoints to a scalable microservices architecture.",
    ],
    moreDetails: [
      "Collaborated with a cross-functional team on backend architecture.",
      "Integrated Apple Health, Google Fit, and Strava APIs, driving a 37% engagement increase.",
      "Built a custom helpdesk ticketing system migration from OS Ticket to GSuite, cutting cost by 78% versus the previous commercial service.",
    ],
    isActive: true,
  },
  {
    title: "Backend Developer Intern",
    company: "@ TCET Open Source, Mumbai, Maharashtra",
    companyLogo: LOGO_CATOFF,
    companyLogoAlt: "TCET Logo",
    dateRange: "Jun 2023 - Jan 2024",
    bullets: [
      "Designed scalable ERP solutions supporting 5,000+ users.",
      "Containerized microservices with Docker for consistent environment-agnostic deployment.",
    ],
    isActive: false,
  },
];

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      className="section-pad mb-32"
    >
      {/* Section heading */}
      <h2
        className="uppercase tracking-widest mb-12 flex items-center gap-4 text-[12px]"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 500,
          letterSpacing: "0.05em",
          color: "var(--color-primary)",
        }}
      >
        <span
          className="w-8 h-px"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        Experience
      </h2>

      {/* Timeline */}
      <div
        className="relative pl-6 md:pl-8 border-l space-y-16"
        style={{ borderColor: "var(--color-border-hairline)" }}
      >
        {experiences.map((exp) => (
          <ExperienceEntry key={exp.title} {...exp} />
        ))}
      </div>

      {/* "More Experience" expandable */}
      <div className="mt-12">
        <details className="group cursor-pointer outline-none">
          <summary
            className="list-none inline-flex items-center gap-2 uppercase text-[12px] transition-colors duration-200"
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
            <span className="material-symbols-outlined text-[16px] group-open:hidden">
              add
            </span>
            <span className="material-symbols-outlined text-[16px] hidden group-open:inline-block">
              remove
            </span>
            <span className="group-open:hidden">More Experience</span>
            <span className="hidden group-open:inline-block">Show less</span>
          </summary>
          <div
            className="mt-4 pl-4 border-l text-sm italic"
            style={{
              borderColor: "var(--color-border-hairline)",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
            }}
          >
            Additional project and internship details available upon request.
          </div>
        </details>
      </div>
    </section>
  );
}

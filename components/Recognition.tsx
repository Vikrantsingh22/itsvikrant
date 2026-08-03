"use client";

import RecognitionItem from "./RecognitionItem";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const recognitions = [
  {
    name: "Hackanova 3.0",
    logo: "https://lh3.googleusercontent.com/aida/AP1WRLvN8Dj2VMYsFU0v-FZDKeQ70zHJBNvd-PrksuUhDAb9iHsTm1atkRrC6-6xeGOjnLowAH0sygcHrdWuXea94XpBgL9SEvWUFPP56qoS-Bo1pv-FarDUBd-ReXfL2bD08CilL3PtxLGfXNX4sW857dn22TGpW-HNxtalhHLBWIll-Fjwh8zzzQoF9KyEkgrQ6oS51PEU4JfXYxsbuwvlTDRsfGRZn1taMsQdP2yxOwNjaaxu1BVSo3YVuhQE",
    logoAlt: "Hackanova Logo",
    placement: "2nd Runner Up",
    year: "2024",
  },
  {
    name: "HackX",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvVevHV3b_82AP3G22t1aISRJYCRqU3sisUTmoJVYLMDJ4xut8MHt4iOKIunBQuGJLJsl19fm4oz_boRKHv8gzk549Eq2BtN4RQKke9uPI3PDl5JP2UtDZMmNY5XwViXSZvga8qZF7qw41NT7_7VF5UcVlPZXtVJupQRs6wUwm_v_1JwTXkGal4PY0ClfMNLLHVK03qUBqcF_zrDTevKei39JLrNqMyDykbbZiaVVpVkKLBEebO5py6w",
    logoAlt: "HackX Logo",
    placement: "Winner",
    year: "2023",
  },
  {
    name: "SuperTeam Bounty",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBizSo2p2deamEicTWZmTnSUOzSjAl9W1TUVDe-LFSUTfmlFFkyBx0mQgacffEICykiKyv2wVpzSDilXzQUcKNc3UHb6z0U5YAGGmrFHHpm-rAA0S8FKTUrXAkMpzmXzYLDFgt8MxFn8oG07GsTN6S_1aDDJ1u2Z4lnSiKnTjMEUapKp346sFAtr1RKUX47j6agvAwI60Ytk5ekNSeAUp_tgcrOt62mTPzxhmJozl561ydI3F5LpX79dg",
    logoAlt: "SuperTeam Logo",
    placement: "3rd Place, $300 Prize",
    year: "2024",
  },
  {
    name: "DSCVR Hackathon",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy9xfRsN40oV-lnawmpyKiU5Yps0ZllJABJaJyilrCHxBkqEqdRl3jGw12Jg_kHGIbNTjfyMM_K2F9FS87Ezj_2qOGy9gWAV5DNy9a4jvAfyFKaLKtJEkIh2jAtAH0YwdSxkG8edZYWYwdUGPe7tX0sS4_yooy0HfiQZ98oFH-jWAVm5tnf5SxVMicX1CyK_a6jMVVjNsOLEIEjhFTBxLwFwVH3uhCv22BQnIH8JI9p4dIAJDLUy-ceg",
    logoAlt: "DSCVR Logo",
    placement: "2nd Place, $1500 Prize",
    year: "2024",
  },
];

export default function Recognition() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="recognition"
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
        Recognition
      </h2>

      <div className="max-w-3xl">
        {/* Items list */}
        <div
          className="flex flex-col border-t"
          style={{ borderColor: "var(--color-border-hairline)" }}
        >
          {recognitions.map((item) => (
            <RecognitionItem key={item.name} {...item} />
          ))}
        </div>

        {/* "4 more" expandable */}
        <details className="mt-6 group cursor-pointer outline-none">
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
            <span className="group-open:hidden">4 more</span>
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
            (Additional hackathon achievements and academic recognitions
            available upon request or visible on complete resume).
          </div>
        </details>
      </div>
    </section>
  );
}

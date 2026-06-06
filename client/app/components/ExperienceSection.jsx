"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";

const ExperienceSection = () => {
  const items = useMemo(
    () => [
      {
        id: "cpp-2027",
        type: "Work",
        title: "Intern, Technology & Data (Incoming)",
        org: "CPP Investments",
        location: "Toronto, ON",
        start: "Jan 2027",
        end: "Apr 2027",
        tags: [],
        bullets: ["Incoming Winter 2027 internship in Technology & Data."],
      },
      {
        id: "phi-2026",
        type: "Work",
        title: "Software Developer Intern",
        org: "Peace Hills Insurance",
        location: "Edmonton, AB",
        start: "May 2026",
        end: "Current",
        tags: ["AI RAG", "AWS", "Python", "Java"],
        bullets: [
          "Implementing regulatory Guidewire updates in Java, ensuring system compliance for 1,000+ brokers",
          "Building a RAG-based AI assistant on AWS Bedrock for scalable enterprise search across Sharepoint and Teams",
          "Developing an internal AI coding assistant using hosted LLMs and enterprise code retrieval for developers",
        ],
      },
      {
        id: "mindrift-2026",
        type: "Work",
        title: "AI Model Evaluation Contributor",
        org: "Mindrift",
        location: "Remote",
        start: "Jan 2026",
        end: "Apr 2026",
        tags: ["AI", "Testing"],
        bullets: [
          "Contributed to multiple AI projects by evaluating LLM-based agents across different domains, generating and assessing multi-turn prompts for response quality, intent alignment, and factual accuracy",
        ],
      },
      {
        id: "pcl-2025",
        type: "Work",
        title: "Solution Delivery Intern",
        org: "PCL Construction",
        location: "Edmonton, AB",
        start: "May 2025",
        end: "Dec 2025",
        tags: ["C#", "Azure DevOps", "Power BI", "Power Automate"],
        bullets: [
          "Contributed across the full SDLC for 5 enterprise products in Azure DevOps, translating business requirements into C# features, unit tests, and production releases across 40+ districts",
          "Automated a payroll reporting workflow using Power BI and Power Automate, reducing processing time by 92%",
          "Tested and deployed system integrations for 3 new districts, supporting 300+ users and 50+ active projects",
          "Led a team of 4 to develop an internal AI Copilot agent, standardizing onboarding workflows and improving knowledge access",
        ],
      },
      {
        id: "ta-2025",
        type: "Work",
        title: "Teaching Assistant",
        org: "University of Saskatchewan",
        location: "Saskatoon, SK",
        start: "Jan 2025",
        end: "Apr 2025",
        tags: ["React", "Node/Express", "SQL", "Docker"],
        bullets: [
          "Graded 150+ assignments and 30+ projects for CMPT 353: Full-Stack Web Programming (220+ students)",
          "Answered technical questions and reviewed code in React, Node/Express, SQL, Docker, and cloud deployment",
        ],
      },
      {
        id: "nesd-2024",
        type: "Work",
        title: "Software Developer Intern",
        org: "North East School Division",
        location: "Tisdale, SK",
        start: "May 2024",
        end: "Sep 2024",
        tags: ["Django", "React", "Python", "SQL"],
        bullets: [
          "Developed an internal asset management system end-to-end (Django + React), replacing legacy software and reducing annual costs by $30,000+",
          "Automated data migration across 21 school communities via Python, reducing migration time to under 10 minutes",
          "Profiled Django APIs/ORM queries and optimized bottlenecks, improving average server response times by 3x",
        ],
      },
      {
        id: "staples-2023",
        type: "Work",
        title: "Technology Sales Representative",
        org: "Staples Canada",
        location: "Lloydminster, SK",
        start: "May 2023",
        end: "Sep 2023",
        tags: ["Hardware", "Customer Service", "Sales"],
        bullets: [
          "Secured Top 10 seller status district-wide and became the store's #1 seller within 5 months, generating over $100,000 in monthly sales",
          "Exceeded monthly sales targets by an average of 200%, consistently ranking in the top tier of performance metrics across the region",
          "Trained 3 new team members on sales techniques and product knowledge, improving monthly sales performance",
        ],
      },
      {
        id: "usask-edu",
        type: "Education",
        title: "B.Sc in Computer Science + Certificate in Business",
        org: "University of Saskatchewan",
        location: "Saskatoon, SK",
        start: "-",
        end: "May 2027 (Expected)",
        tags: ["Computer Science", "Business"],
        bullets: [
          "CMPT 353 - Full Stack Web Programming",
          "CMPT 370 - Intermediate Software Engineering",
          "CMPT 371 - Software Management",
          "CMPT 280 - Data Structures and Algorithms",
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((x) => x.id === activeId) ?? items[0];

  const itemRefs = useRef({});
  const [dotTop, setDotTop] = useState(24); // fallback

  useEffect(() => {
    const el = itemRefs.current[activeId];
    if (!el) return;

    // We want the dot centered on the button's "top-6" line visually.
    // We'll compute relative to the timeline container.
    const timelineEl = itemRefs.current.__timeline;
    if (!timelineEl) return;

    const elRect = el.getBoundingClientRect();
    const timelineRect = timelineEl.getBoundingClientRect();

    // 24px approximates the "top-6" alignment inside each button
    const topWithinTimeline = elRect.top - timelineRect.top + 24;
    setDotTop(topWithinTimeline);
  }, [activeId]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const container = shouldReduceMotion
    ? {
        hidden: {},
        show: {},
      }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.12,
          },
        },
      };

  const fadeUp = shouldReduceMotion
    ? {
        hidden: {},
        show: {},
      }
    : {
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      };

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 text-[var(--ink)] md:py-16"
      id="experience"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <motion.div className="mb-10 flex flex-col gap-3 md:mb-14" variants={fadeUp}>
        <p className="sketch-annotation text-[var(--marker)]">
          selected pages from the work notebook
        </p>
        <h2 className="font-mono text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          <span className="sketch-underline">Experience</span>
        </h2>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Here are some highlights of my work experience & education
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div
            className="relative pl-5 sm:pl-7"
            ref={(node) => {
              if (node) itemRefs.current.__timeline = node;
            }}
          >
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[var(--ink)]/35 sm:left-[11px]" />

            <motion.div
              className="absolute left-[2px] h-3 w-3 rotate-45 border border-[var(--ink)] bg-[var(--marker)] sm:left-[6px]"
              animate={{ top: dotTop }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 500, damping: 35 }
              }
              style={{ willChange: "top" }}
            />

            <ul className="space-y-3">
              {items.map((item, idx) => {
                const isActive = item.id === activeId;

                return (
                  <motion.li key={item.id} className="relative" variants={fadeUp}>
                    <button
                      ref={(node) => {
                        if (node) itemRefs.current[item.id] = node;
                      }}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={[
                        "experience-entry w-full px-3 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--marker)] sm:px-4",
                        isActive
                          ? "experience-entry-active"
                          : "hover:bg-white/25",
                      ].join(" ")}
                      aria-current={isActive ? "true" : "false"}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                              {item.type}
                            </span>
                            {idx === 0 && (
                              <span className="sketch-highlight text-xs font-semibold text-[var(--ink-muted)]">
                                Most recent
                              </span>
                            )}
                          </div>
                          <h3 className="mt-1 text-lg font-bold leading-snug text-[var(--ink)]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-snug text-[var(--ink-muted)] sm:text-base">
                            {item.org} - {item.location}
                          </p>
                        </div>

                        <div className="flex gap-2 text-sm font-semibold text-[var(--ink-muted)] sm:block sm:whitespace-nowrap sm:text-right">
                          <span>{item.start}</span>
                          <span aria-hidden="true" className="sm:hidden">
                            -
                          </span>
                          <span className="sm:block">{item.end}</span>
                        </div>
                      </div>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        <motion.div className="lg:col-span-7" variants={fadeUp}>
          <div className="rough-panel relative p-5 sm:p-8 lg:sticky lg:top-28">
            <p className="sketch-annotation mb-4 text-[var(--marker)]">
              selected entry
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className="font-mono text-2xl font-bold leading-tight text-[var(--ink)] sm:text-3xl">
                      {active?.title}
                    </h3>
                    <div className="shrink-0 text-sm font-semibold text-[var(--ink-muted)] sm:text-right">
                      {active?.start} - {active?.end}
                    </div>
                  </div>

                  <p className="text-[var(--ink-muted)]">
                    {active?.org} - {active?.location}
                  </p>

                  {active?.tags?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {active.tags.map((t) => (
                        <span
                          key={t}
                          className="experience-tag text-xs font-semibold text-[var(--ink)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                {active?.bullets?.length ? (
                  <ul className="mt-7 space-y-4 leading-relaxed text-[var(--ink)]">
                    {active.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-[0.65rem] h-2 w-2 shrink-0 rotate-45 bg-[var(--marker)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

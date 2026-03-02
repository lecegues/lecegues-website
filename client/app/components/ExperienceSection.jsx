"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ExperienceSection = () => {
  const items = useMemo(
    () => [
        {
        id: "mindrift-2026",
        type: "Work",
        title: "AI Model Evaluation Contributor",
        org: "Mindrift",
        location: "Remote",
        start: "Jan 2026",
        end: "Current",
        tags: ["AI", "Testing"],
        bullets: [
          "Contributed to multiple AI projects by evaluating LLM-based agents across different domains, generating and assessing multi-turn prompts for response quality, intent alignment, and factual accuracy",
        ],
      },
      {
        id: "pcl-2025",
        type: "Work",
        title: "Solution Delivery Student",
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
          "Profiled Django APIs/ORM queries and optimized bottlenecks, improving average server response times by 3×",
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
          "Secured Top 10 seller status district-wide and became the store’s #1 seller within 5 months, generating over $100,000 in monthly sales",
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
        start: "—",
        end: "May 2027 (Expected)",
        tags: ["Computer Science", "Business"],
        bullets: [
          "CMPT 353 – Full Stack Web Programming",
          "CMPT 370 – Intermediate Software Engineering",
          "CMPT 371 – Software Management",
          "CMPT 280 – Data Structures and Algorithms",
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

    // We want the dot centered on the button’s “top-6” line visually.
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

  const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.12,
        },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y:14 },
    show: { opacity: 1, y:0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const underline = {
  hidden: { width: 0 },
  show: { width: "13rem", transition: { duration: 0.8, ease: "easeOut", delay: 0.15 } },
  };

  return (
      <motion.section
        ref={sectionRef}
        className="py-16 text-[#37444B]"
        id="experience"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
     >
      <motion.div className="flex flex-col gap-3 mb-10" variants={fadeUp}>
        <div>
          <h2 className="text-4xl font-mono font-bold text-[#37444B]">
            Experience
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 rounded bg-[#4A90E2] mt-2"
            variants={underline}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          />
        </div>

        <p className="text-[#6B7280] max-w-2xl">
          Here are some highlights of my work experience & education
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Timeline */}
        <div className="lg:col-span-5">
          <div
          className="relative pl-6"
          ref={(node) => {
            if (node) itemRefs.current.__timeline = node;
          }}
          >
            {/* vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-black/10" />

            <motion.div
            className="absolute left-[6px] h-3 w-3 rounded-full bg-[#4A90E2]"
            animate={{ top: dotTop }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            style={{ willChange: "top" }}
            />

            <ul className="space-y-5">
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
                        "w-full text-left rounded-xl border transition-colors px-4 py-4",
                        isActive
                            ? "border-black/15 bg-black/5"
                            : "border-black/10 hover:border-black/20 hover:bg-black/5",
                        ].join(" ")}
                        aria-current={isActive ? "true" : "false"}
                        >
                      <div className="flex items-start justify-between gap-4 m-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-wider text-[#6B7280]">
                              {item.type}
                            </span>
                            {idx === 0 && (
                              <span className="text-xs rounded-full border border-black/10 px-2 py-0.5 text-[#6B7280]">
                                Most recent
                              </span>
                            )}
                          </div>
                          <h3 className="text-[#37444B] mt-1 text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-[#6B7280]">
                            {item.org} • {item.location}
                          </p>
                        </div>

                        <div className="text-right text-sm text-[#6B7280] whitespace-nowrap">
                          <div>{item.start}</div>
                          <div>{item.end}</div>
                        </div>
                      </div>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Details panel */}
        <motion.div className="lg:col-span-7" variants={fadeUp}>
          <div className="rounded-2xl border border-black/10 bg-black/5 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-semibold text-[#37444B]">{active?.title}</h3>
                    <div className="text-sm text-[#6B7280]">
                      {active?.start} — {active?.end}
                    </div>
                  </div>

                  <p className="text-[#6B7280]">
                    {active?.org} • {active?.location}
                  </p>

                  {active?.tags?.length ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {active.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full border border-black/10 px-3 py-1 text-[#37444B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                {active?.bullets?.length ? (
                  <ul className="mt-6 space-y-3 text-[#37444B] leading-relaxed">
                    {active.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-[#6B7280]">

                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-sm text-[#9CA3AF]">
            
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
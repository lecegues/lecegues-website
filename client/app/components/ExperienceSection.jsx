"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = () => {
  const items = useMemo(
    () => [
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
        id: "usask-edu",
        type: "Education",
        title: "B.Sc. Computer Science + Certificate in Business",
        org: "University of Saskatchewan",
        location: "Saskatoon, SK",
        start: "—",
        end: "May 2027 (Expected)",
        tags: [],
        bullets: [],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((x) => x.id === activeId) ?? items[0];

  return (
    <section className="py-16 text-[#37444B]" id="experience">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Experience</h2>
        <p className="text-[#6B7280] max-w-2xl">
          A timeline of work and education — click any milestone to see details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Timeline */}
        <div className="lg:col-span-5">
          <div className="relative pl-6">
            {/* vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-black/10" />

            <ul className="space-y-5">
              {items.map((item, idx) => {
                const isActive = item.id === activeId;

                return (
                  <li key={item.id} className="relative">
                        <button
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
                      {/* dot */}
                      <span className="absolute left-[6px] top-6 h-3 w-3 rounded-full border border-black/20 bg-white">
                        <span
                          className={[
                            "absolute inset-0 rounded-full transition-opacity",
                            isActive ? "opacity-100" : "opacity-0",
                          ].join(" ")}
                          style={{ boxShadow: "0 0 0 6px rgba(74,144,226,0.10)" }}
                        />
                      </span>

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
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Details panel */}
        <div className="lg:col-span-7">
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
                    (Optional) We can add relevant coursework, awards, clubs, or
                    a short “focus areas” list here.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-sm text-[#9CA3AF]">
            Tip: keep each role to 2–4 bullets focused on outcomes and scope.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
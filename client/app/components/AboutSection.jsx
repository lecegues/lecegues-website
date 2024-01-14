"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Contains information for every tab (content)
// @TODO should be connected to database
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    // @TODO allow user to change in dashboard (DB)
    content: (
      <ul className="list-disc pl-2">
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>Sit</li>
        <li>Amet</li>
        <li>Consectetur</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Adipisicing, Delenti</li>
        <li>Elit Eius, Sed</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Lorem Ipsum</li>
        <li>Dolor Sit</li>
        <li>Amet Consectetur</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  // Hold information about which tab is open
  const [tab, setTab] = useState("skills");

  // Transition Hook
  const [isPending, startTransition] = useTransition();

  // Takes ID and starts the transition
  // Transition updates state without blocking UI
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black py-8 pb-8 2xl:pb-56" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 px-4 sm:py-16 xl:px-16">
        {/* First Column (1/2) */}
        <div className="flex flex-col h-full mt-4 md:mt-0">
          <Image src="/images/about-me.png" width={500} height={500} />
        </div>

        {/* Second Column (2/2) */}
        <div className="flex flex-col h-full mt-4 md:mt-0 text-left font-sans">
          <p className="text-[#bcbaba] font-medium mb-2"> A LITTLE BIT </p>
          <h2 className="text-4xl font-mono font-bold text-[#37444B] mb-4">
            {" "}
            <span className="border-b-4 pr-3 border-[#4a90e2]">
              {" "}
              About Me
            </span>{" "}
          </h2>
          <p className="text-base lg:text-lg mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

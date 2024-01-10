"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
    <section className="text-black">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 px-4 sm:py-16 xl:px-16">
        {/* First Column (1/2) */}
        <Image src="/images/about-me.png" width={500} height={500} />

        {/* Second Column (2/2) */}
        <div className="font-sans">
          <p className="text-[#bcbaba] font-medium mb-2"> A LITTLE BIT </p>
          <h2 className="text-4xl font-mono font-bold text-[#37444B] mb-4">
            {" "}
            <span className="border-b-4 pr-3 border-[#4a90e2]">
              {" "}
              About Me
            </span>{" "}
          </h2>
          <p className="text-base lg:text-lg">
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
            <span className="mr-3 font-semibold hover:text-black text-gray-200 border-b border-purple-500">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

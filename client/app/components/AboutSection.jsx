"use client";

import React, { useState, useTransition, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { easeIn, motion, useInView } from "framer-motion";

// Contains information for every tab (content)
// @TODO should be connected to database
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    // @TODO allow user to change in dashboard (DB)
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li>
          <span className="font-bold">Frontend: </span>HTML, CSS, Javascript,
          Next.js, React.js, Bootstrap
        </li>
        <li>
          <span className="font-bold">Backend: </span> Node.js, Express.js,
          Docker
        </li>
        <li>
          <span className="font-bold">Databases: </span>MongoDB, SQLite, MySQL,
          Sequelize, Mongoose
        </li>
        <li>
          <span className="font-bold">Mobile: </span> Java, Android Studio
        </li>
        <li>
          <span className="font-bold">Testing: </span>JUnit (Android), loadtest
          (Web)
        </li>
        <li>
          <span className="font-bold">Other: </span>Python, C, Git, Agile,
          ESLint
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li>
          <span className="font-bold">
            Degree: University of Saskatchewan <br />{" "}
          </span>
          Bachelor of Science in Computer Science <br /> Certificate in Business
        </li>
        <li>
          <span className="font-bold">
            Relevant Coursework: <br />
          </span>
          CMPT 353 (Full Stack Web Programming) <br /> CMPT 370 (Intermediate
          Software Engineering) <br /> CMPT 371 (Software Management) <br />
          CMPT 280 (Intermediate Data Structures and Algorithms)
        </li>
      </ul>
    ),
  },
  {
    title: "achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2 font-medium">
        <li>
          <span className="font-bold">
            Skills Canada - IT Office Software Applications: <br />
          </span>
          Proficient in Microsoft Office Suite for professional document and
          data management. <br />
          Excelled in timed tasks with a strong focus on accuracy and detail.{" "}
          <br />
          Developed communication and problem-solving skills under tight
          deadlines. <br />
        </li>
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

  // Animation for underline when seen for first time
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once in view, set to true

  const underline_variants = {
    default: { width: 0 },
    active: { width: "12rem" },
  };

  const picture_variants = {
    default: { opacity: 0, scale: 0 },
    active: { opactiy: 1, scale: 1 },
  };

  return (
    <section className="text-black py-8 pb-8 2xl:pb-56" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 px-4 sm:py-16 xl:px-16">
        {/* First Column (1/2) */}
        <div className="flex flex-col h-full mt-4 md:mt-0">
          <motion.div
            animate={isInView ? "active" : "default"}
            variants={picture_variants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image src="/images/about-me.png" width={500} height={500} />
          </motion.div>
        </div>

        {/* Second Column (2/2) */}
        <div
          ref={ref}
          className="flex flex-col h-full mt-4 md:mt-0 text-left font-sans"
        >
          <p className="text-[#bcbaba] font-medium mb-2"> A LITTLE BIT </p>
          <h2 className="text-4xl font-mono font-bold text-[#37444B] mb-4">
            {" "}
            About Me
            {/* Animation when seen for first time*/}
            <motion.div
              animate={isInView ? "active" : "default"}
              variants={underline_variants}
              className="h-1 rounded bg-[#4a90e2] mt-2 w-48"
              transition={{ duration: 1, delay: 0.4 }}
            />
          </h2>
          <p className="text-base lg:text-lg mt-3">
            I am a 3rd year Computer Science and Business student at the
            University of Saskatchewan with a passion for technology. I have
            experience working with a team to develop full-stack web and mobile
            applications. I'm a committed team player that is eager to look for
            new technologies to expand my knowledge and skill set while
            collaborating with others on innovative projects.
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
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements
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

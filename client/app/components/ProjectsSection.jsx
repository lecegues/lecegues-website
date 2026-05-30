"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

// Array containing project data and contents
const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js, React, Tailwind CSS, and Vercel deployment.",
    image: "/images/project-1-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lecegues/lecegues-website",
    previewUrl: "https://lecegues.com/",
  },
  {
    id: 2,
    title: "FeelPad",
    description:
      "Emotion-based Android journaling app built in Java using MVVM, Material Design, and Agile development practices.",
    image: "/images/project-2-image.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/lecegues/FeelPad",
    previewUrl: "https://github.com/lecegues/FeelPad",
  },
  {
    id: 3,
    title: "AutoFolio",
    description:
      "AI-driven web app created during a 48-hour hackathon to generate professional tech profiles.",
    image: "/images/project-3-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/apneduniya/autofolio",
    previewUrl: "https://github.com/apneduniya/autofolio",
  },
];

/**
 * Project Section for the Landing Page
 * Consists of filtered tabs with projects as contents inside them
 */
const ProjectSection = () => {
  // State hook to check which filter is selected (default All)
  const [tag, setTag] = useState("All");

  // Used for initial view animations (projects)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once it comes into view, set to true

  // Function to update selected tag
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Simple way to filter for projects
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Animation variants for project cards
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-16 text-[#37444B]" id="projects">
      <div className="flex flex-col gap-3 mb-10">
        <div>
          <h2 className="text-4xl font-mono font-bold text-[#37444B]">
            Projects
          </h2>
          <div className="h-1 rounded bg-[#4A90E2] mt-2 w-52" />
        </div>

        <p className="text-[#6B7280] max-w-2xl">
          A few selected projects that show my frontend, mobile, and full-stack
          development work.
        </p>
      </div>

      {/* Filtered Tabs */}
      <div className="flex flex-row flex-wrap items-center gap-3 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      {/* Represents the list of projects, their contents, and their animations */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-10">
        {filteredProjects.map((project, index) => (
          // animation for the projects is based on position of project in the list
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

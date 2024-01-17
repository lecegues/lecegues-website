"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

// Array containing project data and contents
// @TODO should be able to be managed inside CMS (database)
const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A full-stack responsive portfolio website built using the MERN stack, featuring an interactive UI and compatibility with all devices.",
    image: "/images/project-1-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lecegues/lecegues-website",
    previewUrl: "https://lecegues.com/",
  },
  {
    id: 2,
    title: "FeelPad",
    description:
      "Emotion-based Android journalling app developed in Java following MVVM and Material Design, and Agile Development concepts.",
    image: "/images/project-2-image.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/lecegues/FeelPad",
    previewUrl: "https://github.com/lecegues/FeelPad",
  },
  {
    id: 3,
    title: "AutoFolio",
    description:
      "AI Driven web app developed for a 48-hour hackathon designed to create professional tech profiles. Led UI Development in a fast-paced, global team setting.",
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
    <section className="py-8 pb-8 2xl:pb-56" id="projects">
      {/* Header */}
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-7 pt-12">
        My Projects
      </h2>

      {/* Filtered Tabs */}
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          // animation for the projects is based on position of project in the list
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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

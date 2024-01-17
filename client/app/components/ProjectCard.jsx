import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

/**
 * ProjectCard component represents a single "card" of a Project
 * When hovered, should show two buttons that lead to previewUrl and gitUrl
 * @param {string} imgUrl - the image URL in the 'public' folder to show on card
 * @param {string} title - the title of the project
 * @param {string} description - small description of the project
 * @param {string} gitUrl - web URL leading to the Github Repo
 * @param {string} previewUrl - a web URL leading to anything that allows user to preview project
 * @returns {JSX.Element} - card component displaying project details with links
 */
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      {/* Whole card container */}
      <div
        className="h-52 md:h-72 rounded-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute rounded-xl top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* Wrap first button in a link leading to Github URL*/}
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group/link" />
          </Link>

          {/* Wrap second button in a link leading to preview URL*/}
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group/link" />
          </Link>
        </div>
      </div>

      {/* Container for title & description of project */}
      <div className="text-black rounded-b-xl mt-3 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

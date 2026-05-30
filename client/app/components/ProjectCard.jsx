import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

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
    <article className="h-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
      {/* Whole card container */}
      <div className="relative h-52 md:h-60">
        <Image
          src={imgUrl}
          alt={`${title} project preview`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      {/* Container for title & description of project */}
      <div className="flex h-[calc(100%-13rem)] flex-col gap-4 p-5 text-[#37444B] md:h-[calc(100%-15rem)]">
        <div className="flex-1">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#6B7280] leading-relaxed">{description}</p>
        </div>

        <div className="flex gap-3">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#37444B] transition hover:border-[#4A90E2] hover:text-[#4A90E2]"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </Link>

          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} project preview`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#37444B] transition hover:border-[#4A90E2] hover:text-[#4A90E2]"
          >
            <EyeIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

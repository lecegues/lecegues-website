import React from "react";

/**
 * ProjectTag component represents filtered tabs for projects
 * @param {string} name - name of the tag/filter
 * @param {function} onClick - function that happens when the tab is selected (e.g. UI updates/project filtering)
 * @param {boolean} isSelected - indicates whether or not this tag is "selected"
 * @returns {JSX.Element} - tag header components to be used to filter out projects
 */
const ProjectTag = ({ name, onClick, isSelected }) => {
  // Determine the button style depending on if the tab is selected or not
  const buttonStyles = isSelected
    ? "text-[#37444B] border-[#4a90e2]"
    : "text-[#6E7A83] border-[#8dbbf0] hover:border-[#4a90e2] hover:text-[#37444B]";
  return (
    <button
      className={` ${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

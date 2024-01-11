import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#37444B] border-[#D67669]"
    : "text-[#6E7A83] border-[#CEA5A2] hover:border-[#D67669] hover:text-[#37444B]";
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

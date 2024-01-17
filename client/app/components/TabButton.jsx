import React from "react";
import { motion } from "framer-motion";

// Animation variants for each tab
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

/**
 * Represents each Tab in the "About Me" section of the page
 *
 * @param {boolean} active - inidicates if tab is currently active
 * @param {function} selectTab - refers to a parent function that does needed UI changes if tab is picked
 * @param {children} children - content to be displayed underneath the tab
 * @returns {JSX.Element} - button header representing a single tab
 */
const TabButton = ({ active, selectTab, children }) => {
  // Determine button text color depending if the tab is active or not
  const buttonClasses = active ? "text-[#37444b]" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-medium hover:text-[#37444b] ${buttonClasses}`}>
        {children}
      </p>

      {/* Animation of tab underline */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#4a90e2] mt-2 mr-3 rounded"
      ></motion.div>
    </button>
  );
};

export default TabButton;

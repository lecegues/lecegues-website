import React, { useContext } from "react";
import { ProgressBarContext } from "../contexts/ProgressBarContext";

const ProgressBar = () => {
  const { progressPercentage } = useContext(ProgressBarContext);

  return (
    <div className="w-full bg-white h-1">
      <div
        className="bg-blue-600 h-1 "
        style={{
          width: `${progressPercentage}%`,
          transition: "width 0.5s ease",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

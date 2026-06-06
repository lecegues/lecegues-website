import React, { useContext } from "react";
import { ProgressBarContext } from "../contexts/ProgressBarContext";

const ProgressBar = () => {
  const { progressPercentage } = useContext(ProgressBarContext);

  return (
    <div className="h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-1 bg-[var(--marker)]"
        style={{
          width: `${progressPercentage}%`,
          transition: "width 0.5s ease",
        }}
      />
    </div>
  );
};

export default ProgressBar;

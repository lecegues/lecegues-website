import React, { useContext } from "react";
import { ProgressBarContext } from "../contexts/ProgressBarContext";

const ProgressBar = () => {
  const { progressPercentage } = useContext(ProgressBarContext);

  return (
    <div className="h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="progress-bar-fill h-1 bg-[var(--marker)]"
        style={{
          width: `${progressPercentage}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;

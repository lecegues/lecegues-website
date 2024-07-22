import React, { useState, useEffect, useContext } from 'react';
import { ProgressBarContext } from '../contexts/ProgressBarContext';

const ProgressBar = () => {
    const { progressPercentage } = useContext(ProgressBarContext);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(progressPercentage);
        if (progress === 0) {
            
        }
    }, [progressPercentage]);

    return (
    <div className="w-full bg-white h-1">
      <div
        className="bg-blue-600 h-1 "
        style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
      ></div>
    </div>
    );
};

export default ProgressBar;
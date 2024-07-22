"use client";
import React, { createContext, useState } from "react"; 

/**
 * Context Provider to handle global loading bar (Navbar.js)
 */

export const ProgressBarContext = createContext(null);

export function ProgressBarProvider({ children }) {
    const [progressPercentage, setProgressPercentage] = useState(0);

    return (
      <ProgressBarContext.Provider
        value={{
          progressPercentage,
          setProgressPercentage,
        }}
      >
        {children}
      </ProgressBarContext.Provider>
    );
};
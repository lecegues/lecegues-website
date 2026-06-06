import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 px-5 pb-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-3 border-t-2 border-[var(--ink)] pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="sketch-annotation text-[var(--marker)]">
            thanks for stopping by
          </p>
          <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
            Lecegues
          </span>
        </div>
        <p className="text-sm text-[var(--ink-muted)]">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ProgressBar from "./ProgressBar";

// Static navigation links for the navbar
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

/**
 * Responsive & Fixed Navbar to hold links to the page
 * To be provided in all pages
 */
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    if (!navbarOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navbarOpen]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 px-3 pt-2 sm:px-5">
      <div className="mx-auto max-w-[90rem] border-b-2 border-[var(--ink)] bg-[var(--paper)]/95 shadow-[0_4px_0_var(--paper-deep)] backdrop-blur-sm">
        <div className="flex min-h-14 items-center justify-between px-3 sm:px-5">
          <Link
            href="/"
            className="sketch-highlight text-xl font-bold tracking-tight text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--marker)] sm:text-2xl"
          >
            Lecegues
          </Link>

          <div className="block md:hidden">
            <button
              type="button"
              onClick={() => setNavbarOpen((isOpen) => !isOpen)}
              aria-label={
                navbarOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-controls="mobile-menu"
              aria-expanded={navbarOpen}
              className="sketch-icon-button"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="hidden font-mono md:block md:w-auto" id="navbar">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {navbarOpen ? (
          <MenuOverlay
            links={navLinks}
            id="mobile-menu"
            onSelect={() => setNavbarOpen(false)}
          />
        ) : null}
        <ProgressBar />
      </div>
    </nav>
  );
};

export default Navbar;

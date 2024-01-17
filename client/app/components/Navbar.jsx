"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

// Static navigation links for the navbar
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Me",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Blog",
    path: "#blog",
  },
];

/**
 * Responsive & Fixed Navbar to hold links to the page
 * To be provided in all pages
 */
const Navbar = () => {
  // useState to manage visibility of the mobile navigation menu
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white pb-3">
      <div className=" flex flex-wrap items-center justify-between px-5 py-3">
        {/* Website Logo to lead back to home page */}
        <Link
          href={"/"}
          className="text-1xl md:text-2xl text-[#37444B] font-sans font-semibold"
        >
          Lecegues
        </Link>

        {/* Container for the mobile menu (e.g. a popup menu) */}
        {/* default: shown, md: hide */}
        <div className="mobile-menu block md:hidden">
          {/* When navbar is closed, if clicked open */}
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-200 hover:border-gray-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            /* When navbar is open, if clicked then close */
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-200 hover:border-gray-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Container for Website Menu */}
        {/* default: hidden, md: show */}
        <div
          className="menu hidden md:block md:w-auto font-mono font-semibold"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        {/* Should allow owner/admins to login and modify website contents via CMS */}
        <div className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-200 hover:border-gray-200">
          Log in
        </div>
      </div>

      {/* If mobile navBar is open, then show mobile menu */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

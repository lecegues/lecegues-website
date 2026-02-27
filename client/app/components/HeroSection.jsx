"use client";

import React from "react";
import "../../styles/LandingPage.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";

/**
 * Hero Section for the Landing Page
 * Consists of a Header, Subheader, Two Buttons, and an Image
 */
const HeroSection = () => {
  return (
    <section className="py-8 pb-8 2xl:pb-56" id="hero">
      {/* Animate initial transition for whole section: fade in */}
      {/* Single section on small screens, two seconds on big screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        {/* First 7/12 columns (left side) */}
        <div className="col-span-7 place-self-center font-mono font-normal">
          {/* Header*/}
          <h1 className="text-[#37444B] mb-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.25] md:leading-[1.25] lg:leading-[1.25]">
            Hello, I'm <span className="text-[#4A90E2]">John</span>.
            <br />
            I help teams{" "}
            {/* Animated Header Typing Animation */}
            <span className="text-[#4A90E2] block mt-1">
              <TypeAnimation
                sequence={[
                  "ship software", 1200,
                  "build systems", 1200,
                  "automate workflows", 1200,
                  "deliver end-to-end", 1200,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>

          {/* SubHeader */}
          <p className="text-[#37444B] text-lg mb-6 lg:text-xl">
            Early-career engineer experienced across the full software lifecycle, from backend services and frontend interfaces
            to CI/CD workflows and business automation. I’ve shipped production changes, improved processes, and collaborated
            across teams to support real users.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3 rounded-xl bg-[#4A90E2] hover:bg-[#63a4ff] text-white font-semibold transition"
            >
              Resume
            </a>

            {/* Contact Button */}
            <Link href="#contact">
              <button className="px-10 py-3 rounded-xl bg-transparent hover:bg-[#d0d0d0] text-black border border-black font-semibold transition">
                Contact
              </button>
            </Link>

            {/* LinkedIn Icon */}
            <Link
              href="https://www.linkedin.com/in/john-lecegues/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full hover:bg-gray-100 transition"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={27}
                height={27}
                className="dark:invert"
              />
            </Link>
          </div>
        </div>

        {/* Last 5/12 columns (right side) */}
          {/* Last 5/12 columns (right side) */}
          <div className="col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-[250px] h-[250px] sm:w-[325px] sm:h-[325px] md:w-[400px] md:h-[400px] relative">
              <Image
                src="/images/john.jpeg"
                alt="Portrait of John"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

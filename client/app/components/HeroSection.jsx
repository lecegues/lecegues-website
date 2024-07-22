"use client";

import React from "react";
import "../../styles/LandingPage.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

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
            Hello, I'm <span className="text-[#4A90E2]">John</span>,<br></br>
            and I love to
            <br></br>
            {/* Animated Header Typing Animation */}
            <div className="text-[#4A90E2] mt-1">
              <TypeAnimation
                sequence={[
                  "Code.",
                  1000,
                  "Fence.",
                  1000,
                  "Learn.",
                  1000,
                  "Ball.",
                  1000,
                  "Work Out.",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </div>
          </h1>

          {/* SubHeader */}
          <p className="text-[#37444B] text-lg mb-6 lg:text-xl">
            👋 Welcome to my personal website! Fueled by a deep passion for
            technology, I'm all about diving quickly into new tech challenges
            and exploring diverse hobbies that spark my curiosity and
            creativity, enriching my perspective both in and outside the world
            of coding.
          </p>

          {/* Buttons */}
          <div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-3 w-full sm:w-fit rounded-xl mr-4 bg-[#4A90E2] hover:bg-[#63a4ff] text-white font-semibold text-center inline-block">
              Resume
            </a>
            <Link href="#contact">
              <button className="px-10 py-3 w-full sm:w-fit rounded-xl  ml-1 bg-transparent hover:bg-[#d0d0d0] text-black border border-black mt-3 font-semibold">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Last 5/12 columns (right side) */}
        <div className="col-span-5 place-self-center mt-5 lg:mt-0 md:ml-5">
          {/* Hero Image */}
          <div className="w-[250px] h-[250px] sm:w-[325px] sm:h-[325px] md:w-[400px] md:h-[400px] relative">
            <div className="hero-image" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

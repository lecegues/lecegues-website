"use client";

import React from "react";
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
    <section className="pb-10 pt-8 md:pb-16 md:pt-12 lg:pb-24" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8"
      >
        <div className="lg:col-span-7 lg:pr-6">
          <p className="sketch-annotation mb-2 text-[var(--marker)]">
            a software engineer&apos;s field notes
          </p>

          <h1 className="mb-5 font-mono text-4xl font-extrabold leading-[1.18] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl">
            Hello, I&apos;m{" "}
            <span className="sketch-highlight text-[var(--marker)]">John</span>.
            <br />
            I help teams{" "}
            <span className="mt-2 block min-h-[1.2em] text-[var(--marker)]">
              <TypeAnimation
                sequence={[
                  "ship software",
                  1200,
                  "build systems",
                  1200,
                  "automate workflows",
                  1200,
                  "deliver end-to-end",
                  1200,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg lg:text-xl">
            Early-career engineer experienced across the full software lifecycle,
            from backend services and frontend interfaces to CI/CD workflows and
            business automation. I&apos;ve shipped production changes, improved
            processes, and collaborated across teams to support real users.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-button sketch-button-primary"
            >
              Resume
            </a>

            <Link href="#contact" className="sketch-button">
              Contact
            </Link>

            <Link
              href="https://www.linkedin.com/in/john-lecegues/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit John's LinkedIn profile"
              className="sketch-icon-button h-11 w-11"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={27}
                height={27}
              />
            </Link>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-col items-center lg:col-span-5 lg:items-end">
          <div className="pinned-photo w-[min(82vw,22rem)] rotate-[2deg] sm:w-[22rem] lg:w-full lg:max-w-[25rem]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-deep)]">
              <Image
                src="/images/john.jpeg"
                alt="Portrait of John"
                fill
                sizes="(max-width: 1024px) 352px, 400px"
                className="object-cover"
                priority
              />
            </div>
            <p className="sketch-annotation mt-3 text-center text-[var(--ink)]">
              building useful things, one page at a time
            </p>
          </div>

          <div className="mt-8 grid w-full max-w-sm gap-4 sm:grid-cols-2 lg:mr-2 lg:max-w-md">
            <div className="hero-note -rotate-2">
              <span className="text-[var(--marker)]">currently:</span>
              <br />
              Peace Hills Insurance
            </div>
            <div className="hero-note rotate-1">
              <span className="text-[var(--marker)]">next:</span>
              <br />
              CPP Investments / Winter 2027
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

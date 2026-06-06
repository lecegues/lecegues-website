"use client";

import React, { useState, useContext } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ProgressBarContext } from "../contexts/ProgressBarContext";

const EmailSection = () => {
  const { setProgressPercentage } = useContext(ProgressBarContext);

  // State hook to store data when form submitted
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  // function to set form data values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle contact form submission using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");
    setProgressPercentage(50);

    const templateParams = {
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_l0ccsrb",
        "template_2z4y7zt",
        templateParams,
        "ac6OlWkBDRpOcQoXl"
      );
      setProgressPercentage(100);
      setStatusType("success");
      setStatusMessage("Message sent successfully. I'll get back to you soon.");
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send contact form message:", error);
      setStatusType("error");
      setStatusMessage("Message failed to send. Please try again.");
      setProgressPercentage(0);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setProgressPercentage(0);
      }, 500);
    }
  };

  return (
    <section
      className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24 lg:gap-16"
      id="contact"
    >
      <div className="md:col-span-5">
        <p className="sketch-annotation text-[var(--marker)]">
          leave a note in the margin
        </p>
        <h2 className="mt-3 font-mono text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          <span className="sketch-underline">Let&apos;s Connect</span>
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--ink-muted)]">
          Have a role, project, or idea worth discussing? Send a note and
          I&apos;ll get back to you soon.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="https://github.com/lecegues"
            aria-label="Visit John's GitHub profile"
            className="contact-social-link"
          >
            <Image src={GithubIcon} alt="" width={25} height={25} />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-lecegues/"
            aria-label="Visit John's LinkedIn profile"
            className="contact-social-link"
          >
            <Image src={LinkedinIcon} alt="" width={25} height={25} />
            <span>LinkedIn</span>
          </Link>
        </div>

        <div className="mt-10 hidden md:block">
          <span className="sketch-arrow" aria-hidden="true" />
          <p className="sketch-annotation mt-4 max-w-xs">
            the form sends straight to my inbox
          </p>
        </div>
      </div>

      <div className="md:col-span-7">
        <form
          className="rough-panel flex flex-col p-5 sm:p-8"
          onSubmit={handleSubmit}
        >
          <p className="sketch-annotation mb-6 text-[var(--marker)]">
            new message
          </p>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-[var(--ink)]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="contact-field"
              onChange={handleChange}
              value={formData.email}
              placeholder="ilovecoding@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-bold text-[var(--ink)]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="contact-field"
              placeholder="What's on your mind?"
              onChange={handleChange}
              value={formData.subject}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-[var(--ink)]"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={6}
              className="contact-field resize-y"
              placeholder="Let's talk about..."
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="sketch-button sketch-button-primary w-full disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {statusMessage ? (
            <p
              className={[
                "contact-status mt-5 text-sm font-semibold",
                statusType === "success"
                  ? "contact-status-success"
                  : "contact-status-error",
              ].join(" ")}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

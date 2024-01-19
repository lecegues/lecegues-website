"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  // State hook to store data when form submitted
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // function to set form data values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // function to handle the submission of form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/send-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.message);
      // handle success
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6"
      id="contact"
    >
      {/* First Column */}
      <div>
        <h5 className="text-xl font-bold text-black">Let's Connect</h5>
        <p className="text-gray-500 mb-4 max-w-md">Here are my socials</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/lecegues">
            <Image src={GithubIcon} alt="Github Icon" className="dark:invert" />
          </Link>
          <Link href="https://www.linkedin.com/in/john-lecegues/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="dark:invert"
            />
          </Link>
        </div>
      </div>

      {/* Second Column */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black block text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-gray-200 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              onChange={handleChange}
              value={formData.email}
              placeholder="jacob@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-gray-200 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello"
              onChange={handleChange}
              value={formData.subject}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-gray-200 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            className="bg-[#4A90E2] hover:bg-[#63a4ff] text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

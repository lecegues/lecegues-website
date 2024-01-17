import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
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
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" className="dark:invert" />
          </Link>
          <Link href="linkedin.com">
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
        <form className="flex flex-col">
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

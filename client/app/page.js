import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

/**
 * Represents the Landing Page of the website.
 * Renders various sections in the one page.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="container mx-auto">
        <Navbar />
      </div>

      {/* Container for Main Section */}
      <div className="container mt-24 mx-auto px-12 py-4 space-y-12">
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <ProjectSection id="projects" />
        <ContactSection id="contact" />
      </div>
      <Footer />
    </main>
  );
}

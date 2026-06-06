import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

/**
 * Represents the Landing Page of the website.
 * Renders various sections in the one page.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto w-full max-w-[90rem]">
        <Navbar />
      </div>

      <div className="mx-auto mt-20 w-full max-w-[90rem] space-y-16 px-5 py-6 sm:px-8 md:mt-24 md:space-y-24 md:px-12 lg:px-16 xl:px-20">
        <HeroSection id="hero" />
        <ExperienceSection id="experience" />
        <ContactSection id="contact" />
      </div>
      <Footer />
    </main>
  );
}

/**
 * Landing Page layout and sections
 */

import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* Container for Navigation Bar */}
      <div className="container mx-auto">
        <Navbar/>
      </div>
    
      {/* Container for Main Section */}
      <div className="container mt-24 mx-auto px-12 py-4 space-y-12">
        <HeroSection id="hero" />
        <AboutSection id="about"/>
        <ProjectSection id="projects"/>
        <EmailSection id="contact"/>
      </div>
      <Footer/>

    </main>

  );
}

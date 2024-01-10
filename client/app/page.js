/**
 * Landing Page layout and sections
 */

import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* Container for Navigation Bar */}
      <div className="container mx-auto">
        <Navbar/>
      </div>
    
      {/* Container for Hero Section */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>


    </main>

  );
}

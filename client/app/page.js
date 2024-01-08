/**
 * Landing Page layout and sections
 */

import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col bg-white">

      <div className="container mx-auto">
        <Navbar/>
      </div>
    

      {/* Container for Hero Section */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>

    </main>

  );
}

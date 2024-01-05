import Image from 'next/image'
import HeroSection from './components/HeroSection';

export default function Home(){
  return (
    <main className="flex flex-col min-h-screen container mx-auto px-12 py-4">
      <HeroSection />
    </main>

  );
}

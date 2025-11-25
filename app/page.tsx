import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/sections/Hero';
import { Features } from '@/app/sections/Features';
import { About } from '@/app/sections/About';
import { Testimonials } from '@/app/sections/Testimonials';
import { Contact } from '@/app/sections/Contact';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

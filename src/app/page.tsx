import { HeroSection } from "@/components/HeroSection";
import { SpecsSection } from "@/components/SpecsSection";
import { GallerySection } from "@/components/GallerySection";
import { ConfiguratorSection } from "@/components/ConfiguratorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterSection } from "@/components/FooterSection";
import { Navbar } from "@/components/Navbar";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SpecsSection />
      <GallerySection />
      <ConfiguratorSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}


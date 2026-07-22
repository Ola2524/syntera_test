import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SpecsSection } from "@/components/SpecsSection";
import { GallerySection } from "@/components/GallerySection";
import { ConfiguratorSection } from "@/components/ConfiguratorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SpecsSection />
      <GallerySection />
      <ConfiguratorSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}



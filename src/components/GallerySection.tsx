"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    alt: "Luxury car interior with premium leather seats",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    alt: "Premium car wheels with alloy rims",
    category: "Wheels",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79e964c10d?w=800&q=80",
    alt: "High-performance car engine",
    category: "Engine",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    alt: "Luxury sports car front view",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    alt: "Car dashboard and steering wheel",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    alt: "Car headlight detail",
    category: "Details",
  },
];

function GalleryCard({
  image,
  index,
}: {
  image: GalleryImage;
  index: number;
}): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative flex-shrink-0 w-[300px] sm:w-[400px] transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-muted">
        {!isLoaded && <Skeleton className="absolute inset-0 h-full w-full" />}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 640px) 300px, 400px"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export function GallerySection(): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = (): void => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Gallery
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Every Detail Matters
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="border-white/20 text-white hover:bg-white/10 hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="border-white/20 text-white hover:bg-white/10 hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide sm:px-12 lg:px-24"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {galleryImages.map((image, index) => (
          <GalleryCard key={image.src} image={image} index={index} />
        ))}
      </div>
    </section>
  );
}


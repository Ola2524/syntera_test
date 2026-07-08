"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

/**
 * HeroSection - Premium car landing page hero component
 * Features full-bleed Unsplash image with overlay content
 */
export function HeroSection(): JSX.Element {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSpecs = (): void => {
    const specsSection = document.getElementById("specs");
    if (specsSection) {
      specsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0">
        {/* Blur placeholder / Skeleton loader */}
        {!isImageLoaded && (
          <Skeleton className="absolute inset-0 h-full w-full bg-muted" />
        )}

        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt="Apex GT - Premium Luxury Sports Car"
          fill
          priority
          className={`object-cover transition-all duration-700 ${
            isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          onLoad={() => setIsImageLoaded(true)}
          sizes="100vw"
          quality={80}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="inline-block border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              New Release 2025
            </span>
          </div>

          {/* Model Name */}
          <h1
            className={`mb-4 text-5xl font-bold tracking-tight text-white transition-all duration-500 delay-100 sm:text-6xl md:text-7xl lg:text-8xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            APEX GT
          </h1>

          {/* Tagline */}
          <p
            className={`mb-8 max-w-xl text-lg font-light leading-relaxed text-white/70 transition-all duration-500 delay-200 sm:text-xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Redefining the boundaries of performance and luxury. Experience the
            future of automotive excellence.
          </p>

          {/* CTA Button */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-500 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Button
              size="lg"
              onClick={scrollToSpecs}
              className="group bg-white text-black hover:bg-white/90"
            >
              Explore
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>

            <BookingForm />
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div
        className={`absolute bottom-8 right-6 z-10 hidden flex-col gap-6 sm:right-12 lg:right-24 lg:flex ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } transition-all duration-500 delay-500`}
      >
        <div className="glass px-6 py-4 text-center">
          <div className="text-2xl font-bold text-white">2.8s</div>
          <div className="text-xs uppercase tracking-wider text-white/60">
            0-60 mph
          </div>
        </div>
        <div className="glass px-6 py-4 text-center">
          <div className="text-2xl font-bold text-white">205</div>
          <div className="text-xs uppercase tracking-wider text-white/60">
            Top Speed
          </div>
        </div>
        <div className="glass px-6 py-4 text-center">
          <div className="text-2xl font-bold text-white">670</div>
          <div className="text-xs uppercase tracking-wider text-white/60">
            Horsepower
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-all duration-500 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}



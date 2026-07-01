"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Tech Executive",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote:
      "The Apex GT exceeded every expectation. The acceleration is breathtaking, and the interior craftsmanship is unmatched. It's not just a car; it's an experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Automotive Journalist",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote:
      "I've driven countless luxury vehicles, but the Apex GT stands apart. The perfect balance of raw power and refined elegance. A true masterpiece of engineering.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Professional Driver",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "From the track to the highway, the Apex GT delivers pure driving joy. The handling is precise, the power is instant, and the comfort is exceptional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote:
      "Every detail of the Apex GT speaks to quality. The configurator let me create my perfect car, and the delivery experience was world-class.",
    rating: 5,
  },
];

export function TestimonialsSection(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number): void => {
    setCurrentIndex(index);
  };

  const goToPrev = (): void => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Owners Say
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main Card */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
                {/* Avatar */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 h-24 w-24 overflow-hidden border-2 border-white/20 sm:h-32 sm:w-32">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-white/50">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Quote */}
                <div className="flex flex-col justify-center">
                  <Quote className="mb-4 h-8 w-8 text-white/20" />
                  <blockquote className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({
                      length: testimonials[currentIndex].rating,
                    }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-white text-white"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


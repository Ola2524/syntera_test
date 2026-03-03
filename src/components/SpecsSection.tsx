"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Zap, Wind } from "lucide-react";

interface SpecCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function SpecCard({ icon, value, label, delay }: SpecCardProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  const displayValue = value.includes(".")
    ? count.toFixed(1)
    : Math.round(count).toString();

  return (
    <Card
      ref={cardRef}
      className={`group border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="mb-4 text-white/60 transition-colors group-hover:text-white">
          {icon}
        </div>
        <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
          {displayValue}
          <span className="text-2xl text-white/60">{suffix}</span>
        </div>
        <div className="text-sm uppercase tracking-wider text-white/50">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

export function SpecsSection(): JSX.Element {
  const specs = [
    {
      icon: <Gauge className="h-8 w-8" />,
      value: "2.8s",
      label: "0-60 mph",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      value: "205mph",
      label: "Top Speed",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: "670hp",
      label: "Horsepower",
    },
  ];

  return (
    <section id="specs" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Performance
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Uncompromising Power
          </h2>
          <p className="mx-auto max-w-2xl text-white/60">
            Engineered for those who demand excellence. Every specification
            represents our commitment to performance.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, index) => (
            <SpecCard
              key={spec.label}
              icon={spec.icon}
              value={spec.value}
              label={spec.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

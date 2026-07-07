"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface CarColor {
  name: string;
  hex: string;
  image: string;
}

const carColors: CarColor[] = [
  {
    name: "Midnight Black",
    hex: "#0a0a0a",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
  },
  {
    name: "Pearl White",
    hex: "#f5f5f5",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
  },
  {
    name: "Racing Red",
    hex: "#dc2626",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79e964c10d?w=1200&q=80",
  },
  {
    name: "Electric Blue",
    hex: "#2563eb",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
  },
  {
    name: "Gunmetal Grey",
    hex: "#4b5563",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
  },
];

export function ConfiguratorSection(): JSX.Element {
  const [selectedColor, setSelectedColor] = useState<CarColor>(carColors[0]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { addItem } = useCart();
  const { toast } = useToast();

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

  // Reset image loaded state when color changes
  useEffect(() => {
    setIsImageLoaded(false);
  }, [selectedColor]);

  const handleAddToCart = () => {
    addItem({
      productId: "apex-gt",
      name: "Apex GT",
      color: selectedColor.name,
      colorHex: selectedColor.hex,
      image: selectedColor.image,
      price: 185000,
    });
    toast({
      title: "Added to cart",
      description: `Apex GT in ${selectedColor.name} has been added to your cart.`,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Configurator
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Make It Yours
          </h2>
          <p className="mx-auto max-w-2xl text-white/60">
            Choose the perfect color that matches your style. Preview your Apex
            GT in real-time.
          </p>
        </div>

        {/* Car Preview */}
        <div
          className={`relative mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-muted">
            {!isImageLoaded && (
              <Skeleton className="absolute inset-0 h-full w-full" />
            )}
            <Image
              src={selectedColor.image}
              alt={`Apex GT in ${selectedColor.name}`}
              fill
              className={`object-cover transition-all duration-500 ${
                isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onLoad={() => setIsImageLoaded(true)}
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            {/* Color Name Badge */}
            <div className="absolute bottom-6 left-6">
              <div className="glass px-4 py-2">
                <span className="text-sm font-medium text-white">
                  {selectedColor.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Color Selector */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {carColors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`group relative flex items-center gap-3 border px-4 py-3 transition-all duration-300 hover:border-white/30 ${
                selectedColor.name === color.name
                  ? "border-white bg-white/10"
                  : "border-white/10 bg-transparent"
              }`}
            >
              {/* Color Swatch */}
              <div
                className="h-6 w-6 border border-white/20"
                style={{ backgroundColor: color.hex }}
              />
              {/* Color Name */}
              <span className="text-sm font-medium text-white">
                {color.name}
              </span>
              {/* Selected Indicator */}
              {selectedColor.name === color.name && (
                <Check className="h-4 w-4 text-white" />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Configure Your Apex GT
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}





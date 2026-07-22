"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/**
 * Navbar - Premium car-showroom landing page navigation
 *
 * Features:
 * - Fixed/sticky top navbar with transparent → glassmorphism transition on scroll
 * - Desktop horizontal nav links (lg+)
 * - Mobile hamburger menu using shadcn Sheet (side="right")
 * - Smooth scroll-to-section behavior matching HeroSection pattern
 * - Accessible: keyboard navigable, ARIA labels, focus-visible rings
 */
export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Trigger glassmorphism background after a small scroll threshold
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial state in case page is loaded already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Smoothly scroll to a section by id, then close the mobile sheet.
   * Mirrors the scrollToSpecs pattern used in HeroSection.
   */
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Specs", id: "specs" },
    { label: "Gallery", id: "gallery" },
    { label: "Configurator", id: "configurator" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-24"
      >
        {/* Brand Logo */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-xl font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Apex GT — Home"
        >
          APEX GT
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-white/20 bg-transparent text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            Book Test Drive
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-controls="mobile-nav-sheet"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 transition-all duration-200 hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              id="mobile-nav-sheet"
              side="right"
              className="flex w-full flex-col gap-0 border-l border-white/10 bg-background/95 backdrop-blur-md p-0 sm:max-w-sm"
            >
              {/* Mobile Sheet Header */}
              <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
                <Link
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="text-xl font-bold uppercase tracking-wider text-white"
                  aria-label="Apex GT — Home"
                >
                  APEX GT
                </Link>
                <SheetClose
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 transition-all duration-200 hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close navigation menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>

              {/* Mobile Nav Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-1 flex-col px-6 py-8"
              >
                <ul className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(link.id)}
                        className="block w-full py-4 text-left text-lg font-medium uppercase tracking-wider text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                      </button>
                      {index < navLinks.length - 1 && (
                        <Separator className="bg-white/10" />
                      )}
                    </li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-auto pt-8">
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="w-full border-white/20 bg-transparent text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    Book Test Drive
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}


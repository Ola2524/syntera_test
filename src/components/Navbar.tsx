"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Navbar - Premium car landing page navigation component
 * Features glassmorphism background, sticky positioning, and a responsive
 * mobile menu with hamburger toggle.
 */
export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#specs", label: "Specs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#configurator", label: "Configure" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`glass fixed left-0 right-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        isScrolled ? "bg-black/80" : ""
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-bold tracking-tight text-white text-xl"
            aria-label="APEX GT home"
          >
            APEX GT
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              asChild
              className="bg-white text-black hover:bg-white/90"
            >
              <a href="#contact">Book Test Drive</a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="glass border-t border-white/10 md:hidden"
        >
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              asChild
              className="mt-2 bg-white text-black hover:bg-white/90"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Book Test Drive
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}


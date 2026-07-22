"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Navigation - Sticky top navigation for the Apex GT landing page
 *
 * Features:
 * - Transparent at top, glassmorphism backdrop blur when scrolled (>50px)
 * - Anchor links with smooth scroll behavior
 * - Mobile hamburger menu drawer
 * - Accessible keyboard navigation with proper ARIA attributes
 */
export function Navigation(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set initial state in case page loads scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ): void => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Specs", href: "#specs", id: "specs" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Configurator", href: "#configurator", id: "configurator" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-12 lg:px-24"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
          className="text-xl font-bold uppercase tracking-[0.2em] text-white transition-opacity duration-300 hover:opacity-80 sm:text-2xl"
          aria-label="Apex GT - Home"
        >
          APEX GT
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.id)}
                className="text-sm font-medium uppercase tracking-wider text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "contact")}
            className="border-white/30 text-white transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Book Test Drive
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top transform border-b border-white/10 bg-background/95 backdrop-blur-lg transition-all duration-300 sm:top-20 lg:hidden",
          isMobileMenuOpen
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="flex flex-col px-6 py-6 sm:px-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.id)}
                className="block border-b border-white/5 py-4 text-base font-medium uppercase tracking-wider text-white/80 transition-colors duration-300 last:border-b-0 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <Button
              variant="outline"
              onClick={(e) =>
                handleAnchorClick(
                  e as unknown as React.MouseEvent<HTMLAnchorElement>,
                  "contact",
                )
              }
              className="w-full border-white/30 text-white transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              Book Test Drive
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}


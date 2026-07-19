"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Zap } from "lucide-react";

/**
 * Navigation links shared between desktop and mobile menus.
 * Each href maps to a section ID that exists on the landing page.
 */
const navLinks: { label: string; href: string }[] = [
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Configurator", href: "#configurator" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/**
 * Navbar - Premium fixed navigation bar for the Apex GT showroom.
 *
 * Features:
 * - Transparent-to-glass transition on scroll
 * - Desktop nav links with smooth-scroll to page sections
 * - Mobile slide-out Sheet menu (shadcn/ui)
 * - Accessible icon buttons with aria-labels
 * - "Book Test Drive" CTA on both desktop and mobile
 */
export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle glass background once the user scrolls past 20px
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // sync on mount (e.g. after a refresh mid-page)
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Smooth-scroll to a section by its selector (e.g. "#specs"). */
  const handleNavClick = (href: string): void => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  /** Scroll the window back to the top — used by the brand logo. */
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Navigate to a section and close the mobile sheet. */
  const handleMobileNavClick = (href: string): void => {
    handleNavClick(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* ── Brand / Logo ────────────────────────────────────────── */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Zap className="h-5 w-5 text-amber-400" fill="currentColor" />
            <span className="text-lg font-bold tracking-tight text-white">
              APEX GT
            </span>
          </button>

          {/* ── Desktop Nav Links ───────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTA ─────────────────────────────────────────── */}
          <div className="hidden md:block">
            <Button
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className="bg-white text-black hover:bg-white/90"
            >
              <Zap className="h-4 w-4" />
              Book Test Drive
            </Button>
          </div>

          {/* ── Mobile Menu Trigger ─────────────────────────────────── */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 bg-background border-l border-white/10"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>

                <Separator className="my-4 bg-white/10" />

                {/* Mobile nav links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <button
                        onClick={() => handleMobileNavClick(link.href)}
                        className="w-full justify-start text-left px-3 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>

                <Separator className="my-4 bg-white/10" />

                {/* Mobile CTA */}
                <SheetClose asChild>
                  <Button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-white text-black hover:bg-white/90"
                  >
                    <Zap className="h-4 w-4" />
                    Book Test Drive
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}


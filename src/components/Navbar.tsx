"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

/**
 * Navigation link configuration.
 * `href` corresponds to a DOM element ID on the page (without the `#` prefix).
 */
const navLinks = [
  { label: "Specs", href: "specs" },
  { label: "Gallery", href: "gallery" },
  { label: "Configurator", href: "configurator" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Contact", href: "contact" },
];

/**
 * Navbar - Fixed glassmorphism navigation header for the APEX GT landing page.
 *
 * Features:
 * - Glassmorphism background that intensifies on scroll past 20px
 * - Desktop: horizontal nav links + "Book Test Drive" CTA button
 * - Mobile: hamburger menu opening a right-side Sheet with vertical nav links
 * - Smooth scroll to sections via `scrollIntoView`
 *
 * @returns {JSX.Element} The rendered navbar component
 */
export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Track scroll position to toggle the stronger background style
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Smoothly scrolls to the section identified by `id`.
   * Also closes the mobile Sheet if it is open.
   *
   * @param {string} id - The DOM element ID to scroll to (without `#`)
   */
  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${
        isScrolled
          ? "glass bg-black/80 border-b border-white/10"
          : "glass"
      }`}
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-24"
        aria-label="Main navigation"
      >
        {/* Logo — scrolls to top on click */}
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="APEX GT — scroll to top"
        >
          APEX GT
        </button>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="hidden bg-white text-black hover:bg-white/90 md:inline-flex"
          >
            Book Test Drive
          </Button>

          {/* Mobile hamburger menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-3/4 border-l border-white/10 bg-black p-6 sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle className="text-lg font-bold text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>

              {/* Mobile vertical nav links */}
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="border-b border-white/5 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <Button
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-white text-black hover:bg-white/90"
                >
                  Book Test Drive
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}


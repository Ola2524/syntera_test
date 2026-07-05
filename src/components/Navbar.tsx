"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

/**
 * Navigation link configuration for the Navbar.
 * Internal routes use next/link; hash anchors use regular <a> tags.
 */
interface NavLink {
  label: string;
  href: string;
  isAnchor: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", isAnchor: false },
  { label: "About", href: "/about", isAnchor: false },
  { label: "Specs", href: "/#specs", isAnchor: true },
  { label: "Gallery", href: "/#gallery", isAnchor: true },
  { label: "Configure", href: "/#configurator", isAnchor: true },
  { label: "Contact", href: "/#contact", isAnchor: true },
];

/**
 * Navbar - Fixed top navigation bar for the Apex GT car configurator website.
 *
 * Features:
 * - Semi-transparent dark background with backdrop blur
 * - "APEX GT" brand logo linking to home
 * - Desktop navigation links (visible on lg+ screens)
 * - Mobile hamburger menu using Sheet component (slides in from right)
 * - "Book Test Drive" CTA button (desktop only)
 *
 * @returns The Navbar component
 */
export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-24">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
          aria-label="Apex GT - Home"
        >
          APEX GT
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Desktop CTA Button */}
        <Button
          variant="outline"
          className="hidden border-white/30 text-white hover:bg-white/10 hover:text-white lg:inline-flex"
        >
          Book Test Drive
        </Button>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-3/4 border-l border-white/10 bg-background sm:max-w-sm"
          >
            {/* Mobile Menu Header */}
            <div className="mb-8 mt-4">
              <span className="text-lg font-bold tracking-tight text-white">
                APEX GT
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <nav
              className="flex flex-col gap-2"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) =>
                link.isAnchor ? (
                  <SheetClose asChild key={link.label}>
                    <a
                      href={link.href}
                      className="rounded-md px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ) : (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-md px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ),
              )}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-8">
              <SheetClose asChild>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Book Test Drive
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}


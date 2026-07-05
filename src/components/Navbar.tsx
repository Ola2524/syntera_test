"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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

/**
 * Navigation link definition used for both desktop and mobile menus.
 */
interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Overview", href: "#hero" },
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Configurator", href: "#configurator" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/**
 * Navbar - Fixed responsive navigation bar for the Apex GT landing page.
 *
 * Features:
 * - Semi-transparent dark backdrop with blur for a premium feel
 * - Desktop: horizontal nav links + "Book Test Drive" CTA button
 * - Mobile: hamburger menu that opens a right-side Sheet with vertical links
 *
 * @accessibility
 * - The mobile menu trigger has an `aria-label` for screen readers
 * - Sheet includes a `SheetTitle` for accessible dialog naming
 * - All nav links are keyboard-focusable and close the sheet on activation
 * - Focus is managed by Radix Dialog (Sheet) primitives
 */
export function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/10">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-12 lg:px-24"
        aria-label="Primary navigation"
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg font-bold uppercase tracking-tight text-white transition-opacity hover:opacity-80"
          aria-label="Apex GT home"
        >
          APEX GT
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-white text-black hover:bg-white/90"
            asChild
          >
            <Link href="#contact">Book Test Drive</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-3/4 flex-col border-white/10 bg-background p-0 sm:max-w-sm"
          >
            {/* Sheet Header with Logo */}
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="text-left text-lg font-bold uppercase tracking-tight text-white">
                APEX GT
              </SheetTitle>
            </SheetHeader>

            <Separator className="mt-4 bg-white/10" />

            {/* Mobile Navigation Links */}
            <nav
              className="flex flex-1 flex-col gap-1 px-6 py-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <Separator className="bg-white/10" />

            {/* Mobile CTA */}
            <div className="p-6">
              <SheetClose asChild>
                <Button
                  size="lg"
                  className="w-full bg-white text-black hover:bg-white/90"
                  asChild
                >
                  <Link href="#contact">Book Test Drive</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}


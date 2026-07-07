"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart, Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

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
  const [cartOpen, setCartOpen] = useState(false);
  const { items, totalItems, subtotal, removeItem, updateQuantity, clearCart } = useCart();

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

        {/* Cart Button & Drawer */}
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/10 hover:text-white"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
                  {totalItems}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col border-l border-white/10 bg-background sm:max-w-md"
          >
            <SheetHeader>
              <SheetTitle className="text-white">Your Cart</SheetTitle>
              <SheetDescription>
                {totalItems} item(s)
              </SheetDescription>
            </SheetHeader>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium text-white">Your cart is empty</p>
                <p className="text-sm text-white/50">
                  Add a configured Apex GT to get started.
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-4 overflow-y-auto py-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 rounded-lg border border-white/10 p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded border border-white/10 object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-1">
                        <p className="text-sm font-medium text-white">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <div
                            className="inline-block h-3 w-3 rounded-full border border-white/20"
                            style={{ backgroundColor: item.colorHex }}
                          />
                          <span className="text-xs text-white/50">
                            {item.color}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white/70">
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-white hover:bg-white/10 hover:text-white"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="min-w-6 text-center text-sm font-medium text-white">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-white hover:bg-white/10 hover:text-white"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto h-7 w-7 text-white/50 hover:text-red-400"
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-white/70">
                      Subtotal
                    </span>
                    <span className="text-sm font-bold text-white">
                      {subtotal.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    className="mb-2 w-full justify-start text-white/50 hover:text-white"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>

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





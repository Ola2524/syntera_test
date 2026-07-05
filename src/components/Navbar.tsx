"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Navigation link definition for desktop and mobile menus. */
interface NavLink {
  label: string;
  href: string;
}

/** A single stage in the two-stage build progress tracker. */
interface ProgressStage {
  id: number;
  label: string;
}

/** Static list of navigation links rendered in both desktop and mobile menus. */
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Specs", href: "#specs" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Login", href: "/login" },
];

/** The two configurator stages displayed in the progress tracker. */
const STAGES: ProgressStage[] = [
  { id: 0, label: "Configure" },
  { id: 1, label: "Review" },
];

/**
 * Navbar — fixed top navigation bar for the Apex GT car configurator landing page.
 *
 * Features:
 * - Sticky/fixed positioning with backdrop blur and semi-transparent background
 * - Brand logo "APEX GT" linking to the home page
 * - Desktop navigation links (Home, About, Specs, Contact, Privacy Policy, Terms)
 * - A compact two-stage "Build Progress" tracker using `useState`:
 *     • 0 → Stage 1 ("Configure") in progress
 *     • 1 → Stage 2 ("Review") in progress
 *     • 2 → All stages completed
 *   A "Next" button advances the tracker; completed stages show a checkmark.
 * - Mobile menu via Radix UI Sheet sliding in from the right
 *
 * @returns The rendered navbar component.
 */
export function Navbar(): JSX.Element {
  // 0 = Stage 1 in progress, 1 = Stage 2 in progress, 2 = all completed
  const [progressStep, setProgressStep] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  /** Advance the progress tracker to the next stage (max = 2). */
  const handleNext = (): void => {
    setProgressStep((prev) => Math.min(prev + 1, STAGES.length));
  };

  /** Reset the progress tracker back to stage 1. */
  const handleReset = (): void => {
    setProgressStep(0);
  };

  /**
   * Determine the status of a given stage based on the current progress step.
   * @param stageIndex - The zero-based index of the stage.
   * @returns "completed" | "in_progress" | "pending"
   */
  const getStageStatus = (
    stageIndex: number,
  ): "completed" | "in_progress" | "pending" => {
    if (stageIndex < progressStep) return "completed";
    if (stageIndex === progressStep) return "in_progress";
    return "pending";
  };

  const isAllCompleted = progressStep >= STAGES.length;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-24"
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          aria-label="Apex GT home"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            APEX
          </span>
          <span className="text-lg font-bold tracking-tight text-white">GT</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: Two-Stage Build Progress Tracker */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-xs font-medium uppercase tracking-wider text-white/40">
            Build Progress
          </span>

          {/* Stage indicators */}
          <div className="flex items-center gap-2">
            {STAGES.map((stage, index) => {
              const status = getStageStatus(index);
              return (
                <div key={stage.id} className="flex items-center gap-2">
                  {/* Stage circle */}
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300",
                      status === "completed" &&
                        "border-white/20 bg-white/15 text-white",
                      status === "in_progress" &&
                        "border-white/40 bg-white/10 text-white ring-2 ring-white/20",
                      status === "pending" &&
                        "border-white/10 bg-transparent text-white/30",
                    )}
                    aria-label={`Stage ${index + 1}: ${stage.label} — ${status.replace("_", " ")}`}
                  >
                    {status === "completed" ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Stage label */}
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors duration-300",
                      status === "pending" ? "text-white/30" : "text-white/70",
                    )}
                  >
                    {stage.label}
                  </span>

                  {/* Connector line between stages */}
                  {index < STAGES.length - 1 && (
                    <div
                      className={cn(
                        "mx-1 h-px w-6 transition-colors duration-300",
                        status === "completed"
                          ? "bg-white/40"
                          : "bg-white/10",
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Current stage badge */}
          {isAllCompleted ? (
            <Badge
              variant="outline"
              className="border-white/20 bg-white/10 text-white"
            >
              <Check className="mr-1 h-3 w-3" />
              Done
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="border-white/20 bg-white/10 text-white"
            >
              {STAGES[progressStep]?.label}
            </Badge>
          )}

          {/* Next / Reset button */}
          {isAllCompleted ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-xs text-white/60 hover:bg-white/10 hover:text-white"
            >
              Reset
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

        {/* Mobile: Sheet Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
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
            className="w-3/4 border-l border-white/10 bg-background/95 backdrop-blur-xl sm:max-w-sm"
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left text-lg font-bold text-white">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                  APEX
                </span>{" "}
                <span className="text-lg font-bold tracking-tight text-white">
                  GT
                </span>
              </SheetTitle>
            </SheetHeader>

            {/* Mobile nav links */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 text-white/30" />
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile: Compact progress tracker */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <span className="mb-4 block text-xs font-medium uppercase tracking-wider text-white/40">
                Build Progress
              </span>

              <div className="flex flex-col gap-3">
                {STAGES.map((stage, index) => {
                  const status = getStageStatus(index);
                  return (
                    <div
                      key={stage.id}
                      className="flex items-center gap-3"
                      aria-label={`Stage ${index + 1}: ${stage.label} — ${status.replace("_", " ")}`}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300",
                          status === "completed" &&
                            "border-white/20 bg-white/15 text-white",
                          status === "in_progress" &&
                            "border-white/40 bg-white/10 text-white ring-2 ring-white/20",
                          status === "pending" &&
                            "border-white/10 bg-transparent text-white/30",
                        )}
                      >
                        {status === "completed" ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors duration-300",
                          status === "pending"
                            ? "text-white/30"
                            : "text-white/70",
                        )}
                      >
                        {stage.label}
                      </span>
                      {status === "in_progress" && (
                        <Badge
                          variant="outline"
                          className="ml-auto border-white/20 bg-white/10 text-white"
                        >
                          Active
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile progress control button */}
              <div className="mt-4">
                {isAllCompleted ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    Reset Progress
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    {progressStep === 0
                      ? "Complete Configure"
                      : "Complete Review"}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}





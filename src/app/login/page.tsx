"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Check, Lock, Mail } from "lucide-react";

/**
 * Zod validation schema for the login form.
 *
 * - `email`: must be a valid email address.
 * - `password`: must be at least 1 character (required).
 */
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

/** Inferred TypeScript type from the Zod login schema. */
type LoginFormData = z.infer<typeof loginSchema>;

/** A single stage definition for the visual stage indicator. */
interface LoginStage {
  id: number;
  label: string;
}

/** The two login stages displayed in the progress indicator. */
const LOGIN_STAGES: LoginStage[] = [
  { id: 1, label: "Email" },
  { id: 2, label: "Password" },
];

/**
 * LoginPage — two-stage authentication form for the Apex GT car configurator.
 *
 * Features:
 * - Stage 1: Email entry — user enters their email and clicks "Continue"
 *   to advance to Stage 2.
 * - Stage 2: Password entry — user enters their password and clicks "Sign In"
 *   to submit the form. A "Back" button returns to Stage 1, preserving the
 *   email value.
 * - A visual stage indicator (similar to the Navbar's progress tracker) showing
 *   which stage is active, with completed stages showing a checkmark.
 * - Form state managed via `react-hook-form` with `zodResolver` for validation.
 * - On successful login, shows a success toast and redirects to `/`.
 * - On error, shows an error toast with the API error message and stays on Stage 2.
 * - Dark luxury theme matching the Navbar: dark/transparent backgrounds, white
 *   text with opacity variants, `border-white/10`, backdrop blur.
 *
 * @returns The rendered login page component.
 */
export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();

  // 1 = Stage 1 (email), 2 = Stage 2 (password)
  const [stage, setStage] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /** The current email value, used to display a read-only summary on Stage 2. */
  const emailValue = watch("email");

  /**
   * Advance from Stage 1 to Stage 2 after validating the email field.
   * If the email is invalid, the form error will be displayed and the user
   * will remain on Stage 1.
   */
  const handleContinueToStage2 = async (): Promise<void> => {
    const isEmailValid = await trigger("email");
    if (isEmailValid) {
      setStage(2);
    }
  };

  /** Return to Stage 1, preserving the email value in form state. */
  const handleBackToStage1 = (): void => {
    setStage(1);
  };

  /**
   * Submit the login form to the API.
   *
   * Sends a POST request to `/api/auth/login` with the email and password.
   * On success (200), shows a success toast and redirects to `/`.
   * On error (400/401/500), shows an error toast with the error message.
   *
   * @param data - The validated form data containing email and password.
   */
  const onSubmit = async (data: LoginFormData): Promise<void> => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        const errorMessage =
          responseBody?.error || "Something went wrong. Please try again.";
        toast({
          variant: "destructive",
          title: "Login failed",
          description: errorMessage,
        });
        return;
      }

      // Success — show toast and redirect to home
      toast({
        title: "Welcome back",
        description: "You have been signed in successfully.",
      });

      router.push("/");
    } catch {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "A network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Determine the status of a given stage based on the current stage.
   * @param stageIndex - The zero-based index of the stage.
   * @returns "completed" | "in_progress" | "pending"
   */
  const getStageStatus = (
    stageIndex: number,
  ): "completed" | "in_progress" | "pending" => {
    if (stageIndex < stage - 1) return "completed";
    if (stageIndex === stage - 1) return "in_progress";
    return "pending";
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 pt-24 pb-12"
      role="main"
    >
      <div className="w-full max-w-md">
        {/* Stage Indicator */}
        <div
          className="mb-8 flex items-center justify-center gap-2"
          aria-label="Login progress"
        >
          {LOGIN_STAGES.map((loginStage, index) => {
            const status = getStageStatus(index);
            return (
              <div key={loginStage.id} className="flex items-center gap-2">
                {/* Stage circle */}
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
                  aria-label={`Stage ${index + 1}: ${loginStage.label} — ${status.replace("_", " ")}`}
                >
                  {status === "completed" ? (
                    <Check className="h-4 w-4" />
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
                  {loginStage.label}
                </span>

                {/* Connector line between stages */}
                {index < LOGIN_STAGES.length - 1 && (
                  <div
                    className={cn(
                      "mx-1 h-px w-8 transition-colors duration-300",
                      status === "completed" ? "bg-white/40" : "bg-white/10",
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Login Card */}
        <Card className="border-white/10 bg-background/70 backdrop-blur-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight text-white">
              {stage === 1 ? "Welcome back" : "Enter your password"}
            </CardTitle>
            <CardDescription className="text-white/60">
              {stage === 1
                ? "Enter your email to sign in to your Apex GT account."
                : "Confirm your password to complete the sign-in."}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              {/* Stage 1: Email Field */}
              {stage === 1 && (
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-white/70"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      autoFocus
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/20"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-sm text-red-400"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}

              {/* Stage 2: Password Field */}
              {stage === 2 && (
                <div className="space-y-4">
                  {/* Read-only email summary */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email-readonly"
                      className="text-white/70"
                    >
                      Email
                    </Label>
                    <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                      <span className="flex items-center gap-2 text-sm text-white/80">
                        <Mail className="h-4 w-4 text-white/40" />
                        {emailValue}
                      </span>
                      <button
                        type="button"
                        onClick={handleBackToStage1}
                        className="text-xs font-medium text-white/50 transition-colors hover:text-white"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  {/* Password input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-white/70"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        autoFocus
                        aria-invalid={!!errors.password}
                        aria-describedby={
                          errors.password ? "password-error" : undefined
                        }
                        className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/20"
                        {...register("password")}
                      />
                    </div>
                    {errors.password && (
                      <p
                        id="password-error"
                        className="text-sm text-red-400"
                        role="alert"
                      >
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Stage 1: Continue button */}
              {stage === 1 && (
                <Button
                  type="button"
                  onClick={handleContinueToStage2}
                  className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  variant="outline"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}

              {/* Stage 2: Back + Sign In buttons */}
              {stage === 2 && (
                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={handleBackToStage1}
                    variant="ghost"
                    aria-label="Go back to email entry"
                    className="border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    variant="outline"
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </div>
              )}
            </form>
          </CardContent>

          <CardFooter className="flex flex-col items-center gap-2">
            <p className="text-sm text-white/50">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}



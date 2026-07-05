"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { ArrowLeft, Loader2 } from "lucide-react"

// Zod schemas
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

const passwordSchema = z.object({
  password: z.string().min(1, "Password is required"),
})

type EmailFormData = z.infer<typeof emailSchema>
type PasswordFormData = z.infer<typeof passwordSchema>

export default function LoginPage() {
  const [stage, setStage] = useState(0)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  // Stage 1 form
  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })

  // Stage 2 form
  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "" },
  })

  // Stage 1 handler — submit email
  const onEmailSubmit = async (data: EmailFormData) => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      })

      const json = await res.json()

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description: json.error || "Something went wrong. Please try again.",
        })
        return
      }

      // Success — store email and advance to Stage 2
      setEmail(data.email)
      setStage(1)
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Network error. Please check your connection and try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  // Stage 2 handler — submit password
  const onPasswordSubmit = async (data: PasswordFormData) => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: data.password }),
      })

      const json = await res.json()

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description: json.error || "Something went wrong. Please try again.",
        })
        return
      }

      // Success — show toast
      toast({
        title: "Login successful!",
        description: "Welcome back to Apex GT.",
      })
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Network error. Please check your connection and try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  // Back button — return to Stage 1
  const handleBack = () => {
    setStage(0)
    passwordForm.reset()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back to home link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="border-white/10 bg-neutral-900/50 backdrop-blur">
          <CardHeader className="space-y-1">
            {/* Stage indicator */}
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Step {stage + 1} of 2
              </span>
              <div className="flex h-1 flex-1 gap-1">
                <div
                  className={cn(
                    "h-full flex-1 rounded-full transition-colors",
                    stage >= 0 ? "bg-white" : "bg-white/10"
                  )}
                />
                <div
                  className={cn(
                    "h-full flex-1 rounded-full transition-colors",
                    stage >= 1 ? "bg-white" : "bg-white/10"
                  )}
                />
              </div>
            </div>

            {stage === 0 ? (
              <>
                <CardTitle className="text-2xl font-bold text-white">
                  Welcome back
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter your email to sign in to your account
                </CardDescription>
              </>
            ) : (
              <>
                <CardTitle className="text-2xl font-bold text-white">
                  Enter your password
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {email}
                </CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent>
            {stage === 0 ? (
              // Stage 1 — Email Entry
              <form
                onSubmit={emailForm.handleSubmit(onEmailSubmit)}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    disabled={loading}
                    className="border-white/10 bg-neutral-950 text-white placeholder:text-muted-foreground/50 focus-visible:ring-white/20"
                    {...emailForm.register("email")}
                  />
                  {emailForm.formState.errors.email && (
                    <p className="text-sm text-red-500">
                      {emailForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-neutral-950 hover:bg-white/90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </form>
            ) : (
              // Stage 2 — Password Entry
              <form
                onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    autoFocus
                    disabled={loading}
                    className="border-white/10 bg-neutral-950 text-white placeholder:text-muted-foreground/50 focus-visible:ring-white/20"
                    {...passwordForm.register("password")}
                  />
                  {passwordForm.formState.errors.password && (
                    <p className="text-sm text-red-500">
                      {passwordForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-neutral-950 hover:bg-white/90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={loading}
                  className="w-full text-muted-foreground hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


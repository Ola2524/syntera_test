"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

export function FooterSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <footer ref={sectionRef} id="contact" className="relative">
      {/* Contact Form Section */}
      <div className="relative py-24 sm:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/10 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left Column - Info */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Get In Touch
              </span>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Book Your Test Drive
              </h2>
              <p className="mb-8 text-lg text-white/60">
                Experience the Apex GT firsthand. Schedule a test drive at one
                of our premium showrooms and discover what makes this vehicle
                truly exceptional.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/70">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+1 (800) APEX-GT1</span>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>experience@apexgt.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                {[
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    label: "Instagram",
                  },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Youtube className="h-5 w-5" />, label: "YouTube" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Glassmorphism Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Card className="glass border-white/10">
                <CardContent className="p-6 sm:p-8">
                  {isSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center border border-white/20 bg-white/10">
                          <Send className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-white">
                        Message Sent!
                      </h3>
                      <p className="text-white/60">
                        Thank you for your interest. We&apos;ll be in touch
                        soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-white/80"
                          >
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-white/80"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-white/80"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-white/80"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your interest in the Apex GT..."
                          className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40 resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black hover:bg-white/90 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="h-4 w-4 animate-spin"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-12 lg:px-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              © 2025 Apex GT. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="/about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




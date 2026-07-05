"use client";

import { useState, useEffect, useRef } from "react";
import { BookingForm } from "@/components/BookingForm";
import {
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
              <BookingForm />
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
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




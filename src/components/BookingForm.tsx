"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Clock,
  MapPin,
  Car,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

/**
 * Zod validation schema for the booking form.
 * Field names use camelCase in the form; they are mapped to
 * snake_case when sent to the API endpoint.
 */
const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(255, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z.string().max(50, "Phone number is too long").optional(),
  carModel: z
    .string()
    .min(1, "Please specify a car model")
    .max(255, "Car model is too long"),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date")
    .refine(
      (val) => {
        const selected = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today;
      },
      { message: "Please select a future date" },
    ),
  preferredTime: z.string().max(50, "Time is too long").optional(),
  location: z.string().max(255, "Location is too long").optional(),
  message: z.string().max(5000, "Message is too long").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

/**
 * BookingForm — a test drive booking form for the Apex GT landing page.
 *
 * Uses react-hook-form for state management and zod for validation.
 * Submits to POST /api/bookings and displays toast notifications
 * on success or failure.
 *
 * @returns The booking form component.
 */
export function BookingForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      carModel: "",
      preferredDate: "",
      preferredTime: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          car_model: data.carModel,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime || undefined,
          location: data.location || undefined,
          message: data.message || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create booking");
      }

      toast({
        title: "Booking Confirmed!",
        description:
          "We'll contact you shortly to confirm your test drive appointment.",
      });
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /** Shared input className matching the FooterSection glassmorphism theme. */
  const inputClassName =
    "border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40";

  return (
    <Card className="glass border-white/10">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Row 1: Full Name | Email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </span>
              </label>
              <Input
                id="booking-name"
                type="text"
                placeholder="John Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "booking-name-error" : undefined}
                className={inputClassName}
                {...register("name")}
              />
              {errors.name && (
                <p
                  id="booking-name-error"
                  className="mt-1.5 text-sm text-red-400"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="booking-email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </span>
              </label>
              <Input
                id="booking-email"
                type="email"
                placeholder="john@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "booking-email-error" : undefined
                }
                className={inputClassName}
                {...register("email")}
              />
              {errors.email && (
                <p
                  id="booking-email-error"
                  className="mt-1.5 text-sm text-red-400"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone | Car Model */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-phone"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </span>
              </label>
              <Input
                id="booking-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                aria-invalid={!!errors.phone}
                aria-describedby={
                  errors.phone ? "booking-phone-error" : undefined
                }
                className={inputClassName}
                {...register("phone")}
              />
              {errors.phone && (
                <p
                  id="booking-phone-error"
                  className="mt-1.5 text-sm text-red-400"
                  role="alert"
                >
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="booking-car-model"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                <span className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  Car Model
                </span>
              </label>
              <Input
                id="booking-car-model"
                type="text"
                placeholder="Apex GT"
                aria-invalid={!!errors.carModel}
                aria-describedby={
                  errors.carModel ? "booking-car-model-error" : undefined
                }
                className={inputClassName}
                {...register("carModel")}
              />
              {errors.carModel && (
                <p
                  id="booking-car-model-error"
                  className="mt-1.5 text-sm text-red-400"
                  role="alert"
                >
                  {errors.carModel.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Preferred Date | Preferred Time */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-date"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Preferred Date
                </span>
              </label>
              <Input
                id="booking-date"
                type="date"
                aria-invalid={!!errors.preferredDate}
                aria-describedby={
                  errors.preferredDate ? "booking-date-error" : undefined
                }
                className={`${inputClassName} [color-scheme:dark]`}
                {...register("preferredDate")}
              />
              {errors.preferredDate && (
                <p
                  id="booking-date-error"
                  className="mt-1.5 text-sm text-red-400"
                  role="alert"
                >
                  {errors.preferredDate.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="booking-time"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Preferred Time
                </span>
              </label>
              <Input
                id="booking-time"
                type="time"
                aria-invalid={!!errors.preferredTime}
                aria-describedby={
                  errors.preferredTime ? "booking-time-error" : undefined
                }
                className={`${inputClassName} [color-scheme:dark]`}
                {...register("preferredTime")}
              />
              {errors.preferredTime && (
                <p
                  id="booking-time-error"
                  className="mt-1.5 text-sm text-red-400"
                  role="alert"
                >
                  {errors.preferredTime.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Location (full width) */}
          <div>
            <label
              htmlFor="booking-location"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </span>
            </label>
            <Input
              id="booking-location"
              type="text"
              placeholder="Beverly Hills Showroom"
              aria-invalid={!!errors.location}
              aria-describedby={
                errors.location ? "booking-location-error" : undefined
              }
              className={inputClassName}
              {...register("location")}
            />
            {errors.location && (
              <p
                id="booking-location-error"
                className="mt-1.5 text-sm text-red-400"
                role="alert"
              >
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Row 5: Message (full width, textarea) */}
          <div>
            <label
              htmlFor="booking-message"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message
              </span>
            </label>
            <Textarea
              id="booking-message"
              rows={4}
              placeholder="Any special requests or questions about your test drive..."
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "booking-message-error" : undefined
              }
              className={`${inputClassName} resize-none`}
              {...register("message")}
            />
            {errors.message && (
              <p
                id="booking-message-error"
                className="mt-1.5 text-sm text-red-400"
                role="alert"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Row 6: Submit button (full width) */}
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
                  aria-hidden="true"
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
                Booking...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Book Test Drive
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}


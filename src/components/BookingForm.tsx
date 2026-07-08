"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Calendar, Clock, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { api, ApiError } from "@/lib/api";
import { CreateBookingInput } from "@/types/booking";
import { useToast } from "@/hooks/use-toast";

const VALID_LOCATIONS = ["Beverly Hills", "Manhattan", "Miami"];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  preferred_date: "",
  preferred_time: "",
  location: "",
  notes: "",
};

export function BookingForm(): JSX.Element {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ ...EMPTY_FORM });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.bookings.create(
        formData as CreateBookingInput,
      );

      setIsSuccess(true);
      toast({
        title: "Booking Confirmed",
        description: response.message,
      });
      setFormData({ ...EMPTY_FORM });

      setTimeout(() => {
        setOpen(false);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      const errMsg =
        error instanceof ApiError
          ? error.message
          : "Failed to create booking. Please try again.";

      toast({
        title: "Booking Failed",
        description: errMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-white text-black hover:bg-white/90">
          Book Test Drive
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col overflow-y-auto border-white/10 bg-background"
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-white">
            Book Your Test Drive
          </SheetTitle>
          <SheetDescription className="text-white/60">
            Schedule a test drive of the Apex GT at one of our premium
            showrooms.
          </SheetDescription>
        </SheetHeader>

        {isSuccess ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Booking Confirmed!
            </h3>
            <p className="text-white/60">
              We&apos;ll contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 space-y-5 px-4 pb-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="booking-name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Full Name
              </label>
              <Input
                id="booking-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="booking-email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Email Address
              </label>
              <Input
                id="booking-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="booking-phone"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Phone Number
              </label>
              <Input
                id="booking-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="booking-date"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <Calendar className="h-4 w-4" />
                Preferred Date
              </label>
              <Input
                id="booking-date"
                name="preferred_date"
                type="date"
                required
                value={formData.preferred_date}
                onChange={handleChange}
                className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label
                htmlFor="booking-time"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <Clock className="h-4 w-4" />
                Preferred Time
              </label>
              <Input
                id="booking-time"
                name="preferred_time"
                type="time"
                value={formData.preferred_time}
                onChange={handleChange}
                className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="booking-location"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <MapPin className="h-4 w-4" />
                Location
              </label>
              <select
                id="booking-location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  Select a location
                </option>
                {VALID_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc} className="bg-background text-white">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="booking-notes"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Notes
              </label>
              <Textarea
                id="booking-notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requests or questions..."
                className="resize-none border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-white/40"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black hover:bg-white/90"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}


export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  preferred_date: string;
  preferred_time: string | null;
  location: string;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateBookingInput {
  name: string;
  email: string;
  phone?: string;
  preferred_date: string;
  preferred_time?: string;
  location: string;
  notes?: string;
}

export interface BookingResponse {
  data: Booking;
  message: string;
}


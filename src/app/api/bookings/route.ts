import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// Valid locations (normalized to title case)
const VALID_LOCATIONS = ["Beverly Hills", "Manhattan", "Miami"];

/**
 * Normalizes a location string to title case and validates it
 * against the allowed list of locations.
 */
function normalizeLocation(input: string): string | null {
  const normalized = input
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return VALID_LOCATIONS.includes(normalized) ? normalized : null;
}

/**
 * Validates a date string is in YYYY-MM-DD format and is a valid date.
 */
function isValidDate(dateStr: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateStr)) return false;

  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) return false;

  // Ensure the parsed date matches the input (catches e.g. 2025-02-30)
  const [year, month, day] = dateStr.split("-").map(Number);
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() + 1 === month &&
    parsed.getUTCDate() === day
  );
}

/**
 * POST /api/bookings
 * Creates a new car booking submission
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, email, phone, preferred_date, preferred_time, location, notes } = body;

    // Validate required fields
    if (!name || !email || !preferred_date || !location) {
      return NextResponse.json(
        { error: "Name, email, preferred_date, and location are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate preferred_date is a valid YYYY-MM-DD date
    if (!isValidDate(preferred_date)) {
      return NextResponse.json(
        { error: "preferred_date must be a valid date in YYYY-MM-DD format" },
        { status: 400 }
      );
    }

    // Validate and normalize location
    const normalizedLocation = normalizeLocation(location);
    if (!normalizedLocation) {
      return NextResponse.json(
        { error: `Location must be one of: ${VALID_LOCATIONS.join(", ")}` },
        { status: 400 }
      );
    }

    const result = await query(
      `INSERT INTO bookings
       (name, email, phone, preferred_date, preferred_time, location, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        name,
        email,
        phone || null,
        preferred_date,
        preferred_time || null,
        normalizedLocation,
        notes || null,
      ]
    );

    return NextResponse.json(
      {
        data: result.rows[0],
        message: "Booking confirmed! We'll contact you shortly.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/bookings
 * Fetches booking submissions (admin only in production)
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let queryText = "SELECT * FROM bookings";
    const params: (string | number)[] = [];

    if (status) {
      queryText += " WHERE status = $1";
      params.push(status);
    }

    queryText += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const result = await query(queryText, params);

    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}


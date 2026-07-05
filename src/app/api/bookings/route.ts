import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

/**
 * POST /api/bookings
 * Submits a test drive booking request
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      car_model,
      preferred_date,
      preferred_time,
      location,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !car_model || !preferred_date) {
      return NextResponse.json(
        { error: "Name, email, car_model, and preferred_date are required" },
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

    const result = await query(
      `INSERT INTO bookings
       (name, email, phone, car_model, preferred_date, preferred_time, location, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [
        name,
        email,
        phone || null,
        car_model,
        preferred_date,
        preferred_time || null,
        location || null,
        message || null,
      ]
    );

    return NextResponse.json(
      {
        data: result.rows[0],
        message: "Booking request received! We'll contact you to confirm your test drive."
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
 * Fetches test drive bookings (admin only in production)
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


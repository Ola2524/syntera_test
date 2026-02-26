import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

/**
 * GET /api/testimonials
 * Fetches all active testimonials
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");

    const result = await query(
      `SELECT * FROM testimonials 
       WHERE is_active = true 
       ORDER BY created_at DESC 
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/testimonials
 * Creates a new testimonial (admin only in production)
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, role, avatar_url, quote, rating } = body;

    // Validate required fields
    if (!name || !quote) {
      return NextResponse.json(
        { error: "Name and quote are required" },
        { status: 400 }
      );
    }

    // Validate rating
    if (rating && (rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const result = await query(
      `INSERT INTO testimonials 
       (name, role, avatar_url, quote, rating) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [name, role, avatar_url, quote, rating || 5]
    );

    return NextResponse.json({ data: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}

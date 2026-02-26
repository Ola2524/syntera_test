import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

/**
 * POST /api/contact
 * Submits a contact form
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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
      `INSERT INTO contact_submissions 
       (name, email, phone, message) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [name, email, phone || null, message]
    );

    return NextResponse.json(
      { 
        data: result.rows[0],
        message: "Thank you for your message. We'll be in touch soon!"
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Fetches contact submissions (admin only in production)
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let queryText = "SELECT * FROM contact_submissions";
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
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact submissions" },
      { status: 500 }
    );
  }
}
